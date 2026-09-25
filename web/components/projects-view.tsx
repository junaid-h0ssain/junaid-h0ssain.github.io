"use client"

import { useEffect, useMemo, useState } from "react"
import { PROJECTS, type Project } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

type ViewMode = "normal" | "compact"

function openGithub(repo: string) {
  window.open(`https://github.com/${repo}`, "_blank", "noopener,noreferrer")
}

function shuffle<T>(items: T[]): T[] {
  const array = [...items]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function CompactCard({ project }: { project: Project }) {
  return (
    <div
      className="card flex w-full flex-col gap-2 p-4"
      tabIndex={0}
      role="link"
      aria-label={`Open ${project.title} on GitHub`}
      style={{ cursor: "pointer" }}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a, button")) return
        openGithub(project.repo)
      }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).closest("a, button")) return
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          openGithub(project.repo)
        }
      }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="font-display text-base font-bold">{project.title}</h2>
        <span className="badge badge-secondary badge-sm">{project.badge}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="badge badge-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-1">
        {project.liveUrl ? (
          <a
            className="btn btn-sm btn-outline"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live site`}
          >
            Live
          </a>
        ) : (
          <span />
        )}
        <span aria-hidden="true" style={{ color: "var(--portfolio-muted)" }}>
          &rarr;
        </span>
      </div>
    </div>
  )
}

export function ProjectsView() {
  const [mode, setMode] = useState<ViewMode>("normal")
  // Shuffled client-side on mount so every visit shows a fresh order
  // (prerendered HTML keeps the default order, avoiding hydration mismatch).
  const [projects, setProjects] = useState<Project[]>(PROJECTS)
  const [filter, setFilter] = useState<string | null>(null)

  const allTags = useMemo(
    () => [...new Set(PROJECTS.flatMap((project) => project.tags))].sort(),
    []
  )

  const visible = useMemo(
    () =>
      filter
        ? projects.filter((project) => project.tags.includes(filter))
        : projects,
    [projects, filter]
  )

  useEffect(() => {
    setProjects(shuffle(PROJECTS))
    try {
      const saved = localStorage.getItem("projects-view")
      if (saved === "compact" || saved === "normal") setMode(saved)
      const savedFilter = localStorage.getItem("projects-filter")
      if (savedFilter) setFilter(savedFilter)
    } catch {
      // Ignore storage access issues.
    }
  }, [])

  const select = (next: ViewMode) => {
    setMode(next)
    try {
      localStorage.setItem("projects-view", next)
    } catch {
      // Ignore storage access issues.
    }
  }

  const selectFilter = (next: string | null) => {
    setFilter(next)
    try {
      if (next) localStorage.setItem("projects-filter", next)
      else localStorage.removeItem("projects-filter")
    } catch {
      // Ignore storage access issues.
    }
  }

  return (
    <>
      <div className="mb-4 flex justify-center gap-2" role="group" aria-label="Project view mode">
        <button
          type="button"
          className={`btn btn-sm ${mode === "normal" ? "btn-primary" : "btn-outline"}`}
          aria-pressed={mode === "normal"}
          onClick={() => select("normal")}
        >
          Normal
        </button>
        <button
          type="button"
          className={`btn btn-sm ${mode === "compact" ? "btn-primary" : "btn-outline"}`}
          aria-pressed={mode === "compact"}
          onClick={() => select("compact")}
        >
          Compact
        </button>
      </div>

      <div
        className="mx-auto mb-6 flex max-w-5xl flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter projects by tech"
      >
        <button
          type="button"
          className={`btn btn-sm ${filter === null ? "btn-primary" : "btn-outline"}`}
          aria-pressed={filter === null}
          onClick={() => selectFilter(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`btn btn-sm ${filter === tag ? "btn-primary" : "btn-outline"}`}
            aria-pressed={filter === tag}
            onClick={() => selectFilter(filter === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <p
        className="mb-6 text-center text-sm"
        style={{ color: "var(--portfolio-muted)" }}
        aria-live="polite"
      >
        Showing {visible.length} of {projects.length} projects
        {filter ? ` tagged "${filter}"` : ""}
      </p>

      {mode === "normal" ? (
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.repo} project={project} />
          ))}
        </div>
      ) : (
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((project) => (
            <CompactCard key={project.repo} project={project} />
          ))}
        </div>
      )}
    </>
  )
}
