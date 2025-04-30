"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type Project, useProjects } from "@/context/projectContext";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProjectDetail({ project }: { project: Project }) {
  const { setSelectedProject } = useProjects();
  const [isExpanded, setIsExpanded] = useState(false);
  console.log("*** project ***", project);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
      }}
      className="relative"
    >
      <Card
        className={`w-full overflow-hidden transition-all duration-500 ${
          isExpanded ? "h-auto" : "h-auto md:min-h-[600px]"
        }`}
        style={{
          background: project.gradient,
          boxShadow: `0 10px 30px -5px ${project.shadowColor}`,
        }}
      >
        <CardContent className="p-0 h-full">
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <TooltipProvider>
              {project?.links?.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-neutral-900/50 backdrop-blur-md hover:bg-neutral-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links.github, "_blank");
                      }}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>GitHub Repository</TooltipContent>
                </Tooltip>
              )}

              {project?.links?.live && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-neutral-900/50 backdrop-blur-md hover:bg-neutral-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links.live, "_blank");
                      }}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Live Project</TooltipContent>
                </Tooltip>
              )}

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full bg-neutral-900/50 backdrop-blur-md hover:bg-neutral-800"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Close</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative h-[300px] md:h-[400px] lg:h-full overflow-hidden order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="p-8 flex flex-col order-2 lg:order-1 max-h-[500px] md:max-h-[600px] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {project.title}
                </h1>
                <p className="text-lg opacity-80 mb-6">{project.tagline}</p>

                <div className="mb-6">
                  <p className="text-sm md:text-base opacity-90 leading-relaxed">
                    {isExpanded
                      ? project.fullDescription
                      : project.shortDescription}
                  </p>
                  {project.fullDescription !== project.shortDescription && (
                    <Button
                      variant="link"
                      className="px-0 text-blue-400 hover:text-blue-300"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </Button>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3"></span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="px-3 py-1 rounded-full text-sm bg-neutral-800/50 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
