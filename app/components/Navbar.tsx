"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-4 sm:top-8 left-0 right-0 z-50 px-4 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <nav
        className="max-w-4xl mx-auto glass-pill h-16 flex items-center justify-between px-8"
        style={{
          background: scrolled
            ? "rgba(10, 10, 10, 0.9)"
            : "rgba(15, 15, 15, 0.7)",
          transition: "background 0.4s ease",
        }}
      >
        {/* Logo */}
        <button
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="text-sm font-semibold tracking-tighter font-sans">
            J. MACH
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="bg-white text-black text-xs font-bold px-6 py-2 rounded-full hover:bg-white/90 transition-all uppercase tracking-widest active:scale-95"
        >
          Contact
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-4 text-white/60 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            {menuOpen ? (
              <path
                d="M1 1l16 16M17 1L1 17"
                stroke="currentColor"
                strokeWidth="2"
              />
            ) : (
              <>
                <rect y="2" width="18" height="2" rx="1" />
                <rect y="8" width="18" height="2" rx="1" />
                <rect y="14" width="18" height="2" rx="1" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-4xl mx-auto glass-card rounded-3xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
