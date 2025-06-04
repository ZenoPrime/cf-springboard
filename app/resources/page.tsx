"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllBuilderKits } from "@/lib/builder-kits-data"
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
  Users,
  BarChart3,
  Presentation,
  Settings,
} from "lucide-react"

export default function ResourcesPage() {
  const [selectedOutcome, setSelectedOutcome] = useState("all")

  // Get real builder kits data
  const realBuilderKits = getAllBuilderKits()

  // Transform real data to match UI format
  const builderKits = realBuilderKits.map((kit) => {
    // Map categories to icons and colors
    const getKitIcon = (category: string, tags: string[]) => {
      if (category === "Branding" || tags.includes("branding")) {
        return {
          icon: <Palette className="h-8 w-8" />,
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
        }
      }
      if (category === "Development" || tags.includes("prototyping")) {
        return {
          icon: <Rocket className="h-8 w-8" />,
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
        }
      }
      if (category === "Content" || tags.includes("content")) {
        return {
          icon: <Sparkles className="h-8 w-8" />,
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
        }
      }
      if (category === "Research" || tags.includes("research")) {
        return {
          icon: <Search className="h-8 w-8" />,
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-600",
        }
      }
      if (category === "Design" || tags.includes("design")) {
        return {
          icon: <PenTool className="h-8 w-8" />,
          iconBg: "bg-pink-100",
          iconColor: "text-pink-600",
        }
      }
      if (category === "Marketing" || tags.includes("marketing")) {
        return {
          icon: <BarChart3 className="h-8 w-8" />,
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
        }
      }
      if (category === "Presentation" || tags.includes("demo")) {
        return {
          icon: <Presentation className="h-8 w-8" />,
          iconBg: "bg-indigo-100",
          iconColor: "text-indigo-600",
        }
      }
      if (category === "Productivity" || tags.includes("productivity")) {
        return {
          icon: <Users className="h-8 w-8" />,
          iconBg: "bg-teal-100",
          iconColor: "text-teal-600",
        }
      }
      // Default
      return {
        icon: <Settings className="h-8 w-8" />,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-600",
      }
    }

    const iconData = getKitIcon(kit.category, kit.tags)
    
    return {
      id: kit.id,
      title: kit.title,
      description: kit.description,
      outcome: kit.outcome_description,
      difficulty: kit.difficulty.charAt(0).toUpperCase() + kit.difficulty.slice(1),
      duration: kit.estimated_duration,
      sections: kit.sections.length,
      tools: kit.tools_required.length,
      prompts: kit.sections.reduce((total, section) => total + section.prompts.length, 0),
      category: kit.category.toLowerCase(),
      ...iconData,
      deliverables: kit.final_deliverables,
      tags: kit.tags,
      featured: ["complete-branding-kit", "ai-powered-rapid-prototype", "ai-content-copy-generation"].includes(kit.id),
    }
  })

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
              {featuredKits.slice(0, 3).map((kit) => (
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
            {allKits.filter(kit => !kit.featured).slice(0, 3).map((kit) => (
              <Card
                key={kit.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-black bg-white flex flex-col h-full"
              >
                <CardHeader className="flex-shrink-0">
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

                <CardContent className="flex flex-col flex-grow">
                  {/* Spacer to push content to bottom */}
                  <div className="flex-grow"></div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  <div className="flex items-center justify-between text-sm mb-4">
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

        {/* AI Tools Directory - Secondary Section - HIDDEN FOR NOW */}
        {/* <section className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
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
        </section> */}


      </div>
    </div>
  )
}
