import Airtable from "airtable"

// Replace with your Airtable API key and Base ID
const AIRTABLE_API_KEY = "patuIzoXh4Frorz8Y.176dce2a2d840d504a819a186fbeb5574b6a27f90a52599e33f6b35328ca5ac5"
const AIRTABLE_BASE_ID = "appoZEsQfRUei49i9"

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  console.error("Error: Airtable API key and Base ID must be set in environment variables.")
  process.exit(1)
}

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)

export default async function checkAirtableIdea(slug) {
  try {
    const records = await base("ideas")
      .select({
        filterByFormula: `{slug}='${slug}'`,
      })
      .all()

    if (records.length === 0) {
      console.log(`No idea found with slug '${slug}'.`)
      return null
    } else {
      const record = records[0]
      console.log(`Idea found with slug '${slug}':`)
      console.log(JSON.stringify(record.fields, null, 2))
      return record
    }
  } catch (error) {
    console.error("Error fetching data from Airtable:", error)
    return null
  }
}

// Only execute if this file is run directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  const IDEA_SLUG = "agricultural-supply-chain-tracking-system"
  checkAirtableIdea(IDEA_SLUG)
}
