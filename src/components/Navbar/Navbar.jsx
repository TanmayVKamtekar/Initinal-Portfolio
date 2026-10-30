import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const links = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Education", target: "education" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
    >
      <div
        className={`
          mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3
          transition-all duration-300 sm:px-5
          ${scrolled
            ? "border-[#1558C9]/25 bg-[#030407]/95 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/[0.07] bg-[#030407]/75 backdrop-blur-md"}
        `}
      >
        <Link to="home" smooth duration={600} offset={-80} onClick={closeMenu} className="cursor-pointer">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 4 }}
              transition={{ duration: 0.2 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1558C9] to-[#D4FF24] text-xs font-black text-[#030407] shadow-[0_0_20px_rgba(21,88,201,0.22)]"
            >
              TK
            </motion.div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight text-white">Tanmay Kamtekar</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Full Stack Web Developer</p>
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy
              smooth
              duration={600}
              offset={-85}
              activeClass="!bg-[#D4FF24]/[0.10] !text-[#D4FF24]"
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-[#D4FF24]"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/TanmayKamtekarresume.pdf"
            download="Tanmay_Kamtekar_Resume.pdf"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-[#D4FF24] px-4 py-2 text-sm font-semibold text-[#030407] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e1ff55] hover:shadow-[0_8px_20px_rgba(212,255,36,0.16)]"
          >
            Resume
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1558C9]/30 bg-[#1558C9]/[0.08] text-xl text-white transition hover:border-[#D4FF24]/40 hover:bg-[#D4FF24]/[0.08] md:hidden"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-[#1558C9]/25 bg-[#030407]/[0.97] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
          >
            <div className="p-2">
              <Link
                to="home"
                smooth
                duration={600}
                offset={-80}
                onClick={closeMenu}
                className="block cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-[#D4FF24]"
              >
                Home
              </Link>

              {links.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy
                  smooth
                  duration={600}
                  offset={-80}
                  activeClass="!bg-[#D4FF24]/[0.10] !text-[#D4FF24]"
                  onClick={closeMenu}
                  className="block cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-[#D4FF24]"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/TanmayKamtekarresume.pdf"
                download="Tanmay_Kamtekar_Resume.pdf"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#D4FF24] px-4 py-3 text-sm font-semibold text-[#030407]"
              >
                Download Resume
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
