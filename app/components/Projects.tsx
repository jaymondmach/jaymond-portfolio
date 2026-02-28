"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Vendor Compliance Portal",
    category: "Full-Stack · Enterprise",
    description:
      "Production enterprise portal built at Emil Anderson Group. Features REST APIs, secure authentication, role-based access control, document uploads, and AWS S3 cloud storage.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS S3"],
    featured: true,
    color: "from-neutral-800 to-neutral-900",
    link: "https://github.com/jaymondmach",
  },
  {
    id: "02",
    title: "Full-Stack Reminder App",
    category: "Full-Stack · Node.js",
    description:
      "Authentication system with persistent storage, CRUD functionality, and high-throughput WebSocket communication for real-time notifications.",
    tags: ["Node.js", "Express", "JavaScript"],
    featured: false,
    color: "from-neutral-800 to-neutral-950",
    link: "https://github.com/jaymondmach",
  },
  {
    id: "03",
    title: "Online Grocery Platform",
    category: "Full-Stack · Python",
    description:
      "E-commerce application with user authentication, database integration, and real-time inventory management.",
    tags: ["Flask", "Python"],
    featured: false,
    color: "from-neutral-900 to-neutral-950",
    link: "https://github.com/jaymondmach",
  },
  {
    id: "04",
    title: "Pokédex Collection App",
    category: "Frontend · API",
    description:
      "Interactive data visualization using React and REST APIs with dynamic rendering and authentication workflows.",
    tags: ["React", "REST API", "JavaScript"],
    featured: false,
    color: "from-neutral-800 to-neutral-950",
    link: "https://github.com/jaymondmach",
  },
];

const capabilities = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M6 10l6 6-6 6M14 22h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Full-Stack Logic",
    desc: "Deep expertise in Next.js, Node.js, TypeScript, and Python-based backends for complex production systems.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect
          x="4"
          y="6"
          width="28"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 30h8M18 26v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Frontend Precision",
    desc: "React, Tailwind, and high-performance UI architecture with a focus on accessibility and clean design systems.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 6C11.4 6 6 11.4 6 18s5.4 12 12 12 12-5.4 12-12S24.6 6 18 6z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M18 6c-4 4-6 8-6 12s2 8 6 12M18 6c4 4 6 8 6 12s-2 8-6 12M6 18h24"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Cloud Infrastructure",
    desc: "AWS S3 integrations, Git workflows, REST API design, and Prisma ORM for scalable database architecture.",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-10 px-4 sm:px-6 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-12 sm:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tighter mb-6 sm:mb-8">
            SELECTED <br />
            <span className="text-white/30">PROJECTS</span>
          </h2>
          <p className="text-white/50 text-lg sm:text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
            A curated selection of full-stack systems where precision meets
            clean digital engineering.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {/* Featured project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 group relative overflow-hidden rounded-3xl liquid-glass h-[380px] sm:h-[480px] cursor-pointer"
            onClick={() => window.open(projects[0].link, "_blank")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 to-black/60" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 70%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-20 w-full">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span
                  className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-white/10"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {projects[0].category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 tracking-tight">
                {projects[0].title}
              </h3>
              <p className="text-white/60 max-w-md mb-4 sm:mb-6 font-light text-sm sm:text-lg hidden sm:block">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {projects[0].tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold tracking-[0.2em] text-white/40 border border-white/20 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 15L15 5M15 5H7M15 5v8"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Second project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 group relative overflow-hidden rounded-3xl liquid-glass h-[300px] sm:h-[480px] cursor-pointer"
            onClick={() => window.open(projects[1].link, "_blank")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-20">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight">
                {projects[1].title}
              </h3>
              <p className="text-white/50 text-sm mb-4 sm:mb-6 font-light line-clamp-3">
                {projects[1].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[1].tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold tracking-[0.2em] text-white/40 border border-white/20 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Third project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 group relative overflow-hidden rounded-3xl liquid-glass h-[240px] sm:h-[300px] p-6 sm:p-10 flex flex-col justify-between cursor-pointer"
            onClick={() => window.open(projects[2].link, "_blank")}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path
                  d="M4 14c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S4 19.5 4 14z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 14h20M14 4c-3 4-4 6-4 10s1 6 4 10M14 4c3 4 4 6 4 10s-1 6-4 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 tracking-tight">
                {projects[2].title}
              </h4>
              <p className="text-white/40 text-sm leading-relaxed font-light line-clamp-2">
                {projects[2].description}
              </p>
            </div>
          </motion.div>

          {/* Fourth project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 group relative overflow-hidden rounded-3xl liquid-glass h-[240px] sm:h-[300px] cursor-pointer"
            onClick={() => window.open(projects[3].link, "_blank")}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
            <div className="absolute inset-0 p-6 sm:p-10 z-20 flex flex-col justify-end">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 tracking-tight">
                {projects[3].title}
              </h3>
              <p className="text-white/40 text-sm font-light line-clamp-2">
                {projects[3].description}
              </p>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4 group relative overflow-hidden rounded-3xl liquid-glass h-[240px] sm:h-[300px] p-6 sm:p-10 flex flex-col justify-between"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                  Open to Work
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tighter leading-tight">
                Available for new opportunities
              </h4>
            </div>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors group"
            >
              Get in Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M2 8h12M9 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 pt-12 sm:pt-20 border-t border-white/5"
        >
          <div className="flex items-center justify-between mb-10 sm:mb-16">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40">
              Capabilities
            </h2>
            <div className="h-[1px] flex-grow mx-6 sm:mx-12 bg-white/5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 items-stretch">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex"
              >
                <div className="liquid-glass p-6 sm:p-8 rounded-3xl relative w-full flex flex-col">
                  <div className="text-white mb-4 sm:mb-6 opacity-80">
                    {cap.icon}
                  </div>
                  <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-tight">
                    {cap.title}
                  </h5>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
