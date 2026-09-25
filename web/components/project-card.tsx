"use client"

import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  const githubUrl = `https://github.com/${project.repo}`

  const openProject = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="card project-card w-full"
      tabIndex={0}
      role="link"
      aria-label={`Open ${project.title} on GitHub`}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a, button")) return
        openProject()
      }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).closest("a, button")) return
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          openProject()
        }
      }}
    >
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          <span className="badge badge-secondary">{project.badge}</span>
        </h2>
        <p style={{ color: "var(--portfolio-muted)", lineHeight: 1.65 }}>
          {project.description}
        </p>
        <div className="card-actions justify-end">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <div className="card-actions justify-end">
            <a
              className="btn btn-sm btn-outline"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
