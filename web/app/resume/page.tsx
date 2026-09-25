import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Junaid Hossain - Resume",
  description:
    "Resume of Junaid Hossain — education, work experience, skills, and certifications.",
}

const RESUME_PDF =
  "https://pfbduat8lp.ufs.sh/f/liP0ABz9f3F15l85V4RU8Zi2IWQSOtCjKn6FDAuM4yLxlJEe"

const CONTACT_ROWS: Array<[string, React.ReactNode]> = [
  ["Email", <a key="email" href="mailto:junaid0182@gmail.com" className="underline">junaid0182@gmail.com</a>],
  ["Phone", <a key="phone" href="tel:+8801705150710" className="underline">+880 1705150710</a>],
  ["Address", "181/E, Halishahar, Chittagong, Bangladesh."],
  [
    "Website",
    <a key="site" href="https://junaid-h0ssain.github.io" target="_blank" rel="noreferrer" className="underline">
      junaid-h0ssain.github.io
    </a>,
  ],
  [
    "GitHub",
    <a key="gh" href="https://github.com/junaid-h0ssain" target="_blank" rel="noreferrer" className="underline">
      github.com/junaid-h0ssain
    </a>,
  ],
  [
    "LinkedIn",
    <a key="li" href="https://linkedin.com/in/junaid-h0ssain" target="_blank" rel="noreferrer" className="underline">
      linkedin.com/in/junaid-h0ssain
    </a>,
  ],
]

const EXPERIENCE = [
  {
    role: "IT Specialist/Web Developer",
    period: "2021 – 2023",
    org: "Shahin Technologies",
    points: [
      "Provided IT services for various small businesses and made internal software tools for efficiency.",
    ],
    tech: "HTML, CSS, JavaScript, React, Next.js, MongoDB, PostgreSQL, Drizzle",
  },
  {
    role: "Sales Associate",
    period: "2023 – Present",
    org: "Teeth Care Center",
    points: ["Worked as a cashier and sales person in a family run grocery store."],
  },
]

const EDUCATION = [
  {
    degree: "Bachelor of Computer Science and Engineering in Computer Science",
    period: "2022 – 2026",
    org: "East Delta University",
    points: [
      "GPA: 3.73/4.00",
      "Dean's List all semesters but the first two",
      "Chairman's list for academic excellence",
    ],
  },
  {
    degree: "Higher School Certificate (HSC) in Science",
    period: "2018 – 2020",
    org: "Halishahar Cantonment School and College",
    points: ["GPA: 5.00/5.00", "Sport Prefect", "Badminton Team Captain"],
  },
  {
    degree: "Secondary School Certificate (SSC) in Science",
    period: "2016 – 2018",
    org: "Halishahar Cantonment School and College",
    points: ["GPA: 5.00/5.00", "Class Representative"],
  },
]

const SKILL_GROUPS = [
  ["Programming", "Java, Typescript, Python, GO, C"],
  ["IT", "Docker, Git, GitHub, Arduino, ESP32, Linux (Fedora, Ubuntu)"],
  ["Administrative", "Microsoft Word, Google Docs, PowerPoint"],
  ["Software", "IntelliJ IDEA, MySQL Workbench, Postman, DB Browser"],
]

const CERTIFICATIONS = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    org: "Oracle · 2025",
    url: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fcatalog-education.oracle.com%2Fapex%2Ff%3Fp%3D1010%3A2%3A116916285782548%3A%3A%3AP2_AUTHCODE%2CP2_AUTH_KEY%2CP2_ARG_INVALID_CNT%3AMO273362nO47l%2CflCcP273290hmcx5990qkle&urlhash=yOJe&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoO7%2FeihjR8KOjs%2FrBaBfEw%3D%3D",
  },
  {
    name: "Dart & Flutter | Complete Flutter Development Course",
    org: "Udemy · 2024",
    url: "https://www.udemy.com/certificate/UC-91a8bd9b-329c-427b-874f-ddce5df7c17b/",
  },
  {
    name: "Mobile App Development - Android App Development for Beginners",
    org: "Simplilearn · 2024",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjIwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzkyMDE1M184MjU0NzQ0MTczOTgyMDA4ODE0Ny5wbmciLCJ1c2VybmFtZSI6Ikp1bmFpZCBIb3NzYWluIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6003%2FMobile-App-Development---Android-App-Development-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true",
  },
  {
    name: "Claude with Google Cloud's Vertex AI",
    org: "Anthropic · 2026",
  },
  {
    name: "Foundational C# with Microsoft",
    org: "Microsoft · 2026",
    url: "https://shorturl.at/DIQJ7",
  },
]

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="card p-6 lg:p-8"
      style={{ borderRadius: "1.5rem" }}
    >
      {children}
    </div>
  )
}

function Entry({
  title,
  period,
  org,
  points,
  tech,
}: {
  title: string
  period: string
  org: string
  points: string[]
  tech?: string
}) {
  return (
    <section
      className="card p-5"
      style={{ borderRadius: "1rem", background: "var(--portfolio-bg)" }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-sm font-medium" style={{ color: "var(--portfolio-muted)" }}>
          {period}
        </span>
      </div>
      <p className="mt-1 font-medium" style={{ color: "var(--portfolio-muted)" }}>
        {org}
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5" style={{ color: "var(--portfolio-muted)" }}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {tech && (
        <p className="mt-3 text-sm" style={{ color: "var(--portfolio-muted)" }}>
          <span className="font-semibold" style={{ color: "var(--portfolio-ink)" }}>
            Technologies:
          </span>{" "}
          {tech}
        </p>
      )}
    </section>
  )
}

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div className="mb-8 text-center">
        <span className="badge px-4 py-4 text-sm uppercase tracking-[0.3em]">
          Resume
        </span>
        <h1 className="font-display mt-6 text-4xl font-black lg:text-5xl">
          Resume
        </h1>
        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-8"
          style={{ color: "var(--portfolio-muted)" }}
        >
          Please find my resume below, which provides a comprehensive overview
          of my education, work experience, skills, and certifications.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <a
          className="btn btn-primary"
          href={RESUME_PDF}
          target="_blank"
          rel="noreferrer"
        >
          Open PDF
        </a>
        <a className="btn btn-outline" href={RESUME_PDF} download>
          Download Resume
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Junaid Hossain</h2>
            <ul className="grid gap-2 sm:grid-cols-2" style={{ color: "var(--portfolio-muted)" }}>
              {CONTACT_ROWS.map(([label, value]) => (
                <li key={label}>
                  <span className="font-semibold" style={{ color: "var(--portfolio-ink)" }}>
                    {label}:
                  </span>{" "}
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold">Experience</h3>
            <div className="mt-4 space-y-4">
              {EXPERIENCE.map((job) => (
                <Entry
                  key={job.role}
                  title={job.role}
                  period={job.period}
                  org={job.org}
                  points={job.points}
                  tech={job.tech}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold">Education</h3>
            <div className="mt-4 space-y-4">
              {EDUCATION.map((edu) => (
                <Entry
                  key={edu.degree}
                  title={edu.degree}
                  period={edu.period}
                  org={edu.org}
                  points={edu.points}
                />
              ))}
            </div>
          </div>
        </Panel>

        <Panel>
          <section>
            <h3 className="text-2xl font-bold">Skills</h3>
            <div className="mt-4 space-y-4">
              {SKILL_GROUPS.map(([group, skills]) => (
                <div key={group}>
                  <h4
                    className="font-semibold uppercase tracking-wide"
                    style={{ color: "var(--portfolio-muted)" }}
                  >
                    {group}
                  </h4>
                  <p className="mt-2" style={{ color: "var(--portfolio-muted)" }}>
                    {skills}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h3 className="text-2xl font-bold">Certifications</h3>
            <div className="mt-4 space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="card p-5"
                  style={{ borderRadius: "1rem", background: "var(--portfolio-bg)" }}
                >
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="mt-1 text-sm" style={{ color: "var(--portfolio-muted)" }}>
                    {cert.org}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h3 className="text-2xl font-bold">Soft Skills</h3>
            <p
              className="card mt-4 p-5"
              style={{ borderRadius: "1rem", background: "var(--portfolio-bg)", color: "var(--portfolio-muted)" }}
            >
              Adaptability, Problem Solving, Communication, Teamwork &
              Collaboration, Time Management, Attention to Detail
            </p>
          </section>

          <section className="mt-6">
            <h3 className="text-2xl font-bold">Languages</h3>
            <p
              className="card mt-4 p-5"
              style={{ borderRadius: "1rem", background: "var(--portfolio-bg)", color: "var(--portfolio-muted)" }}
            >
              English (Fluent), Bengali (Native), Hindi (Conversational)
            </p>
          </section>
        </Panel>
      </div>
    </section>
  )
}
