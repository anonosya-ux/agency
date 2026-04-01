"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function TextRevealEffect({
  text,
  splitBy = "word",
  className,
  duration = 0.8,
  stagger = 0.15,
  effect = "revealY",
  blur = 10,
  wordSpacing = 1,
  characterSpacing = 1,
}: {
  text: string;
  splitBy?: "word" | "character";
  className?: string;
  duration?: number;
  stagger?: number;
  effect?: "revealX" | "revealY" | "revealXY" | "scale";
  blur?: number;
  wordSpacing?: number;
  characterSpacing?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splittedText =
    splitBy === "word" ? splitTextByWord(text) : splitTextByCharacter(text);

  const effects = {
    revealX: {
      from: { x: 30, opacity: 0, filter: `blur(${blur}px)` },
      to: { x: 0, opacity: 1, filter: `blur(0px)` },
    },
    revealY: {
      from: { y: 30, opacity: 0, filter: `blur(${blur}px)` },
      to: { y: 0, opacity: 1, filter: `blur(0px)` },
    },
    revealXY: {
      from: { x: 30, y: 30, opacity: 0, filter: `blur(${blur}px)` },
      to: { x: 0, y: 0, opacity: 1, filter: `blur(0px)` },
    },
    scale: {
      from: { scale: 0.8, opacity: 0, filter: `blur(${blur}px)` },
      to: { scale: 1, opacity: 1, filter: `blur(0px)` },
    },
  };

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;

      gsap.set(elements, effects[effect].from);

      gsap.to(elements, {
        ...effects[effect].to,
        duration: duration,
        stagger: stagger,
        ease: "power3.out",
        delay: 0.2, // Wait for preloader transition slightly
      });
    }
  }, [text, splitBy, effect, duration, stagger, blur]);

  function splitTextByWord(text: string) {
    return text.split(" ").map((word, index) => ({
      word,
      key: index,
    }));
  }

  function splitTextByCharacter(text: string) {
    return text.split("").map((char, index) => ({
      char,
      key: index,
    }));
  }

  return (
    <div
      ref={containerRef}
      className={cn(`flex flex-wrap`, className)}
      style={{
        gap:
          splitBy === "character"
            ? `${characterSpacing * 10}px`
            : `${wordSpacing * 10}px`,
      }}
    >
      {splittedText.map((item, index) => (
        <div key={item.key}>
          <div
            style={{
              letterSpacing:
                splitBy === "word" ? `${characterSpacing * 10}px` : undefined,
            }}
          >
            {splitBy === "word"
              ? (item as { word: string }).word
              : (item as { char: string }).char}
          </div>
          {splitBy === "character" &&
            index < splittedText.length - 1 &&
            (item as { char: string }).char === " " && (
              <div style={{ width: `${wordSpacing * 10}px` }} />
            )}
        </div>
      ))}
    </div>
  );
}
