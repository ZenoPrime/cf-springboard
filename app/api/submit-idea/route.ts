import { NextResponse } from "next/server"
import base from "@/lib/airtable-client"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.title || !data.description || !data.problemSolved) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate a slug from the title
    const slug = data.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")

    // Prepare data for insertion
    const ideaData = {
      title: data.title,
      slug,
      description: data.description,
      problem_statement: data.problemSolved,
      category: data.category || null,
      status: "submitted",
      submitted_by_name: data.name || null,
      submitted_by_email: data.email || null,
      // Additional fields as needed
    }

    // Insert the data into Airtable
    try {
      await base("ideas").create([
        {
          fields: ideaData,
        },
      ])

      return NextResponse.json({ success: true, message: "Idea submitted successfully" })
    } catch (error) {
      console.error("Error submitting to Airtable:", error)
      return NextResponse.json({ error: "Failed to submit idea to Airtable" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error submitting idea:", error)
    return NextResponse.json({ error: "Failed to submit idea" }, { status: 500 })
  }
}
