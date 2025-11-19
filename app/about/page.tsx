import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Diana Bosinceanu",
  description: "About Diana – full stack-minded developer with BA & testing background.",
};

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Python", "FastAPI", "Node.js (basic)", "REST APIs", "SQL"],
  tooling: ["Git & GitHub", "Figma", "Jira", "Postman", "Manual Testing"],
};

export default function AboutPage() {
  return (
    <section className="space-y-12">
        {/* Right – profile / gamer-ish card */}
        <aside className="space-y-6">
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800/80 p-5 flex gap-4 items-center shadow-lg shadow-slate-950/40">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.35),transparent_65%)]">
              <Image
                src="/diana.jpg"
                alt="Diana Bosinceanu"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                About_Me
              </p>
              <p className="text-base font-semibold text-slate-50">
                Diana Bosinceanu
              </p>
              <p className="text-xs text-slate-400">
                Full Stack-minded · React &amp; Python · BA / QA background
              </p>
              <div className="mt-2 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[70%] bg-linear-to-r from-cyan-400 to-sky-500" />
              </div>
              <p className="text-[11px] text-slate-500">
                LVL 1 Junior Dev · EXP 70% to next level 🎮
              </p>
            </div>
          </div>
        </aside>


      {/* Top: title + intro */}
        {/* Stânga – text principal */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold text-slate-50">
            About Diana – Full Stack Developer
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
            I build web apps that feel clean, fast and intuitive – combining{" "}
            <span className="font-medium text-slate-100">React & TypeScript</span> on
            the frontend with{" "}
            <span className="font-medium text-slate-100">Python</span> on the backend.
            My background in{" "}
            <span className="font-medium text-slate-100">Business Analysis</span> and{" "}
            <span className="font-medium text-slate-100">Testing</span> helps me think
            like both the user and the QA.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
            I love breaking down complex problems, turning messy ideas into structured
            flows and pixel-perfect interfaces. And yes, my gamer side shows up in how
            I approach work – focused, competitive, and always ready to level up.
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-slate-200">
              🎯 Focus: Frontend & Full Stack
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-slate-200">
              🎮 Gamer mindset · Problem solver
            </span>
          </div>
        </div>

        <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6 space-y-3 text-sm text-slate-300/35 leading-relaxed max-w-3xl">
                <h2 className="text-base font-semibold text-slate-50/75">How I got into tech</h2>
                <p>
                    I started from a{" "}
                    <span className="font-medium text-slate-100/45">
                    BA background
                    </span>
                    , where I spent a lot of time understanding requirements, flows and
                    real users.
                </p>
                <p>
                    Step by step, I realised I didn’t just want to describe solutions,
                    I wanted to <span className="font-medium text-slate-100/45">build</span>{" "}
                    them. That&apos;s how I became passionate about{" "}
                    <span className="font-medium text-slate-100/45">frontend & full stack</span>{" "}
                    development, focusing on modern stacks like React, Next.js and Python.
                </p>
                <p>
                    My goal now is simple:{" "}
                    <span className="font-medium text-slate-100/45">
                    ship real-world products
                    </span>{" "}
                    that feel intuitive and actually solve problems.
                </p>
            </div>
        </div>


        </div>

      {/* Main layout: text + profile card */}
      <div className="grid gap-10 lg:grid-cols-[1.8fr,1.2fr] items-start">
        {/* Left – story */}
        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-50">How I work</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I enjoy taking a feature from idea to a polished interface:
              understanding the requirements, sketching quick UI flows in Figma,
              and then implementing them in React / Next.js with attention to spacing,
              typography and responsive behavior.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              My BA & testing experience means I naturally:
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Ask clarifying questions before jumping into coding.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Think about edge cases, empty states and error states.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Care about both UX and implementation details.</span>
              </li>
            </ul>

        {/* Skills blocks */}
        <aside className="space-y-6 mt-20">
          <div className="space-y-4">
            <SkillGroup label="Frontend" items={skills.frontend} />
            <SkillGroup label="Backend & APIs" items={skills.backend} />
            <SkillGroup label="Tools & Workflow" items={skills.tooling} />
          </div>
        </aside>
          </section>
        </div>


        <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-50">Fun facts & vibes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5 space-y-2 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              🎮 Gaming
            </p>
            <p>Gamer at heart – I love competitive games, co-op and strategy.</p>
            <p className="text-xs text-slate-400">
              That mindset translates into how I code: focused, persistent and
              always trying to improve.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5 space-y-2 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              💬 Communication
            </p>
            <p>
              Comfortable explaining technical ideas to non-technical people,
              thanks to my BA background.
            </p>
            <p className="text-xs text-slate-400">
              Languages: RO & EN · happy to work in international teams.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5 space-y-2 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              💡 How I like to work
            </p>
            <p>
              Clear goals, honest feedback, and space to experiment, learn and
              refactor.
            </p>
            <p className="text-xs text-slate-400">
              I love teams where design & dev collaborate closely.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5 space-y-2 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              ☕ Energy
            </p>
            <p>
              Powered by coffee, synthwave playlists and a lot of curiosity.
            </p>
            <p className="text-xs text-slate-400">
              I enjoy learning in public and sharing my progress.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pt-2">
        <div className="rounded-3xl border border-slate-800 bg-linear-to-r from-slate-950/80 via-slate-900/80 to-slate-950/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-100">
              Ready for the next quest?
            </p>
            <p className="text-xs text-slate-400 max-w-md">
              I&apos;m open to junior / entry-level roles, internships and
              collaboration on real-world projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition"
          >
            Let&apos;s work together →
          </Link>
        </div>
      </section>


      </div>
    </section>
  );
}

type SkillGroupProps = {
  label: string;
  items: string[];
};

function SkillGroup({ label, items }: SkillGroupProps) {
  return (
    <section className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-4 space-y-3">
      <h3 className="text-sm font-semibold text-slate-100">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-slate-950/60 text-[11px] uppercase tracking-wide text-slate-300 border border-slate-800"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
