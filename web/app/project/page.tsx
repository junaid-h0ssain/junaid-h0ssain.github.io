"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { marked } from "marked"

interface RepoData {
  name: string
  description: string | null
  language: string | null
  default_branch: string
  html_url: string
  homepage: string | null
}

function titleize(text: string) {
  return text
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
}

function decodeBase64Utf8(value: string) {
  const binary = atob(value.replace(/\s/g, ""))
  const bytes = Uint8Array.from(binary, (character) =>
    character.charCodeAt(0)
  )
  return new TextDecoder().decode(bytes)
}

function toRepoUrl(
  target: string,
  repoSlug: string,
  branch: string,
  isImage = false
) {
  if (
    !target ||
    /^([a-z]+:)?\/\//i.test(target) ||
    target.startsWith("#") ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:")
  ) {
    return target
  }

  const basePath = isImage
    ? `https://raw.githubusercontent.com/${repoSlug}/${branch}/`
    : `https://github.com/${repoSlug}/blob/${branch}/`

  return new URL(target, basePath).href
}

type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error" }
  | {
      status: "ready"
      repo: RepoData
      branch: string
      html: string
    }

function ProjectDetail() {
  const searchParams = useSearchParams()
  const repo = searchParams.get("repo")
  const [state, setState] = useState<LoadState>({ status: "idle" })

  useEffect(() => {
    if (!repo) {
      setState({ status: "error" })
      return
    }

    let cancelled = false
    setState({ status: "loading" })

    async function load(repoSlug: string) {
      try {
        const repoResponse = await fetch(
          `https://api.github.com/repos/${repoSlug}`
        )
        if (!repoResponse.ok) throw new Error("Repository request failed.")
        const repoData = (await repoResponse.json()) as RepoData
        const branch = repoData.default_branch || "main"

        const readmeResponse = await fetch(
          `https://api.github.com/repos/${repoSlug}/readme`
        )
        let markdown: string
        if (readmeResponse.ok) {
          const readmeData = await readmeResponse.json()
          markdown = decodeBase64Utf8(readmeData.content)
        } else {
          const rawResponse = await fetch(
            `https://raw.githubusercontent.com/${repoSlug}/${branch}/README.md`
          )
          if (!rawResponse.ok) throw new Error("README request failed.")
          markdown = await rawResponse.text()
        }

        const rendered = await marked.parse(markdown)
        if (!cancelled) {
          setState({ status: "ready", repo: repoData, branch, html: rendered })
        }
      } catch {
        if (!cancelled) setState({ status: "error" })
      }
    }

    load(repo)
    return () => {
      cancelled = true
    }
  }, [repo])

  if (!repo) {
    return (
      <DetailShell
        title="No project selected"
        description="Open a project card from the projects page."
        error="Missing repo parameter. Open a project card from the projects page."
      />
    )
  }

  if (state.status === "error") {
    return (
      <DetailShell
        title={titleize(repo.split("/").at(-1) ?? repo)}
        description="GitHub data could not be loaded for this project."
        error="Unable to load the README right now. You can still open the repository on GitHub."
        repoUrl={`https://github.com/${repo}`}
      />
    )
  }

  if (state.status === "ready") {
    const { repo: repoData, branch, html } = state
    return (
      <DetailShell
        title={
          repoData.name
            ? titleize(repoData.name)
            : titleize(repo.split("/").at(-1) ?? repo)
        }
        description={
          repoData.description ?? "Repository README rendered from GitHub."
        }
        badges={[repoData.language, branch].filter(
          (badge): badge is string => Boolean(badge)
        )}
        repoUrl={repoData.html_url}
        homepage={repoData.homepage}
      >
        <article
          className="markdown-body max-w-none bg-transparent p-6"
          dangerouslySetInnerHTML={{ __html: rewriteHtml(html, repo, branch) }}
        />
      </DetailShell>
    )
  }

  return (
    <DetailShell
      title="Loading project"
      description=""
      loading="Loading README from GitHub..."
    />
  )
}

function rewriteHtml(html: string, repoSlug: string, branch: string) {
  if (typeof window === "undefined") return html
  const template = document.createElement("template")
  template.innerHTML = html
  template.content.querySelectorAll("a").forEach((link) => {
    const originalHref = link.getAttribute("href") || ""
    link.href = toRepoUrl(originalHref, repoSlug, branch)
    if (
      !originalHref.startsWith("#") &&
      !originalHref.startsWith("mailto:") &&
      !originalHref.startsWith("tel:") &&
      link.href.startsWith("http")
    ) {
      link.target = "_blank"
      link.rel = "noreferrer"
    }
  })
  template.content.querySelectorAll("img").forEach((image) => {
    image.src = toRepoUrl(image.getAttribute("src") || "", repoSlug, branch, true)
  })
  return template.innerHTML
}

function DetailShell({
  title,
  description,
  badges = [],
  repoUrl,
  homepage,
  error,
  loading,
  children,
}: {
  title: string
  description: string
  badges?: string[]
  repoUrl?: string
  homepage?: string | null
  error?: string
  loading?: string
  children?: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:py-16">
      <div
        className="card p-6 lg:p-10"
        style={{ borderRadius: "1.5rem" }}
      >
        <div className="mb-8">
          <p className="mono-label">Repository README</p>
          <h1 className="font-display mt-4 text-4xl font-black lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p
              className="mt-4 max-w-3xl text-base leading-8"
              style={{ color: "var(--portfolio-muted)" }}
            >
              {description}
            </p>
          )}
          {badges.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          )}
          {(repoUrl || homepage) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {repoUrl && (
                <a
                  className="btn btn-sm btn-primary"
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open on GitHub
                </a>
              )}
              {homepage && (
                <a
                  className="btn btn-sm btn-outline"
                  href={homepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
              )}
            </div>
          )}
        </div>

        {loading && (
          <div className="card-body" role="status">
            <span>{loading}</span>
          </div>
        )}
        {error && (
          <div className="card-body" role="alert">
            <span>{error}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default function ProjectPage() {
  return (
    <Suspense
      fallback={
        <DetailShell
          title="Loading project"
          description=""
          loading="Loading README from GitHub..."
        />
      }
    >
      <ProjectDetail />
    </Suspense>
  )
}
