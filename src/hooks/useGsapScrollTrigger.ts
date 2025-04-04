/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGsap } from "@/context/gsapContext";
import { useEffect, useRef } from "react";

interface ScrollTriggerOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleClass?: string;
  toggleActions?: string;
  pin?: boolean | string | Element;
  once?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  [key: string]: any;
}

export const useGsapScrollTrigger = <T extends HTMLElement>(
  animation: (element: T, gsap: any) => void,
  options: ScrollTriggerOptions = {},
  dependencies: any[] = []
) => {
  const { gsap, ScrollTrigger } = useGsap();
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Create a GSAP context for this component
    const ctx = gsap.context(() => {
      // Execute the animation function
      animation(element, gsap);

      // Create ScrollTrigger with the provided options
      ScrollTrigger.create({
        trigger: options.trigger || element,
        start: options.start || "top bottom",
        end: options.end || "bottom top",
        scrub: options.scrub !== undefined ? options.scrub : false,
        markers: options.markers || false,
        toggleClass: options.toggleClass,
        toggleActions: options.toggleActions || "play none none none",
        pin: options.pin || false,
        anticipatePin: options.anticipatePin || 0 || false,
        onEnter: options.onEnter,
        onLeave: options.onLeave,
        onEnterBack: options.onEnterBack,
        onLeaveBack: options.onLeaveBack,
        ...options,
      });
    });

    // Clean up
    return () => {
      ctx.revert();
    };
  }, [
    gsap,
    ScrollTrigger,
    animation,
    ...dependencies,
    ...Object.values(options),
  ]);

  return elementRef;
};
