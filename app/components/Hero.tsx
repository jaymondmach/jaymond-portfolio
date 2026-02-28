"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(calc(-50% + ${-x * 0.5}px), calc(-50% + ${-y * 0.5}px)) scale(0.8)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    document
      .querySelector("#experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
      style={{
        fontFamily:
          "-apple-system, 'SF Pro Display', 'SF Pro Text', BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Liquid background */}
      <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        <div
          ref={blobRef1}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "80vw",
            height: "80vh",
            background:
              "radial-gradient(circle at center, rgba(60,60,60,0.3) 0%, rgba(20,20,20,0.1) 40%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translate(-50%, -50%) scale(1)",
            transition: "transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)",
            mixBlendMode: "screen",
          }}
        />
        <div
          ref={blobRef2}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "60vw",
            height: "60vh",
            opacity: 0.5,
            background:
              "radial-gradient(circle at center, rgba(80,80,80,0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
            transform: "translate(-50%, -50%) scale(0.8)",
            transition: "transform 2s cubic-bezier(0.23, 1, 0.32, 1)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-2">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 sm:mb-10"
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase opacity-70">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Name — scales gracefully: 2.8rem → 5rem → 10rem */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-[clamp(2.8rem,10vw,10rem)] font-bold tracking-tight text-white leading-none mb-8 sm:mb-12 text-refraction"
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Jaymond Mach
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-6 sm:space-y-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/60 leading-relaxed italic px-2">
            Building <span className="text-white italic">production-grade</span>{" "}
            web applications with clean architecture, scalable APIs, and
            seamless user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToWork}
              className="group heavy-glass w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white/10 hover:border-white/30"
            >
              Explore Work
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M3 9h12M10 4l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={scrollToExperience}
              className="text-white/40 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors py-2"
            >
              View Experience
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 gap-3 sm:gap-4 mt-16 sm:mt-24 w-full"
      >
        <div className="heavy-glass rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-center">
          <p className="text-3xl sm:text-5xl font-bold italic mb-1 sm:mb-2">
            3+
          </p>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">
            Co-op &amp; Production Roles
          </p>
        </div>
        <div className="heavy-glass rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              className="opacity-40 shrink-0"
            >
              <path
                d="M10 2l2.4 4.9L18 7.6l-4 3.9.9 5.5L10 14.4l-4.9 2.6.9-5.5L2 7.6l5.6-.7L10 2z"
                fill="currentColor"
              />
            </svg>
            <p className="text-3xl sm:text-5xl font-bold italic">BCIT</p>
          </div>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">
            Comp. Info. Technology Diploma
          </p>
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto mt-12 sm:mt-24 w-full"
      >
        <div className="heavy-glass rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              filter: "blur(80px)",
            }}
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic mb-6 sm:mb-10">
            The Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
              Clean architecture should be felt, not just seen. I combine the
              structural integrity of well-crafted code with a strong focus on
              developer experience and performance.
            </p>
            <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
              From Vendor Compliance Portals to API-driven applications, I build
              full-stack systems that are robust, secure, and enjoyable to use.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
