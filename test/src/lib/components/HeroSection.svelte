<script lang="ts">
	import { resolve } from '$app/paths';

	type AppRoute = '/' | '/projects' | '/resume' | '/projects/project';

	interface Props {
		image: string;
		title: string;
		subtitle: string;
		description: string;
		primaryHref: AppRoute;
		primaryLabel: string;

	}

	let {
		image,
		title,
		subtitle,
		description,
		primaryHref,
		primaryLabel,
	}: Props = $props();
</script>

<section
	data-aos="zoom-in"
	data-aos-delay="50"
	data-aos-duration="1000"
	class="hero min-h-[calc(100vh-5rem)]"
	style={`background-image: url(${image});`}
>
	<div class="hero-overlay bg-neutral/70"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-3xl px-4">
			<p class="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/85">
				{subtitle}
			</p>
			<h1 class="mb-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">{title}</h1>
			<p class="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">{description}</p>
			<div class="flex flex-wrap justify-center gap-3">
				<a href={resolve(primaryHref)} class="btn btn-primary">{primaryLabel}</a>
			</div>
		</div>
	</div>
</section>