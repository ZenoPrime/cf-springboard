"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { getIdeas, getCategories } from "@/app/actions/idea-actions"
import { builderKits } from "@/lib/builder-kits-data"

interface SearchContextType {
  ideas: any[]
  builderKits: any[]
  isLoading: boolean
}

const SearchContext = createContext<SearchContextType>({
  ideas: [],
  builderKits: [],
  isLoading: true,
})

export const useSearch = () => useContext(SearchContext)

interface SearchProviderProps {
  children: React.ReactNode
}

export default function SearchProvider({ children }: SearchProviderProps) {
  const [ideas, setIdeas] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [ideasData] = await Promise.all([
          getIdeas(),
        ])
        setIdeas(ideasData || [])
      } catch (error) {
        console.error("Error fetching search data:", error)
        setIdeas([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const contextValue: SearchContextType = {
    ideas,
    builderKits,
    isLoading,
  }

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}