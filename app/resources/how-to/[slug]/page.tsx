import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Mock data for how-to guides - would be replaced with Supabase data
const getHowToGuideBySlug = (slug: string) => {
  const guides = {
    "setting-up-nextjs-with-supabase": {
      id: "1",
      title: "Setting up a Next.js Project with Supabase",
      content: `
## Introduction

This guide will walk you through setting up a new Next.js project and connecting it to Supabase for authentication and data storage.

## Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn
- A Supabase account

## Step 1: Create a Next.js Project

First, let's create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
\`\`\`

## Step 2: Install Supabase Client

Install the Supabase JavaScript client:

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

## Step 3: Set Up Environment Variables

Create a \`.env.local\` file in the root of your project:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
\`\`\`

Replace the placeholders with your actual Supabase URL and anon key from your Supabase project dashboard.

## Step 4: Create a Supabase Client

Create a file called \`lib/supabaseClient.js\`:

\`\`\`javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
\`\`\`

## Step 5: Use Supabase in Your Application

Now you can import and use the Supabase client in your components:

\`\`\`javascript
import { supabase } from '../lib/supabaseClient'

// Example: Fetch data from a table
async function fetchData() {
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  if (error) console.error('Error fetching data:', error)
  else console.log('Data:', data)
}
\`\`\`

## Step 6: Implement Authentication

Here's a simple example of implementing email/password authentication:

\`\`\`javascript
// Sign up
async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (error) console.error('Error signing up:', error)
  else console.log('User signed up:', user)
}

// Sign in
async function signIn(email, password) {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  })
  
  if (error) console.error('Error signing in:', error)
  else console.log('User signed in:', user)
}

// Sign out
async function signOut() {
  const { error } = await supabase.auth.signOut()
  
  if (error) console.error('Error signing out:', error)
  else console.log('User signed out')
}
\`\`\`

## Conclusion

You now have a Next.js project connected to Supabase! You can use Supabase for authentication, database operations, storage, and more. Check out the [Supabase documentation](https://supabase.com/docs) for more advanced features and examples.
      `,
    },
    "responsive-ui-with-tailwind": {
      id: "2",
      title: "Building Responsive UIs with Tailwind CSS",
      content: `
## Introduction

This guide will show you how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.

## Prerequisites

- A Next.js project (or any web project)
- Basic understanding of HTML and CSS

## Step 1: Install Tailwind CSS

First, install Tailwind CSS and its dependencies:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Step 2: Configure Tailwind

Update your \`tailwind.config.js\` file:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Step 3: Add Tailwind to Your CSS

Add the Tailwind directives to your CSS file (e.g., \`globals.css\`):

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## Step 4: Create a Responsive Layout

Here's an example of a responsive layout using Tailwind CSS:

\`\`\`jsx
export default function ResponsiveLayout() {
  return (
    <div className="container mx-auto px-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p className="text-gray-600">This is the content for card 1.</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p className="text-gray-600">This is the content for card 2.</p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Card 3</h2>
          <p className="text-gray-600">This is the content for card 3.</p>
        </div>
      </div>
      
      {/* Responsive Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between items-center py-4">
        <div className="text-2xl font-bold mb-4 sm:mb-0">Logo</div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">About</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Services</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Contact</a>
        </div>
      </nav>
    </div>
  )
}
\`\`\`

## Step 5: Responsive Typography

Tailwind makes it easy to create responsive typography:

\`\`\`jsx
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>
<p className="text-sm md:text-base lg:text-lg">
  This paragraph will change size based on the screen width.
</p>
\`\`\`

## Step 6: Mobile-First Approach

Tailwind uses a mobile-first approach. Start with styles for mobile devices, then add responsive variants for larger screens:

\`\`\`jsx
<div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 p-4">
    <h2>Left Column</h2>
    <p>This will be full width on mobile and half width on medium screens and up.</p>
  </div>
  <div className="w-full md:w-1/2 p-4">
    <h2>Right Column</h2>
    <p>This will also be full width on mobile and half width on medium screens and up.</p>
  </div>
</div>
\`\`\`

## Step 7: Responsive Padding and Margin

Adjust spacing based on screen size:

\`\`\`jsx
<div className="p-4 md:p-8 lg:p-12 m-2 md:m-4 lg:m-6">
  This element has different padding and margin based on screen size.
</div>
\`\`\`

## Conclusion

Tailwind CSS makes it easy to create responsive designs without writing custom media queries. By using the responsive variants (sm:, md:, lg:, xl:, 2xl:), you can quickly build interfaces that look great on all devices.

For more information, check out the [Tailwind CSS documentation](https://tailwindcss.com/docs).
      `,
    },
  }

  return guides[slug as keyof typeof guides]
}

export default function HowToGuidePage({ params }: { params: { slug: string } }) {
  const guide = getHowToGuideBySlug(params.slug)

  if (!guide) {
    return (
      <div className="container py-8 md:py-12 text-center">
        <h1 className="text-3xl font-bold">Guide Not Found</h1>
        <p className="mt-4">The guide you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link href="/resources">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </Button>
      </div>
    )
  }

  // Simple markdown renderer - in a real app, you'd use a proper markdown library
  const renderMarkdown = (content: string) => {
    // Split by line breaks
    const lines = content.split("\n")

    return (
      <div className="prose dark:prose-invert max-w-none">
        {lines.map((line, index) => {
          // Heading 2
          if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                {line.substring(3)}
              </h2>
            )
          }
          // Heading 3
          else if (line.startsWith("### ")) {
            return (
              <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                {line.substring(4)}
              </h3>
            )
          }
          // Code block start
          else if (line.startsWith("```")) {
            return null // Skip the opening backticks
          }
          // Code block end
          else if (line.endsWith("```")) {
            return null // Skip the closing backticks
          }
          // Code block content (simplified)
          else if (line.trim() && lines[Math.max(0, index - 1)]?.startsWith("```")) {
            return (
              <pre key={index} className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                <code>{line}</code>
              </pre>
            )
          }
          // Regular paragraph
          else if (line.trim()) {
            return (
              <p key={index} className="my-4">
                {line}
              </p>
            )
          }
          // Empty line
          return null
        })}
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="w-fit">
          <Link href="/resources">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </Button>

        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">{guide.title}</h1>

          {renderMarkdown(guide.content)}
        </div>
      </div>
    </div>
  )
}
