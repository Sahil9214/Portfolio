"use client";

import CircularText from "@/components/ui/circuluartext";
import { DESCRIPTION, NAME } from "@/utils/constant";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      className="min-h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center py-16 md:py-12"
      id="about"
    >
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 relative  z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-10 max-w-7xl  md:ml-auto md:mr-0 "
        >
          <div className="flex flex-col lg:flex-row items-start">
            <CircularText
              text="ABOUT*ME*MORE*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-200 font-anton leading-tight w-full">
              {DESCRIPTION}
            </h2>
          </div>
        </motion.div>
        {/* "This is me" with line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-neutral-500 mb-3">This is me.</p>
          <div className="h-px bg-neutral-800 w-full"></div>
        </motion.div>{" "}
        {/* About content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Name heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-neutral-200 font-medium mb-6">
              Hi, I&apos;m {NAME}.
            </h3>
          </motion.div>

          {/* Description paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-neutral-400 leading-relaxed">
              I&lsquo;m a Full Stack Web developer dedicated to turning ideas
              into creative solutions. I specialize in creating seamless and
              intuitive user experiences.
            </p>

            <p className="text-neutral-400 leading-relaxed">
              My approach focuses on creating scalable, high-performing
              solutions tailored to both user needs and business objectives. By
              prioritizing performance, accessibility, and responsiveness, I
              strive to deliver experiences that not only engage users but also
              drive tangible results.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Background particles/dots effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 7}s infinite`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
