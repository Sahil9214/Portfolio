"use client";

import { useGsap } from "@/context/gsapContext";
import { useEffect, useRef } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export const useParallaxScroll = <T extends HTMLElement>(
  options: ParallaxOptions = {}
) => {
  const {
    speed = 0.5,
    direction = "vertical",
    start = "top bottom",
    end = "bottom top",
    scrub = true,
  } = options;

  const { gsap, ScrollTrigger } = useGsap();
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const moveDistance =
      direction === "vertical"
        ? element.offsetHeight * speed
        : element.offsetWidth * speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          [direction === "vertical" ? "y" : "x"]: 0,
        },
        {
          [direction === "vertical" ? "y" : "x"]: moveDistance,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
            // markers: true, // Useful for debugging
          },
        }
      );
    });

    return () => ctx.revert();
  }, [gsap, ScrollTrigger, speed, direction, start, end, scrub]);

  return elementRef;
};
