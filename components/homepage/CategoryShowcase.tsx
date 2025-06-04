"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, Users, Brain, ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  {
    icon: <Brain className="h-6 w-6 text-purple-600" />,
    name: "AI & Machine Learning",
    description: "Explore cutting-edge AI projects from chatbots to computer vision applications.",
    color: "border-purple-400 hover:border-purple-600",
    textColor: "text-purple-700 group-hover:bg-purple-100",
    link: "/ideas?categories=AI",
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    name: "Web Applications",
    description: "Discover web-based solutions for productivity, collaboration, and business needs.",
    color: "border-blue-400 hover:border-blue-600",
    textColor: "text-blue-700 group-hover:bg-blue-100",
    link: "/ideas?categories=Web%20App",
  },
  {
    icon: <ShoppingBag className="h-6 w-6 text-green-600" />,
    name: "Consumer",
    description: "Build consumer-focused applications and services that enhance daily life.",
    color: "border-green-400 hover:border-green-600",
    textColor: "text-green-700 group-hover:bg-green-100",
    link: "/ideas?categories=Consumer",
  },
  {
    icon: <Users className="h-6 w-6 text-orange-600" />,
    name: "Social",
    description: "Create social platforms and community-driven applications.",
    color: "border-orange-400 hover:border-orange-600",
    textColor: "text-orange-700 group-hover:bg-orange-100",
    link: "/ideas?categories=Social",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-black font-mono uppercase mb-4">
            Kickstart Your Journey
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our curated collection of project ideas across various categories.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.link} className="block h-full">
                <Card
                  className={`h-full bg-white border-l-4 shadow-sm hover:shadow-md transition-all duration-300 group ${category.color}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-mono uppercase tracking-tight text-gray-800 group-hover:text-gray-900 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-sm font-mono uppercase font-bold text-black group-hover:underline">
                      Explore {category.name.split(" ")[0]} Ideas
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
          <Button asChild className="bg-black text-white hover:bg-gray-800 font-mono uppercase">
            <Link href="/ideas">
              View All 25+ Ideas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
