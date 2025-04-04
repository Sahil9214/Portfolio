import About from "@/sections/about";
import Experience from "@/sections/experience";
import Footer from "@/sections/footer";
import { HeroSection } from "@/sections/herosection";
import ProjectShowcase from "@/sections/project";
import TechStack from "@/sections/techStack";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <HeroSection />
      <About />
      <TechStack />
      <Experience />
      <ProjectShowcase />
      <Footer />
    </div>
  );
}
