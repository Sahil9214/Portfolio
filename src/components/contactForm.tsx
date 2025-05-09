/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import AnimatedRing from "@/components/ui/animatedRing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error: any) {
      toast.error("An error occurred. Please try again.");
      throw new Error(error);
    }
  };

  const inputVariants = {
    initial: { y: 0 },
    focus: { y: -5 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center min-h-screen mx-auto p-6">
      <Toaster />

      {/* Left side - Form */}
      <motion.div
        className="space-y-8 bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r text-green-400 a-purple-500 to-orange-500 bg-clip-text ">
            Get in Touch
          </h3>
          <p className="text-gray-400 mt-2">
            Fill out the form below to send me a message
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            className="relative"
            variants={inputVariants}
            animate={focused.name ? "focus" : "initial"}
          >
            <label
              htmlFor="name"
              className={`absolute left-0 text-sm transition-all duration-300 ${
                focused.name || formData.name
                  ? "text-blue-500 -top-3"
                  : "text-gray-400 top-3"
              }`}
            >
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              className="bg-transparent border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-blue-500 px-3 h-12 transition-all duration-300"
              autoComplete="name"
            />
          </motion.div>

          <motion.div
            className="relative"
            variants={inputVariants}
            animate={focused.email ? "focus" : "initial"}
          >
            <label
              htmlFor="email"
              className={`absolute left-0 text-sm transition-all duration-300 ${
                focused.email || formData.email
                  ? "text-blue-500 -top-3"
                  : "text-gray-400 top-3"
              }`}
            >
              Your Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              className="bg-transparent border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-blue-500 px-3 h-12 transition-all duration-300"
              autoComplete="email"
            />
          </motion.div>

          <motion.div
            className="relative"
            variants={inputVariants}
            animate={focused.message ? "focus" : "initial"}
          >
            <label
              htmlFor="message"
              className={`absolute left-0 text-sm transition-all duration-300 ${
                focused.message || formData.message
                  ? "text-blue-500 -top-3"
                  : "text-gray-400 top-3"
              }`}
            >
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
              className="bg-transparent border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-blue-500 px-3 min-h-[120px] resize-none transition-all duration-300"
            />
          </motion.div>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              disabled={!formData.email.trim() || !formData.message.trim()}
              type="submit"
              className="w-full h-14 bg-gradient-to-r bg-white hover:from-blue-700 hover:to-purple-700 text-black rounded-lg font-medium transition-all duration-300 group"
            >
              <span className="mr-2">Send Message</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Send size={18} className="inline" />
              </motion.span>
            </Button>
          </motion.div>
        </form>
      </motion.div>

      {/* Right side - Contact Us with animated ring */}
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute z-0">
          <AnimatedRing />
        </div>
        <div className="relative z-10 text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-2 relative">
              <span className="relative">
                <span className="absolute -inset-1 blur-sm text-blue-500 opacity-70">
                  Thanks for visiting
                </span>
                Thanks for visiting
              </span>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4"></div>
              <span className="relative">
                <span className="absolute -inset-1 blur-sm text-blue-500 opacity-70"></span>
                my website
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="mt-8 text-gray-300 max-w-xs mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I&apos;m always excited to connect with new people and discuss
            potential opportunities. Feel free to reach out with any questions
            or ideas you might have!
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Social icons could go here */}
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
