import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export const Experience = () => (
  <section id="experience" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading
        id="experience"
        overline="Journey"
        title="Experience"
        subtitle="Internships where I put analytics into practice."
      />

      <div className="relative max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent" />

        <div className="space-y-10">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pl-14 md:pl-16" data-testid={`experience-item-${i}`}>
                {/* Glowing dot */}
                <span className="absolute left-1.5 md:left-2.5 top-1.5 h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.8)] ring-4 ring-slate-900" />
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10"
                >
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    <Briefcase className="h-4 w-4" />
                    {exp.duration}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-white mt-3">
                    {exp.role}
                  </h3>
                  <p className="text-slate-400 mt-1">{exp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
