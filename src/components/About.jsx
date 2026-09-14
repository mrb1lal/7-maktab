"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Users, School } from "lucide-react";
import { schoolData, statsData, galleryImages } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const FEATURES = [
  "Zamonaviy sinf xonalari va laboratoriyalar",
  "Kutubxona va ijodiy to'garaklar",
  "Malakali va tajribali pedagog kadrlar",
  "Sport maydonchalari va ochiq ustaxonalar",
];

const counterDisplay = (value) => value.toLocaleString("uz-UZ");

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
          >
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
              <School size={16} />
              Maktab haqida
            </p>
            <h2 className="text-balance mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {schoolData.foundedYear} yildan beri yetakchi ta'lim muassasasi
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              {schoolData.description}
            </p>

            <ul className="mt-7 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-surface p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Users size={24} />
              </span>
              <div>
                <p className="text-lg font-bold text-ink">
                  {statsData[0].value.toLocaleString("uz-UZ")}+ o'quvchi
                </p>
                <p className="text-sm text-slate-500">
                  har yili maktabga ishonch bildirmoqda
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {galleryImages.slice(0, 2).map((image) => (
              <div
                key={image.src}
                className="group overflow-hidden rounded-xl border border-slate-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={450}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
          className="mt-20 grid grid-cols-2 gap-6 rounded-2xl bg-ink p-8 sm:p-10 lg:grid-cols-4 lg:gap-10"
        >
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {counterDisplay(stat.value)}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          variants={fadeUp}
          className="text-balance mt-20 text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
        >
          Maktab hayotidan lavhalar
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.4}
          variants={fadeUp}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-xl border border-slate-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={450}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}