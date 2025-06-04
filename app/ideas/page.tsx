import { Suspense } from "react"
import IdeasList from "./ideas-list"
import { getIdeas, getCategories } from "@/app/actions/idea-actions"

export default async function IdeasPage() {
  try {
    // Fetch data from Airtable using our server actions
    const ideas = await getIdeas()
    const categoriesData = await getCategories()

    // Ideas and categories fetched successfully

    // Extract category names for filtering - handle different data structures
    const categories = categoriesData
      .map((cat) => {
        return cat.name || cat.fields?.name || "Unknown"
      })
      .filter(Boolean)

    // Extract unique difficulties from ideas - handle different data structures
    const difficulties = [
      ...new Set(
        ideas
          .map((idea) => {
            return getField(idea, "difficulty")
          })
          .filter(Boolean),
      ),
    ].sort()

    // Categories and difficulties processed

    return (
      <div className="container pt-24 pb-12 md:pt-28 md:pb-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Christex Foundation Idea Bank
            </h1>
            <p className="text-muted-foreground md:text-xl font-mono">
              Find inspiration for your next build with these vetted project ideas.
            </p>
          </div>

          <Suspense fallback={<div>Loading ideas...</div>}>
            <IdeasList initialIdeas={ideas} categories={categories} difficulties={difficulties} />
          </Suspense>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error in IdeasPage:", error)
    return (
      <div className="container pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-4">Error Loading Ideas</h1>
        <p className="text-gray-700 mb-4">We encountered an error while loading the ideas. Please try again later.</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          {error instanceof Error ? error.message : "Unknown error"}
        </pre>
      </div>
    )
  }
}

// Helper function to get field value regardless of data structure
const getField = (item: any, field: string) => {
  if (!item) return null
  return item[field] !== undefined ? item[field] : item.fields && item.fields[field]
}
