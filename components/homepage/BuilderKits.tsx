"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Zap, Palette, Brain } from "lucide-react"
import { motion } from "framer-motion"

const builderKits = [
  {
    title: "Launch Your MVP in 7 Days",
    outcome: "Get a fully functional minimum viable product ready for user testing",
    icon: <Zap className="h-6 w-6 text-yellow-600" />,
    time: "7 days",
    tools: ["v0.dev", "ChatGPT", "Bubble.io"],
    color: "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200",
    link: "/resources/kits/mvp-launch",
  },
  {
    title: "AI Content Creation Starter Kit",
    outcome: "Automate your content workflow with AI-powered tools and templates",
    icon: <Brain className="h-6 w-6 text-purple-600" />,
    time: "3 days",
    tools: ["ChatGPT", "DALL·E 3", "Copy.ai"],
    color: "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200",
    link: "/resources/kits/ai-content-creation",
  },
  {
    title: "Brand Identity Builder",
    outcome: "Create a complete brand identity with logo, colors, and style guide",
    icon: <Palette className="h-6 w-6 text-blue-600" />,
    time: "5 days",
    tools: ["Adobe Firefly", "Canva", "Kittl"],
    color: "bg-gradient-to-br from-blue-50 to-green-50 border-blue-200",
    link: "/resources/kits/brand-identity",
  },
]

export default function BuilderKits() {
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
            Build Smarter with Our Builder Kits
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Follow our outcome-oriented kits with step-by-step guidance to bring your projects to life.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {builderKits.map((kit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border ${kit.color} hover:shadow-md transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-white">{kit.icon}</div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-xs font-mono text-gray-500">{kit.time}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-mono uppercase tracking-tight mb-2 text-black">{kit.title}</h3>

                  <p className="text-gray-600 mb-4">{kit.outcome}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {kit.tools.map((tool, i) => (
                      <Badge key={i} variant="outline" className="bg-white text-gray-600">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-white text-black hover:bg-gray-100 border border-gray-200 font-mono uppercase"
                  >
                    <Link href={kit.link}>
                      Explore This Kit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button asChild className="bg-white text-black hover:bg-gray-100 border border-gray-200 font-mono uppercase">
            <Link href="/resources/kits">
              Discover All Builder Kits
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
