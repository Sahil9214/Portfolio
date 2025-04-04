"use client";
import { Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
export default function Footer() {
  return (
    <div className="space-y-8">
      <div className="relative h-[400px] rounded-lg overflow-hidden bg-neutral-950">
        <InteractiveFooter />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${3 + Math.random() * 7}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function InteractiveFooter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const footer = canvas.parentElement;
      if (footer) {
        canvas.width = footer.offsetWidth;
        canvas.height = footer.offsetHeight;
      }
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle setup
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mouse interaction
        if (mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const angle = Math.atan2(dy, dx);
            particle.x -= Math.cos(angle) * 0.5;
            particle.y -= Math.sin(angle) * 0.5;
          }
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <footer
      className="absolute top-0 left-0 flex justify-center items-center text-center pb-5 overflow-hidden w-full h-full"
      id="contact"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 bg-black"
      />
      <div className="container relative z-10 py-10 flex flex-col items-center justify-center">
        <p className="text-lg text-white opacity-90 transform transition-transform duration-300 hover:scale-105">
          Have a project in mind?
        </p>

        <a
          href="mailto:utkarshsinghal369@gmail.com"
          className="group relative text-xl lg:text-3xl sm:text-4xl font-bold inline-block mt-5 mb-10 text-white"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="inline-flex items-center gap-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600">
            <Mail
              className={`w-6 h-6 transition-transform duration-300 ${
                isHovering ? "animate-bounce" : ""
              }`}
            />
            utkarshsinghal369@gmail.com
          </span>
          <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-purple-400 to-pink-600"></span>
        </a>

        <p className="text-gray-400 transition-opacity duration-300 hover:opacity-100">
          Copyright © {new Date().getFullYear()} Utkarsh
        </p>
      </div>
    </footer>
  );
}
