"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Filter, Search } from "lucide-react"

// Mock data for how-to guides - would be replaced with Airtable data
const howToGuides = [
  {
    id: "1",
    title: "Effective Prompt Engineering for Image Generation",
    slug: "prompt-engineering-image-generation",
    teaser:
      "Learn how to craft effective prompts for AI image generators like Midjourney, DALL-E, and Stable Diffusion to get the exact visuals you want.",
    color: "card-green",
    difficulty: "Beginner",
    readTime: "15 min",
    category: "Image AI",
    featuredTools: ["Midjourney", "DALL·E 3", "Stable Diffusion"],
  },
  {
    id: "2",
    title: "Creating Engaging Social Media Content with AI",
    slug: "ai-social-media-content",
    teaser:
      "A comprehensive workflow for using AI tools to brainstorm, create, and schedule engaging social media content across multiple platforms.",
    color: "card-blue",
    difficulty: "Intermediate",
    readTime: "20 min",
    category: "Content Creation",
    featuredTools: ["ChatGPT", "DALL·E 3", "Canva"],
  },
  {
    id: "3",
    title: "Building a No-Code MVP with AI Tools",
    slug: "no-code-mvp-ai-tools",
    teaser:
      "Step-by-step guide to rapidly prototype and build a minimum viable product using no-code platforms enhanced with AI capabilities.",
    color: "card-purple",
    difficulty: "Intermediate",
    readTime: "30 min",
    category: "Product Development",
    featuredTools: ["Bubble.io", "Uizard", "ChatGPT"],
  },
  {
    id: "4",
    title: "Understanding Different AI Models for Creative Writing",
    slug: "ai-models-creative-writing",
    teaser:
      "Compare different AI writing models and learn which ones excel at specific creative writing tasks, from poetry to fiction to marketing copy.",
    color: "card-coral",
    difficulty: "Beginner",
    readTime: "25 min",
    category: "Writing",
    featuredTools: ["ChatGPT", "Claude", "Sudowrite"],
  },
  {
    id: "5",
    title: "Automating Business Workflows with AI",
    slug: "automating-business-workflows",
    teaser:
      "Learn how to identify, design, and implement AI-powered automation for common business workflows to save time and reduce errors.",
    color: "card-yellow",
    difficulty: "Advanced",
    readTime: "35 min",
    category: "Business",
    featuredTools: ["Zapier", "Make", "ChatGPT"],
  },
  {
    id: "6",
    title: "Creating Professional Videos with AI Tools",
    slug: "professional-videos-ai-tools",
    teaser:
      "A complete guide to planning, creating, and editing professional-quality videos using AI-powered tools, with minimal technical expertise.",
    color: "card-orange",
    difficulty: "Intermediate",
    readTime: "40 min",
    category: "Video Production",
    featuredTools: ["RunwayML", "Descript", "HeyGen"],
  },
  {
    id: "7",
    title: "Effective Prompt Engineering for ChatGPT",
    slug: "effective-prompt-engineering",
    teaser:
      "Master the art of crafting effective prompts for ChatGPT and other LLMs to get more accurate, useful, and creative responses.",
    color: "card-blue",
    difficulty: "Beginner",
    readTime: "20 min",
    category: "Chatbots",
    featuredTools: ["ChatGPT", "Claude", "Perplexity AI"],
  },
  {
    id: "8",
    title: "Using AI for Market Research and Competitive Analysis",
    slug: "ai-market-research",
    teaser:
      "Leverage AI tools to conduct thorough market research, analyze competitors, and identify opportunities for your business or product.",
    color: "card-green",
    difficulty: "Intermediate",
    readTime: "30 min",
    category: "Business",
    featuredTools: ["Perplexity AI", "ChatGPT", "Semrush"],
  },
]

// Get difficulty color
const getDifficultyColor = (difficulty: string) => {
  const colorMap: Record<string, string> = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }
  return colorMap[difficulty] || "bg-gray-100 text-gray-800"
}

export default function HowToGuidesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Get category from URL params or default to "all"
  const category = typeof searchParams?.category === "string" ? searchParams.category : "all"

  // Get difficulty filter from URL params or default to "all"
  const difficulty = typeof searchParams?.difficulty === "string" ? searchParams.difficulty : "all"

  // Get search query from URL params
  const query = typeof searchParams?.q === "string" ? searchParams.q : ""

  // Filter guides based on category, difficulty, and search query
  const filteredGuides = howToGuides.filter((guide) => {
    const matchesCategory = category === "all" || guide.category.toLowerCase() === category.toLowerCase()
    const matchesDifficulty = difficulty === "all" || guide.difficulty.toLowerCase() === difficulty.toLowerCase()
    const matchesSearch =
      query === "" ||
      guide.title.toLowerCase().includes(query.toLowerCase()) ||
      guide.teaser.toLowerCase().includes(query.toLowerCase())

    return matchesCategory && matchesDifficulty && matchesSearch
  })

  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="flex flex-col gap-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-foreground">
            Resources
          </Link>
          <span>/</span>
          <span className="font-medium text-foreground">How-To Guides</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black font-mono uppercase">
              Practical How-To Guides
            </h1>
            <p className="text-gray-600 md:text-xl font-mono">
              Step-by-step guides to help you build real projects with AI tools
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Search for guides by title or description..."
                className="pl-10 rounded-xl"
                defaultValue={query}
                onChange={(e) => {
                  const newUrl = new URL(window.location.href)
                  if (e.target.value) {
                    newUrl.searchParams.set("q", e.target.value)
                  } else {
                    newUrl.searchParams.delete("q")
                  }
                  window.history.pushState({}, "", newUrl.toString())
                }}
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue={category}
                  onChange={(e) => {
                    const newUrl = new URL(window.location.href)
                    if (e.target.value !== "all") {
                      newUrl.searchParams.set("category", e.target.value)
                    } else {
                      newUrl.searchParams.delete("category")
                    }
                    window.location.href = newUrl.toString()
                  }}
                >
                  <option value="all">All Categories</option>
                  <option value="image ai">Image AI</option>
                  <option value="content creation">Content Creation</option>
                  <option value="product development">Product Development</option>
                  <option value="writing">Writing</option>
                  <option value="business">Business</option>
                  <option value="video production">Video Production</option>
                  <option value="chatbots">Chatbots</option>
                </select>
                <Filter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue={difficulty}
                  onChange={(e) => {
                    const newUrl = new URL(window.location.href)
                    if (e.target.value !== "all") {
                      newUrl.searchParams.set("difficulty", e.target.value)
                    } else {
                      newUrl.searchParams.delete("difficulty")
                    }
                    window.location.href = newUrl.toString()
                  }}
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <Filter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide) => (
            <Link key={guide.id} href={`/resources/how-to/${guide.slug}`} className="group block">
              <div className="bg-white border-2 border-black rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col gap-4 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}
                      >
                        {guide.difficulty}
                      </span>
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                        {guide.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-3 group-hover:text-gray-700 transition-colors font-mono">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{guide.teaser}</p>
                  </div>

                  {/* Footer */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {guide.featuredTools.slice(0, 3).map((tool) => (
                        <span key={tool} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                          {tool}
                        </span>
                      ))}
                      {guide.featuredTools.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                          +{guide.featuredTools.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 font-mono uppercase tracking-wide">
                        {guide.category}
                      </span>
                      <span className="text-sm font-medium text-black group-hover:text-gray-700 transition-colors">
                        Read Guide →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No guides found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
