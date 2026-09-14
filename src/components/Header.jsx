"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import { schoolData } from "@/data/mockData";

const NAV_LINKS = [
  { label: "Maktab haqida", href: "#about" },
  { label: "O'qituvchilar", href: "#teachers" },
  { label: "Manzil", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="flex items-center gap-2.5 text-ink"
          aria-label="7-MAKTAB"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
            <GraduationCap size={20} strokeWidth={2} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            {schoolData.logoText}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Bog'lanish
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface md:hidden"
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-surface hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-ink px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              Bog'lanish
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}