import CountUp from "react-countup";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ACHIEVEMENTS } from "../../data/portfolio";
import { Reveal } from "./Reveal";

export const Achievements = () => (
  <section className="relative py-20 md:py-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = Icons[a.icon] || Icons.Star;
          return (
            <Reveal key={a.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 md:p-8 rounded-3xl text-center bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-[transform,border-color]"
                data-testid={`achievement-card-${i}`}
              >
                <div className="mx-auto h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                  <Icon className="h-6 w-6 text-blue-300" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mt-5">
                  <CountUp end={a.value} suffix={a.suffix} duration={2.2} enableScrollSpy scrollSpyOnce />
                </div>
                <p className="text-sm text-slate-400 mt-2">{a.label}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
