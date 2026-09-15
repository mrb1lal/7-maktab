"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, GraduationCap, MapPin, X } from "lucide-react";
import { achievements } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export default function Achievements() {
  const [selected, setSelected] = useState(null);

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
    <section id="achievements" className="scroll-mt-16 bg-surface py-20 lg:py-28">
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
            O'quvchilarimizning olimpiadalar, sport musobaqalari va xalqaro
            imtihonlardagi yorqin natijalari bilan faxrlanamiz.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index * 0.08}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelected(achievement)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image
                  src={achievement.photo}
                  alt={achievement.studentName}
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
                <h3 className="text-base font-bold text-ink">
                  {achievement.studentName}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">
                  {achievement.class}
                </p>
              </div>
            </motion.article>
          ))}
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
                <div className="flex flex-col">
                  <div className="relative aspect-square bg-slate-100">
                    <Image
                      src={selected.photo}
                      alt={selected.studentName}
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t border-slate-100">
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <Image
                        src={selected.certificateImage}
                        alt={`${selected.studentName} sertifikati`}
                        fill
                        sizes="(max-width: 768px) 100vw, 384px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-6 sm:p-7">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    <Award size={13} />
                    {selected.achievementTitle}
                  </span>

                  <h3 className="text-balance mt-4 text-2xl font-bold tracking-tight text-ink">
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