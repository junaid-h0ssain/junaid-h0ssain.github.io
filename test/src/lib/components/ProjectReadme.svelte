<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { findProject } from '$lib/data/projects';

	interface Props {
		repoSlug: string | null;
	}

	let { repoSlug }: Props = $props();

	type GitHubRepo = {
		name: string;
		description: string | null;
		language: string | null;
		default_branch: string;
		html_url: string;
		homepage: string | null;
	};

	type GitHubReadme = {
		content: string;
	};

	type ReadmeLink = {
		href: string;
		label: string;
		external?: boolean;
	};

	let loadState: 'idle' | 'loading' | 'error' | 'ready' = $state('idle');
	let title = $state('Loading project');
	let description = $state('');
	let tags: string[] = $state([]);
	let links: ReadmeLink[] = $state([]);
	let readmeHtml = $state('');
	let errorMessage = $state('');

	function decodeBase64Utf8(value: string) {
		const binary = atob(value.replace(/\s/g, ''));
		const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));

		return new TextDecoder().decode(bytes);
	}

	function titleize(text: string) {
		return text
			.replace(/[-_]+/g, ' ')
			.replace(/\b\w/g, (character) => character.toUpperCase());
	}

	function rewriteLinks(html: string, repo: string, branch: string) {
		const container = document.createElement('div');
		container.innerHTML = html;

		container.querySelectorAll('a').forEach((link) => {
			const originalHref = link.getAttribute('href') || '';
			if (!originalHref || /^([a-z]+:)?\/\//i.test(originalHref) || originalHref.startsWith('#') || originalHref.startsWith('mailto:') || originalHref.startsWith('tel:')) {
				if (/^https?:\/\//i.test(originalHref)) {
					link.target = '_blank';
					link.rel = 'noreferrer';
				}
				return;
			}

			link.href = new URL(originalHref, `https://github.com/${repo}/blob/${branch}/`).href;
			link.target = '_blank';
			link.rel = 'noreferrer';
		});

		container.querySelectorAll('img').forEach((image) => {
			const source = image.getAttribute('src');
			if (!source) {
				return;
			}

			image.src = new URL(source, `https://raw.githubusercontent.com/${repo}/${branch}/`).href;
		});

		return container.innerHTML;
	}

	onMount(async () => {
		loadState = 'loading';

		if (!repoSlug) {
			loadState = 'error';
			errorMessage = 'Missing repo parameter. Open a project card from the projects page.';
			title = 'No project selected';
			return;
		}

		const fallbackProject = findProject(repoSlug);

		try {
			const repoResponse = await fetch(`https://api.github.com/repos/${repoSlug}`);
			if (!repoResponse.ok) {
				throw new Error('Repository metadata request failed.');
			}

			const repoData = (await repoResponse.json()) as GitHubRepo;
			const branch = repoData.default_branch || 'main';
			const readmeResponse = await fetch(`https://api.github.com/repos/${repoSlug}/readme`);
			if (!readmeResponse.ok) {
				throw new Error('README request failed.');
			}

			const readmeData = (await readmeResponse.json()) as GitHubReadme;
			const markdown = decodeBase64Utf8(readmeData.content);
			const rendered = marked.parse(markdown) as string;

			title = repoData.name ? titleize(repoData.name) : titleize(repoSlug.split('/').at(-1) ?? 'Project');
			description = repoData.description || fallbackProject?.description || 'Repository README rendered from GitHub.';
			tags = [repoData.language, branch].filter(Boolean) as string[];
			links = [
				{ href: repoData.html_url, label: 'Open on GitHub', external: true },
				...(repoData.homepage ? [{ href: repoData.homepage, label: 'Live Site', external: true }] : [])
			];
			readmeHtml = rewriteLinks(rendered, repoSlug, branch);
			loadState = 'ready';
		} catch {
			loadState = 'error';
			errorMessage = 'Unable to load the README right now. You can still open the repository on GitHub.';
			title = fallbackProject ? titleize(fallbackProject.title) : titleize(repoSlug.split('/').at(-1) ?? 'Project');
			description = fallbackProject?.description || 'GitHub data could not be loaded for this project.';
			links = [{ href: `https://github.com/${repoSlug}`, label: 'Open on GitHub', external: true }];
		}
	});
</script>

<section class="py-10 lg:py-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm lg:p-10">
			<div class="mb-8">
				<p class="text-sm uppercase tracking-[0.3em] text-base-content/50">Repository README</p>
				<h1 class="mt-4 text-4xl font-black lg:text-5xl">{title}</h1>
				<p class="mt-4 max-w-3xl text-base leading-8 text-base-content/70">{description}</p>
				<div class="mt-5 flex flex-wrap gap-2">
					{#each tags as tag (tag)}
						<span class="badge badge-outline">{tag}</span>
					{/each}
				</div>
				<div class="mt-6 flex flex-wrap gap-3">
					{#each links as link (link.href)}
						<a class="btn btn-sm {link.label === 'Live Site' ? 'btn-outline' : 'btn-info'}" href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
							{link.label}
						</a>
					{/each}
				</div>
			</div>

			{#if loadState === 'loading'}
				<div class="alert alert-info mb-8">
					<span>Loading README from GitHub...</span>
				</div>
			{:else if loadState === 'error'}
				<div class="alert alert-error mb-8">
					<span>{errorMessage}</span>
				</div>
			{/if}

			{#if readmeHtml}
				<article class="project-readme prose prose-neutral max-w-none bg-transparent text-base-content prose-headings:font-black prose-img:rounded-2xl prose-a:text-primary">
					{@html readmeHtml}
				</article>
			{/if}
		</div>
	</div>
</section>

<style>
	.project-readme :global(h1) {
		margin-top: 0;
		font-size: 2.25rem;
		line-height: 1.1;
	}

	.project-readme :global(h2) {
		margin-top: 2rem;
		border-bottom: 1px solid hsl(var(--b3));
		padding-bottom: 0.5rem;
	}

	.project-readme :global(h3) {
		margin-top: 1.5rem;
	}

	.project-readme :global(p),
	.project-readme :global(ul),
	.project-readme :global(ol),
	.project-readme :global(blockquote),
	.project-readme :global(table) {
		font-size: 1rem;
		line-height: 1.85;
	}

	.project-readme :global(ul),
	.project-readme :global(ol) {
		padding-left: 1.4rem;
	}

	.project-readme :global(li + li) {
		margin-top: 0.25rem;
	}

	.project-readme :global(pre) {
		margin: 1.5rem 0;
		border-radius: 1rem;
		background: hsl(var(--b2));
		padding: 1rem;
		overflow-x: auto;
	}

	.project-readme :global(code) {
		border-radius: 0.375rem;
		background: color-mix(in oklch, hsl(var(--p)) 8%, hsl(var(--b1)));
		padding: 0.15rem 0.35rem;
		font-size: 0.95em;
	}

	.project-readme :global(pre code) {
		background: transparent;
		padding: 0;
	}

	.project-readme :global(table) {
		display: block;
		overflow-x: auto;
		border-collapse: collapse;
	}

	.project-readme :global(th),
	.project-readme :global(td) {
		border: 1px solid hsl(var(--b3));
		padding: 0.75rem 1rem;
	}

	.project-readme :global(th) {
		background: hsl(var(--b2));
	}

	.project-readme :global(img) {
		border-radius: 1rem;
		border: 1px solid hsl(var(--b3));
	}

	.project-readme :global(hr) {
		margin: 2rem 0;
		border-color: hsl(var(--b3));
	}
</style>