import { NextRequest, NextResponse } from "next/server"
import base from "@/lib/airtable-client"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      teamName,
      track,
      selectedIdea,
      experience,
      submissionLink,
      githubRepo
    } = body

    // Validate required fields
    if (!name || !email || !track) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and track are required' },
        { status: 400 }
      )
    }

    // selectedIdea is only required for vibe-coders track
    if (track === 'vibe-coders' && !selectedIdea) {
      return NextResponse.json(
        { error: 'Selected idea is required for Vibe Coders track' },
        { status: 400 }
      )
    }

    // Submit to Airtable
    const recordData: Record<string, string> = {
      "Name": name,
      "Email": email,
      "Team Name": teamName || "",
      "Challenge Track": track,
      "Prior AI/Development Experience": experience || "",
      "Project Submission Link": submissionLink || "",
      "GitHub Repository": githubRepo || "",
      "Submission Date": new Date().toISOString()
    }

    // Only include Project Idea for vibe-coders track
    if (track === 'vibe-coders' && selectedIdea) {
      recordData["Project Idea"] = selectedIdea
    }

    const record = await base("Hackathon Submissions").create(recordData)

    return NextResponse.json(
      { 
        success: true, 
        message: "Registration submitted successfully!",
        recordId: record.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error submitting hackathon registration:", error)
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 }
    )
  }
}