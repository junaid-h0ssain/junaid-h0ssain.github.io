export interface Project {
  repo: string
  title: string
  badge: string
  image?: string
  imageAlt?: string
  description: string
  tags: string[]
  liveUrl?: string
}

const UPLOAD = "https://pfbduat8lp.ufs.sh/f/"

export const PROJECTS: Project[] = [
  {
    repo: "junaid-h0ssain/next-js-learn",
    title: "next-js-learn",
    badge: "Vercel",
    image: `${UPLOAD}liP0ABz9f3F1Lo2lhbDRbjh2pcKCTWdXSa4x853Gukm1PUfe`,
    imageAlt: "Next.js Learn Project",
    description:
      "An event management and discovery platform built with Next.js, featuring interactive 3D graphics, animations, and a MongoDB backend.",
    tags: ["Next.js", "MongoDB", "Three.js"],
    liveUrl: "https://next-js-learn-omega-taupe.vercel.app/",
  },
  {
    repo: "junaid-h0ssain/pizza-tracker",
    title: "pizza-tracker",
    badge: "Go",
    image: `${UPLOAD}liP0ABz9f3F1qJKUmiA4lcaJmnFwejPiNZHx8Vqsfh9KLOSW`,
    imageAlt: "Pizza Tracker",
    description:
      "A real-time pizza order tracking web application built with Go, featuring live status updates, customer tracking, and an admin dashboard.",
    tags: ["Go", "Gin", "SQLite"],
  },
  {
    repo: "junaid-h0ssain/fun-api",
    title: "fun-api",
    badge: "Python",
    image: `${UPLOAD}liP0ABz9f3F1Ob4PefVcCsSzjuyaGJ4gRpN6Y7lviQoZfkxW`,
    imageAlt: "FunAPI",
    description:
      "A minimal, decorator-based Python web framework built on top of the WSGI standard, designed to keep routing and middleware simple.",
    tags: ["Python", "WSGI", "Gunicorn"],
  },
  {
    repo: "junaid-h0ssain/web-code-editor",
    title: "web-code-editor",
    badge: "JavaScript",
    image: `${UPLOAD}liP0ABz9f3F19n6Vj3PZ6BC7tP8kTHhbQdSUqOzwepgnVI2E`,
    imageAlt: "Web Code Editor",
    description:
      "A simple in-browser editor for HTML, CSS, and JavaScript with a live preview panel and console output.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://web-code-editor.junadhon81.workers.dev/",
  },
  {
    repo: "junaid-h0ssain/expo-todo",
    title: "expo-todo",
    badge: "React Native",
    image: `${UPLOAD}liP0ABz9f3F1qTm3aSA4lcaJmnFwejPiNZHx8Vqsfh9KLOSW`,
    imageAlt: "Expo Todo App",
    description:
      "A todo application built with React Native and Expo, evolving from local AsyncStorage persistence to an online Convex-backed version with tabbed navigation and dark mode support.",
    tags: ["Expo", "TypeScript", "Convex"],
  },
  {
    repo: "junaid-h0ssain/small-go-projects",
    title: "small-go-projects",
    badge: "Go",
    image: `${UPLOAD}liP0ABz9f3F1L3WNMnDRbjh2pcKCTWdXSa4x853Gukm1PUfe`,
    imageAlt: "Small Go Projects",
    description:
      "A collection of small Go projects demonstrating web APIs, CRUD endpoints, and Slack integrations.",
    tags: ["Go", "Fiber", "Slack API"],
  },
  {
    repo: "junaid-h0ssain/krishi-rokkha",
    title: "krishi-rokkha",
    badge: "JavaScript",
    image: `${UPLOAD}liP0ABz9f3F195VcV2PZ6BC7tP8kTHhbQdSUqOzwepgnVI2E`,
    imageAlt: "Krishi Rokkha",
    description:
      "A farmer-focused web app with AI crop disease detection, weather risk assessment, and crop batch management support.",
    tags: ["Vite", "Firebase", "Three.js"],
    liveUrl: "https://krishi-rokkha.vercel.app/",
  },
  {
    repo: "junaid-h0ssain/clonereddit",
    title: "clonereddit",
    badge: "Java",
    image: `${UPLOAD}liP0ABz9f3F1HixZz6jQcBXISFTK7jyJ9rdGapMVtCsuNzEo`,
    imageAlt: "Clone Reddit",
    description:
      "A simplified Reddit-like application built with Spring Boot for user authentication and post management.",
    tags: ["Spring Boot", "Spring Security", "H2"],
  },
  {
    repo: "junaid-h0ssain/healthweb",
    title: "healthweb",
    badge: "PHP",
    image: `${UPLOAD}liP0ABz9f3F1i2L6Zid7GMQlA41zHckhTeKoUtv698FsPNLm`,
    imageAlt: "HealthWeb",
    description:
      "A PHP-based health and wellness portal with pages for doctors, symptoms, medicines, wellness programs, and basic session-based profile and login support.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    repo: "junaid-h0ssain/booktracker2",
    title: "booktracker2",
    badge: "Flutter",
    image: `${UPLOAD}liP0ABz9f3F1upD1YqBd3qLSlH1ANx9IMwcRnWGQy62ZuKOY`,
    imageAlt: "BookTracker",
    description:
      "A Flutter app for tracking books across home, library, login, and settings pages with sqflite-based storage.",
    tags: ["Flutter", "Dart", "sqflite"],
  },
  {
    repo: "junaid-h0ssain/fake_news_detector",
    title: "fake_news_detector",
    badge: "Python",
    image: `${UPLOAD}liP0ABz9f3F1BT0i6dKSer6AwgC9Enq1s0z2VvTlGFUZf3yi`,
    imageAlt: "Fake News Detector",
    description:
      "A fake news detection project that uses NLP preprocessing, TF-IDF features, and a Logistic Regression classifier.",
    tags: ["Python", "Jupyter", "scikit-learn"],
  },
  {
    repo: "junaid-h0ssain/music_genre_detector",
    title: "music_genre_detector",
    badge: "Python",
    image: `${UPLOAD}liP0ABz9f3F1jvRAPFJZ9EBz5WutMUTvd6yChm2cxN34kqLi`,
    imageAlt: "Music Genre Detector",
    description:
      "A Flask web app that predicts music genres from uploaded audio using librosa feature extraction and scikit-learn classifiers.",
    tags: ["Flask", "librosa", "scikit-learn"],
  },
  {
    repo: "junaid-h0ssain/DHTtester",
    title: "DHTtester",
    badge: "C++",
    image: `${UPLOAD}liP0ABz9f3F1eyPsW2x0bM5vxWiTSmA4q8DOICwKYn6BELrP`,
    imageAlt: "DHTtester",
    description:
      "A weather monitoring system using ESP32 and the Blynk app for reporting sensor data.",
    tags: ["C++", "ESP32", "Blynk"],
  },
  {
    repo: "junaid-h0ssain/portfolio-v1",
    title: "portfolio-v1",
    badge: "Astro",
    image: `${UPLOAD}liP0ABz9f3F1Rcl69WUXwrt4mkLl3fxHcEYjuqVASvD1gnaW`,
    imageAlt: "Portfolio V1",
    description:
      "A personal portfolio website built with Astro, React, MDX, and Tailwind CSS, featuring project, blog, and resume pages.",
    tags: ["Astro", "React", "MDX"],
    liveUrl: "https://portfolio-v1.junadhon81.workers.dev/",
  },
  {
    repo: "junaid-h0ssain/dhoni-howar-mojar-khela",
    title: "dhoni-howar-mojar-khela",
    badge: "Go",
    image: "/images/dhoni-howar-mojar-khela.png",
    imageAlt: "Dhoni Howar Mojar Khela",
    description: "Monopoly in Bangla — a Bengali board game built with Go.",
    tags: ["Go", "Game"],
  },
  {
    repo: "junaid-h0ssain/lsh26-t012-p10",
    title: "lsh26-t012-p10",
    badge: "TypeScript",
    description: "LofiStack Hackathon P10 — a prepaid meter recharge advisor.",
    tags: ["TypeScript", "Hackathon"],
  },
  {
    repo: "junaid-h0ssain/lsh26-t012-p08",
    title: "lsh26-t012-p08",
    badge: "TypeScript",
    description:
      "LofiStack Hackathon P08 — school result processing and GPA engine.",
    tags: ["TypeScript", "Hackathon"],
  },
  {
    repo: "junaid-h0ssain/sharex",
    title: "sharex",
    badge: "TypeScript",
    description: "Single page apps built with TanStack Start.",
    tags: ["TanStack Start", "TypeScript"],
  },
  {
    repo: "junaid-h0ssain/sofi",
    title: "sofi",
    badge: "Dart",
    description: "An ecommerce site made with Svelte, .NET and Flutter.",
    tags: ["Flutter", "Svelte", ".NET"],
  },
  {
    repo: "junaid-h0ssain/go-api-mysql",
    title: "go-api-mysql",
    badge: "Go",
    description: "Go API with Gorilla Mux backed by a MySQL database.",
    tags: ["Go", "Gorilla Mux", "MySQL"],
  },
  {
    repo: "junaid-h0ssain/shop-api",
    title: "shop-api",
    badge: "Python",
    description: "API practice in Python with FastAPI.",
    tags: ["Python", "FastAPI"],
  },
  {
    repo: "junaid-h0ssain/mapsv",
    title: "mapsv",
    badge: "HTML",
    description:
      "A local web app to view your Google Timeline history on desktop.",
    tags: ["JavaScript", "Maps"],
  },
  {
    repo: "junaid-h0ssain/siteblocker",
    title: "siteblocker",
    badge: "HTML",
    description:
      "A Windows system tray app to block certain websites for a certain period.",
    tags: ["JavaScript", "Windows"],
  },
  {
    repo: "junaid-h0ssain/valentine-card",
    title: "valentine-card",
    badge: "Svelte",
    description: "A fun Valentine's Day card to send.",
    tags: ["Svelte"],
  },
]
