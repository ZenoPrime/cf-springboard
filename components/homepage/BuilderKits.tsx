"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

const builderKits = [
  {
    title: "Complete Branding Kit",
    outcome: "Professional brand package ready for deployment",
    icon: "🎨",
    time: "6-8 hours",
    tools: ["ChatGPT", "Perplexity AI", "Ideogram AI"],
    color: "from-pink-500 to-rose-600",
    link: "/builder-kits/complete-branding-kit"
  },
  {
    title: "AI Research & Validation Kit",
    outcome: "Comprehensive market research and validated project direction",
    icon: "🔍",
    time: "2-3 hours",
    tools: ["Perplexity AI", "ChatGPT"],
    color: "from-blue-500 to-purple-600",
    link: "/builder-kits/ai-research-validation"
  },
  {
    title: "AI-Powered Design System Kit",
    outcome: "Complete design system with components and visual guidelines",
    icon: "🎯",
    time: "3-4 hours",
    tools: ["Khroma", "ChatGPT"],
    color: "from-green-500 to-emerald-600",
    link: "/builder-kits/ai-powered-design-system"
  }
]

export default function BuilderKits() {
  return (
    <section className="py-20 bg-[#F9F5F0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-black mb-4">
            BUILD SMARTER WITH OUR BUILDER KITS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our outcome-oriented kits with step-by-step guidance to bring your projects to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {builderKits.map((kit, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{kit.icon}</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{kit.time}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">{kit.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{kit.outcome}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {kit.tools.map((tool, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {tool}
                  </span>
                ))}
              </div>

              <Button asChild className="w-full bg-gray-900 text-white hover:bg-gray-800">
                <Link href={kit.link}>
                  EXPLORE THIS KIT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            <Link href="/builder-kits">
              DISCOVER ALL BUILDER KITS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
