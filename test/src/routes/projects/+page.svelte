<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectsHero from '$lib/components/ProjectsHero.svelte';
	import { projects } from '$lib/data/projects';

	onMount(() => {
		const aos = globalThis as typeof globalThis & { AOS?: { init: (options?: { once?: boolean }) => void } };
		aos.AOS?.init({ once: true });
	});
</script>

<svelte:head>
	<title>Junaid Hossain - Projects</title>
	<meta name="description" content="Projects by Junaid Hossain, including web, backend, mobile, and embedded work." />
	<meta name="author" content="Junaid Hossain" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://junaid-h0ssain.github.io/projects" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Junaid Hossain" />
	<meta property="og:title" content="Junaid Hossain - Projects" />
	<meta property="og:description" content="Projects by Junaid Hossain, including web, backend, mobile, and embedded work." />
	<meta property="og:url" content="https://junaid-h0ssain.github.io/projects" />
	<meta property="og:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Junaid Hossain - Projects" />
	<meta name="twitter:description" content="Projects by Junaid Hossain, including web, backend, mobile, and embedded work." />
	<meta name="twitter:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="theme-color" content="#17352b" />
</svelte:head>

<ProjectsHero />

<section class="px-10 pb-14 pt-0">
	<div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
