/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SmoothBlobRing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const size = Math.min(500, window.innerWidth * 0.9);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const pointCount = 36;
    const baseRadius = canvas.width * 0.3;
    const points: any[] = [];
    const center = { x: canvas.width / 2, y: canvas.height / 2 };

    for (let i = 0; i < pointCount; i++) {
      const angle = (Math.PI * 2 * i) / pointCount;
      points.push({
        angle,
        radius: baseRadius + Math.random() * 20 - 10,
        phase: Math.random() * Math.PI * 2,
        amplitude: 8 + Math.random() * 4,
        speed: 0.01 + Math.random() * 0.01,
      });
    }

    const getPoint = (angle: number, radius: number) => ({
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const coords = points.map((p) => {
        p.phase += p.speed;
        const r = p.radius + Math.sin(p.phase) * p.amplitude;
        return getPoint(p.angle, r);
      });

      ctx.beginPath();
      for (let i = 0; i < coords.length; i++) {
        const p1 = coords[i];
        const p2 = coords[(i + 1) % coords.length];
        const cp = {
          x: (p1.x + p2.x) / 2,
          y: (p1.y + p2.y) / 2,
        };

        if (i === 0) ctx.moveTo(cp.x, cp.y);
        else ctx.quadraticCurveTo(p1.x, p1.y, cp.x, cp.y);
      }

      ctx.closePath();
      ctx.strokeStyle = "#ffff";
      ctx.lineWidth = 1;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <motion.div
      className="absolute w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1]"
      />
    </motion.div>
  );
}
