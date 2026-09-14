"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactData } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Manzil",
    value: contactData.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      contactData.address
    )}`,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: contactData.phone,
    href: `tel:${contactData.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
  },
  {
    icon: Clock,
    label: "Ish vaqti",
    value: contactData.workHours,
    href: null,
  },
];

export default function MapContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-white py-20 lg:py-28"
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
            Manzil va aloqa
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Bizni toping
          </h2>
          <p className="mt-5 text-slate-600">
            Savollaringiz bo'lsa, biz bilan bog'laning — sizga yordam
            berishdan mamnunmiz.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
          >
            <iframe
              title="7-sonli umumta'lim maktabi xaritada"
              src={contactData.mapEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[420px] w-full border-0"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={fadeUp}
            className="flex flex-col justify-center gap-4"
          >
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 font-medium text-ink">{item.value}</p>
                  </div>
                </div>
              );

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-surface transition-colors hover:border-accent/40"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block cursor-pointer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}