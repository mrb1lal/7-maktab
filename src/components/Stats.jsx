"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, GraduationCap, BadgeCheck, University } from "lucide-react";
import { statisticsData } from "@/data/mockData";

const ICONS = [Users, GraduationCap, BadgeCheck, University];

function Counter({ value, suffix, icon: Icon, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="relative flex flex-col items-center border border-slate-200 bg-white px-6 py-10 text-center"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-accent">
        <Icon size={22} />
      </span>
      <p className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {display.toLocaleString("uz-UZ")}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium text-slate-500">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statisticsData.map((stat, index) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={ICONS[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}