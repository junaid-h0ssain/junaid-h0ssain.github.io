<script lang="ts">
	import { resolve } from '$app/paths';
	import ThemeSelect from '$lib/components/ThemeSelect.svelte';
</script>

<nav class="navbar sticky top-0 z-50 border-b border-base-300/60 bg-base-100/85 px-5 shadow-sm backdrop-blur">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden" aria-label="Open menu">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</div>
			<ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				<li><a href={resolve('/projects')}>Projects</a></li>
				<li><a href={resolve('/resume')}>Resume</a></li>
				<li>
					<details>
						<summary>Contact</summary>
						<ul class="p-2">
							<li><a href="mailto:junaid0182@outlook.com">Mail</a></li>
							<li><a href="https://github.com/junaid-h0ssain" target="_blank" rel="noreferrer">GitHub</a></li>
							<li><a href="https://www.linkedin.com/in/junaid-h0ssain" target="_blank" rel="noreferrer">LinkedIn</a></li>
							<li><a href="https://www.instagram.com/junaid.h0ssain/" target="_blank" rel="noreferrer">Instagram</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
		<a class="btn btn-ghost text-xl font-black tracking-tight" href={resolve('/')}>Junaid Hossain</a>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href={resolve('/projects')}>Projects</a></li>
			<li><a href={resolve('/resume')}>Resume</a></li>
			<li>
				<details>
					<summary>Contact</summary>
					<ul class="w-40 bg-base-100 p-2">
						<li><a href="mailto:junaid0182@outlook.com">Mail</a></li>
						<li><a href="https://github.com/junaid-h0ssain" target="_blank" rel="noreferrer">GitHub</a></li>
						<li><a href="https://www.linkedin.com/in/junaid-h0ssain" target="_blank" rel="noreferrer">LinkedIn</a></li>
						<li><a href="https://www.instagram.com/junaid.h0ssain/" target="_blank" rel="noreferrer">Instagram</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>

	<div class="navbar-end">
		<ThemeSelect />
	</div>
</nav>