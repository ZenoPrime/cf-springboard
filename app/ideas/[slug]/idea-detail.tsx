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
  // Updated color mapping with proper category colors
  const colorMap: Record<string, string> = {
    "Community DAOs": "bg-purple-600 text-white",
    Consumer: "bg-green-600 text-white",
    DeFi: "bg-blue-600 text-white",
    DePIN: "bg-orange-600 text-white",
    "Developer Infrastructure": "bg-red-600 text-white",
    Payments: "bg-emerald-600 text-white",
    Social: "bg-pink-600 text-white",
  }

  return colorMap[categoryName] || "bg-gray-600 text-white"
}

export default function IdeaDetail({ idea, slug }: { idea: any; slug: string }) {
  const [activeTab, setActiveTab] = useState("overview")

  // Simple rendering without complex effects
  // Rendering IdeaDetail component

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
  const prdContent = getField(idea, "prd_content")

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
                {prdContent ? (
                  <div className="text-gray-700 prose prose-lg max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => (
                          <h1 className="text-2xl font-bold font-mono uppercase tracking-tight mb-6 mt-8 first:mt-0 text-black border-b border-gray-200 pb-2">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-xl font-semibold font-mono uppercase tracking-tight mb-4 mt-6 text-black">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-lg font-medium font-mono uppercase tracking-tight mb-3 mt-5 text-gray-800">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-base font-medium mb-2 mt-4 text-gray-800">
                            {children}
                          </h4>
                        ),
                        p: ({ children }) => (
                          <p className="mb-4 leading-relaxed text-gray-700">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="mb-4 space-y-2 list-disc list-inside text-gray-700">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="mb-4 space-y-2 list-decimal list-inside text-gray-700">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="leading-relaxed">
                            {children}
                          </li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-black">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic text-gray-600">
                            {children}
                          </em>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-600">
                            {children}
                          </blockquote>
                        ),
                        code: ({ children }) => (
                          <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">
                            {children}
                          </code>
                        ),
                        pre: ({ children }) => (
                          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                            {children}
                          </pre>
                        ),
                      }}
                    >
                      {prdContent}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-gray-700">No detailed PRD available for this idea yet.</p>
                )}
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
                  <Button className="bg-black text-white hover:bg-black/90" asChild>
                    <Link href="https://discord.gg/DeYcW49vQuestions?" target="_blank" rel="noopener noreferrer">
                      Join Discord Community
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
