"use server"
import { fetchAllRecords, fetchRecordsWithFilter } from "@/lib/airtable-utils"

export async function getIdeas(
  options: {
    categories?: string[]
    difficulties?: string[]
    searchQuery?: string
  } = {},
) {
  try {
    // Build filter formula if needed
    const filterFormulas = []

    if (options.categories && options.categories.length > 0) {
      const categoryFilter = `OR(${options.categories.map((cat) => `{name (from category)}='${cat}'`).join(",")})`
      filterFormulas.push(categoryFilter)
    }

    if (options.difficulties && options.difficulties.length > 0) {
      const difficultyFilter = `OR(${options.difficulties.map((diff) => `{difficulty}='${diff}'`).join(",")})`
      filterFormulas.push(difficultyFilter)
    }

    if (options.searchQuery) {
      const searchFilter = `OR(SEARCH('${options.searchQuery}', LOWER({title})), SEARCH('${options.searchQuery}', LOWER({description})))`
      filterFormulas.push(searchFilter)
    }

    // Only show approved ideas
    filterFormulas.push(`{status}='approved'`)

    // Combine all filters with AND
    const finalFilter = filterFormulas.length > 0 ? `AND(${filterFormulas.join(",")})` : `{status}='approved'`

    // Fetch ideas based on filter
    return await fetchRecordsWithFilter("ideas", finalFilter)
  } catch (error) {
    console.error("Error fetching ideas:", error)
    return []
  }
}

export async function getIdeaBySlug(slug: string) {
  try {
    console.log("🔍 Fetching idea with slug:", slug)
    const records = await fetchRecordsWithFilter("ideas", `{slug}='${slug}'`)
    console.log("📊 Records found:", records.length)

    if (records.length > 0) {
      console.log("✅ Idea found:", records[0].title || records[0].fields?.title)
      console.log("📝 Full record:", JSON.stringify(records[0], null, 2))
      return records[0]
    } else {
      console.log("❌ No idea found with slug:", slug)
      return null
    }
  } catch (error) {
    console.error("❌ Error fetching idea by slug:", error)
    return null
  }
}

export async function getCategories() {
  try {
    return await fetchAllRecords("categories")
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}
