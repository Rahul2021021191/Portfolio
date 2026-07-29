import { motion } from "framer-motion";

// Scroll reveal — fade + slide up when entering the viewport.
export const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div" }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

// Section heading with an overline label + gradient-capable title.
export const SectionHeading = ({ overline, title, subtitle, id }) => (
  <div className="mb-14 md:mb-20 max-w-2xl">
    <Reveal>
      <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-blue-400">
        {overline}
      </span>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        data-testid={id ? `${id}-heading` : undefined}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 text-white"
      >
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.16}>
        <p className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed">{subtitle}</p>
      </Reveal>
    )}
  </div>
);
