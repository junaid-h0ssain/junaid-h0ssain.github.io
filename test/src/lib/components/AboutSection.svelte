<script lang="ts">
	const skills = [
		{ label: 'Java & Spring Boot', tone: 'badge-primary' },
		{ label: 'Go & Gin', tone: 'badge-secondary' },
		{ label: 'Dart & Flutter', tone: 'badge-accent' },
		{ label: 'Node.js & Express', tone: 'badge-info' },
		{ label: 'PostgreSQL & MongoDB', tone: 'badge-warning' },
		{ label: 'Docker & CI/CD', tone: 'badge-success' },
		{ label: 'React & React Native', tone: 'badge-neutral' },
		{ label: 'Git & collaboration', tone: 'badge-error' }
	];

	const learningFocus = ['Cloud architecture', 'DevOps', 'Automation', 'System design'];
</script>

<section id="about" class="about-section py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6">
		<div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" class="mb-12 text-center">
			<span class="badge badge-outline badge-lg px-4 py-4 text-sm uppercase tracking-[0.3em]">About Me</span>
		</div>

		<div class="grid gap-6 lg:grid-cols-2">
			<div data-aos="flip-up" data-aos-delay="100" data-aos-duration="2000" class="card about-card border border-base-300 bg-base-100 shadow-xl">
				<div class="card-body gap-5 p-8">
					<div>
						<h2 class="text-2xl font-black">Who I Am</h2>
						<p class="text-sm text-base-content/60">Backend developer and problem solver</p>
					</div>
					<p class="text-base leading-8 text-base-content/80">
						I'm a Computer Science graduate passionate about building scalable web applications and exploring
						cutting-edge technologies. I enjoy taking ideas from concept to production, designing reliable APIs, and
						refining the details that make software feel effortless.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="badge badge-primary">Scalable systems</span>
						<span class="badge badge-secondary">API design</span>
						<span class="badge badge-accent">Clean UI</span>
					</div>
				</div>
			</div>

			<div data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000" class="card about-card border border-base-300 bg-base-100 shadow-xl">
				<div class="card-body gap-5 p-8">
					<h2 class="text-2xl font-black">Technical Skills</h2>
					<div class="grid gap-3 sm:grid-cols-2">
						{#each skills as skill}
							<div class="badge badge-lg h-auto w-full justify-start gap-2 border border-base-300 bg-base-200 px-4 py-3">
								<span class={`badge badge-sm ${skill.tone}`}></span>
								{skill.label}
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div data-aos="slide-up" data-aos-delay="100" data-aos-duration="2000" class="card about-card border border-base-300 bg-base-100 shadow-xl">
				<div class="card-body gap-5 p-8">
					<h2 class="text-2xl font-black">Connect With Me</h2>
					<div class="flex flex-wrap gap-3">
						<a class="btn btn-outline btn-sm gap-2" href="https://github.com/junaid-h0ssain" target="_blank" rel="noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
								<path d="M12 0.5C5.65 0.5 0.5 5.68 0.5 12.09c0 5.12 3.29 9.47 7.86 11.01.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.71-3.88-1.56-3.88-1.56-.52-1.35-1.28-1.71-1.28-1.71-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.2 1.77 1.2 1.03 1.79 2.7 1.27 3.36.97.11-.76.4-1.27.72-1.56-2.56-.29-5.25-1.3-5.25-5.79 0-1.28.45-2.32 1.2-3.14-.12-.29-.52-1.48.11-3.08 0 0 .98-.32 3.2 1.2.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.22-1.52 3.2-1.2 3.2-1.2.63 1.6.23 2.79.11 3.08.75.82 1.2 1.86 1.2 3.14 0 4.5-2.69 5.5-5.25 5.79.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.59 11.59 0 0 0 23.5 12.09C23.5 5.68 18.35 0.5 12 0.5Z" />
							</svg>
							GitHub
						</a>
						<a class="btn btn-outline btn-sm gap-2" href="https://www.linkedin.com/in/junaid-h0ssain" target="_blank" rel="noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
								<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.21ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
							</svg>
							LinkedIn
						</a>
						<a class="btn btn-outline btn-sm gap-2" href="mailto:junaid0182@outlook.com">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
								<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm2.25-.75a.75.75 0 0 0-.75.75v.43l7.5 5 7.5-5V5.25a.75.75 0 0 0-.75-.75H5.25Zm14.25 3.09-6.91 4.61a1.5 1.5 0 0 1-1.68 0L4 7.59v11.16c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75V7.59Z" />
							</svg>
							Email
						</a>
						<a class="btn btn-outline btn-sm gap-2" href="https://www.instagram.com/junaid.h0ssain/" target="_blank" rel="noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
								<path d="M7.75 0h8.5C20.53 0 24 3.47 24 7.75v8.5C24 20.53 20.53 24 16.25 24h-8.5C3.47 24 0 20.53 0 16.25v-8.5C0 3.47 3.47 0 7.75 0Zm0 2A5.76 5.76 0 0 0 2 7.75v8.5A5.76 5.76 0 0 0 7.75 22h8.5A5.76 5.76 0 0 0 22 16.25v-8.5A5.76 5.76 0 0 0 16.25 2h-8.5Zm10.6 1.65a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 6.3A5.7 5.7 0 1 1 6.3 12 5.71 5.71 0 0 1 12 6.3Zm0 2a3.7 3.7 0 1 0 3.7 3.7A3.71 3.71 0 0 0 12 8.3Z" />
							</svg>
							Instagram
						</a>
					</div>
				</div>
			</div>

			<div data-aos="slide-down" data-aos-delay="100" data-aos-duration="2000" class="card about-card border border-base-300 bg-base-100 shadow-xl">
				<div class="card-body gap-5 p-8">
					<h2 class="text-2xl font-black">Always Learning</h2>
					<p class="text-base leading-8 text-base-content/80">
						I keep exploring new tools and best practices so my work stays practical and current. Right now I'm
						spending more time on cloud architecture, DevOps workflows, and ways to ship software with less friction.
					</p>
					<div class="flex flex-wrap gap-2">
						{#each learningFocus as focus}
							<span class="badge badge-outline">{focus}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>