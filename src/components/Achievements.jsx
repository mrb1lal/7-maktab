"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, GraduationCap, MapPin, X } from "lucide-react";
import { achievements } from "@/data/mockData";

const FILTERS = ["Barchasi", "IELTS", "Sport", "Dasturlash/IT"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState("Barchasi");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeFilter === "Barchasi"
      ? achievements
      : achievements.filter((a) => a.category === activeFilter);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <section id="achievements" className="scroll-mt-16 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Yutuqlarimiz
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Yutuqlarimiz va Sertifikatlar
          </h2>
          <p className="mt-5 text-slate-600">
            O'quvchilarimizning IELTS, sport musobaqalari va dasturlash
            olimpiadalaridagi yorqin natijalari bilan faxrlanamiz.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.15}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="achievement-filter"
                    className="absolute inset-0 rounded-full bg-ink shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence>
            {filtered.map((achievement) => (
              <motion.article
                key={achievement.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(achievement)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/70"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={achievement.certificateImage}
                    alt={`${achievement.studentName} sertifikati`}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <Award size={12} className="text-accent" />
                    {achievement.achievementTitle}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-accent">
                    {achievement.category}
                  </p>
                  <h3 className="mt-1.5 text-base font-bold text-ink">
                    {achievement.studentName}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {achievement.class}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Yopish"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square bg-slate-100">
                  <Image
                    src={selected.certificateImage}
                    alt={`${selected.studentName} sertifikati`}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col p-6 sm:p-7">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    <Award size={13} />
                    {selected.achievementTitle}
                  </span>

                  <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {selected.category}
                  </p>

                  <h3 className="text-balance mt-1 text-2xl font-bold tracking-tight text-ink">
                    {selected.studentName}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {selected.class}
                  </p>

                  <div className="mt-6 space-y-3.5 border-t border-slate-100 pt-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-accent">
                        <GraduationCap size={16} />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          O'quv markazi
                        </p>
                        <p className="text-sm font-semibold text-ink">
                          {selected.learningCenter}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-accent">
                        <MapPin size={16} />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Yashash joyi
                        </p>
                        <p className="text-sm font-semibold text-ink">
                          {selected.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 leading-relaxed text-slate-600">
                    {selected.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}