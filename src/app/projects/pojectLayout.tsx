"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useProjects } from "@/context/projectContext";
import { useMobile } from "@/hooks/use-mobile";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ProjectDetail } from "./projectDetail";
import { ProjectsSidebar } from "./projectSidebar";

export default function ProjectsLayout() {
  const { selectedProject } = useProjects();
  const isMobile = useMobile(1200);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-950 text-white ">
      {isMobile ? (
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-50 bg-neutral-900/50 backdrop-blur-md"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 border-r border-neutral-800 bg-neutral-900/90 backdrop-blur-xl"
          >
            <ProjectsSidebar onSelect={() => setSidebarOpen(false)} />
          </SheetContent>
        </Sheet>
      ) : (
        <div className="w-64 border-r border-neutral-800 bg-neutral-950 backdrop-blur-md">
          <ProjectsSidebar />
        </div>
      )}

      <main className="flex-1 p-6 md:p-10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(35,35,45,0.5),transparent_70%)]"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {!selectedProject ? (
            <div className="flex flex-col items-center justify-center h-[80vh] text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-500 mb-6">
                Nebula Projects
              </h1>
              <p className="text-neutral-400 max-w-md">
                Select a project from the sidebar to view its details. Each
                project features a unique design and interactive elements.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <ProjectDetail
                key={selectedProject.id}
                project={selectedProject}
              />
            </AnimatePresence>
          )}
        </div>
      </main>
    </div>
  );
}
