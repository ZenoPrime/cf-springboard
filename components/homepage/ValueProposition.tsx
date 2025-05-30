"use client"

import { Lightbulb, Compass, Users } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-green-600" />,
    title: "Discover Vetted Ideas",
    description: "Browse our curated collection of 200+ project ideas with detailed PRDs and implementation guides.",
  },
  {
    icon: <Compass className="h-8 w-8 text-blue-600" />,
    title: "Step-by-Step Builder Kits",
    description: "Follow our outcome-oriented kits with proven workflows to bring your projects to life efficiently.",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: "Join Our Community",
    description: "Connect with fellow builders, participate in hackathons, and showcase your innovations.",
  },
]

export default function ValueProposition() {
  return (
    <section className="py-16 bg-[#F9F5F0]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-black font-mono uppercase mb-4">
            Your Innovation Launchpad
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Springboard bridges the gap between inspiration and implementation with everything you need to build
            successful projects.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-mono uppercase tracking-tight mb-2 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
