"use server"

import { fetchAllRecords, fetchRecordsWithFilter } from "@/lib/airtable-utils"

export async function getHackathons() {
  try {
    return await fetchAllRecords("hackathons")
  } catch (error) {
    console.error("Error fetching hackathons:", error)
    return []
  }
}

export async function getUpcomingHackathons() {
  try {
    // Get current date in ISO format
    const now = new Date().toISOString()

    // Filter for hackathons with start_date greater than now
    return await fetchRecordsWithFilter("hackathons", `{start_date} > '${now}'`)
  } catch (error) {
    console.error("Error fetching upcoming hackathons:", error)
    return []
  }
}

export async function getHackathonBySlug(slug: string) {
  try {
    const records = await fetchRecordsWithFilter("hackathons", `{slug}='${slug}'`)
    return records.length > 0 ? records[0] : null
  } catch (error) {
    console.error("Error fetching hackathon by slug:", error)
    return null
  }
}
