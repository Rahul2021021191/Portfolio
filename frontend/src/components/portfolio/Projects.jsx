import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export const Projects = () => (
  <section id="projects" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading
        id="projects"
        overline="Selected Work"
        title="Projects"
        subtitle="Dashboards and automations that turn data into decisions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Tilt
              glareEnable
              glareMaxOpacity={0.12}
              glareColor="#8B5CF6"
              glarePosition="all"
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.01}
              transitionSpeed={1500}
              className="h-full"
            >
              <div
                className="group h-full rounded-3xl overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors"
                data-testid={`project-card-${i}`}
              >
                {/* Spotlight image */}
                <div className="relative h-52 md:h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium text-cyan-200 bg-cyan-500/10 border border-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`project-demo-${i}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`project-github-${i}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
