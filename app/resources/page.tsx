"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  Palette,
  Rocket,
  PenTool,
  Sparkles,
  Search,
  MessageSquare,
  ImageIcon,
  Video,
  Code2,
  Mic,
} from "lucide-react"

export default function ResourcesPage() {
  const [selectedOutcome, setSelectedOutcome] = useState("all")

  // Featured Builder Kits data
  const builderKits = [
    {
      id: "complete-branding-kit",
      title: "Complete Branding Kit",
      description: "Build a professional brand identity from strategy to visual assets in one weekend.",
      outcome: "Professional brand package ready for launch",
      difficulty: "Beginner",
      duration: "4-6 hours",
      sections: 3,
      tools: 5,
      prompts: 12,
      category: "branding",
      icon: <Palette className="h-8 w-8" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      deliverables: [
        "Brand strategy document",
        "Logo and visual assets",
        "Brand voice guidelines",
        "Social media templates",
      ],
      tags: ["branding", "design", "strategy"],
      featured: true,
    },
    {
      id: "no-code-mvp-launch",
      title: "No-Code MVP Launch",
      description: "Launch a functional product in 7 days using no-code tools and AI assistance.",
      outcome: "Market-ready MVP with user feedback system",
      difficulty: "Intermediate",
      duration: "7 days",
      sections: 4,
      tools: 6,
      prompts: 20,
      category: "mvp",
      icon: <Rocket className="h-8 w-8" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      deliverables: [
        "Market-validated product concept",
        "Functional web application",
        "User feedback system",
        "Launch strategy plan",
      ],
      tags: ["no-code", "mvp", "product"],
      featured: true,
    },
    {
      id: "ai-content-workflow",
      title: "AI Content Workflow",
      description: "Scale your content creation with AI tools and automated workflows.",
      outcome: "30-day content system with automation",
      difficulty: "Beginner",
      duration: "3-4 hours",
      sections: 3,
      tools: 4,
      prompts: 15,
      category: "content",
      icon: <Sparkles className="h-8 w-8" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      deliverables: [
        "30-day content calendar",
        "Automated content pipeline",
        "Brand-consistent templates",
        "Performance tracking system",
      ],
      tags: ["content", "automation", "social-media"],
      featured: true,
    },
    {
      id: "business-automation-suite",
      title: "Business Automation Suite",
      description: "Automate repetitive business workflows using AI and no-code tools.",
      outcome: "Automated business processes saving 10+ hours/week",
      difficulty: "Intermediate",
      duration: "5-6 hours",
      sections: 4,
      tools: 7,
      prompts: 18,
      category: "automation",
      icon: <Zap className="h-8 w-8" />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      deliverables: [
        "Customer service automation",
        "Lead qualification system",
        "Content distribution pipeline",
        "Analytics dashboard",
      ],
      tags: ["automation", "business", "workflows"],
      featured: false,
    },
    {
      id: "personal-brand-system",
      title: "Personal Brand System",
      description: "Build a compelling personal brand across all digital platforms.",
      outcome: "Complete personal brand presence",
      difficulty: "Beginner",
      duration: "4-5 hours",
      sections: 3,
      tools: 5,
      prompts: 14,
      category: "branding",
      icon: <PenTool className="h-8 w-8" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      deliverables: ["Personal brand strategy", "Professional headshots", "LinkedIn optimization", "Content templates"],
      tags: ["personal-brand", "linkedin", "networking"],
      featured: false,
    },
    {
      id: "video-marketing-system",
      title: "Video Marketing System",
      description: "Create professional video content for marketing and education.",
      outcome: "Complete video marketing workflow",
      difficulty: "Intermediate",
      duration: "6-8 hours",
      sections: 4,
      tools: 6,
      prompts: 16,
      category: "content",
      icon: <Video className="h-8 w-8" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      deliverables: ["Video content strategy", "Production templates", "Editing workflows", "Distribution system"],
      tags: ["video", "marketing", "content"],
      featured: false,
    },
  ]

  // Outcome categories for filtering
  const outcomeCategories = [
    { id: "all", label: "All Outcomes", icon: <Target className="h-5 w-5" /> },
    { id: "branding", label: "Build Your Brand", icon: <Palette className="h-5 w-5" /> },
    { id: "mvp", label: "Launch an MVP", icon: <Rocket className="h-5 w-5" /> },
    { id: "content", label: "Create Content", icon: <PenTool className="h-5 w-5" /> },
    { id: "automation", label: "Automate Workflows", icon: <Zap className="h-5 w-5" /> },
  ]

  // Filter kits based on selected outcome - check both category and tags
  const filteredKits =
    selectedOutcome === "all"
      ? builderKits
      : builderKits.filter(
          (kit) =>
            kit.category === selectedOutcome ||
            kit.tags.some((tag) => tag.toLowerCase().includes(selectedOutcome.toLowerCase())),
        )

  const featuredKits = filteredKits.filter((kit) => kit.featured)
  const allKits = filteredKits

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="flex flex-col gap-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black font-mono uppercase">
              Build Real Solutions,
              <br />
              Not Just Skills
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono leading-relaxed">
              Complete workflows that take you from idea to finished deliverable. Choose your outcome, follow the steps,
              ship your project.
            </p>
          </div>

          {/* Outcome Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {outcomeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedOutcome(category.id)}
                className={`group flex items-center gap-3 px-6 py-4 bg-white border-2 rounded-xl transition-all duration-300 ${
                  selectedOutcome === category.id
                    ? "border-black shadow-lg"
                    : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    selectedOutcome === category.id
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                  }`}
                >
                  {category.icon}
                </div>
                <span
                  className={`font-mono uppercase text-sm font-semibold tracking-wide transition-colors ${
                    selectedOutcome === category.id ? "text-black" : "text-gray-600 group-hover:text-black"
                  }`}
                >
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Builder Kits */}
        {selectedOutcome === "all" && (
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-black font-mono uppercase tracking-tight">
                Featured Builder Kits
              </h2>
              <p className="text-gray-600 font-mono text-lg">
                Start with these proven workflows to achieve specific outcomes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredKits.map((kit) => (
                <Card
                  key={kit.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-black bg-white relative overflow-hidden"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-16 h-16 ${kit.iconBg} rounded-xl flex items-center justify-center ${kit.iconColor}`}
                      >
                        {kit.icon}
                      </div>
                      <Badge className={`font-mono text-xs ${getDifficultyColor(kit.difficulty)}`}>
                        {kit.difficulty}
                      </Badge>
                    </div>

                    <div>
                      <CardTitle className="text-xl font-mono uppercase tracking-tight text-black group-hover:text-black transition-colors mb-2">
                        {kit.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">{kit.description}</CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Outcome Preview */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-mono uppercase text-sm font-semibold text-black mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        You'll Create:
                      </h4>
                      <ul className="space-y-2">
                        {kit.deliverables.slice(0, 3).map((deliverable, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                        {kit.deliverables.length > 3 && (
                          <li className="text-sm text-gray-500 ml-6">
                            +{kit.deliverables.length - 3} more deliverables
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Kit Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-mono">{kit.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Zap className="h-4 w-4" />
                          <span className="font-mono">{kit.tools} tools</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 font-mono text-xs">
                        {kit.prompts} prompts
                      </Badge>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full bg-black text-white hover:bg-black/90 group-hover:scale-105 transition-transform font-mono"
                    >
                      <Link href={`/resources/kits/${kit.id}`}>
                        Start Building
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Builder Kits (when filtered or showing all) */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-black font-mono uppercase tracking-tight">
                {selectedOutcome === "all"
                  ? "All Builder Kits"
                  : `${outcomeCategories.find((c) => c.id === selectedOutcome)?.label} Kits`}
              </h2>
              <p className="text-gray-600 font-mono mt-2">
                {allKits.length} {allKits.length === 1 ? "kit" : "kits"} available
              </p>
            </div>

            <Button variant="outline" asChild className="border-gray-300 font-mono">
              <Link href="/resources/kits">
                View All Kits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allKits.map((kit) => (
              <Card
                key={kit.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-black bg-white"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div
                      className={`w-12 h-12 ${kit.iconBg} rounded-lg flex items-center justify-center ${kit.iconColor}`}
                    >
                      {kit.icon}
                    </div>
                    <Badge className={`font-mono text-xs ${getDifficultyColor(kit.difficulty)}`}>
                      {kit.difficulty}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg font-mono uppercase tracking-tight text-black group-hover:text-black transition-colors">
                    {kit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{kit.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {kit.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-gray-50 text-gray-600 border-gray-200 font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="font-mono">{kit.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Target className="h-4 w-4" />
                        <span className="font-mono">{kit.sections} sections</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full bg-black text-white hover:bg-black/90 group-hover:scale-105 transition-transform font-mono"
                  >
                    <Link href={`/resources/kits/${kit.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Tools Directory - Secondary Section */}
        <section className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-black font-mono uppercase tracking-tight mb-4">
                AI Tools Directory
              </h2>
              <p className="text-gray-600 font-mono max-w-2xl mx-auto">
                Explore our comprehensive collection of AI tools by category. Perfect for discovering new tools or
                getting detailed information about specific ones.
              </p>
            </div>

            {/* Tool Categories Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Chatbots", icon: <MessageSquare className="h-5 w-5" />, category: "chatbots" },
                { name: "Image Gen", icon: <ImageIcon className="h-5 w-5" />, category: "image" },
                { name: "Writing", icon: <PenTool className="h-5 w-5" />, category: "writing" },
                { name: "Video", icon: <Video className="h-5 w-5" />, category: "video" },
                { name: "Audio", icon: <Mic className="h-5 w-5" />, category: "audio" },
                { name: "Coding", icon: <Code2 className="h-5 w-5" />, category: "coding" },
              ].map((tool) => (
                <Link
                  key={tool.category}
                  href={`/resources/ai-tools?category=${tool.category}`}
                  className="flex flex-col items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-black hover:shadow-md transition-all duration-300"
                >
                  <div className="text-gray-700">{tool.icon}</div>
                  <span className="text-sm font-medium text-gray-900 font-mono">{tool.name}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-black text-white hover:bg-black/90 font-mono">
                <Link href="/resources/ai-tools">
                  Browse All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-gray-300 font-mono">
                <Link href="/resources/ai-tools" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search Tools
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold font-mono uppercase tracking-tight mb-4">Ready to Start Building?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-mono">
            Choose a builder kit to get started with a complete workflow that takes you from idea to finished
            deliverable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100 font-mono" asChild>
              <Link href="/resources/kits">
                Explore All Builder Kits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>
        </section>
      </div>
    </div>
  )
}
