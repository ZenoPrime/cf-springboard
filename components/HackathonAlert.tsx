"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Clock, X, ChevronRight } from "lucide-react"

export default function HackathonAlert() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="relative z-10 mt-16"
    >
      <div className="relative overflow-hidden border-b border-indigo-100 dark:border-indigo-900">
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
          <div className="container py-3 px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                  <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    Christex AI Hackathon: DaVinci Challenge
                  </p>
                  <div className="hidden sm:block text-indigo-500 dark:text-indigo-400">���</div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 flex items-center">
                    <Clock className="inline-block mr-1 h-3 w-3" />
                    June 4-6, 2025
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8 px-3 text-indigo-700 hover:text-indigo-800 hover:bg-indigo-100 dark:text-indigo-300 dark:hover:text-indigo-200 dark:hover:bg-indigo-900/50"
                >
                  <Link href="/hackathons" className="flex items-center">
                    Register Now
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-100 dark:text-indigo-400 dark:hover:text-indigo-200 dark:hover:bg-indigo-900/50"
                  onClick={() => setIsVisible(false)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Dismiss</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
