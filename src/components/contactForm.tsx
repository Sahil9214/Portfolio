"use client"

import type React from "react"
import { useStore } from "@/lib/zustand/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { useForm, SubmitHandler } from "react-hook-form"
import { contactFormStore } from "@/lib/types"


export default function ContactForm() {
  const { postContactForm } = useStore();
  const {
    register,
    handleSubmit,


  } = useForm<contactFormStore>()
  const [isSubmitting, setIsSubmitting] = useState(false)


  const onSubmit: SubmitHandler<contactFormStore> = (data: contactFormStore) => {
    setIsSubmitting(true)
    postContactForm(data)
    setIsSubmitting(false)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center mx-auto p-6 py-16">
      <Toaster />
      {/* Left side - Form */}
      <motion.div
        className="space-y-8 bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="text-gray-400 mt-2">Fill out the form below to send me a message</p>
        </div>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
              Enter your Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              {...register("name")}
              required
              className="bg-gray-900/50 border-gray-700 text-gray-200 placeholder:text-gray-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
              Enter your Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              {...register("email")}
              required
              className="bg-gray-900/50 border-gray-700 text-gray-200 placeholder:text-gray-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
              Enter your Message
            </label>
            <Textarea
              id="message"
              placeholder="Your Message"
              {...register("message")}
              required

              className="bg-gray-900/50 border-gray-700 text-gray-200 placeholder:text-gray-500 focus:border-purple-500"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </motion.div>
      {/* Right side - Contact Us with animated ring */}
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative z-10 text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="md:text-5xl text-3xl font-bold mb-2 relative text-white">
              <span className="relative">
                <span className="absolute -inset-1 blur-sm bg-gradient-to-r from-purple-500 to-orange-500 opacity-70 text-transparent bg-clip-text">
                  Thanks for visiting
                </span>
                Thanks for visiting
              </span>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto my-4"></div>
              <span className="relative">
                <span className="absolute -inset-1 blur-sm bg-gradient-to-r from-purple-500 to-orange-500 opacity-70 text-transparent bg-clip-text"></span>
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
            I&apos;m always excited to connect with new people and discuss potential opportunities. Feel free to reach
            out with any questions or ideas you might have!
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
