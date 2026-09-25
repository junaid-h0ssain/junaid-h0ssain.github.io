"use client"

import { useEffect, useState } from "react"
import { PROJECTS, type Project } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

type ViewMode = "normal" | "compact"

function openGithub(repo: string) {
  window.open(`https://github.com/${repo}`, "_blank", "noopener,noreferrer")
}

function CompactRow({ project }: { project: Project }) {
  return (
    <div
      className="card w-full px-5 py-4"
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
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <h2 className="font-display text-lg font-bold">{project.title}</h2>
        <span className="badge badge-secondary badge-sm">{project.badge}</span>
        <span
          className="hidden min-w-0 flex-1 truncate lg:inline"
          style={{ color: "var(--portfolio-muted)" }}
        >
          {project.description}
        </span>
        <span className="ml-auto flex items-center gap-2">
          {project.liveUrl && (
            <a
              className="btn btn-sm btn-outline"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} live site`}
            >
              Live
            </a>
          )}
          <span aria-hidden="true" style={{ color: "var(--portfolio-muted)" }}>
            &rarr;
          </span>
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="badge badge-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectsView() {
  const [mode, setMode] = useState<ViewMode>("normal")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("projects-view")
      if (saved === "compact" || saved === "normal") setMode(saved)
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

  return (
    <>
      <div className="mb-6 flex justify-center gap-2" role="group" aria-label="Project view mode">
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

      {mode === "normal" ? (
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.repo} project={project} />
          ))}
        </div>
      ) : (
        <div className="mx-auto flex max-w-5xl flex-col gap-3">
          {PROJECTS.map((project) => (
            <CompactRow key={project.repo} project={project} />
          ))}
        </div>
      )}
    </>
  )
}
