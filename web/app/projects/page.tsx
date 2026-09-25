import type { Metadata } from "next"
import { ProjectsView } from "@/components/projects-view"

export const metadata: Metadata = {
  title: "Junaid Hossain - Projects",
  description:
    "Projects by Junaid Hossain, including web, backend, mobile, and embedded work.",
}

export default function ProjectsPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="badge px-4 py-4 text-sm uppercase tracking-[0.3em]">
            Projects
          </span>
          <h1 className="font-display mt-6 text-4xl font-black lg:text-5xl">
            Things I have built
          </h1>
        </div>
      </section>

      <section className="p-10 pt-0">
        <ProjectsView />
      </section>
    </>
  )
}
