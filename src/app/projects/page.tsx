"use client";

import { ProjectsProvider } from "@/context/projectContext";
import Footer from "@/sections/footer";
import { projectsData } from "@/utils/projectConstant";
import ProjectsLayout from "./pojectLayout";

export default function Projects() {
  return (
    <div>
      <ProjectsProvider initialProjects={projectsData}>
        <ProjectsLayout />
        <Footer />
      </ProjectsProvider>
    </div>
  );
}
