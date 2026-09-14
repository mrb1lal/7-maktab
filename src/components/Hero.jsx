"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { schoolData, statsData } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Sifatli ta'lim — 1962-yildan beri
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-balance mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {schoolData.fullName}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            {schoolData.motto}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
            >
              Ko'proq ma'lumot
              <ArrowRight size={18} />
            </a>
            <a
              href="#teachers"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Play size={18} />
              O'qituvchilar
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-12 grid max-w-md grid-cols-3 divide-x divide-slate-200"
          >
            {statsData.slice(0, 3).map((stat) => (
              <div key={stat.label} className="px-5 first:pl-0">
                <p className="text-2xl font-bold text-ink sm:text-3xl">
                  {stat.value.toLocaleString("uz-UZ")}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60">
            <Image
              src={schoolData.heroImage}
              alt={schoolData.fullName}
              width={800}
              height={600}
              priority
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-lg sm:block">
            <p className="text-sm font-semibold text-ink">Sifatli ta'lim</p>
            <p className="text-xs text-slate-500">Zamonaviy yondashuv</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}