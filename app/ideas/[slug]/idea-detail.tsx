"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Share2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReactMarkdown from "react-markdown"

// Helper function to get field value regardless of data structure
const getField = (idea: any, field: string) => {
  if (!idea) return null
  return idea[field] || (idea.fields && idea.fields[field])
}

// Get category CSS class
const getCategoryClass = (category: string) => {
  const categoryMap: Record<string, string> = {
    "Community DAOs": "tag-community",
    Consumer: "tag-consumer",
    DeFi: "tag-defi",
    DePIN: "tag-depin",
    "Developer Infrastructure": "tag-developer",
    Gaming: "tag-gaming",
    Payments: "tag-payments",
    "Security Tools": "tag-security",
    Social: "tag-social",
  }

  return categoryMap[category] || ""
}

const getCategoryColorClass = (categoryName: string) => {
  // Fallback to name-based mapping
  const colorMap: Record<string, string> = {
    "Community DAOs": "bg-card-purple text-white/80",
    Consumer: "bg-card-green text-white/80",
    DeFi: "bg-card-blue text-white/80",
    DePIN: "bg-card-orange text-white/80",
    "Developer Infrastructure": "bg-card-coral text-white/80",
    Gaming: "bg-card-yellow text-white/80",
    Payments: "bg-card-green text-white/80",
    "Security Tools": "bg-card-blue text-white/80",
    Social: "bg-card-coral text-white/80",
  }

  return colorMap[categoryName] || "bg-gray-100 text-white/80"
}

export default function IdeaDetail({ idea, slug }: { idea: any; slug: string }) {
  const [activeTab, setActiveTab] = useState("overview")

  // Simple rendering without complex effects
  console.log("Rendering IdeaDetail component")

  if (!idea) {
    return (
      <div className="container py-8 md:py-12 text-center">
        <h1 className="text-3xl font-bold pt-16 text-black">Idea Not Found</h1>
        <p className="mt-4">The idea you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6 black-button">
          <Link href="/ideas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ideas
          </Link>
        </Button>
      </div>
    )
  }

  const title = getField(idea, "title")
  const categoryName = getField(idea, "name (from category)")
  const description = getField(idea, "description")
  const problemStatement = getField(idea, "problem_statement")
  const targetAudience = getField(idea, "target_audience")
  const mvpFeatures = getField(idea, "mvp_features") || []
  const difficulty = getField(idea, "difficulty")

  const handleShareClick = async () => {
    try {
      const currentUrl = window.location.href
      await navigator.clipboard.writeText(currentUrl)
      alert("Page URL copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy URL: ", err)
      alert("Failed to copy URL")
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="w-fit">
          <Link href="/ideas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ideas
          </Link>
        </Button>

        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-mono uppercase tracking-tighter sm:text-4xl text-black break-words">
                {title}
              </h1>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {categoryName && (
                <Badge
                  variant="outline"
                  className={`text-xs px-2 py-0.5 ${getCategoryClass(categoryName)} ${getCategoryColorClass(categoryName)}`}
                >
                  {categoryName}
                </Badge>
              )}
              <Button
                variant="outline"
                size="icon"
                title="Share idea"
                className="border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                onClick={handleShareClick}
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {difficulty && (
              <Badge
                variant="secondary"
                className="text-xs px-2 py-0.5 font-mono bg-gray-100 font-normal text-gray-600"
              >
                {difficulty}
              </Badge>
            )}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 p-1 bg-[#faf8f3] rounded-xl">
              <TabsTrigger
                value="overview"
                className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="prd"
                className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
              >
                PRD
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
              >
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-mono uppercase tracking-tight mb-2 text-black">Description</h2>
                  <div className="text-gray-700 prose prose-sm max-w-none">
                    <ReactMarkdown>{description || ""}</ReactMarkdown>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-mono uppercase tracking-tight mb-2 text-black">Problem Statement</h2>
                  <div className="text-gray-700 prose prose-sm max-w-none">
                    <ReactMarkdown>{problemStatement || ""}</ReactMarkdown>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-mono uppercase tracking-tight mb-2 text-black">Target Audience</h2>
                  <div className="text-gray-700 prose prose-sm max-w-none">
                    <ReactMarkdown>{targetAudience || ""}</ReactMarkdown>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-mono uppercase tracking-tight mb-2 text-black">MVP Features</h2>
                  <div className="text-gray-700 prose prose-sm max-w-none">
                    <ReactMarkdown>{mvpFeatures || ""}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="prd" className="mt-6">
              <div className="bg-[#faf8f3] p-6 rounded-lg">
                <p className="text-gray-700">No detailed PRD available for this idea yet.</p>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <div className="bg-[#faf8f3] p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-mono uppercase tracking-tight mb-4 text-black">Ready to Build?</h2>
                <p className="mb-4 text-gray-700">
                  This idea is ready for implementation. Join the community to get support, find team members, or
                  showcase your progress.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-black text-white hover:bg-black/90">Join Discord Community</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
