import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-scroll";
import profile from "../../assets/images/profile.png";

const Hero = () => (
  <section id="home" className="relative z-10 min-h-[calc(100vh-5rem)] overflow-hidden bg-[#030407] pt-32 pb-16 sm:pt-36 lg:pt-28">
    <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#1558C9]/20 blur-[120px]" />
    <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#1558C9]/10 blur-[130px]" />
    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
      <div className="max-w-2xl">
        <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#D4FF24]" /><span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4FF24]">Full Stack Web Developer</span></div>
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#1558C9]/50 bg-[#0b1425] px-4 py-2"><span className="h-2 w-2 rounded-full bg-[#D4FF24]" /><span className="text-sm font-medium text-slate-200">Open to Full Stack Opportunities</span></div>
        <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Building digital<span className="mt-1 block text-[#8db7ff]">experiences.</span></h1>
        <p className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">I'm <span className="text-[#D4FF24]">Tanmay Kamtekar.</span></p>
        <p className="mt-3 text-lg font-semibold text-[#8db7ff]">MERN Stack Developer</p>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">I build modern web applications with React, Node.js, Express, and MongoDB, focusing on clean interfaces, practical functionality, and scalable solutions.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="projects" smooth duration={600} offset={-80} className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D4FF24] px-6 py-4 font-bold text-[#030407] shadow-[0_8px_30px_rgba(212,255,36,.12)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(212,255,36,.22)]">View My Work <HiArrowUpRight className="text-lg" /></Link>
          <a href="/TanmayKamtekarresume.pdf" download="Tanmay_Kamtekar_Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1558C9]/70 bg-[#0b1425] px-6 py-4 font-semibold text-white hover:-translate-y-1 hover:border-[#D4FF24]/60"><FaDownload /> Download Resume</a>
        </div>
        <div className="mt-7 flex items-center gap-3"><a href="https://github.com/TanmayVKamtekar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:border-[#D4FF24] hover:text-[#D4FF24]"><FaGithub /></a><a href="https://www.linkedin.com/in/tanmay-kamtekar-644996371/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:border-[#1558C9] hover:text-white"><FaLinkedin /></a><span className="ml-2 text-sm text-slate-400">Based in Mumbai, India</span></div>
      </div>
      <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center"><div aria-hidden="true" className="absolute h-72 w-72 rounded-full bg-[#1558C9]/25 blur-[90px] sm:h-96 sm:w-96" /><div className="relative rounded-[2rem] border border-[#1558C9]/50 bg-[#0b1425] p-3 shadow-[0_25px_90px_rgba(21,88,201,.22)] sm:p-4"><img src={profile} alt="Tanmay Kamtekar" className="h-[300px] w-[300px] rounded-[1.5rem] object-cover sm:h-[360px] sm:w-[360px]" /></div><div className="absolute -bottom-5 left-2 rounded-xl border border-[#1558C9]/50 bg-[#0b1425] px-5 py-3 shadow-xl sm:left-0"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4FF24]">Currently</p><p className="mt-1 text-sm font-semibold text-white">Building MERN Applications</p></div></div>
    </div>
  </section>
);
export default Hero;
