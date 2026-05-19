<script lang="ts">
	import { onMount } from 'svelte';
	import heroImage from '$lib/assets/hero.webp';
	import resumePdf from '$lib/assets/ResumeJunaidHossain.pdf';

	onMount(() => {
		const aos = globalThis as typeof globalThis & { AOS?: { init: (options?: { once?: boolean }) => void } };
		aos.AOS?.init({ once: true });
	});
</script>

<svelte:head>
	<title>Junaid Hossain - Resume</title>
	<meta
		name="description"
		content="Resume of Junaid Hossain with experience, education, skills, and certifications."
	/>
	<meta name="author" content="Junaid Hossain" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://junaid-h0ssain.github.io/resume" />
	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="Junaid Hossain" />
	<meta property="og:title" content="Junaid Hossain - Resume" />
	<meta
		property="og:description"
		content="Resume of Junaid Hossain with experience, education, skills, and certifications."
	/>
	<meta property="og:url" content="https://junaid-h0ssain.github.io/resume" />
	<meta property="og:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Junaid Hossain - Resume" />
	<meta
		name="twitter:description"
		content="Resume of Junaid Hossain with experience, education, skills, and certifications."
	/>
	<meta name="twitter:image" content="https://junaid-h0ssain.github.io/pic/android-chrome-192x192.png" />
	<meta name="theme-color" content="#17352b" />
</svelte:head>

<section class="px-6 py-14 lg:px-10 lg:py-20">
	<div class="mx-auto max-w-7xl space-y-8">
		<div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
			<div class="rounded-4xl border border-base-300/70 bg-base-100 p-6 shadow-xl lg:p-8" data-aos="fade-up">
				<span class="badge badge-outline badge-lg px-4 py-4 text-sm uppercase tracking-[0.3em]">Resume</span>
				<h1 class="mt-6 text-4xl font-black lg:text-6xl">Junaid Hossain</h1>
				<p class="mt-4 max-w-2xl text-base leading-8 text-base-content/70 lg:text-lg">
					Full stack web developer with a background in responsive interfaces, practical delivery, and dependable software experiences.
				</p>

				<div class="mt-8 flex flex-wrap gap-3">
					<a class="btn btn-primary" href={resumePdf} target="_blank" rel="noreferrer">Open PDF</a>
					<a class="btn btn-outline" href={resumePdf} download>Download Resume</a>
				</div>
			</div>

			<div class="overflow-hidden rounded-4xl border border-base-300/70 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="100">
				<img src={heroImage} alt="Junaid Hossain" class="h-full w-full object-cover" loading="lazy" />
			</div>
		</div>

		<div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
			<article class="space-y-6 rounded-4xl border border-base-300/70 bg-base-100 p-6 shadow-xl lg:p-8" data-aos="fade-up" data-aos-delay="100">
				<section class="space-y-4">
					<h2 class="text-3xl font-black">Contact</h2>
					<ul class="grid gap-3 text-base-content/80 sm:grid-cols-2">
						<li><span class="font-semibold text-base-content">Email:</span> <a class="link link-hover" href="mailto:junaid0182@outlook.com">junaid0182@outlook.com</a></li>
						<li><span class="font-semibold text-base-content">Phone:</span> <a class="link link-hover" href="tel:+8801705150710">+880 1705150710</a></li>
						<li><span class="font-semibold text-base-content">Address:</span> 181/E, Halishahar, Chittagong, Bangladesh.</li>
						<li><span class="font-semibold text-base-content">Website:</span> <a class="link link-hover" href="https://junaid-h0ssain.github.io" target="_blank" rel="noreferrer">junaid-h0ssain.github.io</a></li>
						<li><span class="font-semibold text-base-content">GitHub:</span> <a class="link link-hover" href="https://github.com/junaid-h0ssain" target="_blank" rel="noreferrer">github.com/junaid-h0ssain</a></li>
						<li><span class="font-semibold text-base-content">LinkedIn:</span> <a class="link link-hover" href="https://linkedin.com/in/junaid-h0ssain" target="_blank" rel="noreferrer">linkedin.com/in/junaid-h0ssain</a></li>
					</ul>
				</section>

				<section>
					<h3 class="text-2xl font-bold">Experience</h3>
					<div class="mt-4 space-y-4">
						<section class="rounded-2xl bg-base-200 p-5">
							<div class="flex flex-wrap items-baseline justify-between gap-2">
								<h4 class="text-lg font-semibold">Retail Sales Associate</h4>
								<span class="text-sm font-medium text-base-content/70">2020 – 2021</span>
							</div>
							<p class="mt-1 font-medium text-base-content/80">Teeth Care Center</p>
							<ul class="mt-3 list-disc space-y-2 pl-5 text-base-content/80">
								<li>Provided excellent customer service and managed inventory for a busy retail store.</li>
								<li>Consistently exceeded monthly sales targets.</li>
								<li>Received Employee of the Month award for outstanding performance.</li>
							</ul>
						</section>

						<section class="rounded-2xl bg-base-200 p-5">
							<div class="flex flex-wrap items-baseline justify-between gap-2">
								<h4 class="text-lg font-semibold">Full Stack Web Developer</h4>
								<span class="text-sm font-medium text-base-content/70">2021 – 2023</span>
							</div>
							<p class="mt-1 font-medium text-base-content/80">Freelance</p>
							<ul class="mt-3 list-disc space-y-2 pl-5 text-base-content/80">
								<li>Developed and maintained websites for small business and personal projects using responsive, user-friendly interfaces.</li>
								<li>Successfully completed multiple projects for clients, resulting in positive feedback and repeat business.</li>
								<li>Implemented new features and optimized website performance.</li>
							</ul>
							<p class="mt-3 text-sm text-base-content/70"><span class="font-semibold text-base-content">Technologies:</span> HTML, CSS, JavaScript, React, Next.js, MongoDB, PostgreSQL, Drizzle</p>
						</section>
					</div>
				</section>

				<section>
					<h3 class="text-2xl font-bold">Education</h3>
					<div class="mt-4 space-y-4">
						<section class="rounded-2xl bg-base-200 p-5">
							<div class="flex flex-wrap items-baseline justify-between gap-2">
								<h4 class="text-lg font-semibold">Bachelor of Computer Science and Engineering in Computer Science</h4>
								<span class="text-sm font-medium text-base-content/70">2022 – 2026</span>
							</div>
							<p class="mt-1 font-medium text-base-content/80">East Delta University</p>
							<ul class="mt-3 list-disc space-y-2 pl-5 text-base-content/80">
								<li>GPA: 3.72/4.00</li>
								<li>Dean's List all semesters but the first two</li>
								<li>Chairman's list for academic excellence</li>
							</ul>
						</section>

						<section class="rounded-2xl bg-base-200 p-5">
							<div class="flex flex-wrap items-baseline justify-between gap-2">
								<h4 class="text-lg font-semibold">Higher School Certificate (HSC) in Science</h4>
								<span class="text-sm font-medium text-base-content/70">2018 – 2020</span>
							</div>
							<p class="mt-1 font-medium text-base-content/80">Halishahar Cantonment School and College</p>
							<ul class="mt-3 list-disc space-y-2 pl-5 text-base-content/80">
								<li>GPA: 5.00/5.00</li>
								<li>Sport Prefect</li>
								<li>Badminton Team Captain</li>
							</ul>
						</section>

						<section class="rounded-2xl bg-base-200 p-5">
							<div class="flex flex-wrap items-baseline justify-between gap-2">
								<h4 class="text-lg font-semibold">Secondary School Certificate (SSC) in Science</h4>
								<span class="text-sm font-medium text-base-content/70">2016 – 2018</span>
							</div>
							<p class="mt-1 font-medium text-base-content/80">Halishahar Cantonment School and College</p>
							<ul class="mt-3 list-disc space-y-2 pl-5 text-base-content/80">
								<li>GPA: 5.00/5.00</li>
								<li>Class Representative</li>
							</ul>
						</section>
					</div>
				</section>
			</article>

			<aside class="space-y-6 rounded-4xl border border-base-300/70 bg-base-100 p-6 shadow-xl lg:p-8" data-aos="fade-up" data-aos-delay="150">
				<section>
					<h3 class="text-2xl font-bold">Skills</h3>
					<div class="mt-4 space-y-4">
						<div>
							<h4 class="font-semibold uppercase tracking-wide text-base-content/60">Programming</h4>
							<p class="mt-2 text-base-content/80">Java, TypeScript, C, Python, Go</p>
						</div>
						<div>
							<h4 class="font-semibold uppercase tracking-wide text-base-content/60">IT</h4>
							<p class="mt-2 text-base-content/80">Docker, Git, GitHub, Arduino, ESP32, Linux (Fedora, Ubuntu)</p>
						</div>
						<div>
							<h4 class="font-semibold uppercase tracking-wide text-base-content/60">Administrative</h4>
							<p class="mt-2 text-base-content/80">Microsoft Word, Google Docs, PowerPoint</p>
						</div>
						<div>
							<h4 class="font-semibold uppercase tracking-wide text-base-content/60">Software</h4>
							<p class="mt-2 text-base-content/80">IntelliJ IDEA, MySQL Workbench, Postman, DB Browser</p>
						</div>
					</div>
				</section>

				<section>
					<h3 class="text-2xl font-bold">Certifications</h3>
					<div class="mt-4 space-y-4">
						<div class="rounded-2xl bg-base-200 p-5">
							<h4 class="font-semibold">Oracle Cloud Infrastructure 2025 Certified Foundations Associate</h4>
							<p class="mt-1 text-sm text-base-content/70">Oracle · 2025</p>
							<a
								href="https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fcatalog-education.oracle.com%2Fapex%2Ff%3Fp%3D1010%3A2%3A116916285782548%3A%3A%3A%3AP2_AUTHCODE%2CP2_AUTH_KEY%2CP2_ARG_INVALID_CNT%3AMO273362nO47l%2CflCcP273290hmcx5990qkle&urlhash=yOJe&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoO7%2FeihjR8KOjs%2FrBaBfEw%3D%3D"
								target="_blank"
								rel="noreferrer"
								class="link link-primary"
							>
								View Certificate
							</a>
						</div>
						<div class="rounded-2xl bg-base-200 p-5">
							<h4 class="font-semibold">Dart &amp; Flutter | Complete Flutter Development Course</h4>
							<p class="mt-1 text-sm text-base-content/70">Udemy · 2024</p>
							<a href="https://www.udemy.com/certificate/UC-91a8bd9b-329c-427b-874f-ddce5df7c17b/" target="_blank" rel="noreferrer" class="link link-primary">
								View Certificate
							</a>
						</div>
						<div class="rounded-2xl bg-base-200 p-5">
							<h4 class="font-semibold">Mobile App Development - Android App Development for Beginners</h4>
							<p class="mt-1 text-sm text-base-content/70">Simplilearn · 2024</p>
							<a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjIwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzkyMDE1M184MjU0NzQ0MTczOTgyMDA4ODE0Ny5wbmciLCJ1c2VybmFtZSI6Ikp1bmFpZCBIb3NzYWluIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6003%2FMobile-App-Development---Android-App-Development-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true" target="_blank" rel="noreferrer" class="link link-primary">
								View Certificate
							</a>
						</div>
					</div>
				</section>

				<section>
					<h3 class="text-2xl font-bold">Soft Skills</h3>
					<p class="mt-4 rounded-2xl bg-base-200 p-5 text-base-content/80">Adaptability, Problem Solving, Communication, Teamwork &amp; Collaboration, Time Management, Attention to Detail</p>
				</section>

				<section>
					<h3 class="text-2xl font-bold">Languages</h3>
					<p class="mt-4 rounded-2xl bg-base-200 p-5 text-base-content/80">English (Fluent), Bengali (Native), Hindi (Conversational)</p>
				</section>
			</aside>
		</div>
	</div>
</section>
