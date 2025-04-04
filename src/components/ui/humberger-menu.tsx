"use client";

import { useMobile } from "@/hooks/use-mobile";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Sidebar animation variants with explicit width
  const sidebarVariants = {
    initial: {
      x: "100%",
      opacity: 0,
      width: "500px", // Explicit width in initial state
    },
    animate: {
      x: 0,
      opacity: 1,
      width: "350px", // Explicit width in animate state
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.8,
        duration: 0.7,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      width: isMobile ? "100vw" : "90vw", // Explicit width in exit state
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };
  // Menu items animation (stagger effect)
  const menuItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none cursor-pointer"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-center items-center w-6 h-6">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-neutral-200 mb-1.5"
          ></motion.span>
          <motion.span
            animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-neutral-200"
          ></motion.span>
        </div>
      </button>
      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed  top-0 right-0 bottom-0   bg-neutral-900 z-40 flex flex-col overflow-hidden rounded-tl-lg rounded-bl-lg"
          >
            <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto py-10 ">
              <div className="flex gap-10 lg:justify-between max-lg:flex-col">
                {/* Social Section */}
                <div className="max-lg:order-2">
                  <p className="text-neutral-400 mb-5">SOCIAL</p>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://github.com/Sahil9214"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg capitalize hover:underline text-neutral-100"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/utkarsh-singhal-3171b7182/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg capitalize hover:underline text-neutral-100"
                      >
                        LinkedIn
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://leetcode.com/u/Sahil9214/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg capitalize hover:underline text-neutral-100"
                      >
                        Leetcode
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Menu Section */}
                <div>
                  <p className="text-neutral-400 mb-5">MENU</p>
                  <motion.ul
                    className="space-y-3"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      animate: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.li variants={menuItemVariants}>
                      <a
                        href="#"
                        className="group text-xl flex items-center gap-3 text-neutral-100"
                      >
                        <span className="size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all bg-yellow-500 text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-up-right scale-0 group-hover:scale-100 transition-all"
                          >
                            <path d="M13 5H19V11"></path>
                            <path d="M19 5L5 19"></path>
                          </svg>
                        </span>
                        Home
                      </a>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <a
                        href="#about"
                        className="group text-xl flex items-center gap-3 text-neutral-100"
                      >
                        <span className="size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all bg-blue-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-up-right scale-0 group-hover:scale-100 transition-all"
                          >
                            <path d="M13 5H19V11"></path>
                            <path d="M19 5L5 19"></path>
                          </svg>
                        </span>
                        About
                      </a>
                    </motion.li>{" "}
                    <motion.li variants={menuItemVariants}>
                      <a
                        href="#skills"
                        className="group text-xl flex items-center gap-3 text-neutral-100"
                      >
                        <span className="size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all bg-indigo-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-up-right scale-0 group-hover:scale-100 transition-all"
                          >
                            <path d="M13 5H19V11"></path>
                            <path d="M19 5L5 19"></path>
                          </svg>
                        </span>
                        Skills
                      </a>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <a
                        href="#experience"
                        className="group text-xl flex items-center gap-3 text-neutral-100"
                      >
                        <span className="size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all bg-indigo-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-up-right scale-0 group-hover:scale-100 transition-all"
                          >
                            <path d="M13 5H19V11"></path>
                            <path d="M19 5L5 19"></path>
                          </svg>
                        </span>
                        Experience
                      </a>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <a
                        href="#projects"
                        className="group text-xl flex items-center gap-3 text-neutral-100"
                      >
                        <span className="size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all bg-teal-500 text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-up-right scale-0 group-hover:scale-100 transition-all"
                          >
                            <path d="M13 5H19V11"></path>
                            <path d="M19 5L5 19"></path>
                          </svg>
                        </span>
                        Projects
                      </a>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <a
                        href="#contact"
                        className="group text-xl flex items-center gap-3 text-neutral-100"
                      >
                        <span className="size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all bg-purple-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-up-right scale-0 group-hover:scale-100 transition-all"
                          >
                            <path d="M13 5H19V11"></path>
                            <path d="M19 5L5 19"></path>
                          </svg>
                        </span>
                        Contact
                      </a>
                    </motion.li>
                  </motion.ul>
                </div>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="w-full max-w-[300px] mx-8 sm:mx-auto pb-10">
              <p className="text-neutral-400 mb-4">GET IN TOUCH</p>
              <a
                href="mailto:utkarshsinghal369@gmail.com"
                className="text-neutral-100 hover:text-green-400 transition-colors"
              >
                utkarshsinghal369@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
