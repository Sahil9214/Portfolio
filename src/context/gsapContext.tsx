"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createContext, useContext, useEffect } from "react";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Create context
const GsapContext = createContext<{
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
} | null>(null);

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Refresh ScrollTrigger when the component mounts
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  return (
    <GsapContext.Provider value={{ gsap, ScrollTrigger }}>
      {children}
    </GsapContext.Provider>
  );
}

// Hook to use GSAP in components
export const useGsap = () => {
  const context = useContext(GsapContext);
  if (!context) {
    throw new Error("useGsap must be used within a GsapProvider");
  }
  return context;
};
