"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for cursor movement
  const cursorX = useSpring(mousePosition.x, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mousePosition.y, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Ensure we only run this code in browser (client-side)
    if (typeof window === "undefined") return;

    // Detect if device supports hover (ignores touch screens)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return; // Disable custom cursor on mobile/touch

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] hidden md:block flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 4 : 1,
          opacity: 1
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {isHovered && <span className="text-[3px] text-black mix-blend-normal uppercase tracking-tighter">View</span>}
      </motion.div>
    </>
  );
}
