"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import { schoolData } from "@/data/mockData";

const NAV_LINKS = [
  { label: "Maktab haqida", href: "#about" },
  { label: "O'qituvchilar", href: "#teachers" },
  { label: "Manzil", href: "#contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
          className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-ink transition-colors hover:bg-surface hover:text-accent md:hidden"
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            aria-hidden="true"
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${
              menuOpen
                ? "-translate-x-1/2 -translate-y-1/2 rotate-45"
                : "-translate-x-1/2 -translate-y-[calc(50%+5px)] rotate-0"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${
              menuOpen
                ? "-translate-x-1/2 -translate-y-1/2 -rotate-45"
                : "-translate-x-1/2 translate-y-[calc(50%+5px)] rotate-0"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-16 z-40 cursor-pointer bg-ink/30 backdrop-blur-sm md:hidden"
            />

            <motion.nav
              key="mobile-nav"
              id="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
              className="absolute inset-x-0 top-16 z-50 rounded-b-2xl border-b border-slate-200 bg-white px-4 pb-6 pt-4 shadow-xl shadow-slate-900/10 md:hidden"
            >
              <motion.ul
                variants={listVariants}
                className="flex flex-col gap-1"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:bg-surface"
                    >
                      <span className="text-base font-medium text-slate-700 transition-colors group-hover:text-accent">
                        {link.label}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors group-hover:bg-accent group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={itemVariants}
                className="mt-4 border-t border-slate-100 pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  Bog'lanish
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}