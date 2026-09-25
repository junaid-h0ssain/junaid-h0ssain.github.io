import type { Metadata } from "next"
import Link from "next/link"
import { STACK } from "@/data/stack"

export const metadata: Metadata = {
  title: "Junaid Hossain - Portfolio",
  description:
    "Welcome to Junaid Hossain's portfolio, i am a dude with an chill attitude.",
}

const PORTRAIT =
  "https://pfbduat8lp.ufs.sh/f/liP0ABz9f3F1bsWygChOcPDU6i9ravWlJIyYCqh4oQBGpL2Z"
const GALLERY_PREVIEW =
  "https://pfbduat8lp.ufs.sh/f/liP0ABz9f3F1rQVVxlRLmK5HFg4QtfIEZL6kuw0BGWyPhOND"

export default function HomePage() {
  return (
    <>
      <header className="hero-split">
        <figure className="hero-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PORTRAIT} alt="Portrait of Junaid Hossain" />
          <figcaption>
            <span>Always Learning</span>
            <span>EST. 2021</span>
          </figcaption>
        </figure>
        <div>
          <span className="hero-kicker">
            <span className="dot" />
            Open to work aka under-employed
          </span>
          <h1 className="hero-title mt-5">
            I joke all the time. But also code sometimes.
          </h1>
          <p className="hero-sub mt-5">
            I&apos;m Junaid Hossain. I read, travel and like to build stuff. I
            am funny, eager to learn and occasionally handsome.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/projects">
              projects
            </Link>
            <Link className="btn btn-outline" href="/gallery">
              gallery
            </Link>
          </div>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <span className="marquee-track">
          SOFTWARE DEV &nbsp;&middot;&nbsp; INTROVERT &nbsp;&middot;&nbsp;
          FOODIE &nbsp;&middot;&nbsp; TRAVELLER &nbsp;&middot;&nbsp; CINEPHILE
          &nbsp;&middot;&nbsp; SOFTWARE DEV &nbsp;&middot;&nbsp; INTROVERT
          &nbsp;&middot;&nbsp; FOODIE &nbsp;&middot;&nbsp; TRAVELLER
          &nbsp;&middot;&nbsp; CINEPHILE &nbsp;&middot;&nbsp; SOFTWARE DEV
          &nbsp;&middot;&nbsp; INTROVERT &nbsp;&middot;&nbsp; FOODIE
          &nbsp;&middot;&nbsp; TRAVELLER &nbsp;&middot;&nbsp; CINEPHILE
          &nbsp;&middot;&nbsp;
        </span>
      </div>

      <section id="about" className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2 className="mt-3">Adaptive and fast under pressure</h2>
            <p className="mt-3">
              I (try to) keep up with latest trends but always keep level
              headed in my judgement
            </p>
          </div>
          <div className="rule my-8" />

          <div className="about-grid">
            <div className="card about-card">
              <div className="card-body gap-5 p-8">
                <h3 className="font-display text-xl font-bold">
                  Now exploring
                </h3>
                <p
                  className="text-base leading-7"
                  style={{ color: "var(--portfolio-muted)" }}
                >
                  Cloud architecture, DevOps workflows, Vibe Coding, Agentic
                  Coding and ways to ship with less friction.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    className="btn btn-sm btn-outline"
                    href="https://github.com/junaid-h0ssain"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-sm btn-outline"
                    href="https://www.linkedin.com/in/junaid-h0ssain"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="btn btn-sm btn-outline"
                    href="mailto:junaid0182@gmail.com"
                  >
                    Email
                  </a>
                  <a
                    className="btn btn-sm btn-outline"
                    href="https://www.instagram.com/junaid.h0ssain/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="card about-card">
              <div className="card-body gap-5 p-8">
                <h3 className="font-display text-2xl font-bold">Stack</h3>
                <div className="stack-logos">
                  {STACK.map((item) => (
                    <div
                      key={item.name}
                      className="stack-item"
                      title={item.name}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.src} alt={item.name} loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="rule" />
                <p className="mt-1 text-sm" style={{ opacity: 0.7 }}>
                  I can always add more...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="mt-3">Work that makes me learn</h2>
            </div>
            <Link className="btn btn-primary" href="/projects">
              Open all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="about-card overflow-hidden">
            <div className="grid items-center gap-6 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
              <div>
                <h2 className="font-display mt-3 text-3xl font-bold">
                  Photos, builds, and field notes.
                </h2>
                <p
                  className="mt-3 max-w-xl"
                  style={{
                    opacity: 0.75,
                    lineHeight: 1.7,
                  }}
                >
                  A separate gallery page for pictures — travel, builds, and
                  everyday moments with a lightbox.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link className="btn btn-primary" href="/gallery">
                    Browse gallery
                  </Link>
                  <Link className="btn btn-outline" href="/resume">
                    View resume
                  </Link>
                </div>
              </div>
              <figure className="hero-figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GALLERY_PREVIEW}
                  alt="Gallery preview"
                  loading="lazy"
                  style={{ height: 280 }}
                />
                <figcaption>
                  <span>Preview strip</span>
                  <span>04 PHOTOS</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
