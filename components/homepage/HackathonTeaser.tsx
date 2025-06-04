"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HackathonTeaser() {
  // Calculate days remaining until June 4, 2025
  const calculateDaysRemaining = () => {
    const today = new Date()
    const eventDate = new Date("2025-06-04T10:00:00Z")
    const diffTime = Math.abs(eventDate.getTime() - today.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysRemaining = calculateDaysRemaining()

  return (
    <section className="py-16 bg-[#F0EBE5] hidden md:block">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-mono uppercase text-purple-600">Upcoming Event</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tighter text-black font-mono uppercase mb-4">
              Christex Foundation VibeShift Hackathon
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-mono text-gray-600">June 4-6, 2025</span>
            </div>

            <p className="text-gray-700 mb-6">
              Unleash AI, Reimagine Projects! A 3-day intensive event where participants leverage AI tools to springboard new and existing project ideas.
            </p>

            <Button asChild className="bg-black text-white hover:bg-gray-800 font-mono uppercase">
              <Link href="/hackathons">
                Learn More & Register
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-md">
                <div className="text-center mb-4">
                  <span className="text-sm font-mono uppercase text-gray-600">Countdown</span>
                  <h3 className="text-4xl font-bold text-black">{daysRemaining}</h3>
                  <span className="text-sm font-mono text-gray-600">Days Remaining</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <span className="text-sm text-black">Form your team</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <span className="text-sm text-black">Choose a challenge track</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <span className="text-sm text-black">Build your solution</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                      <span className="text-yellow-600 font-bold">4</span>
                    </div>
                    <span className="text-sm text-black">Present & win prizes</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
