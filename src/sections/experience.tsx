"use client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      className=" w-full bg-neutral-950 relative flex flex-col items-center justify-center "
      id="experience"
    >
      <TimelineDemo />
    </section>
  );
};

export default Experience;

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - 2025",
      content: (
        <div>
          <p className="text-neutral-400  text-lg md:text-lg font-anton font-normal">
            Developed and launched multiple products at{" "}
            <span className="text-white">NeuralHQ</span>, including:
          </p>
          <p className="text-neutral-400  text-lg md:text-lg font-anton font-normal">
            Role: <span className="text-white">Full Stack Developer</span>
          </p>
          <ul className="list-disc list-inside text-neutral-400 dark:text-neutral-200 text-xs md:text-lg font-anton font-normal">
            <li className="text-neutral-400 leading-relaxed mt-1 font-anton">
              Designed and built the company&apos;s website
            </li>
            <li className="text-neutral-400 leading-relaxed mt-1 font-anton">
              Developed an AI-powered customer support platform
            </li>
            <li className="text-neutral-400 leading-relaxed mt-1 font-anton">
              Created AI-powered catalogue builder
            </li>
            <li className="text-neutral-400 leading-relaxed mt-1 font-anton">
              Built mobile applications for KDMS, Karnataka Government
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <a
              href="https://www.neuralhq.ai"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/neuralhq.png"
                alt="NeuralHQ Website"
                width={500}
                height={500}
                className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
            <a
              href="https://www.neuralhq.ai/company"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/secondNeuralhq.png"
                alt="NeuralHQ Mobile App"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-8">
            Joined Masai School’s Full Stack Web Development program, where I
            honed my skills in the MERN (MongoDB, Express, React, Node.js)
            stack.
          </p>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-8">
            Gained hands-on experience in building scalable web applications,
            RESTful APIs, and interactive UIs. Strengthened problem-solving
            abilities through data structures and algorithms.
          </p>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-8">
            Here are some examples of the projects and UI components I built
            during my learning journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.masaischool.com"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/masaiSchool.png"
                alt="Hero Section Design"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
            <a
              href="https://github.com/sahil9214"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/github.png"
                alt="Feature Section Design"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="experience">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
