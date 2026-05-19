<script lang="ts">
	import { onMount } from 'svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProjectsPreview from '$lib/components/ProjectsPreview.svelte';
	import heroImage from '$lib/assets/hero.webp';

	onMount(() => {
		const aos = globalThis as typeof globalThis & { AOS?: { init: (options?: { once?: boolean }) => void } };
		aos.AOS?.init({ once: true });
	});
</script>

<svelte:head>
	<title>Junaid Hossain - Portfolio</title>
	<meta
		name="description"
		content="Welcome to Junaid Hossain's portfolio, a backend developer building reliable software experiences."
	/>
	<meta name="author" content="Junaid Hossain" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://junaid-h0ssain.github.io/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Junaid Hossain" />
	<meta property="og:title" content="Junaid Hossain - Portfolio" />
	<meta
		property="og:description"
		content="Welcome to Junaid Hossain's portfolio, a backend developer building reliable software experiences."
	/>
	<meta property="og:url" content="https://junaid-h0ssain.github.io/" />
	<meta property="og:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Junaid Hossain - Portfolio" />
	<meta
		name="twitter:description"
		content="Welcome to Junaid Hossain's portfolio, a backend developer building reliable software experiences."
	/>
	<meta name="twitter:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="theme-color" content="#17352b" />
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</svelte:head>

<HeroSection
	image={heroImage}
	title="Junaid Hossain"
	subtitle="Software Engineer"
	description="Building reliable software experiences with a focus on backend systems, clean interfaces, and practical delivery."
	primaryHref="/resume"
	primaryLabel="View Resume"
	secondaryHref="/projects"
	secondaryLabel="Explore Projects"
/>

<AboutSection />

<ProjectsPreview />
