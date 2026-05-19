<script lang="ts">
	import { onMount } from 'svelte';

	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset',
		'caramellatte',
		'abyss',
		'silk'
	];

	let selectedTheme = $state('light');

	onMount(() => {
		const savedTheme = localStorage.getItem('theme-data') ?? 'light';
		selectedTheme = savedTheme;
		document.documentElement.setAttribute('data-theme', savedTheme);
	});

	function handleThemeChange(event: Event) {
		const theme = (event.currentTarget as HTMLSelectElement).value;

		selectedTheme = theme;
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme-data', theme);
	}
</script>

<fieldset class="fieldset">
	<legend class="fieldset-legend">Theme</legend>
	<select
		bind:value={selectedTheme}
		onchange={handleThemeChange}
		class="select select-bordered select-sm w-full max-w-40"
		aria-label="Theme selector"
	>
		{#each themes as theme (theme)}
			<option value={theme}>{theme}</option>
		{/each}
	</select>
	<span class="label">Have fun</span>
</fieldset>