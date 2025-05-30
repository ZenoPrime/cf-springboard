# Springboard - Your Launchpad for Digital Innovation

Springboard is a platform that provides vetted project ideas, resources, and hackathon information to kickstart your next build.

## Features

- **Idea Hub**: Browse through curated project ideas with detailed PRDs
- **Resource Center**: Access tool guides, how-to guides, and existing documentation
- **Hackathon Platform**: Stay updated on upcoming hackathons and events

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Airtable
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   - `AIRTABLE_API_KEY`: Your Airtable API key
   - `AIRTABLE_BASE_ID`: Your Airtable base ID
4. Run the development server: `npm run dev`

## Airtable Schema

The application uses the following tables in Airtable:

- **ideas**: Project ideas with details and PRDs
- **categories**: Categories for project ideas
- **resource_tool_guides**: Tool guides for the Resource Center
- **resource_how_to_guides**: How-to guides for the Resource Center
- **resource_existing_docs_pocs**: Links to existing documentation and POCs
- **hackathons**: Information about upcoming hackathons

## PWA Support

Springboard is a Progressive Web App (PWA) that can be installed on your device for offline access.
