import ContactForm from "@/components/contactForm";
import About from "@/sections/about";
import Experience from "@/sections/experience";
import { HeroSection } from "@/sections/herosection";
import ProjectShowcase from "@/sections/project";
import TechStack from "@/sections/techStack";
import SEO from "@/utils/SEO";
import { PersonalSEOContent } from "@/utils/homePageSeoContent";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <SEO seo={PersonalSEOContent} />
      <HeroSection />
      <About />
      <TechStack />
      <Experience />
      <ProjectShowcase />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}
