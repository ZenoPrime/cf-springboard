"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
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
  Filter,
  Grid3X3,
  List,
} from "lucide-react"
import { getAllBuilderKits } from "@/lib/builder-kits-data"

export default function BuilderKitsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  // Get all builder kits from the data file
  const allBuilderKits = getAllBuilderKits().map(kit => ({
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
    icon: getCategoryIcon(kit.category),
    iconBg: getCategoryIconBg(kit.category),
    iconColor: getCategoryIconColor(kit.category),
    deliverables: kit.final_deliverables,
    tags: kit.tags,
    featured: kit.tags.includes('ai-tools') || kit.tags.includes('featured'),
  }))

  // Helper functions for category icons
  function getCategoryIcon(category: string) {
    switch (category.toLowerCase()) {
      case 'branding':
      case 'design':
        return <Palette className="h-8 w-8" />
      case 'development':
        return <Rocket className="h-8 w-8" />
      case 'research':
        return <Search className="h-8 w-8" />
      case 'content':
        return <PenTool className="h-8 w-8" />
      case 'marketing':
        return <Zap className="h-8 w-8" />
      case 'pitch':
        return <Target className="h-8 w-8" />
      default:
        return <Sparkles className="h-8 w-8" />
    }
  }

  function getCategoryIconBg(category: string) {
    switch (category.toLowerCase()) {
      case 'branding':
        return 'bg-purple-100'
      case 'design':
        return 'bg-pink-100'
      case 'development':
        return 'bg-green-100'
      case 'research':
        return 'bg-blue-100'
      case 'content':
        return 'bg-orange-100'
      case 'marketing':
        return 'bg-cyan-100'
      case 'pitch':
        return 'bg-yellow-100'
      default:
        return 'bg-indigo-100'
    }
  }

  function getCategoryIconColor(category: string) {
    switch (category.toLowerCase()) {
      case 'branding':
        return 'text-purple-600'
      case 'design':
        return 'text-pink-600'
      case 'development':
        return 'text-green-600'
      case 'research':
        return 'text-blue-600'
      case 'content':
        return 'text-orange-600'
      case 'marketing':
        return 'text-cyan-600'
      case 'pitch':
        return 'text-yellow-600'
      default:
        return 'text-indigo-600'
    }
  }

  // Filter kits based on search and filters
  const filteredKits = allBuilderKits.filter((kit) => {
    const matchesSearch =
      searchQuery === "" ||
      kit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kit.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Updated category matching to include both category field and tags
    const matchesCategory =
      selectedCategory === "all" ||
      kit.category === selectedCategory ||
      kit.tags.some((tag) => tag.toLowerCase() === selectedCategory.toLowerCase())

    const matchesDifficulty =
      selectedDifficulty === "all" || kit.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()

    return matchesSearch && matchesCategory && matchesDifficulty
  })

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
      <div className="flex flex-col gap-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/resources" className="hover:text-gray-900 font-mono">
            Resources
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-mono">Builder Kits</span>
        </div>

        {/* Back Button */}
        <Button variant="outline" asChild className="border-gray-300 font-mono w-fit">
          <Link href="/resources">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-black font-mono uppercase mb-4">
              Builder Kits Directory
            </h1>
            <p className="text-xl text-gray-600 font-mono">
              Complete workflows to achieve specific outcomes. Choose your goal and follow the step-by-step process.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-4">
              {/* Search */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search kits..."
                  className="pl-10 pr-4 border-gray-300 font-mono"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  className="w-full appearance-none bg-white border-2 border-gray-300 rounded-lg px-4 py-2 pr-8 font-mono focus:outline-none focus:border-black"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="branding">Branding</option>
                  <option value="design">Design</option>
                  <option value="research">Research</option>
                  <option value="development">Development</option>
                  <option value="content">Content</option>
                  <option value="presentation">Presentation</option>
                  <option value="marketing">Marketing</option>
                  <option value="productivity">Productivity</option>
                  <option value="product">Product</option>
                  <option value="automation">Automation</option>
                  <option value="business">Business</option>
                  <option value="ai-tools">AI Tools</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="no-code">No-Code</option>
                  <option value="strategy">Strategy</option>
                </select>
                <Filter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Difficulty Filter */}
              <div className="relative">
                <select
                  className="w-full appearance-none bg-white border-2 border-gray-300 rounded-lg px-4 py-2 pr-8 font-mono focus:outline-none focus:border-black"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <Filter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Results and View Toggle */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 font-mono">
                {filteredKits.length} {filteredKits.length === 1 ? "kit" : "kits"} found
              </p>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-mono">View:</span>
                <div className="flex border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kits Grid/List */}
        <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
          {filteredKits.map((kit) => (
            <Card
              key={kit.id}
              className={`group hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-black bg-white ${
                viewMode === "list" ? "flex flex-row" : "flex flex-col min-h-[450px]"
              }`}
            >
              <CardHeader className={viewMode === "list" ? "flex-shrink-0 w-48" : ""}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className={`${viewMode === "list" ? "w-10 h-10" : "w-12 h-12"} ${kit.iconBg} rounded-lg flex items-center justify-center ${kit.iconColor}`}
                  >
                    {viewMode === "list" ? <div className="scale-75">{kit.icon}</div> : kit.icon}
                  </div>
                  <Badge className={`font-mono text-xs hover:bg-inherit ${getDifficultyColor(kit.difficulty)}`}>{kit.difficulty}</Badge>
                </div>

                <CardTitle
                  className={`${viewMode === "list" ? "text-lg" : "text-xl"} font-mono uppercase tracking-tight text-black group-hover:text-black transition-colors`}
                >
                  {kit.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">{kit.description}</CardDescription>
              </CardHeader>

              <CardContent className={`flex flex-col h-full ${viewMode === "list" ? "flex-1 justify-between" : ""}`}>
                {viewMode === "grid" && (
                  <div className="flex-grow space-y-4">
                    {/* Deliverables Preview */}
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
                          <li className="text-sm text-gray-500 ml-6">+{kit.deliverables.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Bottom section that hugs the bottom */}
                <div className="mt-auto space-y-4 pt-6">
                  {viewMode === "grid" && (
                    /* Tags */
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
                  )}

                  {/* Stats */}
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredKits.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2 text-gray-900 font-mono">No kits found</h3>
            <p className="text-gray-600 mb-6 font-mono">No builder kits match your current search and filters.</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSelectedDifficulty("all")
              }}
              variant="outline"
              className="border-gray-300 font-mono"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
