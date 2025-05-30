import { NextResponse } from 'next/server'

const AIRTABLE_BASE_ID = 'appoZEsQfRUei49i9'
const AIRTABLE_TABLE_ID = 'tbliPwIegAJ1gefKq'
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

export async function GET() {
  try {
    if (!AIRTABLE_API_KEY) {
      console.error('AIRTABLE_API_KEY is not configured')
      return NextResponse.json({ error: 'Airtable API key not configured' }, { status: 500 })
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?view=Grid%20view`,
      {
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.error('Failed to fetch from Airtable:', response.status, response.statusText)
      return NextResponse.json({ error: 'Failed to fetch ideas' }, { status: 500 })
    }

    const data = await response.json()
    
    // Transform Airtable data to match expected format
    const ideas = data.records.map((record: any) => ({
      id: record.id,
      title: record.fields.title || '',
      slug: record.fields.slug || '',
      description: record.fields.description || '',
      problem_statement: record.fields.problem_statement || '',
      category: record.fields['name (from category)'] || record.fields.category || '',
      status: record.fields.status || '',
      difficulty: record.fields.difficulty || '',
      submitted_by_name: record.fields.submitted_by_name || '',
      submitted_by_email: record.fields.submitted_by_email || '',
      mvp_features: record.fields.mvp_features || '',
      target_audience: record.fields.target_audience || '',
      prd_content: record.fields.prd_content || '',
      created_at: record.fields.created_at || '',
      updated_at: record.fields.updated_at || ''
    }))

    return NextResponse.json(ideas)
  } catch (error) {
    console.error('Error fetching ideas from Airtable:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}