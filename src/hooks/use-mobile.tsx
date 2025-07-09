"use client";
import { useEffect, useState } from "react";

export const useMobile = (breakpoint: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < breakpoint);
  }, [breakpoint]);

  return isMobile;
};
