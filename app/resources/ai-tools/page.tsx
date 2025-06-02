"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Box,
  Code2,
  ExternalLink,
  Filter,
  ImageIcon,
  Video,
  Briefcase,
  Lightbulb,
  Layers,
  GraduationCap,
  MessageSquare,
  PenTool,
  Mic,
  Search,
  X,
} from "lucide-react"
import { useState } from "react"

// Import the AI tools data
import { getAiToolsData } from "@/lib/ai-tools-data"

export default function AiToolsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Get category from URL params or default to "all"
  const category = typeof searchParams?.category === "string" ? searchParams.category : "all"

  // Get pricing filter from URL params or default to "all"
  const pricing = typeof searchParams?.pricing === "string" ? searchParams.pricing : "all"

  // Get search query from URL params
  const query = typeof searchParams?.q === "string" ? searchParams.q : ""

  // Local state for search input
  const [searchInput, setSearchInput] = useState(query)
  const [categoryFilter, setCategoryFilter] = useState(category)
  const [pricingFilter, setPricingFilter] = useState(pricing)

  // Get AI tools data
  const allTools = getAiToolsData()

  // Filter tools based on category, pricing, and search query
  const filteredTools = allTools.filter((tool) => {
    const matchesCategory =
      categoryFilter === "all" ||
      tool.category.toLowerCase().includes(categoryFilter.toLowerCase()) ||
      (categoryFilter === "chatbots" && tool.category.toLowerCase().includes("chatbots")) ||
      (categoryFilter === "writing" && tool.category.toLowerCase().includes("writing")) ||
      (categoryFilter === "image" && tool.category.toLowerCase().includes("image")) ||
      (categoryFilter === "design" && tool.category.toLowerCase().includes("design")) ||
      (categoryFilter === "video" && tool.category.toLowerCase().includes("video")) ||
      (categoryFilter === "audio" && tool.category.toLowerCase().includes("audio")) ||
      (categoryFilter === "productivity" && tool.category.toLowerCase().includes("productivity")) ||
      (categoryFilter === "business" && tool.category.toLowerCase().includes("business")) ||
      (categoryFilter === "ux" && tool.category.toLowerCase().includes("ux")) ||
      (categoryFilter === "coding" && tool.category.toLowerCase().includes("coding")) ||
      (categoryFilter === "education" && tool.category.toLowerCase().includes("education"))

    const matchesPricing = pricingFilter === "all" || tool.pricing.toLowerCase() === pricingFilter.toLowerCase()
    const matchesSearch =
      searchInput === "" ||
      tool.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchInput.toLowerCase())

    return matchesCategory && matchesPricing && matchesSearch
  })

  // Group tools by category
  const toolsByCategory = filteredTools.reduce(
    (acc, tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = []
      }
      acc[tool.category].push(tool)
      return acc
    },
    {} as Record<string, typeof allTools>,
  )

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "chatbots & conversational ai":
        return <MessageSquare className="mr-2 h-4 w-4" />
      case "writing & content creation":
        return <PenTool className="mr-2 h-4 w-4" />
      case "image generation & editing":
        return <ImageIcon className="mr-2 h-4 w-4" />
      case "graphic design platforms":
        return <Layers className="mr-2 h-4 w-4" />
      case "video generation & editing":
        return <Video className="mr-2 h-4 w-4" />
      case "audio & music creation/editing":
        return <Mic className="mr-2 h-4 w-4" />
      case "productivity & task management":
        return <Box className="mr-2 h-4 w-4" />
      case "business, marketing & sales":
        return <Briefcase className="mr-2 h-4 w-4" />
      case "ux research & product management":
        return <Lightbulb className="mr-2 h-4 w-4" />
      case "coding & web development":
        return <Code2 className="mr-2 h-4 w-4" />
      case "education & learning":
        return <GraduationCap className="mr-2 h-4 w-4" />
      default:
        return <BookOpen className="mr-2 h-4 w-4" />
    }
  }

  // Get badge color class for pricing
  const getPricingColorClass = (pricing: string) => {
    const colorMap: Record<string, string> = {
      freemium: "bg-green-50 text-green-700 border-green-200",
      paid: "bg-yellow-50 text-yellow-700 border-yellow-200",
      free: "bg-blue-50 text-blue-700 border-blue-200",
      "open source": "bg-purple-50 text-purple-700 border-purple-200",
    }
    return colorMap[pricing.toLowerCase()] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchInput("")
    setCategoryFilter("all")
    setPricingFilter("all")
    const newUrl = new URL(window.location.href)
    newUrl.searchParams.delete("category")
    newUrl.searchParams.delete("pricing")
    newUrl.searchParams.delete("q")
    window.history.pushState({}, "", newUrl.toString())
  }

  // Check if any filters are active
  const hasActiveFilters = categoryFilter !== "all" || pricingFilter !== "all" || searchInput !== ""

  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="flex flex-col gap-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 font-mono">
          <Link href="/resources" className="hover:text-black transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-black font-medium">AI Tools</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black font-mono uppercase">
              AI Tools Directory
            </h1>
            <p className="text-gray-600 md:text-xl">Discover and explore powerful AI tools across various categories</p>
          </div>

          {/* Search and Filter Bar */}
          <Card className="border-2 border-black bg-white shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col gap-4">
                {/* Search and Filters Row */}
                <div className="flex flex-col lg:flex-row gap-3">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search tools..."
                      className="pl-10 pr-4 bg-white text-black border-gray-300 focus:border-black transition-colors placeholder:text-gray-500"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="relative lg:w-64">
                    <select
                      className="w-full appearance-none bg-white text-black border-2 border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-black transition-colors font-mono"
                      value={categoryFilter}
                      onChange={(e) => {
                        const newUrl = new URL(window.location.href)
                        if (e.target.value !== "all") {
                          newUrl.searchParams.set("category", e.target.value)
                        } else {
                          newUrl.searchParams.delete("category")
                        }
                        if (searchInput) {
                          newUrl.searchParams.set("q", searchInput)
                        } else {
                          newUrl.searchParams.delete("q")
                        }
                        window.history.pushState({}, "", newUrl.toString())
                        setCategoryFilter(e.target.value)
                      }}
                    >
                      <option value="all">All Categories</option>
                      <option value="chatbots">Chatbots & Conversational AI</option>
                      <option value="writing">Writing & Content Creation</option>
                      <option value="image">Image Generation & Editing</option>
                      <option value="design">Graphic Design Platforms</option>
                      <option value="video">Video Generation & Editing</option>
                      <option value="audio">Audio & Music Creation</option>
                      <option value="productivity">Productivity & Task Management</option>
                      <option value="business">Business, Marketing & Sales</option>
                      <option value="ux">UX Research & Product Management</option>
                      <option value="coding">Coding & Web Development</option>
                      <option value="education">Education & Learning</option>
                    </select>
                    <Filter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>

                  {/* Pricing Filter */}
                  <div className="relative lg:w-48">
                    <select
                      className="w-full appearance-none bg-white text-black border-2 border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-black transition-colors font-mono"
                      value={pricingFilter}
                      onChange={(e) => {
                        const newUrl = new URL(window.location.href)
                        if (e.target.value !== "all") {
                          newUrl.searchParams.set("pricing", e.target.value)
                        } else {
                          newUrl.searchParams.delete("pricing")
                        }
                        if (searchInput) {
                          newUrl.searchParams.set("q", searchInput)
                        } else {
                          newUrl.searchParams.delete("q")
                        }
                        window.history.pushState({}, "", newUrl.toString())
                        setPricingFilter(e.target.value)
                      }}
                    >
                      <option value="all">All Pricing</option>
                      <option value="freemium">Freemium</option>
                      <option value="free">Free</option>
                      <option value="open source">Open Source</option>
                    </select>
                    <Filter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>

                  {/* Clear Button */}
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors font-mono uppercase tracking-tight lg:w-auto"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2">
                    {categoryFilter !== "all" && (
                      <Badge className="bg-black text-white border-black font-mono uppercase tracking-tight">
                        Category: {categoryFilter}
                      </Badge>
                    )}
                    {pricingFilter !== "all" && (
                      <Badge className="bg-black text-white border-black font-mono uppercase tracking-tight">
                        Pricing: {pricingFilter}
                      </Badge>
                    )}
                    {searchInput && (
                      <Badge className="bg-black text-white border-black font-mono uppercase tracking-tight">
                        Search: "{searchInput}"
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-mono">
            {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"} found
          </p>
        </div>

        {/* Tools Display */}
        <div className="space-y-12">
          {Object.keys(toolsByCategory).length > 0 ? (
            Object.entries(toolsByCategory).map(([categoryName, tools]) => (
              <section key={categoryName} id={categoryName.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-black font-mono uppercase tracking-tight flex items-center">
                    {getCategoryIcon(categoryName)}
                    {categoryName}
                  </h2>
                  <Badge className="bg-gray-100 text-gray-800 border-gray-300 font-mono">
                    {tools.length} {tools.length === 1 ? "tool" : "tools"}
                  </Badge>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {tools.map((tool) => (
                    <Card
                      key={tool.id}
                      className="group hover:shadow-lg transition-all duration-300 border-2 border-black bg-white"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start gap-2">
                          <CardTitle className="font-mono uppercase tracking-tight text-black group-hover:text-black transition-colors">
                            {tool.name}
                          </CardTitle>
                          <Badge
                            className={`whitespace-nowrap text-xs px-2 py-1 font-mono uppercase tracking-tight ${getPricingColorClass(tool.pricing)}`}
                          >
                            {tool.pricing}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex gap-2">
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors font-mono uppercase tracking-tight"
                        >
                          <Link href={tool.websiteUrl} target="_blank" rel="noopener noreferrer">
                            Visit
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          className="flex-1 bg-black text-white hover:bg-gray-800 transition-colors font-mono uppercase tracking-tight"
                        >
                          <Link href={`/resources/ai-tools/${tool.slug}`}>
                            Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <Card className="border-2 border-black bg-white shadow-sm">
              <CardHeader className="text-center py-12">
                <div className="flex flex-col items-center gap-4">
                  <Search className="h-12 w-12 text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black font-mono uppercase tracking-tight">
                      No tools found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      No tools match your current filters. Try adjusting your search criteria.
                    </p>
                    <Button
                      onClick={clearFilters}
                      className="bg-black text-white hover:bg-gray-800 transition-colors font-mono uppercase tracking-tight"
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          )}
        </div>

        {/* Back to Resources */}
        <div className="mt-8">
          <Button
            variant="outline"
            asChild
            className="border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors font-mono uppercase tracking-tight"
          >
            <Link href="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
