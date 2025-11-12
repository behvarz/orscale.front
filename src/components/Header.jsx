"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header({ menu }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition-opacity duration-2000 ease-in-out"
        >
          OrScale
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200 relative transition-opacity duration-2000 ease-in-out">
          <Link href="/" className="hover:text-white transition-opacity duration-2000 ease-in-out">
            {menu.home}
          </Link>

          <Link href="/about" className="hover:text-white transition-opacity duration-2000 ease-in-out">
            {menu.about}
          </Link>

          <Link href="/solutions" className="hover:text-white transition-opacity duration-2000 ease-in-out">
            {menu.solutions}
          </Link>

          <Link href="/projects" className="hover:text-white transition-opacity duration-2000 ease-in-out">
            {menu.projects}
          </Link>

          <Link href="/contact" className="hover:text-white transition-opacity duration-2000 ease-in-out">
            {menu.contact}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700"
          aria-label="Toggle menu"
        >
          ≡
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/80">
          <nav className="px-4 py-3 flex flex-col gap-3 items-end text-right">
            <Link href="/" onClick={() => setOpen(false)}>
              {menu.home}
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              {menu.about}
            </Link>
            <Link href="/solutions" onClick={() => setOpen(false)}>
              {menu.solutions}
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)}>
              {menu.projects}
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              {menu.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
