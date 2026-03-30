"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for better performance and correct spring updates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for cursor movement
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over links, buttons, or interactive elements
      if (
        target.closest("a") || 
        target.closest("button") || 
        target.closest('[data-magnetic="true"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hide on mobile via CSS matchMedia or just render
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}} />
      <motion.div
        className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] hidden md:flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 4 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
      
      </motion.div>
    </>
  );
}
