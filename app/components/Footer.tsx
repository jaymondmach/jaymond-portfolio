"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 px-4 sm:px-6 pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 sm:gap-8 border-t border-white/5 pt-10 sm:pt-12">
        {/* Links row */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="https://github.com/jaymondmach"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:jaymondmach@gmail.com"
            className="text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright + scroll-to-top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:justify-between">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/20 text-center sm:text-left">
            © 2025 Jaymond Mach · Kelowna, BC
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full heavy-glass flex items-center justify-center hover:bg-white/10 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 11V3M3 7l4-4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
