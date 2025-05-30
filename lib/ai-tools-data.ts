// This file contains the data for all AI tools
// In a real application, this would be fetched from Airtable

export interface AiTool {
  id: string
  name: string
  slug: string
  description: string
  category: string
  pricing: string
  websiteUrl: string
  logoPlaceholder: string
  detailedDescription?: string
  features?: string[]
  useCases?: { title: string; description: string }[]
  pricingDetails?: string
  examplePrompts?: { title: string; prompt: string }[]
  pairsWellWith?: { name: string; slug: string }[]
  relatedGuides?: { title: string; slug: string }[]
}

// Function to get all AI tools data
export function getAiToolsData(): AiTool[] {
  return [
    // I. AI Chatbots & Conversational AI
    {
      id: "1",
      name: "ChatGPT",
      slug: "chatgpt",
      description: "All-around chatbot for Q&A, brainstorming, text generation, summarization, coding help.",
      category: "Chatbots & Conversational AI",
      pricing: "Freemium",
      websiteUrl: "https://chat.openai.com/",
      logoPlaceholder: "C",
      detailedDescription:
        "ChatGPT is an AI-powered chatbot developed by OpenAI that uses natural language processing to create human-like conversational dialogue. The model can respond to questions, assist with writing tasks, generate creative content, provide explanations on complex topics, and help with coding challenges. It's trained on a diverse range of internet text, allowing it to engage with a wide variety of topics.",
      features: [
        "Natural language understanding and generation",
        "Context retention within conversations",
        "Code generation and debugging assistance",
        "Creative writing capabilities",
        "Text summarization and information extraction",
        "Available via web interface and API",
      ],
      useCases: [
        {
          title: "Content Creation",
          description:
            "Draft blog posts, social media content, emails, and other written materials with guidance and refinement.",
        },
        {
          title: "Research Assistant",
          description: "Quickly gather information, summarize concepts, and explore ideas on virtually any topic.",
        },
        {
          title: "Coding Helper",
          description:
            "Generate code snippets, debug issues, and learn programming concepts through interactive examples.",
        },
        {
          title: "Learning Tool",
          description:
            "Explain complex topics in simple terms, create study materials, and test understanding through Q&A.",
        },
      ],
      pricingDetails:
        "ChatGPT offers a free tier with access to GPT-3.5 and basic features. ChatGPT Plus subscription ($20/month) provides access to GPT-4, faster response times, priority access during peak times, and early access to new features.",
      examplePrompts: [
        {
          title: "Content Brainstorming",
          prompt:
            "I need to write a blog post about sustainable gardening practices for beginners. Can you help me brainstorm 5 key points to cover and suggest a compelling introduction?",
        },
        {
          title: "Code Generation",
          prompt:
            "Write a Python function that takes a list of numbers and returns the average of only the even numbers in the list.",
        },
        {
          title: "Learning Explanation",
          prompt: "Explain how machine learning algorithms work to a 10-year-old child.",
        },
        {
          title: "Text Summarization",
          prompt:
            "I have a long research paper about climate change. Can you help me summarize the key findings and implications in about 3-4 paragraphs?",
        },
      ],
      pairsWellWith: [
        {
          name: "DALL·E 3",
          slug: "dalle-3",
        },
        {
          name: "v0.dev",
          slug: "v0-dev",
        },
      ],
      relatedGuides: [
        {
          title: "Effective Prompt Engineering for Better Results",
          slug: "effective-prompt-engineering",
        },
        {
          title: "Creating Engaging Social Media Content with AI",
          slug: "ai-social-media-content",
        },
      ],
    },
    {
      id: "2",
      name: "Google Gemini",
      slug: "google-gemini",
      description: "Multimodal AI for chat, image analysis, code generation, creative writing.",
      category: "Chatbots & Conversational AI",
      pricing: "Freemium",
      websiteUrl: "https://gemini.google.com/",
      logoPlaceholder: "G",
    },
    {
      id: "3",
      name: "Claude",
      slug: "claude",
      description: "Chatbot known for its conversational abilities and handling longer contexts.",
      category: "Chatbots & Conversational AI",
      pricing: "Freemium",
      websiteUrl: "https://claude.ai/",
      logoPlaceholder: "C",
    },
    {
      id: "4",
      name: "Perplexity AI",
      slug: "perplexity-ai",
      description: "AI search engine that provides answers with cited sources; good for research.",
      category: "Chatbots & Conversational AI",
      pricing: "Freemium",
      websiteUrl: "https://www.perplexity.ai/",
      logoPlaceholder: "P",
    },
    {
      id: "7",
      name: "DeepSeek",
      slug: "deepseek",
      description: "AI research company offering powerful open-source models and a chat platform.",
      category: "Chatbots & Conversational AI",
      pricing: "Freemium",
      websiteUrl: "https://deepseek.ai/",
      logoPlaceholder: "D",
    },

    // II. Writing & Content Creation
    {
      id: "9",
      name: "Copy.ai",
      slug: "copy-ai",
      description: "AI copywriter for various marketing needs, product descriptions, ad copy.",
      category: "Writing & Content Creation",
      pricing: "Freemium",
      websiteUrl: "https://www.copy.ai/",
      logoPlaceholder: "C",
    },
    {
      id: "10",
      name: "Rytr",
      slug: "rytr",
      description: "AI writing tool for blogs, emails, ad copy, social media, and more.",
      category: "Writing & Content Creation",
      pricing: "Freemium",
      websiteUrl: "https://rytr.me/",
      logoPlaceholder: "R",
    },
    {
      id: "11",
      name: "Writesonic",
      slug: "writesonic",
      description: "AI writer for articles, ads, landing pages, and product descriptions.",
      category: "Writing & Content Creation",
      pricing: "Freemium",
      websiteUrl: "https://writesonic.com/",
      logoPlaceholder: "W",
    },
    {
      id: "13",
      name: "Hemingway Editor",
      slug: "hemingway-editor",
      description: "Helps make your writing bold and clear; identifies complex sentences, passive voice.",
      category: "Writing & Content Creation",
      pricing: "Free",
      websiteUrl: "https://hemingwayapp.com/",
      logoPlaceholder: "H",
    },

    // III. Image Generation & Editing
    {
      id: "19",
      name: "DALL·E 3",
      slug: "dalle-3",
      description: "Generates images from text descriptions with impressive accuracy and detail.",
      category: "Image Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://openai.com/dall-e-3",
      logoPlaceholder: "D",
    },
    {
      id: "20",
      name: "Microsoft Designer",
      slug: "microsoft-designer",
      description: "Free AI image generator powered by DALL·E, integrated into Microsoft Designer.",
      category: "Image Generation & Editing",
      pricing: "Free",
      websiteUrl: "https://designer.microsoft.com/",
      logoPlaceholder: "M",
    },
    {
      id: "21",
      name: "Adobe Firefly",
      slug: "adobe-firefly",
      description:
        "AI image generation and editing tools integrated into Adobe products, designed to be commercially safe.",
      category: "Image Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://www.adobe.com/products/firefly.html",
      logoPlaceholder: "A",
    },
    {
      id: "22",
      name: "Canva AI Image Generator",
      slug: "canva-ai-image-generator",
      description: "Text-to-image generator within the Canva design platform.",
      category: "Image Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://www.canva.com/",
      logoPlaceholder: "C",
    },
    {
      id: "23",
      name: "Leonardo.Ai",
      slug: "leonardo-ai",
      description: "Platform for creating AI art, game assets, and concept art with various models.",
      category: "Image Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://leonardo.ai/",
      logoPlaceholder: "L",
    },
    {
      id: "25",
      name: "Ideogram AI",
      slug: "ideogram-ai",
      description: "AI image generator with a strong focus on rendering text accurately within images.",
      category: "Image Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://ideogram.ai/",
      logoPlaceholder: "I",
    },
    {
      id: "26",
      name: "Krea AI",
      slug: "krea-ai",
      description: "AI tools for image upscaling, enhancement, and pattern generation.",
      category: "Image Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://www.krea.ai/",
      logoPlaceholder: "K",
    },
    {
      id: "27",
      name: "Remove.bg",
      slug: "remove-bg",
      description: "AI tool to automatically remove backgrounds from images.",
      category: "Image Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://www.remove.bg/",
      logoPlaceholder: "R",
    },

    // IV. Graphic Design Platforms
    {
      id: "29",
      name: "Kittl",
      slug: "kittl",
      description:
        "Design platform with AI-powered tools for creating logos, illustrations, and advanced graphic designs.",
      category: "Graphic Design Platforms",
      pricing: "Freemium",
      websiteUrl: "https://www.kittl.com/",
      logoPlaceholder: "K",
    },
    {
      id: "30",
      name: "Canva",
      slug: "canva",
      description: "Comprehensive design tool with many AI features like Magic Write, Magic Design, etc.",
      category: "Graphic Design Platforms",
      pricing: "Freemium",
      websiteUrl: "https://www.canva.com/",
      logoPlaceholder: "C",
    },
    {
      id: "32",
      name: "Visme",
      slug: "visme",
      description:
        "Platform for creating presentations, infographics, and other visual content, incorporating AI tools.",
      category: "Graphic Design Platforms",
      pricing: "Freemium",
      websiteUrl: "https://www.visme.co/",
      logoPlaceholder: "V",
    },

    // V. Video Generation & Editing
    {
      id: "34",
      name: "RunwayML",
      slug: "runwayml",
      description: "AI magic tools for video editing, including text-to-video, image-to-video, and AI effects.",
      category: "Video Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://runwayml.com/",
      logoPlaceholder: "R",
    },
    {
      id: "36",
      name: "InVideo AI",
      slug: "invideo-ai",
      description: "AI-powered video editor and creator for social media, marketing, and presentations.",
      category: "Video Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://invideo.io/",
      logoPlaceholder: "I",
    },
    {
      id: "38",
      name: "Descript",
      slug: "descript",
      description: "All-in-one audio and video editor with AI features like automatic transcription and overdub.",
      category: "Video Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://www.descript.com/",
      logoPlaceholder: "D",
    },
    {
      id: "39",
      name: "CapCut",
      slug: "capcut",
      description: "Popular mobile and desktop video editor with many AI-powered effects and features.",
      category: "Video Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://www.capcut.com/",
      logoPlaceholder: "C",
    },
    {
      id: "40",
      name: "Pika Labs",
      slug: "pika-labs",
      description: "AI text-to-video and image-to-video generation platform.",
      category: "Video Generation & Editing",
      pricing: "Freemium",
      websiteUrl: "https://pika.art/",
      logoPlaceholder: "P",
    },

    // VI. Audio & Music Creation/Editing
    {
      id: "42",
      name: "ElevenLabs",
      slug: "elevenlabs",
      description: "AI voice generator for realistic text-to-speech and voice cloning.",
      category: "Audio & Music Creation/Editing",
      pricing: "Freemium",
      websiteUrl: "https://elevenlabs.io/",
      logoPlaceholder: "E",
    },
    {
      id: "43",
      name: "Murf.ai",
      slug: "murf-ai",
      description: "AI voice generator for voiceovers for videos, presentations, and podcasts.",
      category: "Audio & Music Creation/Editing",
      pricing: "Freemium",
      websiteUrl: "https://murf.ai/",
      logoPlaceholder: "M",
    },
    {
      id: "44",
      name: "AIVA",
      slug: "aiva",
      description: "AI music composer for creating original soundtracks in various genres.",
      category: "Audio & Music Creation/Editing",
      pricing: "Freemium",
      websiteUrl: "https://www.aiva.ai/",
      logoPlaceholder: "A",
    },
    {
      id: "45",
      name: "Soundraw",
      slug: "soundraw",
      description: "AI music generator that allows you to customize AI-created music.",
      category: "Audio & Music Creation/Editing",
      pricing: "Freemium",
      websiteUrl: "https://soundraw.io/",
      logoPlaceholder: "S",
    },
    {
      id: "46",
      name: "Adobe Podcast",
      slug: "adobe-podcast",
      description: "AI tool to improve audio quality by removing noise and echo.",
      category: "Audio & Music Creation/Editing",
      pricing: "Free",
      websiteUrl: "https://podcast.adobe.com/",
      logoPlaceholder: "A",
    },
    {
      id: "47",
      name: "Audacity",
      slug: "audacity",
      description: "Free, open-source audio editor; some third-party AI plugins can extend its capabilities.",
      category: "Audio & Music Creation/Editing",
      pricing: "Free",
      websiteUrl: "https://www.audacityteam.org/",
      logoPlaceholder: "A",
    },
    {
      id: "48",
      name: "Suno AI",
      slug: "suno-ai",
      description: "AI music and song generator from text prompts.",
      category: "Audio & Music Creation/Editing",
      pricing: "Freemium",
      websiteUrl: "https://suno.com/",
      logoPlaceholder: "S",
    },

    // VII. Productivity & Task Management
    {
      id: "49",
      name: "Otter.ai",
      slug: "otter-ai",
      description: "AI-powered transcription service for meetings, interviews, and lectures.",
      category: "Productivity & Task Management",
      pricing: "Freemium",
      websiteUrl: "https://otter.ai/",
      logoPlaceholder: "O",
    },
    {
      id: "52",
      name: "Reclaim.ai",
      slug: "reclaim-ai",
      description: "AI scheduling assistant for managing tasks and habits within your calendar.",
      category: "Productivity & Task Management",
      pricing: "Freemium",
      websiteUrl: "https://reclaim.ai/",
      logoPlaceholder: "R",
    },
    {
      id: "53",
      name: "Taskade",
      slug: "taskade",
      description: "AI-powered outlining, note-taking, and project management tool.",
      category: "Productivity & Task Management",
      pricing: "Freemium",
      websiteUrl: "https://www.taskade.com/",
      logoPlaceholder: "T",
    },
    {
      id: "54",
      name: "Trello",
      slug: "trello",
      description: "Project management tool with AI integrations for task generation and workflow automation.",
      category: "Productivity & Task Management",
      pricing: "Freemium",
      websiteUrl: "https://trello.com/",
      logoPlaceholder: "T",
    },

    // VIII. Business, Marketing & Sales
    {
      id: "58",
      name: "HubSpot AI",
      slug: "hubspot-ai",
      description: "AI tools within the HubSpot CRM platform for content creation, email marketing, and sales.",
      category: "Business, Marketing & Sales",
      pricing: "Freemium",
      websiteUrl: "https://www.hubspot.com/artificial-intelligence",
      logoPlaceholder: "H",
    },
    {
      id: "60",
      name: "Uizard",
      slug: "uizard",
      description: "AI tool for designing wireframes, mockups, and prototypes from text prompts or sketches.",
      category: "Business, Marketing & Sales",
      pricing: "Freemium",
      websiteUrl: "https://uizard.io/",
      logoPlaceholder: "U",
    },

    // IX. UX Research & Product Management
    {
      id: "62",
      name: "UX Pilot",
      slug: "ux-pilot",
      description: "AI tools to assist UX designers in creating personas, user journey maps, and user stories.",
      category: "UX Research & Product Management",
      pricing: "Freemium",
      websiteUrl: "https://uxpilot.ai/",
      logoPlaceholder: "U",
    },
    {
      id: "63",
      name: "ChatPRD",
      slug: "chatprd",
      description: "AI tool to help product managers write clear and comprehensive Product Requirements Documents.",
      category: "UX Research & Product Management",
      pricing: "Freemium",
      websiteUrl: "https://www.chatprd.com/",
      logoPlaceholder: "C",
    },

    // X. Coding & Web Development
    {
      id: "66",
      name: "Replit AI",
      slug: "replit-ai",
      description: "AI coding assistant within the Replit browser-based IDE.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://replit.com/",
      logoPlaceholder: "R",
    },
    {
      id: "67",
      name: "Cursor",
      slug: "cursor",
      description: "An AI-first code editor designed for pair-programming with AI.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://cursor.sh/",
      logoPlaceholder: "C",
    },
    {
      id: "68",
      name: "v0.dev",
      slug: "v0-dev",
      description: "AI UI generator that creates React code using Shadcn UI and Tailwind CSS from text prompts.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://v0.dev/",
      logoPlaceholder: "V",
      detailedDescription:
        "v0 is an AI-powered UI generation tool by Vercel that creates React components using Shadcn UI and Tailwind CSS from text prompts. It allows developers to rapidly prototype and build user interfaces by describing what they want in natural language. The generated code is clean, accessible, and ready to use in your Next.js projects.",
      features: [
        "Text-to-UI generation with React and Tailwind CSS",
        "High-quality, accessible component generation",
        "Shadcn UI integration for consistent design",
        "Responsive layouts by default",
        "Copy-paste ready code",
        "Web-based interface with preview",
      ],
      useCases: [
        {
          title: "Rapid Prototyping",
          description:
            "Quickly generate UI components and layouts to validate ideas and designs before full implementation.",
        },
        {
          title: "Design System Implementation",
          description: "Generate consistent UI components that follow design system principles and best practices.",
        },
        {
          title: "Learning React and Tailwind",
          description: "See how complex UI patterns can be implemented using modern React and Tailwind techniques.",
        },
      ],
      pricingDetails:
        "v0 offers a free tier with a limited number of generations per day. Pro subscription provides more generations and priority access.",
      examplePrompts: [
        {
          title: "Dashboard Layout",
          prompt:
            "Create a dashboard layout with a sidebar navigation, header with user profile, and a main content area with 4 analytics cards showing different metrics.",
        },
        {
          title: "Product Card",
          prompt:
            "Design a product card for an e-commerce site with image, title, price, rating, and add to cart button. Make it responsive and include hover effects.",
        },
        {
          title: "Sign-up Form",
          prompt:
            "Create a sign-up form with email, password, confirm password fields, terms acceptance checkbox, and a submit button. Include validation states and error messages.",
        },
        {
          title: "Blog Article Layout",
          prompt:
            "Design a blog article page with a featured image, title, author info with avatar, publication date, content area with proper typography, and a comments section at the bottom.",
        },
      ],
      pairsWellWith: [
        {
          name: "ChatGPT",
          slug: "chatgpt",
        },
        {
          name: "Cursor",
          slug: "cursor",
        },
      ],
      relatedGuides: [
        {
          title: "Building a No-Code MVP with AI Tools",
          slug: "no-code-mvp-ai-tools",
        },
        {
          title: "Effective Prompt Engineering for UI Generation",
          slug: "prompt-engineering-ui-generation",
        },
      ],
    },
    {
      id: "70",
      name: "Bubble.io",
      slug: "bubble-io",
      description: "No-code platform for building web applications; AI can assist in logic and design.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://bubble.io/",
      logoPlaceholder: "B",
    },
    {
      id: "71",
      name: "Webflow",
      slug: "webflow",
      description: "Visual web development platform; exploring AI features for design and content.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://webflow.com/",
      logoPlaceholder: "W",
    },
    {
      id: "72",
      name: "Tabnine",
      slug: "tabnine",
      description: "AI code completion assistant that works with various IDEs.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://www.tabnine.com/",
      logoPlaceholder: "T",
    },
    {
      id: "73",
      name: "Lovable AI",
      slug: "lovable-ai",
      description: "Lets you turn Idea to app in seconds, with your personal full stack engineer.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://lovable.dev/",
      logoPlaceholder: "L",
    },
    {
      id: "74",
      name: "Relume.io",
      slug: "relume-io",
      description: "AI website builder that generates sitemaps, wireframes, and outputs component libraries.",
      category: "Coding & Web Development",
      pricing: "Freemium",
      websiteUrl: "https://relume.io/",
      logoPlaceholder: "R",
    },

    // XI. Education & Learning
    {
      id: "75",
      name: "Quizlet",
      slug: "quizlet",
      description: "Study tool with flashcards, practice tests; AI features for personalized learning paths.",
      category: "Education & Learning",
      pricing: "Freemium",
      websiteUrl: "https://quizlet.com/",
      logoPlaceholder: "Q",
    },
    {
      id: "76",
      name: "Khan Academy (Khanmigo)",
      slug: "khan-academy-khanmigo",
      description: "AI-powered tutor and teaching assistant for the Khan Academy learning platform.",
      category: "Education & Learning",
      pricing: "Freemium",
      websiteUrl: "https://www.khanacademy.org/khanmigo",
      logoPlaceholder: "K",
    },
  ]
}

// Function to get a specific AI tool by slug
export function getAiToolBySlug(slug: string): AiTool | undefined {
  const tools = getAiToolsData()
  return tools.find((tool) => tool.slug === slug)
}
