"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Emil Anderson Group",
    location: "Kelowna, BC",
    period: "Sept 2025 — Present",
    current: true,
    bullets: [
      "Developed and maintained a production Vendor Compliance Portal using Next.js, TypeScript, and PostgreSQL",
      "Designed and implemented REST APIs and database schema updates with Prisma ORM",
      "Built secure authentication and vendor onboarding workflows with role-based access control",
      "Implemented document upload and cloud storage features using AWS S3",
      "Collaborated with stakeholders to iterate on UI/UX and business requirements",
    ],
  },
  {
    role: "Frontend Developer (Co-op)",
    company: "Setu Technologies Inc.",
    location: "Vancouver, BC (Remote)",
    period: "Jan 2025 — Apr 2025",
    current: false,
    bullets: [
      "Built responsive web interfaces using React and JavaScript",
      "Integrated frontend components with backend APIs",
      "Collaborated with a development team to ship production features",
    ],
  },
  {
    role: "Backend Developer (Co-op)",
    company: "SAR Technology Inc.",
    location: "Vancouver, BC (Remote)",
    period: "Sept 2024 — Dec 2024",
    current: false,
    bullets: [
      "Developed backend services using Python and web frameworks",
      "Designed database interactions and application logic",
      "Supported feature implementation and debugging across the stack",
    ],
  },
];

const skillGroups = [
  {
    label: "Languages & Frameworks",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "JavaScript",
    ],
  },
  {
    label: "Backend & Databases",
    skills: ["PostgreSQL", "Prisma ORM", "REST APIs", "Auth Systems"],
  },
  {
    label: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "AWS S3", "Agile"],
  },
  {
    label: "Frontend",
    skills: ["Tailwind CSS", "HTML5 / CSS3", "Responsive Design", "UI/UX"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 px-4 sm:px-6 py-20 sm:py-32 bg-mesh"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: timeline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6">
                Experience
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
                A journey through full-stack engineering, co-op roles, and
                production development.
              </p>
            </motion.div>

            <div className="space-y-6 sm:space-y-12 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-[1px] vertical-line hidden md:block" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-0 md:pl-20 group"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-5 top-10 size-2.5 rounded-full ring-4 ring-neutral-900 z-10 hidden md:block transition-colors duration-500 ${
                      exp.current
                        ? "bg-white"
                        : "bg-neutral-700 group-hover:bg-white"
                    }`}
                  />

                  <div className="glass-card p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:border-white/30 cursor-default">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-neutral-400 font-medium tracking-wide uppercase text-xs">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mt-3 sm:mt-4">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-neutral-300 font-light leading-relaxed text-sm flex gap-3"
                        >
                          <span className="text-white/20 mt-1 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative pl-0 md:pl-20 group"
              >
                <div className="absolute left-5 top-10 size-2.5 rounded-full bg-neutral-700 ring-4 ring-neutral-900 z-10 hidden md:block group-hover:bg-white transition-colors duration-500" />
                <div className="glass-card p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:border-white/30">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        Computer Information Technology Diploma
                      </h3>
                      <p className="text-neutral-400 font-medium tracking-wide uppercase text-xs">
                        BCIT · British Columbia Institute of Technology
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                      Sept 2023 — Apr 2025
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right column: skills */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-[2rem] lg:sticky lg:top-32 border-white/5"
            >
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="opacity-50 shrink-0"
                >
                  <rect
                    x="2"
                    y="2"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11"
                    y="2"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="2"
                    y="11"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11"
                    y="11"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <h2 className="text-xl font-bold text-white">Expertise</h2>
              </div>

              <div className="space-y-8 sm:space-y-10">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4 sm:mb-5">
                      {group.label}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-pill-sm text-xs font-semibold text-white cursor-default hover:bg-white hover:text-black transition-all duration-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
                <a
                  href="mailto:jaymondmach@gmail.com"
                  className="block w-full py-4 rounded-2xl bg-white text-black font-bold text-xs tracking-widest uppercase transition-all hover:bg-neutral-200 active:scale-95 shadow-xl shadow-white/5 text-center"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
