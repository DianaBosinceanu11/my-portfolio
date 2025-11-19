import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WebProjectsPage() {
  return (
    <section className="space-y-10">
      {/* Heading */}
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-slate-50">Web Projects</h1>
        <p className="text-slate-300 max-w-2xl text-sm leading-relaxed">
          A selection of modern, user-centered apps built with React, Python
          and clean design principles.
        </p>
      </header>

      {/* Grid cu proiecte */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-lg shadow-slate-950/40 p-6 flex flex-col gap-5"
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 520px, 100vw"
              />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                {project.title}
              </h2>

              <p className="text-sm text-cyan-300/90">
                {project.stack.join(" • ")}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {project.shortDescription}
              </p>

              <Link
                href={`/web-projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                View Project<span>➜</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
