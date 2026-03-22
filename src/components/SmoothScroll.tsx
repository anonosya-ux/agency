"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard Awwwards easing
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // Request Animation Frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Framer Motion with Lenis
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
