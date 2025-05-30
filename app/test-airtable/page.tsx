import { getIdeas, getCategories } from "@/app/actions/idea-actions"
import { fetchAllRecords } from "@/lib/airtable-utils"

export default async function TestAirtablePage() {
  try {
    // Test fetching categories
    const categories = await getCategories()

    // Test fetching ideas
    const ideas = await getIdeas()

    // Test fetching raw data
    const rawCategories = await fetchAllRecords("categories")
    const rawIdeas = await fetchAllRecords("ideas")

    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Airtable Data Test</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Categories (via getCategories)</h2>
            <pre className="bg-white border border-gray-200 p-4 rounded overflow-auto text-sm text-gray-800 shadow-sm">
              {JSON.stringify(categories, null, 2)}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ideas (via getIdeas)</h2>
            <pre className="bg-white border border-gray-200 p-4 rounded overflow-auto text-sm text-gray-800 shadow-sm">
              {JSON.stringify(ideas, null, 2)}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Raw Categories Data</h2>
            <pre className="bg-white border border-gray-200 p-4 rounded overflow-auto text-sm text-gray-800 shadow-sm">
              {JSON.stringify(rawCategories, null, 2)}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Raw Ideas Data</h2>
            <pre className="bg-white border border-gray-200 p-4 rounded overflow-auto text-sm text-gray-800 shadow-sm">
              {JSON.stringify(rawIdeas, null, 2)}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Environment Check</h2>
            <div className="bg-white border border-gray-200 p-4 rounded shadow-sm">
              <p className="text-gray-800">AIRTABLE_API_KEY: {process.env.AIRTABLE_API_KEY ? "✓ Set" : "✗ Missing"}</p>
              <p className="text-gray-800">AIRTABLE_BASE_ID: {process.env.AIRTABLE_BASE_ID ? "✓ Set" : "✗ Missing"}</p>
            </div>
          </section>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Airtable Connection Error</h1>
        <div className="bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded shadow-sm">
          <p className="font-bold">Error Details:</p>
          <pre className="mt-2 text-sm overflow-auto text-gray-700">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Troubleshooting Steps:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Check that your AIRTABLE_API_KEY is set in your environment variables</li>
            <li>Check that your AIRTABLE_BASE_ID is correct</li>
            <li>Verify that your Airtable base has tables named "categories" and "ideas"</li>
            <li>Ensure your API key has permission to read from the base</li>
          </ul>
        </div>
      </div>
    )
  }
}
