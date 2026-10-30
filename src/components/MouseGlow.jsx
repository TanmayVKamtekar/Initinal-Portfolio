import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseGlow = () => {
  const [mouse, setMouse] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 175,
        y: mouse.y - 175,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.15,
      }}
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-[#1558C9]/[0.16]
        blur-[110px]
        z-0
      "
    />
  );
};

export default MouseGlow;