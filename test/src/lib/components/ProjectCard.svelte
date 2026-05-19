/* eslint-disable svelte/no-navigation-without-resolve */
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { ProjectItem } from '$lib/data/projects';

	interface Props {
		project: ProjectItem;
	}

	let { project }: Props = $props();

	const detailHrefFor = (repoSlug: string) => `${resolve('/projects/project')}?repo=${encodeURIComponent(repoSlug)}`;
</script>

<div
	class="project-card-shell"
	data-aos={project.cardAnimation}
	data-aos-delay="100"
	data-aos-duration="2000"
>
	<div class="card project-card relative z-0 w-full bg-base-100 shadow-sm">
		<figure>
			<img src={project.image} alt={project.title} loading="lazy" />
		</figure>
		<div class="card-body pointer-events-none">
			<h2 class="card-title">
				{project.title}
				<div class="badge badge-secondary">{project.badge}</div>
			</h2>
			<p>{project.description}</p>
			<div class="card-actions justify-end">
				{#each project.tags as tag (tag)}
					<div class="badge badge-outline">{tag}</div>
				{/each}
			</div>
			<div class="card-actions pointer-events-auto relative z-20 justify-end">
				{#if project.liveUrl}
					<a class="btn btn-sm btn-outline" href={project.liveUrl} target="_blank" rel="noreferrer">Live Site</a>
				{/if}
				<a class="btn btn-sm btn-info" href={project.repoUrl} target="_blank" rel="noreferrer">Repo</a>
			</div>
		</div>
	</div>
	<a
		class="project-card-overlay"
		href={detailHrefFor(project.repoSlug)}
		aria-label={`Open README for ${project.title}`}
	></a>
</div>

<style>
	.project-card-shell {
		position: relative;
	}

	.project-card-overlay {
		position: absolute;
		inset: 0;
		z-index: 10;
		border-radius: 1.5rem;
	}

	.project-card-overlay:focus-visible {
		outline: 3px solid hsl(var(--p));
		outline-offset: 4px;
	}

	.project-card-shell:hover .project-card,
	.project-card-shell:focus-within .project-card {
		transform: translateY(-4px);
		box-shadow: 0 1.5rem 3rem color-mix(in oklch, hsl(var(--p)) 12%, transparent);
	}
</style>