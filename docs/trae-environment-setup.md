# Environment Setup Guide for Trae

## Quick Start Checklist for Trae Builder MCP Agent

### Step 1: Environment Variables Collection
Ask the user for these specific values:

1. **Airtable API Key**
   - Prompt: "I need your Airtable API key. You can find this in your Airtable account settings under 'Developer' section. It should start with 'pat' or 'key'. Please provide it:"
   - Variable: `AIRTABLE_API_KEY`

2. **Airtable Base ID**
   - Prompt: "I need your Airtable Base ID. This can be found in your Airtable base URL (e.g., https://airtable.com/appXXXXXXXXXXXXXX). It's the part that starts with 'app'. Please provide it:"
   - Variable: `AIRTABLE_BASE_ID`

### Step 2: Create .env.local File
Create a `.env.local` file in the project root with:

\`\`\`bash
# Airtable Configuration
AIRTABLE_API_KEY=user_provided_key
AIRTABLE_BASE_ID=user_provided_base_id

# Development Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
\`\`\`

### Step 3: Installation Commands
Run these commands in sequence:

\`\`\`bash
# Install dependencies
npm install

# Verify installation
npm list --depth=0

# Check for vulnerabilities (optional)
npm audit
\`\`\`

### Step 4: Development Server
\`\`\`bash
# Start development server
npm run dev

# Alternative commands available:
# npm run build    # Build for production
# npm run start    # Start production server
# npm run lint     # Run ESLint
\`\`\`

### Step 5: Verification Steps
1. **Server Status**: Confirm server starts on http://localhost:3000
2. **Page Loading**: Test these routes:
   - `/` (Homepage)
   - `/ideas` (Project Ideas)
   - `/resources` (AI Tools & Resources)
   - `/about` (About Page)
   - `/hackathons` (Hackathon Info)
   - `/submit-idea` (Idea Submission Form)

3. **Airtable Integration**: Test the submit idea form to verify database connection

### Expected Success Indicators
- ✅ No errors during `npm install`
- ✅ Development server starts without errors
- ✅ All pages load with proper styling
- ✅ No console errors in browser developer tools
- ✅ Airtable form submission works (test with dummy data)

### Common Issues & Solutions
- **Missing environment variables**: Ensure `.env.local` is in project root
- **Port conflicts**: If 3000 is busy, Next.js will suggest alternative port
- **Airtable errors**: Verify API key and Base ID are correct
- **Styling issues**: Clear browser cache and restart dev server

### Project Dependencies Overview
Key packages that should be installed:
- `next` (14.0.3) - React framework
- `react` & `react-dom` (^18) - React library
- `typescript` (^5) - TypeScript support
- `tailwindcss` (^3.3.0) - CSS framework
- `airtable` (^0.12.2) - Database integration
- `framer-motion` (^10.16.4) - Animations
- `lucide-react` (^0.292.0) - Icons

Total dependencies: ~25 packages
Installation time: ~2-3 minutes on average connection
