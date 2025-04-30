"use client";

import type React from "react";

import { createContext, useContext, useState } from "react";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  links: {
    github?: string;
    live?: string;
  };
  features: string[];
  techStack: string[];
  gradient: string;
  shadowColor: string;
};

type ProjectsContextType = {
  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined
);

export function ProjectsProvider({
  children,
  initialProjects,
}: {
  children: React.ReactNode;
  initialProjects: Project[];
}) {
  const [projects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
}
