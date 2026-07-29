import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Lenis from "lenis";
import { motion } from "framer-motion";

import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications, Education } from "@/components/portfolio/CertsEducation";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Loader } from "@/components/portfolio/Loader";
import { ScrollProgress, BackToTop } from "@/components/portfolio/Widgets";

const useTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
};

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const timer = setTimeout(() => setLoading(false), 1400);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0F172A] text-white selection:bg-purple-500/30">
      <Loader show={loading} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] text-white px-6 text-center overflow-hidden">
    <div className="absolute -top-40 -left-32 w-[38rem] h-[38rem] rounded-full bg-blue-600/20 blur-3xl animate-blob" />
    <div className="absolute -bottom-40 -right-32 w-[34rem] h-[34rem] rounded-full bg-purple-600/20 blur-3xl animate-blob" />
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-display text-7xl md:text-9xl font-bold text-gradient"
    >
      404
    </motion.h1>
    <p className="text-slate-400 mt-4 text-lg">This page drifted off the dashboard.</p>
    <Link
      to="/"
      data-testid="notfound-home-link"
      className="mt-8 inline-flex items-center px-8 py-4 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
    >
      Back Home
    </Link>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
