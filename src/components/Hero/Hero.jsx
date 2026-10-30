import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-scroll";

import profile from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] overflow-hidden bg-[#030407] pt-24 lg:pt-20"
    >
      {/* Blue ambient lighting */}
      <div className="pointer-events-none absolute left-[10%] top-10 h-[320px] w-[320px] rounded-full bg-[#1558C9]/[0.13] blur-[120px]" />
      <div className="pointer-events-none absolute right-[8%] top-[28%] h-[280px] w-[280px] rounded-full bg-[#1558C9]/[0.16] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4FF24]/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.025] lg:block" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gradient-to-r from-[#D4FF24] to-[#1558C9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Full Stack Web Developer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#1558C9]/30 bg-[#1558C9]/[0.08] px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4FF24]" />
              <span className="text-xs font-medium text-slate-300 sm:text-sm">
                Open to Full Stack Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="text-5xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              Building digital
              <span className="block bg-gradient-to-r from-white via-slate-100 to-[#1558C9] bg-clip-text text-transparent">
                experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="mt-6 text-lg font-medium text-slate-300 sm:text-xl"
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-[#1558C9] to-[#D4FF24] bg-clip-text font-semibold text-transparent">
                Tanmay Kamtekar
              </span>
              .
            </motion.p>

            <div className="mt-4 min-h-[34px] text-xl font-semibold text-slate-200 sm:text-2xl">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1800,
                  "MERN Stack Developer",
                  1800,
                  "React Developer",
                  1800,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-[17px]"
            >
              I build modern web applications with React, Node.js, Express,
              and MongoDB, focusing on clean interfaces, practical
              functionality, and scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="projects"
                smooth
                duration={600}
                offset={-80}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D4FF24] px-6 py-3.5 font-semibold text-[#030407] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(212,255,36,0.2)] active:scale-95 sm:w-[185px]"
              >
                View My Work
                <HiArrowUpRight className="text-lg" />
              </Link>

              <a
                href="/TanmayKamtekarresume.pdf"
                download="Tanmay_Kamtekar_Resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#1558C9]/60 bg-[#1558C9]/[0.08] px-6 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D4FF24]/60 hover:bg-[#1558C9]/[0.16] hover:shadow-[0_12px_30px_rgba(21,88,201,0.2)] active:scale-95 sm:w-[185px]"
              >
                <FaDownload />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-7 flex items-center gap-3"
            >
              <a
                href="https://github.com/TanmayVKamtekar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4FF24]/50 hover:bg-[#D4FF24]/[0.08] hover:text-[#D4FF24]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tanmay-kamtekar-644996371/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#1558C9]/70 hover:bg-[#1558C9]/[0.12] hover:text-white"
              >
                <FaLinkedin />
              </a>
              <span className="ml-2 text-xs text-slate-600">
                Based in Mumbai, India
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex h-[340px] w-[340px] items-center justify-center sm:h-[390px] sm:w-[390px]">
              <div className="absolute h-[240px] w-[240px] rounded-full bg-gradient-to-br from-[#1558C9]/25 via-transparent to-[#D4FF24]/10 blur-[80px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute h-[300px] w-[300px] rounded-full border border-[#1558C9]/30 sm:h-[350px] sm:w-[350px]"
              >
                <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#D4FF24] shadow-[0_0_14px_rgba(212,255,36,0.8)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="absolute h-[275px] w-[275px] rounded-full border border-[#1558C9]/25 sm:h-[320px] sm:w-[320px]"
              >
                <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#1558C9] shadow-[0_0_12px_rgba(21,88,201,0.85)]" />
              </motion.div>

              <div className="relative z-10 rounded-[2rem] border border-[#1558C9]/35 bg-[#0a101c]/80 p-3 shadow-[0_25px_80px_rgba(21,88,201,0.18)] backdrop-blur-xl sm:p-4">
                <motion.img
                  src={profile}
                  alt="Tanmay Kamtekar"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[235px] w-[235px] rounded-[1.5rem] border border-white/[0.08] object-cover sm:h-[275px] sm:w-[275px]"
                />
                <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-black/20 via-transparent to-white/[0.04] sm:inset-4" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.5 },
                  y: { delay: 1, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute bottom-1 left-0 z-20 rounded-xl border border-[#1558C9]/40 bg-[#0a101c]/95 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl sm:bottom-4 sm:left-2"
              >
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Currently
                </p>
                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                  Building MERN Applications
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#030407] to-transparent" />
    </section>
  );
};

export default Hero;
