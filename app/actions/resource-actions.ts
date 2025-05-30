"use server"

import { fetchAllRecords, fetchRecordsWithFilter } from "@/lib/airtable-utils"

export async function getToolGuides() {
  try {
    return await fetchAllRecords("resource_tool_guides")
  } catch (error) {
    console.error("Error fetching tool guides:", error)
    return []
  }
}

export async function getHowToGuides() {
  try {
    return await fetchAllRecords("resource_how_to_guides")
  } catch (error) {
    console.error("Error fetching how-to guides:", error)
    return []
  }
}

export async function getHowToGuideBySlug(slug: string) {
  try {
    const records = await fetchRecordsWithFilter("resource_how_to_guides", `{slug}='${slug}'`)
    return records.length > 0 ? records[0] : null
  } catch (error) {
    console.error("Error fetching how-to guide by slug:", error)
    return null
  }
}

export async function getExistingResources() {
  try {
    return await fetchAllRecords("resource_existing_docs_pocs")
  } catch (error) {
    console.error("Error fetching existing resources:", error)
    return []
  }
}
