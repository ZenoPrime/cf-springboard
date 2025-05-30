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

export default function BuilderKitsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  // All Builder Kits data (now includes the 8 new AI-focused kits)
  const allBuilderKits = [
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
      id: "ai-research-validation",
      title: "AI Research & Validation Kit",
      description: "Validate your hackathon idea and understand your market using AI-powered research tools.",
      outcome: "Comprehensive market research and validated project direction",
      difficulty: "Beginner",
      duration: "2-3 hours",
      sections: 4,
      tools: 4,
      prompts: 8,
      category: "research",
      icon: <Search className="h-8 w-8" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      deliverables: [
        "Market research report",
        "User persona profiles",
        "Competitive analysis",
        "Problem validation summary",
      ],
      tags: ["ai-tools", "hackathon", "research", "validation"],
      featured: true,
    },
    {
      id: "ai-powered-design-system",
      title: "AI-Powered Design System Kit",
      description: "Create a professional design system and visual identity using AI design tools.",
      outcome: "Complete design system with components, colors, and visual guidelines",
      difficulty: "Beginner",
      duration: "3-4 hours",
      sections: 4,
      tools: 5,
      prompts: 12,
      category: "design",
      icon: <Palette className="h-8 w-8" />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      deliverables: [
        "Color palette and typography system",
        "Component library",
        "Icon set and illustrations",
        "Design guidelines document",
      ],
      tags: ["ai-tools", "design", "design-system", "ui-components"],
      featured: true,
    },
    {
      id: "ai-powered-rapid-prototype",
      title: "AI-Powered Rapid Prototype Kit",
      description: "Build a functional prototype quickly using AI coding and development tools.",
      outcome: "Working prototype with core features and professional UI",
      difficulty: "Intermediate",
      duration: "4-6 hours",
      sections: 4,
      tools: 5,
      prompts: 16,
      category: "development",
      icon: <Rocket className="h-8 w-8" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      deliverables: [
        "Functional web application",
        "Core feature implementation",
        "Responsive UI components",
        "Basic data management",
      ],
      tags: ["ai-tools", "development", "prototyping", "rapid-development"],
      featured: true,
    },
    {
      id: "ai-content-copy-generation",
      title: "AI Content & Copy Generation Kit",
      description: "Generate compelling copy, content, and documentation for your project using AI writing tools.",
      outcome: "Complete content package including copy, documentation, and marketing materials",
      difficulty: "Beginner",
      duration: "2-3 hours",
      sections: 4,
      tools: 4,
      prompts: 12,
      category: "content",
      icon: <PenTool className="h-8 w-8" />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      deliverables: ["Landing page copy", "Product descriptions", "User documentation", "Marketing materials"],
      tags: ["ai-tools", "content", "copywriting", "documentation"],
      featured: false,
    },
    {
      id: "ai-enhanced-demo-visualization",
      title: "AI-Enhanced Demo & Visualization Kit",
      description: "Create stunning demos, visualizations, and presentation materials using AI design tools.",
      outcome: "Professional demo materials and interactive visualizations",
      difficulty: "Intermediate",
      duration: "3-4 hours",
      sections: 4,
      tools: 5,
      prompts: 14,
      category: "presentation",
      icon: <Target className="h-8 w-8" />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      deliverables: [
        "Interactive demo interface",
        "Data visualizations",
        "Demo video walkthrough",
        "Presentation graphics",
      ],
      tags: ["ai-tools", "demo", "visualization", "presentation"],
      featured: false,
    },
    {
      id: "ai-assisted-pitch-master",
      title: "AI-Assisted Pitch Master Kit",
      description: "Create compelling pitch presentations and demo scripts using AI presentation tools.",
      outcome: "Professional pitch deck and presentation materials ready for demo day",
      difficulty: "Beginner",
      duration: "2-3 hours",
      sections: 4,
      tools: 4,
      prompts: 10,
      category: "presentation",
      icon: <Sparkles className="h-8 w-8" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      deliverables: ["Complete pitch deck", "Demo script and timing", "Q&A preparation guide", "Presentation assets"],
      tags: ["ai-tools", "pitch", "presentation", "demo-day"],
      featured: false,
    },
    {
      id: "social-buzz-marketing",
      title: "Social Buzz & Marketing Kit",
      description: "Generate social media buzz and marketing materials for your hackathon project launch.",
      outcome: "Complete social media strategy and marketing materials for project promotion",
      difficulty: "Beginner",
      duration: "2-3 hours",
      sections: 4,
      tools: 4,
      prompts: 12,
      category: "marketing",
      icon: <Zap className="h-8 w-8" />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      deliverables: [
        "Social media content calendar",
        "Launch announcement materials",
        "Community engagement strategy",
        "Press release template",
      ],
      tags: ["ai-tools", "social-media", "marketing", "launch"],
      featured: false,
    },
    {
      id: "team-productivity-collaboration",
      title: "Team Productivity & Collaboration Kit",
      description: "Optimize team collaboration and productivity using AI-powered project management tools.",
      outcome: "Streamlined team workflow and collaboration system",
      difficulty: "Beginner",
      duration: "1-2 hours",
      sections: 4,
      tools: 4,
      prompts: 8,
      category: "productivity",
      icon: <CheckCircle2 className="h-8 w-8" />,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      deliverables: [
        "Project management setup",
        "Team communication guidelines",
        "Task tracking system",
        "Progress reporting framework",
      ],
      tags: ["ai-tools", "productivity", "collaboration", "project-management"],
      featured: false,
    },
    // Keep the existing non-AI kits
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
      category: "product",
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
      id: "startup-pitch-deck",
      title: "Startup Pitch Deck Builder",
      description: "Create a compelling pitch deck that gets investor attention.",
      outcome: "Professional pitch deck ready for investors",
      difficulty: "Intermediate",
      duration: "6-8 hours",
      sections: 5,
      tools: 6,
      prompts: 22,
      category: "business",
      icon: <Target className="h-8 w-8" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      deliverables: ["Investor-ready pitch deck", "Financial projections", "Market analysis", "Demo script"],
      tags: ["startup", "pitch", "investors"],
      featured: false,
    },
  ]

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
                  placeholder="Search kits by name, description, or tags..."
                  className="pl-10 border-gray-300 font-mono"
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
                viewMode === "list" ? "flex flex-row" : ""
              }`}
            >
              <CardHeader className={viewMode === "list" ? "flex-shrink-0 w-48" : ""}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className={`${viewMode === "list" ? "w-10 h-10" : "w-12 h-12"} ${kit.iconBg} rounded-lg flex items-center justify-center ${kit.iconColor}`}
                  >
                    {viewMode === "list" ? <div className="scale-75">{kit.icon}</div> : kit.icon}
                  </div>
                  <Badge className={`font-mono text-xs ${getDifficultyColor(kit.difficulty)}`}>{kit.difficulty}</Badge>
                </div>

                <CardTitle
                  className={`${viewMode === "list" ? "text-lg" : "text-xl"} font-mono uppercase tracking-tight text-black group-hover:text-black transition-colors`}
                >
                  {kit.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">{kit.description}</CardDescription>
              </CardHeader>

              <CardContent className={`space-y-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                {viewMode === "grid" && (
                  <>
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
                  </>
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
