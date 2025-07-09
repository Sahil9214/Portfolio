import ContactForm from "@/components/contactForm";
import LenisWrapper from "@/components/lenisWrapper/leniswrapper";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
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
    <LenisWrapper >
      <SEO seo={PersonalSEOContent} />
      <SmoothCursor />
      <Navbar />
      <HeroSection />
      <About />
      <TechStack />
      <Experience />
      <ProjectShowcase />
      <ContactForm />
      <Footer />
    </LenisWrapper>
  );
}
