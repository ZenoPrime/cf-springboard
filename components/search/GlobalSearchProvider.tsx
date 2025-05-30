"use client"

import React, { useEffect, useState } from "react"
import GlobalSearchModal from "./GlobalSearchModal"
import { getAiToolsData } from "@/lib/ai-tools-data"

interface GlobalSearchProviderProps {
  children: React.ReactNode
}

// Builder kits data (from the kits page)
const builderKitsData = [
  {
    id: "complete-branding-kit",
    title: "Complete Branding Kit",
    description: "Build a professional brand identity from strategy to visual assets in one weekend.",
    outcome: "Professional brand package ready for launch",
    difficulty: "Beginner",
    duration: "4-6 hours",
    category: "branding",
    tags: ["branding", "design", "strategy"],
  },
  {
    id: "ai-research-validation",
    title: "AI Research & Validation Kit",
    description: "Validate your hackathon idea and understand your market using AI-powered research tools.",
    outcome: "Comprehensive market research and validated project direction",
    difficulty: "Beginner",
    duration: "2-3 hours",
    category: "research",
    tags: ["ai-tools", "hackathon", "research", "validation"],
  },
  {
    id: "mvp-development",
    title: "MVP Development Kit",
    description: "Build and launch your minimum viable product using no-code and low-code tools.",
    outcome: "Functional MVP ready for user testing",
    difficulty: "Intermediate",
    duration: "8-12 hours",
    category: "development",
    tags: ["mvp", "no-code", "development", "launch"],
  },
  {
    id: "content-marketing",
    title: "Content Marketing Kit",
    description: "Create a comprehensive content strategy and produce engaging content for your project.",
    outcome: "30-day content calendar with ready-to-publish content",
    difficulty: "Beginner",
    duration: "6-8 hours",
    category: "marketing",
    tags: ["content", "marketing", "social-media", "strategy"],
  },
  {
    id: "user-research",
    title: "User Research Kit",
    description: "Conduct effective user research to validate your assumptions and improve your product.",
    outcome: "User research report with actionable insights",
    difficulty: "Intermediate",
    duration: "4-6 hours",
    category: "research",
    tags: ["user-research", "validation", "interviews", "surveys"],
  },
  {
    id: "pitch-deck",
    title: "Pitch Deck Kit",
    description: "Create a compelling pitch deck that tells your story and attracts investors or partners.",
    outcome: "Professional pitch deck ready for presentations",
    difficulty: "Intermediate",
    duration: "4-6 hours",
    category: "business",
    tags: ["pitch", "presentation", "storytelling", "business"],
  },
  {
    id: "ai-prompt-engineering",
    title: "AI Prompt Engineering Kit",
    description: "Master the art of prompt engineering to get better results from AI tools and boost your productivity.",
    outcome: "Prompt library and framework for consistent AI results",
    difficulty: "Beginner",
    duration: "3-4 hours",
    category: "ai-tools",
    tags: ["ai", "prompts", "productivity", "automation"],
  },
  {
    id: "social-media-automation",
    title: "Social Media Automation Kit",
    description: "Set up automated social media workflows to maintain consistent online presence without manual effort.",
    outcome: "Automated social media system with 30 days of content",
    difficulty: "Intermediate",
    duration: "5-7 hours",
    category: "automation",
    tags: ["automation", "social-media", "workflows", "productivity"],
  },
]

export default function GlobalSearchProvider({ children }: GlobalSearchProviderProps) {
  const [ideas, setIdeas] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch ideas data on component mount
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        // Fetch ideas from Airtable via API route
        const response = await fetch('/api/ideas')
        if (response.ok) {
          const ideasData = await response.json()
          setIdeas(ideasData)
        } else {
          console.error('Failed to fetch ideas from API')
          setIdeas([])
        }
      } catch (error) {
        console.error("Error fetching ideas:", error)
        setIdeas([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchIdeas()
  }, [])

  return (
    <>
      {children}
      {!isLoading && (
        <GlobalSearchModal
          ideas={ideas}
          builderKits={builderKitsData}
        />
      )}
    </>
  )
}