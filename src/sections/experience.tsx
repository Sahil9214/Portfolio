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
      title: "2025 - Present",
      content: (
        <div>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-2">
            Currently working on **high-impact, large-scale projects** that push
            the boundaries of SEO, scalability, and modern frontend architecture.
          </p>

          <ul className="list-disc list-inside text-neutral-400 text-xs md:text-lg font-anton font-normal mb-4">
            <li className="mt-1">
              <span className="text-white">GetProjects.ai</span> — Architected and built a
              fully dynamic, <span className="text-white"> SEO-friendly</span> platform with 2000+ unique pages**, rendered
              through {"  "} <span className="text-white">Next.js’s</span> dynamic routing & metadata system. Optimized for
              lightning-fast crawl & indexing by Google.
            </li>
            <li className="mt-1">
              Integrated advanced **structured data & sitemaps** to improve organic
              visibility. Entire website is **crawlable and indexable** with dynamic
              page generation and robust SEO strategies.
            </li>
            <li className="mt-1">
              Contributed to **Engineerbabu.com** website improvements, focusing on
              UX/UI performance, modular architecture, and clean componentization.
            </li>
            <li className="mt-1">
              Built a <span className="text-white">Simba Beer Brand Internal Dashboard</span> leveraging
              <span className="text-white"> Supabase</span>, <span className="text-white">Next.js API routes</span>,
              <span className="text-white"> AWS Textract</span> for OCR, and
              <span className="text-white"> shadcn/ui</span> for a sleek admin interface.
            </li>
            <li className="mt-1">
              Implemented **user authentication, data management, and secure file
              handling** using Supabase. Scalable, role-based access system built
              with server components and modern React patterns.
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <a
              href="https://getprojects.ai"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/getprojects.png"
                alt="GetProjects.ai Website"
                width={500}
                height={500}
                className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
            <a
              href="https://engineerbabu.com"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/engineerbabu.webp"
                alt="Engineerbabu Website"
                width={500}
                height={500}
                className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - 2025",
      content: (
        <div>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal">
            Developed and launched multiple products at{" "}
            <span className="text-white">NeuralHQ</span>, including:
          </p>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal">
            Role: <span className="text-white">Full Stack Developer</span>
          </p>
          <ul className="list-disc list-inside text-neutral-400 text-xs md:text-lg font-anton font-normal">
            <li className="mt-1">
              Designed and built the company&apos;s website
            </li>
            <li className="mt-1">
              Developed an AI-powered customer support platform
            </li>
            <li className="mt-1">
              Created AI-powered catalogue builder
            </li>
            <li className="mt-1">
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
                alt="Masai School"
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
                alt="GitHub Projects"
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
