"use client"

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const LenisWrapper = ({ children }: { children: React.ReactNode }) => {


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {


        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        const rafCallback = (time: number) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        };
        gsap.ticker.add(rafCallback);

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);

        // Cleanup function
        return () => {
            lenis.destroy();
            gsap.ticker.remove(rafCallback);

        };
    }, []); // Empty dependency array to run only once

    return (
        <div className="bg-neutral-950 lenis-wrapper hide-scrollbar smooth-cursor-active">
            <div className="lenis-content">
                {/* {showCursor && <SmoothCursor />} */}
                {children}
            </div>
        </div>
    );
};

export default LenisWrapper;