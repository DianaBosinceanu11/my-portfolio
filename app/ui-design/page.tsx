// app/ui-design/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { uiDesigns } from "@/lib/ui-design";

export const metadata: Metadata = {
  title: "UI Design – Diana Bosinceanu",
  description: "Selected UI design work by Diana – web apps, dashboards & landing pages.",
};

export default function UiDesignPage() {
  return (
    <section className="space-y-10">
      {/* Hero / Intro */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
          UI_DESIGN · FIGMA
        </p>
        <h1 className="text-4xl font-semibold text-slate-50">
          UI Design – clean, modern & usable
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          I design interfaces that feel structured, readable and intuitive –
          from landing pages to dashboards and product UIs. Most of these
          layouts were first built in{" "}
          <span className="font-medium text-slate-100">Figma</span> and then
          implemented in React / Next.js.
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-slate-200">
            🎨 Focus: web & product UI
          </span>
          <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-slate-200">
            🧩 Design systems & components
          </span>
        </div>
      </header>

      {/* Grid cu UI designs */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {uiDesigns.map((design) => (
          <article
            key={design.slug}
            className="rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-lg shadow-slate-950/40 p-6 flex flex-col gap-5"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900">
              <Image
                src={design.thumbnail}
                alt={design.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 520px, 100vw"
              />
            </div>

            {/* Text content */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-50">
                  {design.title}
                </h2>
                <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300">
                  {design.type}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {design.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                {design.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-slate-300 uppercase tracking-wide"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links / CTA zona */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {design.figmaUrl && (
                  <Link
                    href={design.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    Open in Figma <span>↗</span>
                  </Link>
                )}

                {design.fullPreview && (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200"
                  >
                    View full preview (WIP)
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
