<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import ProjectReadme from '$lib/components/ProjectReadme.svelte';

	onMount(() => {
		const aos = globalThis as typeof globalThis & { AOS?: { init: (options?: { once?: boolean }) => void } };
		aos.AOS?.init({ once: true });
	});

	const repoSlug = $derived(page.url.searchParams.get('repo'));
</script>

<svelte:head>
	<title>Project README | Junaid Hossain</title>
	<meta name="description" content="Project details and README content for Junaid Hossain's GitHub repositories." />
	<meta name="author" content="Junaid Hossain" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://junaid-h0ssain.github.io/projects/project" />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Junaid Hossain" />
	<meta property="og:title" content="Project README | Junaid Hossain" />
	<meta property="og:description" content="Project details and README content for Junaid Hossain's GitHub repositories." />
	<meta property="og:url" content="https://junaid-h0ssain.github.io/projects/project" />
	<meta property="og:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Project README | Junaid Hossain" />
	<meta name="twitter:description" content="Project details and README content for Junaid Hossain's GitHub repositories." />
	<meta name="twitter:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="theme-color" content="#17352b" />
</svelte:head>

<ProjectReadme {repoSlug} />
