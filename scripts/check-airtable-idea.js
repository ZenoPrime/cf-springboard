import Airtable from "airtable"

const airtableApiKey = process.env.AIRTABLE_API_KEY;
const airtableBaseId = process.env.AIRTABLE_BASE_ID;

if (!airtableApiKey || !airtableBaseId) {
  console.error('❌ Missing required environment variables:');
  if (!airtableApiKey) console.error('  - AIRTABLE_API_KEY');
  if (!airtableBaseId) console.error('  - AIRTABLE_BASE_ID');
  console.error('Please check your .env.local file.');
  process.exit(1);
}

const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId)

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
