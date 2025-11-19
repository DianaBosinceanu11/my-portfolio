import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // 🔹 AICI desfacem Promise-ul
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound(); // fără return
  }

  return (
    <section className="space-y-12">
      {/* Hero cu mockup (laptop) */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="relative w-full max-w-4xl aspect-[16/9] rounded-[32px] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_60%)]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-contain"
            sizes="800px"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
            {project.title}
          </h1>
          <p className="text-sm text-cyan-300">
            {project.stack.join(" • ")}
          </p>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            {project.overview}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
            >
              View Live
            </a>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 rounded-full border border-slate-600 text-slate-100 text-sm font-semibold hover:border-slate-300 hover:bg-slate-900"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {/* Overview + Features + Gallery */}
      <div className="grid gap-10 lg:grid-cols-[2fr,1.5fr]">
        {/* Overview + Features */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              Overview
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              Features
            </h2>
            <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Gallery */}
        <section>
          <h2 className="text-xl font-semibold text-slate-50 mb-3">
            Gallery
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {project.gallery.map((shot) => (
              <div
                key={shot.src}
                className="relative min-w-[220px] aspect-video rounded-2xl overflow-hidden bg-slate-900"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
