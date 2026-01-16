import ContactForm from "@/components/contactForm";
import LenisWrapper from "@/components/lenisWrapper/leniswrapper";
import About from "@/sections/about";
import Experience from "@/sections/experience";
import Footer from "@/sections/footer";
import { HeroSection } from "@/sections/herosection";
import Navbar from "@/sections/navbar";
import ProjectShowcase from "@/sections/project";
import TechStack from "@/sections/techStack";

export default function Home() {
  return (
    <LenisWrapper>
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
