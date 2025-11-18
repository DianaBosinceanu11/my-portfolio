import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Diana Bosinceanu – Full Stack Developer",
  description: "Portfolio web – React, Python, UI/UX.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex">
          <Sidebar />

          <div className="flex-1 flex flex-col">
            <header className="flex justify-end items-center px-12 py-6 gap-4">
              <button className="text-sm px-3 py-1 rounded-full border border-slate-700 hover:border-slate-400 transition">
                EN
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-xs">
                ☾
              </button>
            </header>

            <main className="flex-1 px-16 pb-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
