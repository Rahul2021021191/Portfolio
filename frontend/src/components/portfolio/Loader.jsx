import { motion, AnimatePresence } from "framer-motion";

// On-load loading animation with the RG monogram.
export const Loader = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0F172A]"
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        data-testid="page-loader"
      >
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl font-bold text-gradient"
          >
            RG
          </motion.div>
          <div className="h-[2px] w-40 bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </div>
          <span className="text-xs tracking-[0.3em] uppercase text-slate-500">
            Loading Portfolio
          </span>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
