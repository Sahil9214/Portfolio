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
  const [error, setError] = useState("");

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
      setError("");
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
    const text = speech.toLowerCase().trim();
    const commands = getVoiceCommands();
    let matched = false;

    // Improved matching: check for exact matches first, then partial matches
    for (const command of commands) {
      // Check for exact keyword match
      const exactMatch = command.keywords.some((keyword) => {
        const lowerKeyword = keyword.toLowerCase().trim();
        return text === lowerKeyword || text.includes(lowerKeyword);
      });

      // Also check if any keyword is contained in the text (for phrases)
      const partialMatch = command.keywords.some((keyword) => {
        const lowerKeyword = keyword.toLowerCase().trim();
        // For single words, check if they match or are very similar
        if (lowerKeyword.split(" ").length === 1) {
          return (
            text === lowerKeyword ||
            text.includes(lowerKeyword) ||
            lowerKeyword.includes(text) ||
            // Fuzzy matching for common mispronunciations
            (text.length > 2 &&
              lowerKeyword.length > 2 &&
              (text.startsWith(lowerKeyword.substring(0, 3)) ||
                lowerKeyword.startsWith(text.substring(0, 3))))
          );
        }
        // For phrases, check if keyword is in text
        return text.includes(lowerKeyword);
      });

      if (exactMatch || partialMatch) {
        command.action();
        matched = true;
        setError("");
        return;
      }
    }

    // If no command matched, show error
    if (!matched) {
      setError(`Command not recognized: "${speech}"`);
      // Auto-hide error after 3 seconds
      setTimeout(() => setError(""), 3000);
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
            className="fixed right-4 bottom-24 rounded-lg bg-black/80
            text-white p-3 text-sm backdrop-blur-md border border-white/20 max-w-[300px] min-w-[150px]"
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold mb-1">You said:</p>
              <X
                className="w-4 h-4 text-white cursor-pointer"
                onClick={() => {
                  setTranscript("");
                  setError("");
                }}
              />
            </div>
            <p className="break-words">{transcript}</p>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <div
            className="fixed right-4 bottom-24 rounded-lg bg-red-500/90
            text-white p-3 text-sm backdrop-blur-md border border-red-400/40 max-w-[300px] min-w-[150px] shadow-lg animate-in fade-in slide-in-from-bottom-2"
            style={{
              marginBottom: transcript ? "80px" : "0px",
            }}
          >
            <div className="flex justify-between items-center mb-1">
              <p className="font-semibold text-red-100">⚠️ Command not found</p>
              <X
                className="w-4 h-4 text-white cursor-pointer"
                onClick={() => setError("")}
              />
            </div>
            <p className="break-words text-red-50">{error}</p>
          </div>
        )}
      </LenisWrapper>
    </div>
  );
}
