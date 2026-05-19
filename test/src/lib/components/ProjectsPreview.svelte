<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section data-aos="slide-up" data-aos-delay="100" data-aos-duration="2000" class="px-10 py-12 lg:py-16">
	<div class="mx-auto max-w-7xl rounded-3xl border border-base-300 bg-base-100/90 p-10 text-center shadow-xl backdrop-blur">
		<span class="badge badge-outline badge-lg px-4 py-4 text-sm uppercase tracking-[0.3em]">Projects</span>
		<h2 class="mt-6 text-4xl font-black">Selected work and experiments</h2>
		<p class="mx-auto mt-4 max-w-2xl text-base-content/70">
			A focused snapshot of the projects I've built across web, backend, mobile, and embedded work.
		</p>
		<div class="mt-6">
			<a class="btn btn-primary" href={resolve('/projects')}>Open projects page</a>
		</div>
	</div>
</section>