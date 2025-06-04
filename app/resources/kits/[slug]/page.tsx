"use client"

import { useState, use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Target, Zap, CheckCircle2, ExternalLink } from "lucide-react"
import { getBuilderKitBySlug } from "@/lib/builder-kits-data"
import { KitSectionCard } from "@/components/builder-kits/KitSection"
import { KitProgress } from "@/components/builder-kits/KitProgress"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BuilderKitPage({ params }: PageProps) {
  const { slug } = use(params)
  const kit = getBuilderKitBySlug(slug)
  const [completedSections, setCompletedSections] = useState<string[]>([])

  if (!kit) {
    notFound()
  }

  const toggleSectionComplete = (sectionId: string) => {
    setCompletedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-700 border-green-200"
      case "intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "advanced":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/resources" className="hover:text-gray-900 font-mono">
            Resources
          </Link>
          <span>/</span>
          <Link href="/resources/kits" className="hover:text-gray-900 font-mono">
            Builder Kits
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-mono">{kit.title}</span>
        </div>

        {/* Back Button */}
        <Button variant="outline" asChild className="border-gray-300 font-mono">
          <Link href="/resources">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </Button>

        {/* Kit Header */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className={`font-mono text-sm ${getDifficultyColor(kit.difficulty)}`}>{kit.difficulty}</Badge>
              <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 font-mono text-sm">
                {kit.category}
              </Badge>
              {kit.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-gray-50 text-gray-600 border-gray-200 font-mono text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-black font-mono uppercase">
              {kit.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">{kit.description}</p>
          </div>

          {/* Kit Overview Cards */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Outcome Card - 60% width */}
            <Card className="border-2 border-gray-200 bg-white md:flex-[3]">
              <CardHeader>
                <CardTitle className="font-mono uppercase text-lg text-black flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Outcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">{kit.outcome_description}</p>
              </CardContent>
            </Card>

            {/* Duration Card - 20% width */}
            <Card className="border-2 border-gray-200 bg-white md:flex-1">
              <CardHeader>
                <CardTitle className="font-mono uppercase text-lg text-black flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">{kit.estimated_duration}</p>
                <p className="text-sm text-gray-600 mt-1">{kit.sections.length} sections</p>
              </CardContent>
            </Card>

            {/* Tools Card - 20% width */}
            <Card className="border-2 border-gray-200 bg-white md:flex-1">
              <CardHeader>
                <CardTitle className="font-mono uppercase text-lg text-black flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">{kit.tools_required.length} AI tools</p>
                <p className="text-sm text-gray-600 mt-1">
                  {kit.sections.reduce((total, section) => total + section.prompts.length, 0)} starter prompts
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Deliverables */}
          <Card className="border-2 border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="font-mono uppercase text-lg text-black">What You'll Create</CardTitle>
              <CardDescription>
                By the end of this kit, you'll have these professional deliverables ready to use.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {kit.final_deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Start Building CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/90 font-mono text-lg px-8 py-3"
              onClick={() => {
                const firstSection = document.getElementById(`section-${kit.sections[0]?.id}`);
                if (firstSection) {
                  firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  // Expand the first section if it's collapsed
                  const expandButton = firstSection.querySelector('[data-state="closed"]');
                  if (expandButton) {
                    (expandButton as HTMLElement).click();
                  }
                }
              }}
            >
              Start Building
              <Target className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Progress Tracker */}
        <KitProgress
          totalSections={kit.sections.length}
          completedSections={completedSections.length}
          sectionTitles={kit.sections.map((s) => s.title)}
          completedSectionIds={completedSections}
        />

        {/* Kit Sections */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-black font-mono uppercase tracking-tight">
              Build Your Brand Step by Step
            </h2>
            <p className="text-gray-600 font-mono">Follow these sections in order for the best results</p>
          </div>

          <div className="space-y-6">
            {kit.sections.map((section, index) => (
              <div key={section.id} id={`section-${section.id}`}>
                <KitSectionCard
                  section={section}
                  isCompleted={completedSections.includes(section.id)}
                  onToggleComplete={() => toggleSectionComplete(section.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tools Reference */}
        <Card className="border-2 border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="font-mono uppercase text-lg text-black">Tools You'll Use</CardTitle>
            <CardDescription>Quick access to all the AI tools featured in this kit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {kit.tools_required.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="font-medium text-gray-900">{tool}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Kits */}
        {kit.related_kits.length > 0 && (
          <Card className="border-2 border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="font-mono uppercase text-lg text-black">What's Next?</CardTitle>
              <CardDescription>Continue your journey with these related builder kits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {kit.related_kits.map((relatedKit) => (
                  <Button key={relatedKit} variant="outline" asChild className="border-gray-300 font-mono">
                    <Link href={`/resources/kits/${relatedKit}`}>
                      {relatedKit.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
