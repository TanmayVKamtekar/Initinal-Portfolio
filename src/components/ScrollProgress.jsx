import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1558C9] via-[#3478F6] to-[#D4FF24] origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;