"use client";

import { TechStackSvg } from "@/icons/techStack";
import { cn } from "@/lib/utils";
import { projects } from "@/utils/constant";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    projectRefs.current = projectRefs.current.slice(0, projects.length);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Adjust threshold for better detection
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          const id = entry.target.id.replace("project-", "");
          console.log("Setting active project:", id); // Debug log
          setActiveProject(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all project refs
    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
        console.log("Observing:", ref.id); // Debug log
      }
    });

    // Manual scroll handler as fallback
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;

          // Check if element is in viewport
          if (scrollY + windowHeight * 0.3 >= elementTop && scrollY + windowHeight * 0.7 <= elementBottom) {
            const projectId = projects[index]?.id;
            if (projectId && activeProject !== projectId) {
              console.log("Manual scroll setting active project:", projectId);
              setActiveProject(projectId);
            }
          }
        }
      });
    };

    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [activeProject]);

  // Map color names to actual Tailwind classes for safety
  const getColorClasses = (colorName: string) => {
    const colorMap: Record<
      string,
      { bg: string; text: string; border: string }
    > = {
      blue: {
        bg: "bg-blue-600/20",
        text: "text-blue-400",
        border: "border-blue-600",
      },
      green: {
        bg: "bg-emerald-600/20",
        text: "text-emerald-400",
        border: "border-emerald-600",
      },
      purple: {
        bg: "bg-purple-600/20",
        text: "text-purple-400",
        border: "border-purple-600",
      },
      pink: {
        bg: "bg-pink-600/20",
        text: "text-pink-400",
        border: "border-pink-600",
      },
      red: {
        bg: "bg-red-600/20",
        text: "text-red-400",
        border: "border-red-600",
      },
      emerald: {
        bg: "bg-emerald-600/20",
        text: "text-emerald-400",
        border: "border-emerald-600",
      },
      // Add other colors as needed
    };

    return (
      colorMap[colorName] || {
        bg: "bg-neutral-600/20",
        text: "text-neutral-400",
        border: "border-neutral-600",
      }
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative mx-auto pt-28 w-full max-w-7xl py-10 bg-neutral-950"
      aria-labelledby="work-heading"
    >
      <div className="header flex items-center gap-4 ">
        <TechStackSvg />
        <h2 className="text-xl md:text-2xl uppercase leading-none">
          My Curated Work(Projects)
        </h2>
      </div>
      <div className="relative mx-auto mt-10 flex w-full flex-col lg:flex-row">
        {/* Main scrollable content */}
        <div className="mx-auto flex max-w-2xl flex-col gap-y-6 md:gap-y-24 lg:max-w-[65%]">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={cn(
                  "project-card flex w-full flex-row transition-all duration-500",
                  activeProject === project.id
                    ? "opacity-100 scale-100"
                    : "opacity-60 scale-[0.95]"
                )}
              >
                <div className="flex flex-col lg:mx-10 lg:w-full">
                  <a
                    target="_blank"
                    draggable="false"
                    className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:pointer-events-auto lg:h-[560px] lg:rounded-3xl lg:p-2"
                    href={project.link}
                    rel="noreferrer"
                    aria-label={`View ${project.title} project`}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
                      }}
                      aria-hidden="true"
                    ></div>
                    <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                      <div
                        style={{ background: project.gradient }}
                        className="absolute inset-0 -z-1"
                        aria-hidden="true"
                      ></div>
                      <div
                        className={`hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex ${colorClasses.text}`}
                      >
                        <h3 className="max-w-[90%] text-2xl">
                          {project.description}
                        </h3>
                        <ArrowRight className="size-6" aria-hidden="true" />
                      </div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`Screenshot of ${project.title} project`}
                        width={1203}
                        height={753}
                        className="lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
                        style={{ boxShadow: project.shadow }}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </a>

                  {/* Mobile project details */}
                  <div className="mt-6 mb-24 flex flex-col px-2 lg:hidden">
                    <div className="flex items-center">
                      <h2 className="my-auto line-clamp-1 text-lg font-bold">
                        {project.title}
                      </h2>
                      <div
                        aria-hidden="true"
                        className={`ml-3 h-1 min-w-6 rounded-full ${colorClasses.border}`}
                      ></div>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {project.fullDescription}
                    </p>
                    <div className="my-4 flex max-w-fit flex-wrap items-center gap-1">
                      {project.technologies.slice(0, 10).map((tech) => (
                        <div
                          key={tech.name}
                          className={`inline rounded-sm border-white/[0.34] px-1.5 py-[3px] text-xs ${colorClasses.bg} ${colorClasses.text}`}
                        >
                          {tech.name}
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"
                          aria-label={`View source code for ${project.title} on GitHub`}
                        >
                          <Github className="size-4" aria-hidden="true" />
                          <span>Source code</span>
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink className="size-4" aria-hidden="true" />
                        <span>Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky sidebar for desktop */}
        <div className="hidden py-4 lg:sticky lg:top-0 lg:block lg:w-[35%]">
          <div className="sticky top-40">
            {projects.map((project) => {
              const colorClasses = getColorClasses(project.color);

              return (
                <div
                  key={project.id}
                  className={cn(
                    "transition-all duration-500",
                    activeProject === project.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none absolute top-0"
                  )}
                  aria-hidden={activeProject !== project.id}
                >
                  <div className="flex">
                    <div
                      aria-hidden="true"
                      className={`my-4 mr-4 h-1 min-w-6 rounded-full ${colorClasses.border}`}
                    ></div>
                    <div className="flex flex-col items-start lg:h-[500px]">
                      <div className="flex items-center gap-3">
                        <h3 className="text-foreground text-2xl font-bold">
                          {project.title}
                        </h3>
                        {project.github && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="translate-y-px cursor-pointer rounded-full p-2 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-white/20"
                            href={project.github}
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            <Github className="size-5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground my-2 text-base font-light">
                        {project.fullDescription}
                      </p>
                      <ul
                        className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base"
                        aria-label="Project features"
                      >
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`mt-1 mr-2 size-5 shrink-0 ${colorClasses.bg} ${colorClasses.text}`}
                              aria-hidden="true"
                            >
                              <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="mt-10 flex flex-wrap gap-3 text-sm"
                        aria-label="Technologies used"
                      >
                        {project.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
                          >
                            {tech.icon && (
                              <Image
                                height="16"
                                width="16"
                                alt=""
                                src={tech.icon || "/placeholder.svg"}
                                aria-hidden="true"
                              />
                            )}
                            {tech.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Link
        href="#"
        className="mt-10 toolTip flex justify-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md md:mt-16"
        aria-label="See more projects"
      >
        <span>See more projects</span>
        <div className="rounded-full bg-white/5 p-0.5 backdrop-blur-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </div>
      </Link>
    </section>
  );
}
