import Airtable from "airtable"

// Initialize Airtable with the API key
const airtableApiKey = process.env.AIRTABLE_API_KEY
const airtableBaseId = process.env.AIRTABLE_BASE_ID

if (!airtableApiKey || !airtableBaseId) {
  throw new Error("Missing Airtable API key or Base ID")
}

// Initialize Airtable
const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId)

export default base
