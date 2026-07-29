import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { CERTIFICATIONS, EDUCATION } from "../../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export const Certifications = () => (
  <section id="certifications" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading
        id="certifications"
        overline="Credentials"
        title="Certifications"
        subtitle="Validated knowledge across security, cloud, and analytics."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((c, i) => {
          const Icon = Icons[c.icon] || Icons.Award;
          return (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full p-7 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(6,182,212,0.18)] transition-[transform,border-color,box-shadow]"
                data-testid={`certification-card-${i}`}
              >
                <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="font-display text-lg font-medium text-white mt-5 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2">{c.issuer}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export const Education = () => (
  <section id="education" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading id="education" overline="Learning" title="Education" />
      <div className="relative max-w-3xl">
        <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 to-transparent" />
        {EDUCATION.map((e, i) => (
          <Reveal key={i}>
            <div className="relative pl-14 md:pl-16" data-testid={`education-item-${i}`}>
              <span className="absolute left-1.5 md:left-2.5 top-1.5 h-5 w-5 rounded-full bg-cyan-500 shadow-[0_0_18px_rgba(6,182,212,0.8)] ring-4 ring-slate-900" />
              <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20">
                  {e.status}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-medium text-white mt-4">
                  {e.degree}
                </h3>
                <p className="text-slate-400 mt-1">
                  {e.school} · {e.period}
                </p>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed">{e.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
