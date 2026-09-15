"use client";

import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Code2 } from "lucide-react";
import { schoolData, contactData } from "@/data/mockData";

const QUICK_LINKS = [
  { label: "Maktab haqida", href: "#about" },
  { label: "O'qituvchilar", href: "#teachers" },
  { label: "Manzil", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href="#" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
                <GraduationCap size={20} strokeWidth={2} />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                {schoolData.logoText}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {schoolData.motto}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Qisqa havolalar
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Aloqa
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {contactData.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href={`tel:${contactData.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${contactData.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {contactData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/70 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {schoolData.fullName}. Barcha
            huquqlar himoyalangan.
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2 text-xs font-medium text-slate-400 transition-colors">
            <Code2 size={14} />
            Sayt{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-300 transition-colors hover:text-accent"
            >
              Bilolxon
            </a>{" "}
            tomonidan yaratildi
          </p>
        </div>
      </div>
    </footer>
  );
}