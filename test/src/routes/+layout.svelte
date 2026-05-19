<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/android-chrome-192x192.png';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteNav from '$lib/components/SiteNav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<div class="flex min-h-screen flex-col">
	<SiteNav />
	<main id="main-content" class="flex-1">
		{@render children()}
	</main>
	<SiteFooter />
</div>
