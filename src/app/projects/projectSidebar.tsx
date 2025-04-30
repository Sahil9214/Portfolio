"use client";

import { Project, useProjects } from "@/context/projectContext";
import { motion } from "framer-motion";

export function ProjectsSidebar({ onSelect }: { onSelect?: () => void }) {
  const { projects, selectedProject, setSelectedProject } = useProjects();

  return (
    <div className="h-full flex flex-col p-4">
      <div className="mb-8 p-4">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Projects
        </h2>
      </div>

      <nav className="flex-1 overflow-auto">
        <ul className="space-y-1">
          {projects.map((project: Project) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <button
                onClick={() => {
                  setSelectedProject(project);
                  if (onSelect) onSelect();
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  selectedProject?.id === project.id
                    ? "bg-neutral-800/70 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                }`}
              >
                <span className="block font-medium">{project.title}</span>
                {selectedProject?.id === project.id && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
