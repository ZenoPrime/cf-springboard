"use client"

import FloatingIdeasHero from "@/components/FloatingIdeasHero"
import ValueProposition from "@/components/homepage/ValueProposition"
import CategoryShowcase from "@/components/homepage/CategoryShowcase"
import BuilderKits from "@/components/homepage/BuilderKits"
import HackathonTeaser from "@/components/homepage/HackathonTeaser"

// Complete categories from the Idea Bank document
const categories = [
  { id: "1", name: "Community DAOs", count: 15, color: "card-purple" },
  { id: "2", name: "Consumer", count: 28, color: "card-green" },
  { id: "3", name: "DeFi", count: 32, color: "card-blue" },
  { id: "4", name: "DePIN", count: 18, color: "card-orange" },
  { id: "5", name: "Developer Infrastructure", count: 22, color: "card-coral" },
  { id: "6", name: "Gaming", count: 24, color: "card-yellow" },
  { id: "7", name: "Payments", count: 19, color: "card-green" },
  { id: "8", name: "Security Tools", count: 16, color: "card-blue" },
  { id: "9", name: "Social", count: 26, color: "card-coral" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Floating Ideas */}
      <FloatingIdeasHero />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Categories Section */}
      <CategoryShowcase categories={categories} />

      {/* Builder Kits Section */}
      <BuilderKits />

      {/* Hackathon Teaser Section */}
      <HackathonTeaser />
    </div>
  )
}
