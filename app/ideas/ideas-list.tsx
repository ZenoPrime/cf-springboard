"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Shuffle, Filter, X } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Helper function to get field value regardless of data structure
const getField = (item: any, field: string) => {
  if (!item) return null
  return item[field] !== undefined ? item[field] : item.fields && item.fields[field]
}

// Helper function to get category name from the lookup field
const getCategoryName = (item: any): string => {
  // Try multiple possible field names for category
  const categoryName =
    getField(item, "name (from category)") ||
    getField(item, "category") ||
    (getField(item, "category") && typeof getField(item, "category") === "object"
      ? getField(item, "category")[0]
      : null)

  return categoryName || "Uncategorized"
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

// Get shorthand version of category name
const getCategoryShortName = (category: string) => {
  const shortNames: Record<string, string> = {
    "Community DAOs": "Community",
    "Developer Infrastructure": "Dev Infra",
    "Security Tools": "Security",
  }

  return shortNames[category] || category
}

// Get category color class for badges
const getCategoryColorClass = (category: string) => {
  const colorMap: Record<string, string> = {
    "Community DAOs": "bg-card-purple",
    Consumer: "bg-card-green",
    DeFi: "bg-card-blue",
    DePIN: "bg-card-orange",
    "Developer Infrastructure": "bg-card-coral",
    Gaming: "bg-card-yellow",
    Payments: "bg-card-green",
    "Security Tools": "bg-card-blue",
    Social: "bg-card-coral",
  }

  return `${colorMap[category] || "bg-card-blue"} text-white/80`
}

export default function IdeasList({
  initialIdeas,
  categories,
  difficulties,
}: {
  initialIdeas: any[]
  categories: string[]
  difficulties: string[]
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchParam = searchParams.get("search")
  const randomParam = searchParams.get("random")

  // Parse URL parameters for filters
  const getParamArray = (param: string | null): string[] => {
    if (!param) return []
    return param.split(",")
  }

  const initialCategoryFilters = getParamArray(searchParams.get("categories"))
  const initialDifficultyFilters = getParamArray(searchParams.get("difficulties"))

  // State for filters
  const [searchQuery, setSearchQuery] = useState(searchParam || "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategoryFilters)
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(initialDifficultyFilters)
  const [isLoading, setIsLoading] = useState(true)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Count active filters
  const activeFilterCount = selectedCategories.length + selectedDifficulties.length

  // Filter ideas based on all criteria
  const filteredIdeas = initialIdeas.filter((idea) => {
    const ideaCategory = getCategoryName(idea)
    const ideaDifficulty = getField(idea, "difficulty")
    const ideaTitle = getField(idea, "title") || ""
    const ideaDescription = getField(idea, "description") || ""

    // Debug logging (remove in production)
    if (selectedCategories.length > 0 || selectedDifficulties.length > 0) {
      console.log("Filtering idea:", {
        title: ideaTitle,
        category: ideaCategory,
        difficulty: ideaDifficulty,
        selectedCategories,
        selectedDifficulties,
      })
    }

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(ideaCategory)
    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(ideaDifficulty)
    const matchesSearch =
      !searchQuery ||
      ideaTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ideaDescription.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesDifficulty && matchesSearch
  })

  // Handle random idea selection
  useEffect(() => {
    if (randomParam === "true" && initialIdeas.length > 0) {
      const randomIndex = Math.floor(Math.random() * initialIdeas.length)
      const randomIdea = initialIdeas[randomIndex]
      const slug = getField(randomIdea, "slug")
      if (slug) {
        router.push(`/ideas/${slug}`)
      }
    }
  }, [randomParam, router, initialIdeas])

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Update URL with filters
  const updateFilters = () => {
    const params = new URLSearchParams()

    if (searchQuery) params.set("search", searchQuery)
    if (selectedCategories.length > 0) params.set("categories", selectedCategories.join(","))
    if (selectedDifficulties.length > 0) params.set("difficulties", selectedDifficulties.join(","))

    router.push(`/ideas?${params.toString()}`)
  }

  // Handle filter changes
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty) ? prev.filter((d) => d !== difficulty) : [...prev, difficulty],
    )
  }

  // Apply filters when they change
  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilters()
    }, 100) // Small delay to batch updates

    return () => clearTimeout(timer)
  }, [selectedCategories, selectedDifficulties, searchQuery])

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters()
  }

  // Handle random idea
  const handleRandomIdea = () => {
    router.push("/ideas?random=true")
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedDifficulties([])
    setSearchQuery("")
    router.push("/ideas")
  }

  // Add this useEffect after the existing ones to debug data structure
  useEffect(() => {
    console.log("Initial ideas data structure:", initialIdeas.slice(0, 2))
    console.log("Available categories:", categories)
    console.log("Available difficulties:", difficulties)
  }, [initialIdeas, categories, difficulties])

  return (
    <>
      {/* Mobile filter toggle - only visible on mobile */}
      <div className="flex md:hidden justify-between items-center">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <Badge className="ml-1 bg-primary text-primary-foreground">{activeFilterCount}</Badge>
          )}
        </Button>

        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground">
            Clear all
          </Button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className={`md:w-72 flex-shrink-0 ${showMobileFilters ? "block" : "hidden md:block"}`}>
          <div className="bg-[#faf8f3] rounded-lg border p-4 sticky top-20 space-y-4">
            {/* Search bar moved to filters column */}
            <form onSubmit={handleSearch} className="space-y-2">
              <div className="font-medium text-black mb-1 font-mono uppercase text-sm">Search</div>
              <div className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-gray-200 bg-white text-black placeholder:text-gray-500"
                />
                <Button type="submit" className="bg-black text-white hover:bg-black/90" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button
                  type="button"
                  className="bg-black text-white hover:bg-black/90"
                  size="icon"
                  onClick={handleRandomIdea}
                  title="Get a random idea"
                >
                  <Shuffle className="h-4 w-4" />
                  <span className="sr-only">Random Idea</span>
                </Button>
              </div>
            </form>

            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-black font-mono uppercase">Filters</h2>
              {activeFilterCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-8 text-gray-700">
                  Clear all
                </Button>
              )}
            </div>

            <Accordion type="multiple" defaultValue={["categories", "difficulties"]} className="space-y-2">
              {/* Categories */}
              <AccordionItem value="categories" className="border-b-0">
                <AccordionTrigger className="py-2 hover:no-underline text-black">
                  <span className="font-medium font-mono uppercase text-sm">Category</span>
                  {selectedCategories.length > 0 && (
                    <Badge className="ml-2 bg-black text-white">{selectedCategories.length}</Badge>
                  )}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-3">
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                          className="border-gray-400 data-[state=checked]:border-gray-400"
                        />
                        <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer flex-1 text-gray-800">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Difficulties */}
              <AccordionItem value="difficulties" className="border-b-0">
                <AccordionTrigger className="py-2 hover:no-underline text-black">
                  <span className="font-medium font-mono uppercase text-sm">Difficulty</span>
                  {selectedDifficulties.length > 0 && (
                    <Badge className="ml-2 bg-black text-white">{selectedDifficulties.length}</Badge>
                  )}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-3">
                  <div className="space-y-2">
                    {difficulties.map((difficulty) => (
                      <div key={difficulty} className="flex items-center space-x-2">
                        <Checkbox
                          id={`difficulty-${difficulty}`}
                          checked={selectedDifficulties.includes(difficulty)}
                          onCheckedChange={() => toggleDifficulty(difficulty)}
                          className="border-gray-400 data-[state=checked]:border-gray-400"
                        />
                        <Label
                          htmlFor={`difficulty-${difficulty}`}
                          className="text-sm cursor-pointer flex-1 text-gray-800"
                        >
                          {difficulty}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Mobile close button */}
            <div className="mt-4 md:hidden">
              <Button className="w-full" variant="outline" onClick={() => setShowMobileFilters(false)}>
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="flex-1">
          {/* Active filters display */}
          {activeFilterCount > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {selectedCategories.map((category) => (
                <Badge key={`cat-${category}`} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => toggleCategory(category)} />
                </Badge>
              ))}
              {selectedDifficulties.map((difficulty) => (
                <Badge key={`diff-${difficulty}`} variant="secondary" className="flex items-center gap-1">
                  {difficulty}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => toggleDifficulty(difficulty)} />
                </Badge>
              ))}
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              // Skeleton loading state
              Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="skeleton h-6 w-3/4 rounded"></div>
                      <div className="skeleton h-5 w-16 rounded-full"></div>
                    </div>
                    <div className="skeleton h-4 w-full rounded mt-2"></div>
                    <div className="skeleton h-4 w-5/6 rounded mt-1"></div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="flex-grow"></div>
                    <div className="flex gap-2 mt-auto pt-4">
                      <div className="skeleton h-4 w-1/3 rounded"></div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="skeleton h-9 w-full rounded"></div>
                  </CardFooter>
                </Card>
              ))
            ) : filteredIdeas.length > 0 ? (
              filteredIdeas.map((idea) => {
                const ideaId = idea.id
                const ideaSlug = getField(idea, "slug")
                const ideaTitle = getField(idea, "title")
                const ideaDescription = getField(idea, "description")
                const ideaCategory = getCategoryName(idea)
                const ideaDifficulty = getField(idea, "difficulty")

                return (
                  <Card
                    key={ideaId}
                    className="flex flex-col group hover:shadow-xl transition-all duration-300 border bg-white"
                    style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
                  >
                    <CardHeader className="relative">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-xl font-mono uppercase tracking-tight text-black group-hover:text-black transition-all">
                          {ideaTitle}
                        </CardTitle>
                        <Badge
                          className={`whitespace-nowrap text-xs px-2 py-0.5 ${getCategoryColorClass(ideaCategory)}`}
                        >
                          {getCategoryShortName(ideaCategory)}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2 text-gray-600">{ideaDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div className="flex-grow"></div>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {ideaDifficulty && (
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-0.5 font-mono bg-gray-100 font-normal text-gray-600 hover:font-light transition-all"
                            style={{ filter: "none", textShadow: "none" }}
                          >
                            {ideaDifficulty}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className="w-full bg-black text-white hover:bg-black/90 group-hover:scale-105 transition-transform"
                      >
                        <Link href={`/ideas/${ideaSlug}`}>View Details & PRD</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No ideas found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria to find more ideas.
                </p>
                <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/submit-idea">Have an Idea? Submit it Here!</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
