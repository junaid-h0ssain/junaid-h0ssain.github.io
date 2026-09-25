import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Junaid Hossain - About",
  description:
    "Beyond the backend — photography, travelling, food, movies, cats, and tinkering.",
}

const CARDS = [
  {
    title: "Photography",
    text: "I carry a camera everywhere — streets, lakes, foggy mornings. Most of my gallery is shot on phones over the years.",
    link: { href: "/gallery", label: "See the gallery" },
  },
  {
    title: "Travelling",
    text: "Kaptai, the hills, and anywhere with water and quiet. I like slow trips with no fixed itinerary.",
    badges: ["Kaptai", "Road trips"],
  },
  {
    title: "Food",
    text: "Certified foodie — from haleem and falooda runs to hunting down the best coffee in Chattogram.",
    badges: ["Haleem", "Coffee"],
  },
  {
    title: "Movies & anime",
    text: "Cinephile hours: films of every genre, plus anime — JoJo and Sakamoto Days are current favorites.",
    badges: ["Films", "Anime"],
  },
  {
    title: "Cats",
    text: "Cat person. They supervise all coding sessions and contribute nothing but moral support.",
    badges: ["Moral support"],
  },
  {
    title: "Tinkering",
    text: "ESP32 sensors, Linux setups, self-hosted experiments — if it has a shell, I'll poke at it.",
    link: { href: "/projects", label: "See the projects" },
  },
]

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div className="mb-8 text-center">
        <span className="badge px-4 py-4 text-sm uppercase tracking-[0.3em]">
          About
        </span>
        <h1 className="font-display mt-6 text-4xl font-black lg:text-5xl">
          Beyond the backend
        </h1>
        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-8"
          style={{ color: "var(--portfolio-muted)" }}
        >
          Software dev by trade, introvert by nature. Here&apos;s what I get up
          to when I&apos;m not designing APIs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {CARDS.map((card) => (
          <article key={card.title} className="card about-card">
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p style={{ color: "var(--portfolio-muted)" }}>{card.text}</p>
              <div className="card-actions justify-end">
                {card.link && (
                  <Link
                    className="btn btn-sm btn-outline"
                    href={card.link.href}
                  >
                    {card.link.label}
                  </Link>
                )}
                {card.badges?.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
