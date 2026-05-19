import booktracker from '$lib/assets/booktracker.webp';
import clonereddit from '$lib/assets/clonereddit.webp';
import dht from '$lib/assets/dht.webp';
import expoTodo from '$lib/assets/expo-todo.webp';
import fakeNewsDetector from '$lib/assets/fake-news-detector.webp';
import funApi from '$lib/assets/fun-api-thumb.webp';
import healthWeb from '$lib/assets/health-web.webp';
import krishiRokkha from '$lib/assets/krishi-rokkha.webp';
import musicGenre from '$lib/assets/music-genre.webp';
import nextJsLearn from '$lib/assets/next-js-learn.webp';
import pizzaTracker from '$lib/assets/pizza-tracker-thumb.webp';
import portfolioV1 from '$lib/assets/portfolio-v1.webp';
import smallGoProjects from '$lib/assets/small-go-projects.webp';
import webCodeEditor from '$lib/assets/web-code-editor-thumb.webp';

export interface ProjectItem {
	slug: string;
	title: string;
	badge: string;
	description: string;
	image: string;
	tags: string[];
	repoSlug: string;
	repoUrl: string;
	liveUrl?: string;
	cardAnimation: 'fade-down-right' | 'fade-down-left' | 'flip-up';
}

export const projects: ProjectItem[] = [
	{
		slug: 'next-js-learn',
		title: 'next-js-learn',
		badge: 'Vercel',
		description:
			'An event management and discovery platform built with Next.js, featuring interactive 3D graphics, animations, and a MongoDB backend.',
		image: nextJsLearn,
		tags: ['Next.js', 'MongoDB', 'Three.js'],
		repoSlug: 'junaid-h0ssain/next-js-learn',
		repoUrl: 'https://github.com/junaid-h0ssain/next-js-learn',
		liveUrl: 'https://next-js-learn-omega-taupe.vercel.app/',
		cardAnimation: 'fade-down-right'
	},
	{
		slug: 'pizza-tracker',
		title: 'pizza-tracker',
		badge: 'Go',
		description:
			'A real-time pizza order tracking web application built with Go, featuring live status updates, customer tracking, and an admin dashboard.',
		image: pizzaTracker,
		tags: ['Go', 'Gin', 'SQLite'],
		repoSlug: 'junaid-h0ssain/pizza-tracker',
		repoUrl: 'https://github.com/junaid-h0ssain/pizza-tracker',
		cardAnimation: 'flip-up'
	},
	{
		slug: 'fun-api',
		title: 'fun-api',
		badge: 'Python',
		description:
			'A minimal, decorator-based Python web framework built on top of the WSGI standard, designed to keep routing and middleware simple.',
		image: funApi,
		tags: ['Python', 'WSGI', 'Gunicorn'],
		repoSlug: 'junaid-h0ssain/fun-api',
		repoUrl: 'https://github.com/junaid-h0ssain/fun-api',
		cardAnimation: 'fade-down-left'
	},
	{
		slug: 'web-code-editor',
		title: 'web-code-editor',
		badge: 'JavaScript',
		description:
			'A simple in-browser editor for HTML, CSS, and JavaScript with a live preview panel and console output.',
		image: webCodeEditor,
		tags: ['HTML', 'CSS', 'JavaScript'],
		repoSlug: 'junaid-h0ssain/web-code-editor',
		repoUrl: 'https://github.com/junaid-h0ssain/web-code-editor',
		liveUrl: 'https://web-code-editor.junadhon81.workers.dev/',
		cardAnimation: 'fade-down-right'
	},
	{
		slug: 'expo-todo',
		title: 'expo-todo',
		badge: 'React Native',
		description:
			'A todo application built with React Native and Expo, evolving from local AsyncStorage persistence to an online Convex-backed version with tabbed navigation and dark mode support.',
		image: expoTodo,
		tags: ['Expo', 'TypeScript', 'Convex'],
		repoSlug: 'junaid-h0ssain/expo-todo',
		repoUrl: 'https://github.com/junaid-h0ssain/expo-todo',
		cardAnimation: 'flip-up'
	},
	{
		slug: 'small-go-projects',
		title: 'small-go-projects',
		badge: 'Go',
		description: 'A collection of small Go projects demonstrating web APIs, CRUD endpoints, and Slack integrations.',
		image: smallGoProjects,
		tags: ['Go', 'Fiber', 'Slack API'],
		repoSlug: 'junaid-h0ssain/small-go-projects',
		repoUrl: 'https://github.com/junaid-h0ssain/small-go-projects',
		cardAnimation: 'fade-down-left'
	},
	{
		slug: 'krishi-rokkha',
		title: 'krishi-rokkha',
		badge: 'JavaScript',
		description:
			'A farmer-focused web app with AI crop disease detection, weather risk assessment, and crop batch management support.',
		image: krishiRokkha,
		tags: ['Vite', 'Firebase', 'Three.js'],
		repoSlug: 'junaid-h0ssain/krishi-rokkha',
		repoUrl: 'https://github.com/junaid-h0ssain/krishi-rokkha',
		liveUrl: 'https://krishi-rokkha.vercel.app/',
		cardAnimation: 'fade-down-right'
	},
	{
		slug: 'clonereddit',
		title: 'clonereddit',
		badge: 'Java',
		description:
			'A simplified Reddit-like application built with Spring Boot for user authentication and post management.',
		image: clonereddit,
		tags: ['Spring Boot', 'Spring Security', 'H2'],
		repoSlug: 'junaid-h0ssain/clonereddit',
		repoUrl: 'https://github.com/junaid-h0ssain/clonereddit',
		cardAnimation: 'flip-up'
	},
	{
		slug: 'healthweb',
		title: 'healthweb',
		badge: 'PHP',
		description:
			'A PHP-based health and wellness portal with pages for doctors, symptoms, medicines, wellness programs, and basic session-based profile and login support.',
		image: healthWeb,
		tags: ['PHP', 'MySQL', 'JavaScript'],
		repoSlug: 'junaid-h0ssain/healthweb',
		repoUrl: 'https://github.com/junaid-h0ssain/healthweb',
		cardAnimation: 'fade-down-left'
	},
	{
		slug: 'booktracker2',
		title: 'booktracker2',
		badge: 'Flutter',
		description:
			'A Flutter app for tracking books across home, library, login, and settings pages with sqflite-based storage.',
		image: booktracker,
		tags: ['Flutter', 'Dart', 'sqflite'],
		repoSlug: 'junaid-h0ssain/booktracker2',
		repoUrl: 'https://github.com/junaid-h0ssain/booktracker2',
		cardAnimation: 'fade-down-right'
	},
	{
		slug: 'fake_news_detector',
		title: 'fake_news_detector',
		badge: 'Python',
		description:
			'A fake news detection project that uses NLP preprocessing, TF-IDF features, and a Logistic Regression classifier.',
		image: fakeNewsDetector,
		tags: ['Python', 'Jupyter', 'scikit-learn'],
		repoSlug: 'junaid-h0ssain/fake_news_detector',
		repoUrl: 'https://github.com/junaid-h0ssain/fake_news_detector',
		cardAnimation: 'flip-up'
	},
	{
		slug: 'music_genre_detector',
		title: 'music_genre_detector',
		badge: 'Python',
		description:
			'A Flask web app that predicts music genres from uploaded audio using librosa feature extraction and scikit-learn classifiers.',
		image: musicGenre,
		tags: ['Flask', 'librosa', 'scikit-learn'],
		repoSlug: 'junaid-h0ssain/music_genre_detector',
		repoUrl: 'https://github.com/junaid-h0ssain/music_genre_detector',
		cardAnimation: 'fade-down-left'
	},
	{
		slug: 'DHTtester',
		title: 'DHTtester',
		badge: 'C++',
		description: 'A weather monitoring system using ESP32 and the Blynk app for reporting sensor data.',
		image: dht,
		tags: ['C++', 'ESP32', 'Blynk'],
		repoSlug: 'junaid-h0ssain/DHTtester',
		repoUrl: 'https://github.com/junaid-h0ssain/DHTtester',
		cardAnimation: 'fade-down-right'
	},
	{
		slug: 'portfolio-v1',
		title: 'portfolio-v1',
		badge: 'Astro',
		description:
			'A personal portfolio website built with Astro, React, MDX, and Tailwind CSS, featuring project, blog, and resume pages.',
		image: portfolioV1,
		tags: ['Astro', 'React', 'MDX'],
		repoSlug: 'junaid-h0ssain/portfolio-v1',
		repoUrl: 'https://github.com/junaid-h0ssain/portfolio-v1',
		liveUrl: 'https://portfolio-v1.junadhon81.workers.dev/',
		cardAnimation: 'flip-up'
	}
];

export function findProject(repoSlug: string | null | undefined) {
	return projects.find((project) => project.repoSlug === repoSlug || project.slug === repoSlug);
}