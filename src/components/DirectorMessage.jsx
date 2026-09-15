"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Award } from "lucide-react";
import { directorData } from "@/data/mockData";

const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function DirectorMessage() {
  return (
    <section id="director" className="scroll-mt-16 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={slideLeft}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-slate-200" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60">
              <Image
                src={directorData.image}
                alt={directorData.position}
                width={480}
                height={560}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Award size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Direktor</p>
                <p className="text-xs text-slate-500">{directorData.position}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
            variants={slideRight}
            className="pt-10 lg:pt-0"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Direktor murojaati
            </p>
            <h2 className="text-balance mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Kelajakni bugun quramiz
            </h2>

            <figure className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white">
                <Quote size={20} />
              </span>
              <blockquote className="mt-6 border-l-2 border-accent pl-5 text-lg leading-relaxed text-slate-700 sm:text-xl">
                {directorData.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-base font-bold text-ink">
                    {directorData.position}
                  </p>
                </div>
              </figcaption>
            </figure>

            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
              <Award size={16} className="text-accent" />
              {directorData.experience}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}