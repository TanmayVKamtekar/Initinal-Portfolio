import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseGlow = () => {
  const [mouse, setMouse] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const move = (event) => setMouse({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      animate={{ x: mouse.x - 160, y: mouse.y - 160 }}
      transition={{ type: "tween", ease: "linear", duration: 0.22 }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-80 w-80 rounded-full bg-[#1558C9]/[0.10] blur-[100px]"
    />
  );
};

export default MouseGlow;
