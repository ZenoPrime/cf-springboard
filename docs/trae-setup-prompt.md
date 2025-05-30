# Trae Builder MCP Agent Setup Prompt

Hello Trae! I need your help setting up and running the Springboard project locally. This is a Next.js application that serves as a platform for Web3 project ideas and resources.

## Project Overview
Springboard is a Next.js 14 application with:
- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Airtable for data storage, Next.js API routes
- **Features**: PWA support, responsive design, AI tools directory, project ideas hub

## Setup Tasks Required

### 1. Environment Variables & API Keys
Please ask me for the following environment variables and help me set them up:

\`\`\`bash
# Required for Airtable integration
AIRTABLE_API_KEY=patuIzoXh4Frorz8Y.176dce2a2d840d504a819a186fbeb5574b6a27f90a52599e33f6b35328ca5ac5
AIRTABLE_BASE_ID=appoZEsQfRUei49i9

# Optional: For development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
\`\`\`

**What you need to ask me:**
- "Please provide your Airtable API key (found in your Airtable account settings)"
- "Please provide your Airtable Base ID (found in your Airtable base URL)"
- "Do you have any additional environment variables for this project?"

### 2. Dependencies Installation
After getting the environment variables, please:
- Install Node.js dependencies using `npm install`
- Verify all packages are installed correctly
- Check for any peer dependency warnings

### 3. Local Development Server
Finally:
- Start the development server using `npm run dev`
- Verify the application loads at `http://localhost:3000`
- Check that all pages are accessible (Home, Ideas, Resources, About, etc.)
- Confirm Airtable integration is working by testing the submit idea form

## Project Structure Reference
\`\`\`
springboard/
├── app/                    # Next.js App Router pages
│   ├── ideas/             # Project ideas section
│   ├── resources/         # AI tools and guides
│   ├── about/             # About page
│   ├── hackathons/        # Hackathon information
│   └── api/               # API routes
├── components/            # Reusable React components
├── lib/                   # Utility functions and configs
├── docs/                  # Documentation
└── public/               # Static assets
\`\`\`

## Expected Outcomes
After successful setup:
1. ✅ All environment variables configured
2. ✅ Dependencies installed without errors
3. ✅ Development server running on localhost:3000
4. ✅ All pages loading correctly
5. ✅ Airtable integration functional
6. ✅ No console errors in browser

## Troubleshooting Notes
- If Airtable connection fails, verify API key and Base ID
- If styling looks broken, ensure Tailwind CSS is properly configured
- If PWA features don't work, check manifest.json and service worker

## Additional Information
- The project uses TypeScript with strict mode enabled
- Styling is handled by Tailwind CSS with custom design tokens
- The application is PWA-ready with offline capabilities
- All components follow the established design system

Please start by asking me for the required environment variables, then proceed with the installation and setup process. Let me know if you encounter any issues or need clarification on any part of the setup!
