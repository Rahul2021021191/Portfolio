import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { PROFILE } from "../../data/portfolio";
import { AuroraBackground } from "./AuroraBackground";
import { Magnetic } from "./Magnetic";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth" });
};

const lineParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const lineChild = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <AuroraBackground />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-blue-400"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          {PROFILE.role}
        </motion.span>

        {/* Kinetic masked headline */}
        <motion.h1
          variants={lineParent}
          initial="hidden"
          animate="show"
          className="font-display font-bold tracking-tighter text-white mt-6 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02]"
          data-testid="hero-heading"
        >
          {PROFILE.heroLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                variants={lineChild}
                className={`inline-block ${i === 2 ? "text-gradient" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-slate-300 leading-relaxed"
        >
          Hi, I’m <span className="text-white font-semibold">{PROFILE.name}</span>.{" "}
          <span className="text-cyan-300">
            <Typewriter
              words={PROFILE.typing}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={30}
              delaySpeed={1600}
            />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <button
              data-testid="hero-view-projects-button"
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href={PROFILE.resumeUrl}
              download
              data-testid="hero-resume-button"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <button
              data-testid="hero-contact-button"
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-floaty"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.button>
    </section>
  );
};
