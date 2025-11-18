import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex items-center justify-between gap-16">
      {/* Stânga – text */}
      <div className="max-w-xl space-y-8">
        <div>
          <p className="text-cyan-400 text-lg">Diana Bosinceanu</p>
          <h1 className="mt-3 text-6xl font-semibold leading-[1.05]">
            Full Stack <br />
            <span className="text-slate-100">Developer</span>
          </h1>
        </div>

        <p className="text-slate-300 text-base leading-relaxed max-w-lg">
          I design and build user-friendly web apps with{" "}
          <span className="font-medium text-slate-100">React</span> and{" "}
          <span className="font-medium text-slate-100">Python</span>, combining
          tech skills with hands-on BA and testing experience.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
          >
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-slate-600 text-sm font-semibold text-slate-100 hover:border-slate-300 hover:bg-slate-900 transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Dreapta – imagine */}
      <div className="relative w-[360px] h-[360px] rounded-full overflow-hidden">
        {/* Cerc glow în spate – un mic vibe „gaming” */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.35),_transparent_60%)]" />

        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/diana.jpg"
            alt="Diana Bosinceanu"
            fill
            className="object-cover rounded-full"
            sizes="360px"
          />
        </div>
      </div>
    </section>
  );
}
