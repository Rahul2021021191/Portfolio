import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { ABOUT } from "../../data/portfolio";
import { Reveal } from "./Reveal";

export const About = () => (
  <section id="about" className="relative py-24 md:py-32 overflow-hidden">
    {/* Editorial marquee backdrop */}
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-0 opacity-[0.04] select-none pointer-events-none">
      <Marquee speed={40} gradient={false}>
        {ABOUT.marquee.map((w, i) => (
          <span key={i} className="font-display text-7xl md:text-9xl font-bold text-white mx-8">
            {w} <span className="text-gradient">/</span>
          </span>
        ))}
      </Marquee>
    </div>

    <div className="relative max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-blue-400">
              About Me
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 text-white">
              A student today,<br />a data storyteller <span className="text-gradient">always.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
              I turn messy, raw numbers into clear decisions — one dashboard, query, and automation at a time.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {ABOUT.chapters.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex gap-6 md:gap-10 p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors"
                data-testid={`about-chapter-${c.no}`}
              >
                <span className="font-display text-2xl md:text-3xl font-bold text-gradient shrink-0">
                  {c.no}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-white">{c.title}</h3>
                  <p className="mt-3 text-base text-slate-400 leading-relaxed">{c.body}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
