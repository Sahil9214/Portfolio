/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGsap } from "@/context/gsapContext";
import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation:
    | "fadeIn"
    | "fadeUp"
    | "fadeLeft"
    | "fadeRight"
    | "scale"
    | "custom";
  customAnimation?: (element: HTMLDivElement, gsap: any) => void;
  duration?: number;
  delay?: number;
  ease?: string;
  threshold?: number;
  once?: boolean;
  className?: string;
  id?: string;
}

export function ScrollAnimation({
  children,
  animation,
  customAnimation,
  duration = 1,
  delay = 0,
  ease = "power2.out",
  threshold = 0.2,
  once = true,
  className = "",
  id,
}: ScrollAnimationProps) {
  const { gsap, ScrollTrigger } = useGsap();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Animation presets
    const animations = {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1, duration, delay, ease },
      },
      fadeUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration, delay, ease },
      },
      fadeLeft: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration, delay, ease },
      },
      fadeRight: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration, delay, ease },
      },
      scale: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, duration, delay, ease },
      },
      custom: {
        from: {}, // Add empty objects as default values
        to: {},
      },
    };

    // Get the correct animation preset
    const selectedAnimation = animations[animation];

    // Create a GSAP context
    const ctx = gsap.context(() => {
      if (animation === "custom" && customAnimation) {
        // Execute custom animation function
        customAnimation(element, gsap);
      } else {
        // Create the animation with ScrollTrigger
        gsap.fromTo(element, selectedAnimation.from, {
          ...selectedAnimation.to,
          scrollTrigger: {
            trigger: element,
            start: `top ${(1 - threshold) * 100}%`,
            end: `bottom ${threshold * 100}%`,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
            // markers: true, // Useful for debugging
          },
        });
      }
    });

    // Cleanup function
    return () => ctx.revert();
  }, [
    gsap,
    ScrollTrigger,
    animation,
    customAnimation,
    duration,
    delay,
    ease,
    threshold,
    once,
  ]);

  return (
    <div
      ref={elementRef}
      className={className}
      id={id}
      style={{ opacity: animation !== "custom" ? 0 : 1 }} // Hide element initially for non-custom animations
    >
      {children}
    </div>
  );
}
