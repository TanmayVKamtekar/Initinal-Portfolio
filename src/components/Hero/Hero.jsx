import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-scroll";
import profile from "../../assets/images/profile.png";

const Hero = () => (
  <section
    id="home"
    className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#030407] pb-20 pt-32 sm:min-h-[820px] sm:pt-36 lg:min-h-[calc(100vh-20px)] lg:pb-24 lg:pt-28"
  >
    <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-24 -z-10 h-[460px] w-[460px] rounded-full bg-[#1558C9]/20 blur-[140px]" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-[#1558C9]/15 blur-[130px]" />
    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-48 w-[70%] -translate-x-1/2 bg-gradient-to-t from-[#1558C9]/[0.08] to-transparent blur-2xl" />

    <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:px-8">
      <div className="relative z-10 max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#D4FF24]" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4FF24]">Full Stack Web Developer</span>
        </div>

        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#1558C9]/50 bg-[#0b1425] px-4 py-2.5 shadow-[0_8px_30px_rgba(21,88,201,.12)]">
          <span className="h-2 w-2 rounded-full bg-[#D4FF24] shadow-[0_0_12px_rgba(212,255,36,.8)]" />
          <span className="text-sm font-medium text-slate-200">Open to Full Stack Opportunities</span>
        </div>

        <h1 className="max-w-[720px] text-[clamp(3.2rem,6.2vw,5.6rem)] font-black leading-[.98] tracking-[-.055em] text-white">
          Building digital
          <span className="mt-2 block bg-gradient-to-r from-white via-[#c7dcff] to-[#6da0ff] bg-clip-text pb-2 text-transparent">experiences.</span>
        </h1>

        <p className="mt-7 text-xl font-medium text-slate-200 sm:text-2xl">
          I'm <span className="font-bold text-[#D4FF24]">Tanmay Kamtekar.</span>
        </p>
        <p className="mt-3 text-lg font-semibold text-[#8db7ff] sm:text-xl">MERN Stack Developer</p>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          I build modern web applications with React, Node.js, Express, and MongoDB, focusing on clean interfaces, practical functionality, and scalable solutions.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-80}
            className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D4FF24] px-7 py-4 font-bold text-[#030407] shadow-[0_10px_34px_rgba(212,255,36,.13)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(212,255,36,.24)]"
          >
            View My Work <HiArrowUpRight className="text-lg" />
          </Link>
          <a
            href="/TanmayKamtekarresume.pdf"
            download="Tanmay_Kamtekar_Resume.pdf"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#1558C9]/70 bg-[#0b1425] px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#8db7ff] hover:bg-[#10203a]"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a href="https://github.com/TanmayVKamtekar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-[#D4FF24] hover:text-[#D4FF24]"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/tanmay-kamtekar-644996371/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-[#8db7ff] hover:text-[#8db7ff]"><FaLinkedin /></a>
          <span className="ml-2 text-sm text-slate-400">Based in Mumbai, India</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[460px] items-center justify-center py-8 lg:py-0">
        <div aria-hidden="true" className="absolute h-[330px] w-[330px] rounded-full bg-[#1558C9]/25 blur-[100px] sm:h-[420px] sm:w-[420px]" />
        <div aria-hidden="true" className="absolute h-[390px] w-[390px] rounded-full border border-[#1558C9]/25 sm:h-[470px] sm:w-[470px]" />
        <div className="relative rounded-[2rem] border border-[#1558C9]/55 bg-[#0b1425] p-3 shadow-[0_28px_100px_rgba(21,88,201,.25)] sm:p-4">
          <img
            src={profile}
            alt="Tanmay Kamtekar"
            fetchPriority="high"
            className="h-[290px] w-[290px] rounded-[1.5rem] object-cover object-center sm:h-[370px] sm:w-[370px]"
          />
          <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] ring-1 ring-inset ring-white/10 sm:inset-4" />
        </div>
        <div className="absolute -bottom-1 left-0 rounded-xl border border-[#1558C9]/50 bg-[#0b1425] px-5 py-3 shadow-2xl sm:bottom-2 sm:left-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4FF24]">Currently</p>
          <p className="mt-1 text-sm font-semibold text-white">Building MERN Applications</p>
        </div>
        <div className="absolute right-0 top-5 rounded-full border border-[#D4FF24]/30 bg-[#0b1425] px-4 py-2 text-xs font-semibold text-[#D4FF24] shadow-xl sm:-right-2 sm:top-8">React · Node · MongoDB</div>
      </div>
    </div>
  </section>
);

export default Hero;
