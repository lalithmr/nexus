import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    const handleMouseMove = (e: MouseEvent) => {
      // If the device doesn't support hover, don't show custom cursor
      if (!mediaQuery.matches) return;
      
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);

      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".interactive-panel") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovering ? 4 : 1,
          backgroundColor: isHovering ? "rgba(0, 242, 255, 0.1)" : "#00f2ff",
          borderColor: isHovering ? "#00f2ff" : "transparent"
        }}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[10000] border mix-blend-difference"
      />
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
        }}
        className="fixed w-[2px] h-[2px] bg-titanium rounded-full pointer-events-none z-[10001] translate-x-[5px] translate-y-[5px]"
      />
    </>
  );
}
