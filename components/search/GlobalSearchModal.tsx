"use client"

import React, { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Lightbulb,
  Package,
  Clock,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react"
import { getAiToolsData } from "@/lib/ai-tools-data"

interface SearchResult {
  id: string
  title: string
  description: string
  type: "idea" | "kit" | "tool"
  category?: string
  difficulty?: string
  duration?: string
  href: string
  tags?: string[]
}

interface GlobalSearchModalProps {
  ideas?: any[]
  builderKits?: any[]
}

export default function GlobalSearchModal({ ideas = [], builderKits = [] }: GlobalSearchModalProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const router = useRouter()

  // Get AI tools data
  const [aiTools, setAiTools] = useState<any[]>([])

  // Fetch AI tools data
  useEffect(() => {
    const fetchAiTools = async () => {
      try {
        const tools = await getAiToolsData()
        setAiTools(tools)
      } catch (error) {
        console.error("Error fetching AI tools:", error)
        setAiTools([])
      }
    }
    fetchAiTools()
  }, [])

  // Keyboard shortcut handler
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const searchResults: SearchResult[] = []

    // Search through ideas
    ideas.forEach((idea) => {
      const title = idea.title || ""
      const description = idea.description || ""
      const category = String(idea["name (from category)"] || idea.category || "")
      
      if (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query)
      ) {
        searchResults.push({
          id: idea.id || idea.slug,
          title,
          description: description.substring(0, 100) + (description.length > 100 ? "..." : ""),
          type: "idea",
          category,
          difficulty: idea.difficulty,
          href: `/ideas/${idea.slug}`,
        })
      }
    })

    // Search through builder kits
    builderKits.forEach((kit) => {
      const title = kit.title || ""
      const description = kit.description || ""
      const category = String(kit.category || "")
      const tags = kit.tags || []
      
      if (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query) ||
        tags.some((tag: string) => tag.toLowerCase().includes(query))
      ) {
        searchResults.push({
          id: kit.id,
          title,
          description: description.substring(0, 100) + (description.length > 100 ? "..." : ""),
          type: "kit",
          category,
          difficulty: kit.difficulty,
          duration: kit.duration,
          href: `/resources/kits#${kit.id}`,
          tags: kit.tags,
        })
      }
    })

    // Search through AI tools
    aiTools.forEach((tool) => {
      const name = tool.name || ""
      const description = tool.description || ""
      const category = tool.category || ""
      
      if (
        name.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query)
      ) {
        searchResults.push({
          id: tool.name,
          title: name,
          description: description.substring(0, 100) + (description.length > 100 ? "..." : ""),
          type: "tool",
          category,
          href: `/resources/ai-tools#${tool.name.toLowerCase().replace(/\s+/g, '-')}`,
        })
      }
    })

    // Sort results by relevance (exact matches first, then partial matches)
    searchResults.sort((a, b) => {
      const aExact = a.title.toLowerCase().includes(query) ? 1 : 0
      const bExact = b.title.toLowerCase().includes(query) ? 1 : 0
      return bExact - aExact
    })

    setResults(searchResults.slice(0, 20)) // Limit to 20 results
  }, [ideas, builderKits, aiTools])

  // Update search results when query changes
  useEffect(() => {
    performSearch(query)
  }, [query, performSearch])

  // Handle item selection
  const handleSelect = (href: string) => {
    setOpen(false)
    setQuery("")
    router.push(href)
  }

  // Get icon for result type
  const getResultIcon = (type: string) => {
    switch (type) {
      case "idea":
        return <Lightbulb className="h-4 w-4" />
      case "kit":
        return <Package className="h-4 w-4" />
      case "tool":
        return <Zap className="h-4 w-4" />
      default:
        return <Search className="h-4 w-4" />
    }
  }

  // Get result type label
  const getResultTypeLabel = (type: string) => {
    switch (type) {
      case "idea":
        return "Project Idea"
      case "kit":
        return "Builder Kit"
      case "tool":
        return "AI Tool"
      default:
        return "Result"
    }
  }

  // Group results by type
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.type]) {
      acc[result.type] = []
    }
    acc[result.type].push(result)
    return acc
  }, {} as Record<string, SearchResult[]>)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] border bg-white/95 backdrop-blur-md shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Global Search</DialogTitle>
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <CommandInput
              placeholder="Search ideas, builder kits, and AI tools..."
              value={query}
              onValueChange={setQuery}
              className="h-14 text-base border-0 border-b border-border/20 bg-transparent font-mono"
            />
            <CommandList className="max-h-[500px] p-2">
          <CommandEmpty>
            <div className="flex flex-col items-center gap-4 py-12">
              <Search className="h-12 w-12 text-muted-foreground/50" />
              <div className="text-center">
                <p className="text-base font-medium text-foreground mb-1 font-mono">
                  {query ? "No results found" : "Start your search"}
                </p>
                <p className="text-sm text-muted-foreground font-mono">
                  {query ? "Try different keywords or browse categories" : "Search for ideas, builder kits, and AI tools"}
                </p>
              </div>
            </div>
          </CommandEmpty>

          {/* Project Ideas */}
          {groupedResults.idea && groupedResults.idea.length > 0 && (
            <CommandGroup heading="Project Ideas">
              {groupedResults.idea.map((result) => (
                <CommandItem
                  key={result.id}
                  value={`${result.title} ${result.description} ${result.category}`}
                  onSelect={() => handleSelect(result.href)}
                  className="flex items-start gap-4 p-4 cursor-pointer rounded-lg hover:bg-accent/50 transition-all duration-200 border border-transparent hover:border-border/30 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {getResultIcon(result.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-base truncate font-mono">{result.title}</h4>
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        {getResultTypeLabel(result.type)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                      {result.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {result.category && (
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {result.category}
                        </span>
                      )}
                      {result.difficulty && (
                        <span className="flex items-center gap-1">
                          <Zap className="h-3 w-3" />
                          {result.difficulty}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Builder Kits */}
          {groupedResults.kit && groupedResults.kit.length > 0 && (
            <>
              {groupedResults.idea && groupedResults.idea.length > 0 && <CommandSeparator />}
              <CommandGroup heading="Builder Kits">
                {groupedResults.kit.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={`${result.title} ${result.description} ${result.category} ${result.tags?.join(" ") || ""}`}
                    onSelect={() => handleSelect(result.href)}
                    className="flex items-start gap-4 p-4 cursor-pointer rounded-lg hover:bg-accent/50 transition-all duration-200 border border-transparent hover:border-border/30 hover:shadow-sm"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {getResultIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-base truncate font-mono">{result.title}</h4>
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {getResultTypeLabel(result.type)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {result.category && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {result.category}
                          </span>
                        )}
                        {result.difficulty && (
                          <span className="flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            {result.difficulty}
                          </span>
                        )}
                        {result.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {result.duration}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {/* AI Tools */}
          {groupedResults.tool && groupedResults.tool.length > 0 && (
            <>
              {(groupedResults.idea?.length || groupedResults.kit?.length) && <CommandSeparator />}
              <CommandGroup heading="AI Tools">
                {groupedResults.tool.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={`${result.title} ${result.description} ${result.category}`}
                    onSelect={() => handleSelect(result.href)}
                    className="flex items-start gap-4 p-4 cursor-pointer rounded-lg hover:bg-accent/50 transition-all duration-200 border border-transparent hover:border-border/30 hover:shadow-sm"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {getResultIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-base truncate font-mono">{result.title}</h4>
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {getResultTypeLabel(result.type)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {result.category && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {result.category}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}