"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/web-projects", label: "Web Projects" },
  { href: "/ui-design", label: "UI Design" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between">
      <div>
        <div className="px-8 py-10">
          <p className="text-sm font-medium tracking-[0.24em] uppercase text-slate-400">
            Diana Bosinceanu
          </p>
        </div>

        <nav className="flex flex-col gap-1 px-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-full px-6 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-cyan-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-8 py-8 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Diana Bosinceanu.</p>
        <p className="mt-1">Made with ♡</p>
      </div>
    </div>
  );
}
