"use client";

import { GetStartedButton } from "@/components/ui/get-started-button";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { EMAIL, NAME } from "@/utils/constant";
import { BackgroundBeams } from "../components/ui/background-beam";
import { HamburgerMenu } from "../components/ui/humberger-menu";

// Add this CSS globally or in a scoped style tag
const scrollStyles = `
  [data-scroll-container] {
    min-height: 100vh;
    overflow: hidden;
  }
  .smooth-scroll {
    will-change: transform;
  }
`;

export function HeroSection() {
  // GSAP animations for heading
  const headingRef = useGsapScrollTrigger<HTMLHeadingElement>(
    (element, gsap) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    },
    {
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    }
  );

  // GSAP animations for stats section
  const statsRef = useGsapScrollTrigger<HTMLDivElement>(
    (element, gsap) => {
      gsap.fromTo(
        element.querySelectorAll(".stat-item"),
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    },
    {
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    }
  );

  // GSAP animations for intro text
  const introRef = useGsapScrollTrigger<HTMLDivElement>(
    (element, gsap) => {
      gsap.fromTo(
        element,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    },
    {
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    }
  );

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased font-['Roboto_Flex',system-ui,sans-serif]">
      {/* Inject styles */}
      <style>{scrollStyles}</style>

      {/* Header with hamburger menu */}
      <div className=" fixed top-0 right-0 p-4 z-20">
        <HamburgerMenu />
      </div>

      <div
        className="max-w-7xl w-full mx-auto p-4 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between"
        data-scroll // Enable smooth scroll on this section
      >
        <div className="md:max-w-2xl">
          {/* Main heading with GSAP animation */}
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 hero-heading font-['Roboto_Flex','Roboto Flex Fallback','Roboto Flex F']"
          >
            <span className="text-green-400">FULL STACK</span>
            <br />
            <span className="text-neutral-200 ml-4">DEVELOPER</span>
          </h1>

          {/* Introduction text with GSAP animation */}
          <div
            ref={introRef}
            className="font-['Roboto_Flex','Roboto Flex Fallback','Roboto Flex F']"
          >
            <p className="text-neutral-400 text-lg mb-6">
              Hi! I&apos;m <span className="text-neutral-200">{NAME}</span>. A
              creative Full Stack Web Developer with 1.5+ years of experience in
              building high-performance, scalable, and responsive web solutions.
            </p>

            {/* Hire me button */}
            <GetStartedButton name="Resume Download" />
          </div>
        </div>

        {/* Stats section - desktop with GSAP animation */}
        <div
          ref={statsRef}
          className="hidden md:flex flex-col items-end gap-8 mt-8 md:mt-0 stats-section"
        >
          <div className="flex flex-col items-end stat-item">
            <span className="text-green-400 text-6xl font-bold">1.5+</span>
            <span className="text-neutral-400">Years of Experience</span>
          </div>

          <div className="flex flex-col items-end stat-item">
            <span className="text-green-400 text-6xl font-bold">7+</span>
            <span className="text-neutral-400">Completed Projects</span>
          </div>

          <div className="flex flex-col items-end stat-item">
            <span className="text-green-400 text-6xl font-bold">10K+</span>
            <span className="text-neutral-400">Hours Worked</span>
          </div>
        </div>

        {/* Stats section - mobile with GSAP animation (using same ref) */}
        <div
          className="flex md:hidden justify-between w-full mt-12 stats-section"
          aria-hidden="true"
        >
          {/* Mobile stats content (same as original) */}
          <div className="flex flex-col items-center stat-item">
            <span className="text-green-400 text-3xl font-bold">1.5+</span>
            <span className="text-neutral-400 text-xs">
              Years of Experience
            </span>
          </div>

          <div className="flex flex-col items-center stat-item">
            <span className="text-green-400 text-3xl font-bold">7+</span>
            <span className="text-neutral-400 text-xs">Completed Projects</span>
          </div>

          <div className="flex flex-col items-center stat-item">
            <span className="text-green-400 text-3xl font-bold">10K+</span>
            <span className="text-neutral-400 text-xs">Hours Worked</span>
          </div>
        </div>
      </div>
      <div className="max-xl:hidden fixed bottom-32 left-0 block z-10">
        <a
          href={`mailto:${EMAIL}`}
          className="text-neutral-500 px-3 text-muted-foreground tracking-[1px] transition-all !bg-bottom hover:text-foreground hover:!bg-center"
          style={{ textOrientation: "mixed", writingMode: "vertical-rl" }}
        >
          {EMAIL}
        </a>
      </div>

      {/* Background effect */}
      <BackgroundBeams />
    </div>
  );
}
