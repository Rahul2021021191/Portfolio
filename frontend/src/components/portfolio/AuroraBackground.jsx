import { useMemo } from "react";
import { motion } from "framer-motion";

// Floating particles + animated gradient blobs backdrop.
export const AuroraBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dur: Math.random() * 8 + 6,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blobs */}
      <div className="absolute -top-40 -left-32 w-[38rem] h-[38rem] rounded-full bg-blue-600/25 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[34rem] h-[34rem] rounded-full bg-purple-600/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute -bottom-40 left-1/3 w-[32rem] h-[32rem] rounded-full bg-cyan-500/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/60"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};
