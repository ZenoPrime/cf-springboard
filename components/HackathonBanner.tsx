"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Clock, X } from "lucide-react"

export default function HackathonBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      <div className="container relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white/80">Upcoming Event</p>
              <h3 className="font-bold text-lg md:text-xl">Christex AI Hackathon: DaVinci Challenge</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/80" />
              <span className="text-sm font-mono">June 4-6, 2025</span>
            </div>

            <Button asChild className="bg-white text-indigo-700 hover:bg-white/90 rounded-full px-4 py-2 text-sm">
              <Link href="/hackathons">Register Now</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 rounded-full"
              onClick={() => setIsVisible(false)}
            >
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-3 h-3 bg-white/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-2/3 left-3/4 w-2 h-2 bg-white/30 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
