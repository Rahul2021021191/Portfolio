import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

const scrollTop = () => {
  if (window.__lenis) window.__lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => (
  <footer className="relative border-t border-white/5 py-12">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <button onClick={scrollTop} className="font-display text-xl font-bold text-white" data-testid="footer-logo">
          Rahul<span className="text-gradient">.</span>
        </button>
        <p className="text-sm text-slate-500 mt-2">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-testid="footer-github" className="h-10 w-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
          <Github className="h-4 w-4" />
        </a>
        <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin" className="h-10 w-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href={`mailto:${PROFILE.email}`} aria-label="Email" data-testid="footer-email" className="h-10 w-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
          <Mail className="h-4 w-4" />
        </a>
      </div>

      <button onClick={scrollTop} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" data-testid="footer-back-to-top">
        Back to top <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  </footer>
);
