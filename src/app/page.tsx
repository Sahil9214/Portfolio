import ContactForm from "@/components/contactForm";
import About from "@/sections/about";
import Experience from "@/sections/experience";
import Footer from "@/sections/footer";
import { HeroSection } from "@/sections/herosection";
import Navbar from "@/sections/navbar";
import ProjectShowcase from "@/sections/project";
import TechStack from "@/sections/techStack";
import SEO from "@/utils/SEO";
import { PersonalSEOContent } from "@/utils/homePageSeoContent";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <SEO seo={PersonalSEOContent} />
      <Navbar />
      <HeroSection />
      <About />
      <TechStack />
      <Experience />
      <ProjectShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
}
