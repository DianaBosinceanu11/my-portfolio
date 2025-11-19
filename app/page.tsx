// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
      {/* Stânga – text */}
      <div className="max-w-xl space-y-8">
        <div>
          <p className="text-cyan-400 text-lg">Diana Bosinceanu</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-[1.05]">
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

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
          >
            Contact Me
          </Link>

          <Link
            href="/cv.pdf"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-slate-600 text-sm font-semibold text-slate-100 hover:border-slate-300 hover:bg-slate-900 transition"
          >
            Download CV
          </Link>
        </div>
      </div>

      {/* Dreapta – imagine */}
      <div className="relative w-64 h-64 md:w-[360px] md:h-[360px] rounded-full overflow-hidden">
        {/* Glow în spate */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.35),_transparent_60%)]" />

        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/diana.jpg"
            alt="Diana Bosinceanu"
            fill
            className="object-cover rounded-full"
            sizes="(min-width: 768px) 360px, 256px"
          />
        </div>
      </div>
    </section>
  );
}


























// export default function HomePage() {
//   return (
//     <div className="flex flex-col gap-8">
//       {/* Hero section */}
//       <section className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
//         <div className="space-y-4">
//           <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
//             Full Stack Developer
//           </p>
//           <h1 className="text-4xl md:text-5xl font-semibold">
//             Hey, I&apos;m <span className="text-violet-400">Diana</span>
//           </h1>
//           <p className="text-slate-300 max-w-xl">
//             I build web apps with React, Next.js and Python, mixing clean UI with a
//             bit of gaming energy ⚡
//           </p>

//           <div className="flex flex-wrap gap-3 pt-2">
//             <button className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-sm font-medium transition">
//               View projects
//             </button>
//             <button className="px-5 py-2 rounded-full border border-slate-600 hover:border-slate-300 text-sm font-medium transition">
//               Download CV
//             </button>
//           </div>
//         </div>

//         {/* Card de profil / gamer vibe */}
//         <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
//           <div className="flex items-center justify-between mb-4">
//             <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
//               Player 1
//             </span>
//             <span className="text-xs text-slate-400">LVL 23 · EXP 87%</span>
//           </div>
//           <div className="h-40 rounded-xl bg-gradient-to-br from-violet-600/40 via-slate-900 to-emerald-500/30" />
//           <p className="mt-4 text-sm text-slate-300">
//             React, Next.js, TypeScript, Tailwind CSS, Python, FastAPI.
//           </p>
//         </div>
//       </section>

//       {/* Secțiune de skill-uri / tech stack – placeholder */}
//       <section>
//         <h2 className="text-lg font-semibold mb-3">Tech stack</h2>
//         <div className="flex flex-wrap gap-2 text-xs">
//           {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Python"].map(
//             (tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60"
//               >
//                 {tech}
//               </span>
//             )
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }





















