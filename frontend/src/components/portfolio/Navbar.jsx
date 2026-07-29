import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV, PROFILE } from "../../data/portfolio";
import { Magnetic } from "./Magnetic";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-[65] transition-colors duration-300 ${
        scrolled
          ? "bg-slate-900/70 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => go("home")}
          className="font-display text-xl font-bold text-white"
        >
          Rahul<span className="text-gradient">.</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Magnetic key={n.id} strength={0.2}>
              <button
                data-testid={`nav-link-${n.id}`}
                onClick={() => go(n.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {n.label}
                {active === n.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  />
                )}
              </button>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            data-testid="theme-toggle-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-10 w-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={PROFILE.resumeUrl}
            download
            data-testid="nav-resume-button"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            Resume
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-white/5"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                data-testid={`mobile-nav-link-${n.id}`}
                onClick={() => go(n.id)}
                className={`text-left px-3 py-3 rounded-lg text-sm font-medium ${
                  active === n.id ? "text-white bg-white/5" : "text-slate-400"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
