import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SKILLS } from "../../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const Bar = ({ name, level, delay }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-slate-200">{name}</span>
      <span className="text-xs font-semibold text-cyan-300">{level}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
      />
    </div>
  </div>
);

export const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading
        id="skills"
        overline="Toolbox"
        title="Skills & Capabilities"
        subtitle="A blend of technical analytics tooling and the human skills that make insights land."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((group, gi) => {
          const Icon = Icons[group.icon] || Icons.Circle;
          return (
            <Reveal key={group.category} delay={gi * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full p-7 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(139,92,246,0.18)] transition-[transform,border-color,box-shadow]"
                data-testid={`skill-card-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-white">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.items.map((it, i) => (
                    <Bar key={it.name} name={it.name} level={it.level} delay={i * 0.08} />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
