import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { PROFILE } from "../../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (form.message.trim().length < 5) e.message = "Message is too short.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm({ ...form, [key]: e.target.value }),
  });

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          id="contact"
          overline="Say Hello"
          title="Let’s build something with data"
          subtitle="Open to Data Analyst, Business Analyst, and MIS Executive roles. Drop a message."
        />

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Info + socials */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether it’s a dashboard, an automation, or a full-time opportunity — I’d love to hear about it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={`mailto:${PROFILE.email}`}
                data-testid="contact-email-link"
                className="inline-flex items-center gap-3 mt-8 text-white font-medium hover:text-cyan-300 transition-colors"
              >
                <span className="h-11 w-11 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                  <Mail className="h-5 w-5" />
                </span>
                {PROFILE.email}
              </a>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-4 space-y-3">
                <a
                  href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                  data-testid="contact-phone-link"
                  className="inline-flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <span className="h-11 w-11 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                    <Phone className="h-5 w-5" />
                  </span>
                  {PROFILE.phone}
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="h-11 w-11 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                    <MapPin className="h-5 w-5" />
                  </span>
                  {PROFILE.location}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex gap-3 mt-8">
                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-testid="contact-github" className="h-12 w-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-[color,background-color,box-shadow]">
                  <Github className="h-5 w-5" />
                </a>
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="contact-linkedin" className="h-12 w-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-[color,background-color,box-shadow]">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative p-7 md:p-9 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 overflow-hidden">
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-md"
                      data-testid="contact-success"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      >
                        <CheckCircle2 className="h-16 w-16 text-emerald-400" />
                      </motion.div>
                      <h3 className="font-display text-2xl font-medium text-white mt-4">Message sent!</h3>
                      <p className="text-slate-400 mt-2">Thanks for reaching out — I’ll get back soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={submit} className="space-y-5" data-testid="contact-form" noValidate>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <input
                      {...field("name")}
                      data-testid="contact-name-input"
                      placeholder="Your name"
                      className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1" data-testid="error-name">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input
                      {...field("email")}
                      type="email"
                      data-testid="contact-email-input"
                      placeholder="you@example.com"
                      className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1" data-testid="error-email">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <textarea
                      {...field("message")}
                      rows={5}
                      data-testid="contact-message-input"
                      placeholder="Tell me about your project or role..."
                      className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-xs text-rose-400 mt-1" data-testid="error-message">{errors.message}</p>}
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-rose-400" data-testid="contact-error">Something went wrong. Please try again.</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    data-testid="contact-submit-button"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 transition-colors shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </motion.button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
