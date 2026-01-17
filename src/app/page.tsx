"use client";

import { useEffect, useRef, useState } from "react";
import { X, Mic } from "lucide-react";

import LenisWrapper from "@/components/lenisWrapper/leniswrapper";
import Navbar from "@/sections/navbar";
import { HeroSection } from "@/sections/herosection";
import About from "@/sections/about";
import TechStack from "@/sections/techStack";
import Experience from "@/sections/experience";
import ProjectShowcase from "@/sections/project";
import ContactForm from "@/components/contactForm";
import Footer from "@/sections/footer";
import { getVoiceCommands, type VoiceCommand } from "@/utils/constant";

/* -------------------- SPEECH API TYPES -------------------- */

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

/* -------------------- PAGE -------------------- */

export default function Home() {
  const recognitionRef = useRef<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript("");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      const speech = event.results[0][0].transcript;
      setTranscript(speech);
      handleSpeechCommand(speech);
    };

    return () => recognition.abort();
  }, []);

  const handleSpeechCommand = (speech: string) => {
    const text = speech.toLowerCase();
    const commands = getVoiceCommands();

    for (const command of commands) {
      if (command.keywords.some((word) => text.includes(word))) {
        command.action();
        return;
      }
    }
  };

  const toggleMic = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition not supported. Use Chrome or Edge.");
      return;
    }

    isListening
      ? recognitionRef.current.stop()
      : recognitionRef.current.start();
  };

  return (
    <div className="relative">
      <LenisWrapper>
        <Navbar />
        <HeroSection />

        <section id="about">
          <About />
        </section>

        <section id="tech">
          <TechStack />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <ProjectShowcase />
        </section>

        <section id="contact">
          <ContactForm />
        </section>

        <Footer />

        {/* MIC BUTTON */}
        <div
          onClick={toggleMic}
          className={`fixed right-4 bottom-10 z-50 cursor-pointer rounded-full p-3
          bg-white/10 backdrop-blur-md border border-white/20
          shadow-[0_0_25px_rgba(255,255,255,0.15)]
          transition-all active:scale-95
          ${
            isListening ? "animate-pulse bg-red-500/20 border-red-400/40" : ""
          }`}
        >
          <Mic
            className={`w-6 h-6 ${isListening ? "text-red-400" : "text-white"}`}
          />
        </div>

        {/* TRANSCRIPT */}
        {transcript && (
          <div
            className="fixed right-4 bottom-24  rounded-lg bg-black/80
            text-white p-3 text-sm backdrop-blur-md border border-white/20 truncate max-w-[300px] min-w-[150px]"
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold mb-1">You said:</p>
              <X
                className="w-4 h-4 text-white cursor-pointer"
                onClick={() => setTranscript("")}
              />
            </div>
            <p>{transcript}</p>
          </div>
        )}
      </LenisWrapper>
    </div>
  );
}
