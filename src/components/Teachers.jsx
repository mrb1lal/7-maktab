"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";
import { teachersData } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export default function Teachers() {
  return (
    <section
      id="teachers"
      className="scroll-mt-16 bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Pedagoglarimiz
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Bilim berayotgan ustozlarimiz
          </h2>
          <p className="mt-5 text-slate-600">
            Tajribali va bilimli o'qituvchilarimiz har bir darsda bolalarga
            sifatli bilim berishga intiladi.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachersData.map((teacher, index) => (
            <motion.article
              key={teacher.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index * 0.08}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-ink">
                  {teacher.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {teacher.subject}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <BookOpen size={14} className="text-accent" />
                    {teacher.subject}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Award size={14} className="text-accent" />
                    {teacher.experience} tajriba
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}