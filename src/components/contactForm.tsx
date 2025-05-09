"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AnimatedRing from "./ui/animatedRing";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Application Submitted Successfully.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed To send application.");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center min-h-screen mx-auto">
      {/* Left side - Form */}
      <Toaster />
      <div className="space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="border-b border-gray-700">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-12 placeholder:text-white"
              />
            </div>

            <div className="border-b border-gray-700">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-none  px-0 h-12 placeholder:text-white"
              />
            </div>

            <div className="border-b border-gray-700">
              <Textarea
                name="message"
                placeholder="Write message here"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-none  px-0 min-h-[80px] resize-none placeholder:text-white"
              />
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full h-14 bg-transparent text-white border-2 relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Contact Me </span>
              <motion.span
                className="absolute inset-0 border-2 border-transparent"
                style={{
                  background: "transparent",
                  borderImage:
                    "linear-gradient(to right, #3b82f6, #8b5cf6, #f97316) 1",
                  borderImageSlice: 1,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </Button>
          </motion.div>
        </form>
      </div>

      {/* Right side - Contact Us with animated ring */}
      <div className="relative flex justify-center items-center">
        <div className="absolute z-0">
          <AnimatedRing />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-2 relative">
            <span className="relative">
              <span className="absolute -inset-1 blur-sm text-blue-500 opacity-70">
                Thanks for visiting
              </span>
              Thanks for visting
            </span>
            <div className="h-1 w-24 bg-blue-500 mx-auto my-2"></div>
            <span className="relative">
              <span className="absolute -inset-1 blur-sm text-blue-500 opacity-70"></span>
              my website
            </span>
          </h2>
          <p className="mt-6 text-sm text-white max-w-xs">
            It is very important for us to keep in touch with you so we are
            always ready to answer any question that interests you. Shoot!
          </p>
        </div>
      </div>
    </div>
  );
}
