"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-4 sm:px-6 py-20 sm:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase opacity-70">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-6 sm:mb-8 text-refraction">
            Let&rsquo;s Build Something
          </h2>
          <p className="text-white/50 text-base sm:text-xl font-light leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14 px-2">
            I&rsquo;m open to full-time roles, co-ops, and freelance projects.
            If you&rsquo;re looking for a developer who cares deeply about
            quality and performance — let&rsquo;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:jaymondmach@gmail.com"
              className="w-full sm:w-auto heavy-glass px-6 sm:px-10 py-4 sm:py-5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white/10 hover:border-white/30"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2 4h14v10H2V4zM2 4l7 6 7-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="truncate">jaymondmach@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/jaymondmach"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto heavy-glass px-6 sm:px-10 py-4 sm:py-5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white/10 hover:border-white/30"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
              >
                <path d="M9 .5A8.5 8.5 0 0 0 .5 9c0 3.74 2.43 6.92 5.8 8.04.42.08.58-.18.58-.4v-1.4c-2.36.51-2.86-1.14-2.86-1.14-.38-.98-.94-1.24-.94-1.24-.77-.53.06-.52.06-.52.85.06 1.3.87 1.3.87.75 1.3 1.98.92 2.46.7.08-.54.3-.92.54-1.13-1.88-.21-3.86-.94-3.86-4.19 0-.93.33-1.68.87-2.28-.09-.21-.38-1.08.08-2.25 0 0 .71-.23 2.33.87A8.12 8.12 0 0 1 9 4.88c.72 0 1.44.1 2.12.28 1.62-1.1 2.33-.87 2.33-.87.46 1.17.17 2.04.08 2.25.54.6.87 1.35.87 2.28 0 3.26-1.99 3.98-3.88 4.19.31.27.58.79.58 1.6v2.37c0 .22.15.49.58.4A8.5 8.5 0 0 0 17.5 9 8.5 8.5 0 0 0 9 .5z" />
              </svg>
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
