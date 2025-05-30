export interface StarterPrompt {
  id: string
  title: string
  category: "strategy" | "creative" | "technical" | "optimization"
  tool: string
  template: string
  variables: string[]
  example_output: string
  next_steps: string[]
}

export interface KitSection {
  id: string
  title: string
  description: string
  order: number
  estimated_time: string
  tools: string[]
  prompts: StarterPrompt[]
  instructions: string
  tips: string[]
  expected_outputs: string[]
  quality_checklist: string[]
}

export interface BuilderKit {
  id: string
  title: string
  slug: string
  description: string
  outcome_description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  estimated_duration: string
  category: string
  tags: string[]
  sections: KitSection[]
  tools_required: string[]
  final_deliverables: string[]
  success_metrics: string[]
  related_kits: string[]
}

export const builderKits: BuilderKit[] = [
  {
    id: "complete-branding-kit",
    title: "Build Your Complete Brand Identity",
    slug: "complete-branding-kit",
    description: "Build a professional brand identity from strategy to visual assets in one weekend.",
    outcome_description: "Professional brand package ready for launch",
    difficulty: "beginner",
    estimated_duration: "4-6 hours",
    category: "Branding",
    tags: ["branding", "design", "strategy", "visual-identity"],
    tools_required: ["ChatGPT", "DALL·E 3", "Canva", "Copy.ai", "Perplexity AI"],
    final_deliverables: [
      "Brand strategy document",
      "Logo and visual assets",
      "Brand voice guidelines",
      "Social media templates",
    ],
    success_metrics: [
      "Complete brand identity package",
      "Consistent visual language",
      "Clear brand positioning",
      "Ready-to-use marketing materials",
    ],
    related_kits: ["no-code-mvp", "ai-content-workflow"],
    sections: [
      {
        id: "brand-strategy",
        title: "Brand Strategy",
        description: "Define your brand's core identity, positioning, and value proposition",
        order: 1,
        estimated_time: "1 hour",
        tools: ["ChatGPT", "Perplexity AI"],
        instructions:
          "Start by researching your market and defining your unique position. Use the prompts below to develop a comprehensive brand strategy that will guide all your visual and communication decisions.",
        tips: [
          "Be specific about your target audience",
          "Research competitors before defining your position",
          "Focus on what makes you genuinely different",
        ],
        expected_outputs: [
          "Brand positioning statement",
          "Target audience profile",
          "Unique value proposition",
          "Brand personality traits",
        ],
        quality_checklist: [
          "Positioning is clear and differentiated",
          "Target audience is specific and well-defined",
          "Value proposition addresses real customer needs",
          "Brand personality is authentic and consistent",
        ],
        prompts: [
          {
            id: "brand-positioning",
            title: "Brand Positioning Statement",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create a brand positioning statement for a [INDUSTRY] business called [BUSINESS_NAME] that targets [TARGET_AUDIENCE]. Our unique value is [UNIQUE_VALUE]. Include: target market, competitive frame of reference, point of difference, and reason to believe.",
            variables: ["INDUSTRY", "BUSINESS_NAME", "TARGET_AUDIENCE", "UNIQUE_VALUE"],
            example_output:
              "For small business owners who struggle with digital marketing, [Business Name] is the consulting firm that provides tech-savvy solutions with a personal touch, because we combine enterprise-level digital strategies with the accessibility and care that small businesses deserve.",
            next_steps: [
              "Refine the positioning based on market research",
              "Test the positioning with potential customers",
              "Use this as foundation for all brand communications",
            ],
          },
          {
            id: "target-audience",
            title: "Target Audience Profile",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create a detailed target audience profile for [BUSINESS_NAME] in the [INDUSTRY] industry. Include demographics, psychographics, pain points, goals, preferred communication channels, and buying behavior. Make it specific and actionable for marketing purposes.",
            variables: ["BUSINESS_NAME", "INDUSTRY"],
            example_output:
              "Primary Audience: Small business owners (25-45 years old) with 1-10 employees, annual revenue $100K-$1M, tech-curious but time-constrained, active on LinkedIn and Facebook, values personal relationships and proven results over flashy marketing.",
            next_steps: [
              "Create buyer personas for each audience segment",
              "Research where your audience spends time online",
              "Develop audience-specific messaging",
            ],
          },
          {
            id: "value-proposition",
            title: "Unique Value Proposition",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Develop a compelling value proposition for [BUSINESS_NAME] that serves [TARGET_AUDIENCE] in [INDUSTRY]. Focus on the specific problem we solve, how we solve it differently, and the measurable benefits. Make it clear, concise, and customer-focused.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE", "INDUSTRY"],
            example_output:
              "We help small businesses increase their online revenue by 40% in 90 days through personalized digital marketing strategies that don't require a big budget or technical expertise.",
            next_steps: [
              "Test the value proposition with real customers",
              "Create variations for different audience segments",
              "Use in all marketing materials and communications",
            ],
          },
          {
            id: "brand-personality",
            title: "Brand Personality Traits",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Define the brand personality for [BUSINESS_NAME] targeting [TARGET_AUDIENCE]. Include 5-7 personality traits, communication style, tone of voice, and how the brand would behave in different situations. Make it distinctive and aligned with audience preferences.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE"],
            example_output:
              "Personality: Approachable Expert - knowledgeable but not intimidating, friendly but professional, innovative but practical. Tone: Conversational, encouraging, solution-focused. Communication: Uses simple language, shares actionable insights, celebrates client wins.",
            next_steps: [
              "Create brand voice guidelines document",
              "Train team on brand personality",
              "Apply consistently across all touchpoints",
            ],
          },
        ],
      },
      {
        id: "visual-identity",
        title: "Visual Identity",
        description: "Create your logo, color palette, and visual brand elements",
        order: 2,
        estimated_time: "2.5 hours",
        tools: ["DALL·E 3", "Canva", "Ideogram"],
        instructions:
          "Transform your brand strategy into visual elements. Start with logo concepts, then develop a cohesive color palette and visual style that reflects your brand personality.",
        tips: [
          "Generate multiple logo concepts before choosing",
          "Test colors for accessibility and contrast",
          "Keep designs simple and scalable",
        ],
        expected_outputs: [
          "Primary logo design",
          "Logo variations (horizontal, vertical, icon)",
          "Brand color palette with hex codes",
          "Typography recommendations",
          "Visual style guidelines",
        ],
        quality_checklist: [
          "Logo is scalable and readable at small sizes",
          "Colors work well together and meet accessibility standards",
          "Visual style reflects brand personality",
          "All elements work cohesively together",
        ],
        prompts: [
          {
            id: "logo-concepts",
            title: "Logo Design Concepts",
            category: "creative",
            tool: "DALL·E 3",
            template:
              "Create a professional logo for [BUSINESS_NAME], a [INDUSTRY] business with [BRAND_PERSONALITY] personality. Style: [STYLE_PREFERENCE]. The logo should be simple, memorable, and work well in both color and black/white. Generate 3 different concept directions.",
            variables: ["BUSINESS_NAME", "INDUSTRY", "BRAND_PERSONALITY", "STYLE_PREFERENCE"],
            example_output:
              "Three logo concepts: 1) Modern wordmark with custom typography, 2) Icon + text combination with geometric elements, 3) Minimalist symbol that can stand alone",
            next_steps: [
              "Generate variations of your favorite concept",
              "Test logo at different sizes",
              "Create horizontal and vertical versions",
            ],
          },
          {
            id: "color-palette",
            title: "Brand Color Palette",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Create a professional color palette for [BUSINESS_NAME] with [BRAND_PERSONALITY] personality targeting [TARGET_AUDIENCE]. Include: primary color, 2-3 secondary colors, neutral colors, and accent color. Provide hex codes and explain the psychology behind each color choice.",
            variables: ["BUSINESS_NAME", "BRAND_PERSONALITY", "TARGET_AUDIENCE"],
            example_output:
              "Primary: Deep Blue (#1E3A8A) - trust and professionalism, Secondary: Warm Gray (#6B7280) - balance and sophistication, Accent: Bright Orange (#F97316) - energy and innovation, Neutral: Off-white (#F9FAFB) - clean and modern",
            next_steps: [
              "Test color combinations for accessibility",
              "Create color usage guidelines",
              "Apply colors to logo variations",
            ],
          },
          {
            id: "visual-style",
            title: "Visual Style Guidelines",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Develop visual style guidelines for [BUSINESS_NAME] with [BRAND_PERSONALITY] personality. Include: typography recommendations, imagery style, graphic elements, spacing rules, and do's/don'ts. Make it practical for consistent brand application.",
            variables: ["BUSINESS_NAME", "BRAND_PERSONALITY"],
            example_output:
              "Typography: Modern sans-serif for headings (Poppins), clean serif for body text (Source Serif). Imagery: Authentic photos with people, bright lighting, minimal editing. Graphics: Simple geometric shapes, consistent corner radius, subtle shadows.",
            next_steps: [
              "Create a brand style guide document",
              "Design templates using these guidelines",
              "Share guidelines with team members",
            ],
          },
        ],
      },
      {
        id: "brand-voice",
        title: "Brand Voice",
        description: "Develop your brand's communication style and messaging templates",
        order: 3,
        estimated_time: "1.5 hours",
        tools: ["ChatGPT", "Copy.ai"],
        instructions:
          "Create consistent messaging and communication guidelines that reflect your brand personality. Develop templates and examples for various communication scenarios.",
        tips: [
          "Keep your target audience's preferences in mind",
          "Be consistent across all communication channels",
          "Create examples for different scenarios",
        ],
        expected_outputs: [
          "Brand voice guidelines document",
          "Messaging templates",
          "Social media post examples",
          "Email communication templates",
          "Website copy guidelines",
        ],
        quality_checklist: [
          "Voice guidelines are clear and actionable",
          "Templates reflect brand personality",
          "Examples cover various communication scenarios",
          "Guidelines are easy for team to follow",
        ],
        prompts: [
          {
            id: "voice-guidelines",
            title: "Brand Voice Guidelines",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create comprehensive brand voice guidelines for [BUSINESS_NAME] with [BRAND_PERSONALITY] personality targeting [TARGET_AUDIENCE]. Include: tone of voice, communication style, words to use/avoid, sentence structure preferences, and examples of good vs. poor brand voice application.",
            variables: ["BUSINESS_NAME", "BRAND_PERSONALITY", "TARGET_AUDIENCE"],
            example_output:
              "Voice: Approachable Expert. Tone: Conversational yet professional, encouraging, solution-focused. Use: Simple language, active voice, specific examples. Avoid: Jargon, overly formal language, negative framing. Example: 'Let's solve this together' vs 'This problem requires resolution.'",
            next_steps: [
              "Create voice guidelines document",
              "Train team on brand voice",
              "Review all communications for consistency",
            ],
          },
          {
            id: "social-media-posts",
            title: "Social Media Content Templates",
            category: "creative",
            tool: "Copy.ai",
            template:
              "Create 10 social media post templates for [BUSINESS_NAME] targeting [TARGET_AUDIENCE] with [BRAND_PERSONALITY] voice. Include: educational posts, behind-the-scenes, client success stories, tips, and engagement posts. Make them authentic and valuable.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE", "BRAND_PERSONALITY"],
            example_output:
              "1) Tip Tuesday: 'Quick tip: [specific advice] - try this and let us know how it works!' 2) Client Win: 'Celebrating [client name] who achieved [specific result] using [method]. What's your biggest win this week?' 3) Behind-the-scenes: 'Here's what a typical day looks like at [business name]...'",
            next_steps: [
              "Customize templates with your specific content",
              "Create a content calendar",
              "Schedule posts consistently",
            ],
          },
          {
            id: "website-copy",
            title: "Website Copy Framework",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Create website copy framework for [BUSINESS_NAME] targeting [TARGET_AUDIENCE]. Include: homepage headline, value proposition, about section, services description, and call-to-action phrases. Use [BRAND_PERSONALITY] voice and focus on customer benefits.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE", "BRAND_PERSONALITY"],
            example_output:
              "Homepage: 'Grow your business without the marketing headaches' | Value Prop: 'We handle the digital marketing so you can focus on what you do best' | CTA: 'Let's chat about your goals' | About: 'We're the team that gets excited about your success...'",
            next_steps: [
              "Expand each section with detailed copy",
              "A/B test different headlines",
              "Optimize based on user feedback",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai-research-validation",
    title: "AI Research & Validation Kit",
    slug: "ai-research-validation",
    description: "Validate your hackathon idea and understand your market using AI-powered research tools.",
    outcome_description: "Comprehensive market research and validated project direction",
    difficulty: "beginner",
    estimated_duration: "2-3 hours",
    category: "Research",
    tags: ["ai-tools", "hackathon", "research", "validation", "market-analysis"],
    tools_required: ["Perplexity AI", "ChatGPT", "Typeform AI", "Airtable AI"],
    final_deliverables: [
      "Market research report",
      "User persona profiles",
      "Competitive analysis",
      "Problem validation summary",
    ],
    success_metrics: [
      "Clear understanding of target market",
      "Validated problem-solution fit",
      "Competitive landscape mapped",
      "User needs documented",
    ],
    related_kits: ["ai-powered-design-system", "ai-powered-rapid-prototype"],
    sections: [
      {
        id: "market-research",
        title: "Market Research",
        description: "Use AI to quickly research market and identify opportunities",
        order: 1,
        estimated_time: "45 minutes",
        tools: ["Perplexity AI", "ChatGPT"],
        instructions:
          "Leverage AI research tools to quickly understand your market landscape, identify opportunities, and gather comprehensive market intelligence.",
        tips: [
          "Start with broad market questions then narrow down",
          "Cross-reference information from multiple AI sources",
          "Focus on recent trends and data",
        ],
        expected_outputs: [
          "Market size and growth trends",
          "Key market segments",
          "Industry challenges and opportunities",
          "Regulatory considerations",
        ],
        quality_checklist: [
          "Market data is current and relevant",
          "Multiple sources validate findings",
          "Opportunities are clearly identified",
          "Market size is quantified",
        ],
        prompts: [
          {
            id: "market-analysis",
            title: "Market Analysis Research",
            category: "strategy",
            tool: "Perplexity AI",
            template:
              "Research the [INDUSTRY] market for [PRODUCT_TYPE] targeting [TARGET_AUDIENCE]. Include market size, growth trends, key players, challenges, and emerging opportunities. Focus on data from the last 2 years.",
            variables: ["INDUSTRY", "PRODUCT_TYPE", "TARGET_AUDIENCE"],
            example_output:
              "The AI productivity tools market is valued at $2.3B with 25% YoY growth. Key challenges include user adoption and integration complexity. Emerging opportunities in workflow automation and team collaboration.",
            next_steps: [
              "Identify specific market segments to target",
              "Research regulatory requirements",
              "Analyze market entry barriers",
            ],
          },
        ],
      },
      {
        id: "user-research",
        title: "User Research",
        description: "Generate user personas and validate assumptions",
        order: 2,
        estimated_time: "45 minutes",
        tools: ["ChatGPT", "Typeform AI"],
        instructions:
          "Create detailed user personas and validate your assumptions about user needs and behaviors using AI-generated insights.",
        tips: [
          "Create multiple persona variations",
          "Include pain points and motivations",
          "Validate with real user feedback when possible",
        ],
        expected_outputs: [
          "3-5 detailed user personas",
          "User journey maps",
          "Pain point analysis",
          "Motivation and goal mapping",
        ],
        quality_checklist: [
          "Personas are specific and actionable",
          "Pain points are clearly articulated",
          "User goals align with product vision",
          "Personas represent diverse user types",
        ],
        prompts: [
          {
            id: "user-personas",
            title: "User Persona Generation",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create 3 detailed user personas for [PRODUCT_TYPE] in [INDUSTRY]. Include demographics, psychographics, pain points, goals, preferred tools, and decision-making factors. Make them realistic and actionable for product development.",
            variables: ["PRODUCT_TYPE", "INDUSTRY"],
            example_output:
              "Persona 1: Sarah, Product Manager (28-35), tech-savvy, values efficiency, frustrated with tool switching, goals include streamlining workflows and improving team productivity.",
            next_steps: [
              "Validate personas with user interviews",
              "Create user journey maps",
              "Prioritize persona needs",
            ],
          },
        ],
      },
      {
        id: "competitive-analysis",
        title: "Competitive Analysis",
        description: "Map competitive landscape with AI assistance",
        order: 3,
        estimated_time: "30 minutes",
        tools: ["Perplexity AI", "ChatGPT"],
        instructions:
          "Use AI to quickly identify and analyze competitors, their strengths, weaknesses, and market positioning.",
        tips: [
          "Include both direct and indirect competitors",
          "Focus on feature gaps and opportunities",
          "Analyze pricing and positioning strategies",
        ],
        expected_outputs: [
          "Competitor landscape map",
          "Feature comparison matrix",
          "Pricing analysis",
          "Positioning opportunities",
        ],
        quality_checklist: [
          "All major competitors identified",
          "Feature gaps clearly highlighted",
          "Positioning opportunities are realistic",
          "Competitive advantages are defined",
        ],
        prompts: [
          {
            id: "competitor-analysis",
            title: "Competitive Landscape Analysis",
            category: "strategy",
            tool: "Perplexity AI",
            template:
              "Analyze the competitive landscape for [PRODUCT_TYPE] in [INDUSTRY]. Identify top 5-7 competitors, their key features, pricing, strengths, weaknesses, and market positioning. Highlight gaps and opportunities.",
            variables: ["PRODUCT_TYPE", "INDUSTRY"],
            example_output:
              "Top competitors: Notion ($8-16/user), Airtable ($10-20/user), Monday.com ($8-24/user). Gap identified: No tool combines project management with AI-powered content generation.",
            next_steps: [
              "Define unique value proposition",
              "Identify feature differentiation strategy",
              "Plan competitive positioning",
            ],
          },
        ],
      },
      {
        id: "problem-validation",
        title: "Problem Validation",
        description: "Validate problem-solution fit",
        order: 4,
        estimated_time: "30 minutes",
        tools: ["ChatGPT", "Typeform AI"],
        instructions:
          "Use AI to help structure validation experiments and analyze whether your identified problem is worth solving.",
        tips: [
          "Focus on problem severity and frequency",
          "Validate willingness to pay",
          "Test multiple problem statements",
        ],
        expected_outputs: [
          "Problem validation framework",
          "Validation experiment design",
          "Success criteria definition",
          "Risk assessment",
        ],
        quality_checklist: [
          "Problem is clearly defined and measurable",
          "Validation methods are appropriate",
          "Success criteria are specific",
          "Risks are identified and mitigated",
        ],
        prompts: [
          {
            id: "problem-validation-framework",
            title: "Problem Validation Framework",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create a problem validation framework for [PROBLEM_STATEMENT] affecting [TARGET_AUDIENCE]. Include validation methods, success criteria, key questions to ask users, and metrics to track. Make it actionable for a hackathon timeline.",
            variables: ["PROBLEM_STATEMENT", "TARGET_AUDIENCE"],
            example_output:
              "Validation Method: User interviews (10 people), Survey (50+ responses). Success Criteria: 70%+ experience problem weekly, 60%+ would pay for solution. Key Questions: How often does this happen? What's your current workaround?",
            next_steps: [
              "Conduct validation experiments",
              "Analyze results and iterate",
              "Refine problem statement based on findings",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai-powered-design-system",
    title: "AI-Powered Design System Kit",
    slug: "ai-powered-design-system",
    description: "Create a professional design system and visual identity using AI design tools.",
    outcome_description: "Complete design system with components, colors, and visual guidelines",
    difficulty: "beginner",
    estimated_duration: "3-4 hours",
    category: "Design",
    tags: ["ai-tools", "design", "design-system", "visual-identity", "ui-components"],
    tools_required: ["v0.dev", "Figma AI", "Adobe Firefly", "Khroma", "DALL·E"],
    final_deliverables: [
      "Color palette and typography system",
      "Component library",
      "Icon set and illustrations",
      "Design guidelines document",
    ],
    success_metrics: [
      "Cohesive visual identity established",
      "Reusable component system created",
      "Design guidelines documented",
      "Assets ready for development",
    ],
    related_kits: ["ai-research-validation", "ai-powered-rapid-prototype", "ai-content-copy-generation"],
    sections: [
      {
        id: "visual-foundation",
        title: "Visual Foundation",
        description: "Establish core visual elements using AI design tools",
        order: 1,
        estimated_time: "1.5 hours",
        tools: ["Khroma", "Adobe Firefly", "ChatGPT"],
        instructions:
          "Use AI tools to generate and refine your core visual elements including colors, typography, and overall aesthetic direction.",
        tips: [
          "Generate multiple color palette options",
          "Test accessibility of color combinations",
          "Choose typography that reflects brand personality",
        ],
        expected_outputs: [
          "Primary and secondary color palettes",
          "Typography hierarchy",
          "Visual style direction",
          "Accessibility guidelines",
        ],
        quality_checklist: [
          "Colors meet WCAG accessibility standards",
          "Typography is readable at all sizes",
          "Visual style is consistent and purposeful",
          "Brand personality is reflected in choices",
        ],
        prompts: [
          {
            id: "color-palette-generation",
            title: "AI Color Palette Generation",
            category: "creative",
            tool: "Khroma",
            template:
              "Generate a modern color palette for [PROJECT_TYPE] targeting [AUDIENCE] with [BRAND_PERSONALITY] feel. Include primary, secondary, accent, and neutral colors. Ensure accessibility compliance and provide hex codes.",
            variables: ["PROJECT_TYPE", "AUDIENCE", "BRAND_PERSONALITY"],
            example_output:
              "Primary: #2563EB (Blue), Secondary: #10B981 (Green), Accent: #F59E0B (Amber), Neutral: #6B7280 (Gray). All combinations meet WCAG AA standards.",
            next_steps: [
              "Test color combinations in different contexts",
              "Create color usage guidelines",
              "Generate color variations for different states",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai-powered-rapid-prototype",
    title: "AI-Powered Rapid Prototype Kit",
    slug: "ai-powered-rapid-prototype",
    description: "Build a functional prototype quickly using AI coding and development tools.",
    outcome_description: "Working prototype with core features and professional UI",
    difficulty: "intermediate",
    estimated_duration: "4-6 hours",
    category: "Development",
    tags: ["ai-tools", "development", "prototyping", "rapid-development", "coding"],
    tools_required: ["v0.dev", "bolt.new", "GitHub Copilot", "Cursor", "ChatGPT"],
    final_deliverables: [
      "Functional web application",
      "Core feature implementation",
      "Responsive UI components",
      "Basic data management",
    ],
    success_metrics: [
      "Working prototype demonstrates core value",
      "UI is responsive and professional",
      "Core features function as intended",
      "Code is maintainable and documented",
    ],
    related_kits: ["ai-powered-design-system", "ai-content-copy-generation", "ai-enhanced-demo-visualization"],
    sections: [
      {
        id: "app-architecture-setup",
        title: "App Architecture & Setup",
        description: "Design and scaffold application structure with AI assistance",
        order: 1,
        estimated_time: "1 hour",
        tools: ["ChatGPT", "v0.dev", "bolt.new"],
        instructions:
          "Use AI tools to design your application architecture and quickly scaffold the initial project structure.",
        tips: [
          "Start with a clear feature list",
          "Choose the right tech stack for your timeline",
          "Plan for scalability but focus on MVP",
        ],
        expected_outputs: [
          "Project structure and file organization",
          "Technology stack selection",
          "Component architecture plan",
          "Data flow design",
        ],
        quality_checklist: [
          "Architecture supports planned features",
          "Tech stack is appropriate for timeline",
          "Components are logically organized",
          "Data flow is clearly defined",
        ],
        prompts: [
          {
            id: "app-architecture",
            title: "Application Architecture Design",
            category: "technical",
            tool: "ChatGPT",
            template:
              "Design the architecture for a [PROJECT_TYPE] with features: [FEATURE_LIST]. Recommend tech stack, component structure, data management approach, and file organization. Optimize for rapid development and hackathon timeline.",
            variables: ["PROJECT_TYPE", "FEATURE_LIST"],
            example_output:
              "Tech Stack: Next.js + TypeScript + Tailwind + Supabase. Components: Header, Dashboard, UserProfile, DataTable. Data: Real-time sync with Supabase, local state with Zustand.",
            next_steps: [
              "Set up development environment",
              "Create initial project structure",
              "Configure essential dependencies",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai-content-copy-generation",
    title: "AI Content & Copy Generation Kit",
    slug: "ai-content-copy-generation",
    description: "Generate compelling copy, content, and documentation for your project using AI writing tools.",
    outcome_description: "Complete content package including copy, documentation, and marketing materials",
    difficulty: "beginner",
    estimated_duration: "2-3 hours",
    category: "Content",
    tags: ["ai-tools", "content", "copywriting", "documentation", "marketing"],
    tools_required: ["ChatGPT", "Copy.ai", "Claude", "Jasper"],
    final_deliverables: ["Landing page copy", "Product descriptions", "User documentation", "Marketing materials"],
    success_metrics: [
      "Copy clearly communicates value proposition",
      "Documentation is comprehensive and clear",
      "Marketing materials are compelling",
      "Content maintains consistent voice and tone",
    ],
    related_kits: ["ai-powered-design-system", "ai-powered-rapid-prototype", "social-buzz-marketing"],
    sections: [
      {
        id: "core-messaging",
        title: "Core Messaging",
        description: "Develop key messages and value propositions",
        order: 1,
        estimated_time: "45 minutes",
        tools: ["ChatGPT", "Claude"],
        instructions:
          "Use AI to craft compelling core messages that clearly communicate your product's value and differentiation.",
        tips: [
          "Focus on benefits over features",
          "Test multiple value proposition variations",
          "Keep messaging clear and jargon-free",
        ],
        expected_outputs: [
          "Primary value proposition",
          "Key messaging pillars",
          "Elevator pitch variations",
          "Feature-benefit mapping",
        ],
        quality_checklist: [
          "Value proposition is clear and compelling",
          "Messages address user pain points",
          "Benefits are specific and measurable",
          "Messaging is differentiated from competitors",
        ],
        prompts: [
          {
            id: "value-proposition",
            title: "Value Proposition Development",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create a compelling value proposition for [PRODUCT_NAME] that [MAIN_FUNCTION] for [TARGET_AUDIENCE]. Include the problem solved, unique solution, and key benefits. Make it clear, concise, and differentiated.",
            variables: ["PRODUCT_NAME", "MAIN_FUNCTION", "TARGET_AUDIENCE"],
            example_output:
              "For busy product managers who struggle with scattered feedback, ProductSync centralizes all user insights in one AI-powered dashboard, reducing feedback processing time by 80% and improving feature prioritization accuracy.",
            next_steps: [
              "Test value proposition with target users",
              "Create variations for different audiences",
              "Integrate into all marketing materials",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai-enhanced-demo-visualization",
    title: "AI-Enhanced Demo & Visualization Kit",
    slug: "ai-enhanced-demo-visualization",
    description: "Create stunning demos, visualizations, and presentation materials using AI design tools.",
    outcome_description: "Professional demo materials and interactive visualizations",
    difficulty: "intermediate",
    estimated_duration: "3-4 hours",
    category: "Presentation",
    tags: ["ai-tools", "demo", "visualization", "presentation", "graphics"],
    tools_required: ["v0.dev", "Loom AI", "DALL·E", "Figma", "Canva AI"],
    final_deliverables: [
      "Interactive demo interface",
      "Data visualizations",
      "Demo video walkthrough",
      "Presentation graphics",
    ],
    success_metrics: [
      "Demo clearly shows product value",
      "Visualizations are engaging and informative",
      "Materials are professional and polished",
      "Demo flow is logical and compelling",
    ],
    related_kits: ["ai-powered-rapid-prototype", "ai-assisted-pitch-master", "ai-content-copy-generation"],
    sections: [
      {
        id: "demo-interface-design",
        title: "Demo Interface Design",
        description: "Create presentation-optimized UI for demos",
        order: 1,
        estimated_time: "1.5 hours",
        tools: ["v0.dev", "Figma"],
        instructions:
          "Design and build demo interfaces that clearly showcase your product's key features and value proposition.",
        tips: [
          "Optimize for large screen presentation",
          "Use realistic but clean demo data",
          "Highlight key features prominently",
        ],
        expected_outputs: [
          "Demo-optimized UI components",
          "Interactive feature showcases",
          "Clear navigation flow",
          "Responsive demo layouts",
        ],
        quality_checklist: [
          "Interface is clear and easy to follow",
          "Key features are prominently displayed",
          "Demo data is realistic and relevant",
          "UI works well for presentation",
        ],
        prompts: [
          {
            id: "demo-interface",
            title: "Demo Interface Design",
            category: "creative",
            tool: "v0.dev",
            template:
              "Create a demo interface for [PRODUCT_TYPE] that showcases [KEY_FEATURES]. Design should be optimized for presentation, with clear visual hierarchy and engaging interactions. Include realistic demo data.",
            variables: ["PRODUCT_TYPE", "KEY_FEATURES"],
            example_output:
              "Clean dashboard interface with prominent feature cards, interactive data visualizations, and clear call-to-action buttons. Demo data shows realistic usage scenarios.",
            next_steps: [
              "Test demo flow with team",
              "Optimize for different screen sizes",
              "Add interactive elements for engagement",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai-assisted-pitch-master",
    title: "AI-Assisted Pitch Master Kit",
    slug: "ai-assisted-pitch-master",
    description: "Create compelling pitch presentations and demo scripts using AI presentation tools.",
    outcome_description: "Professional pitch deck and presentation materials ready for demo day",
    difficulty: "beginner",
    estimated_duration: "2-3 hours",
    category: "Presentation",
    tags: ["ai-tools", "pitch", "presentation", "demo-day", "storytelling"],
    tools_required: ["Gamma", "Beautiful.ai", "ChatGPT", "ElevenLabs"],
    final_deliverables: [
      "Complete pitch deck",
      "Demo script and timing",
      "Q&A preparation guide",
      "Presentation assets",
    ],
    success_metrics: [
      "Pitch tells compelling story",
      "Slides are visually engaging",
      "Demo script is well-timed",
      "Q&A preparation is thorough",
    ],
    related_kits: ["ai-enhanced-demo-visualization", "ai-content-copy-generation", "social-buzz-marketing"],
    sections: [
      {
        id: "pitch-structure-story",
        title: "Pitch Structure & Story",
        description: "Develop compelling narrative structure for your pitch",
        order: 1,
        estimated_time: "1 hour",
        tools: ["ChatGPT", "Gamma"],
        instructions:
          "Use AI to craft a compelling story structure that engages judges and clearly communicates your product's value.",
        tips: ["Start with a relatable problem", "Show clear before/after scenarios", "End with strong call to action"],
        expected_outputs: [
          "Pitch narrative structure",
          "Slide-by-slide outline",
          "Key story elements",
          "Timing and pacing guide",
        ],
        quality_checklist: [
          "Story is engaging and relatable",
          "Problem and solution are clearly connected",
          "Value proposition is compelling",
          "Call to action is specific and actionable",
        ],
        prompts: [
          {
            id: "pitch-narrative",
            title: "Pitch Narrative Structure",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create a compelling pitch narrative for [PRODUCT_NAME] that solves [PROBLEM] for [TARGET_AUDIENCE]. Structure as: Hook, Problem, Solution, Demo, Market, Business Model, Team, Ask. Make it engaging and memorable for hackathon judges.",
            variables: ["PRODUCT_NAME", "PROBLEM", "TARGET_AUDIENCE"],
            example_output:
              "Hook: 'Product managers waste 15 hours/week on scattered feedback.' Problem: Current tools create information silos. Solution: AI-powered feedback centralization. Demo: Show 80% time reduction. Market: $2B+ opportunity.",
            next_steps: ["Refine story based on audience", "Practice narrative flow", "Time each section of pitch"],
          },
        ],
      },
    ],
  },
  {
    id: "social-buzz-marketing",
    title: "Social Buzz & Marketing Kit",
    slug: "social-buzz-marketing",
    description: "Generate social media buzz and marketing materials for your hackathon project launch.",
    outcome_description: "Complete social media strategy and marketing materials for project promotion",
    difficulty: "beginner",
    estimated_duration: "2-3 hours",
    category: "Marketing",
    tags: ["ai-tools", "social-media", "marketing", "launch", "community"],
    tools_required: ["Buffer AI", "Hootsuite AI", "Canva AI", "ChatGPT"],
    final_deliverables: [
      "Social media content calendar",
      "Launch announcement materials",
      "Community engagement strategy",
      "Press release template",
    ],
    success_metrics: [
      "Social content drives engagement",
      "Launch materials generate interest",
      "Community strategy builds following",
      "Press materials attract media attention",
    ],
    related_kits: ["ai-content-copy-generation", "ai-assisted-pitch-master", "ai-enhanced-demo-visualization"],
    sections: [
      {
        id: "launch-strategy",
        title: "Launch Strategy",
        description: "Plan project launch and marketing push",
        order: 1,
        estimated_time: "45 minutes",
        tools: ["ChatGPT", "Buffer AI"],
        instructions:
          "Develop a comprehensive launch strategy that maximizes visibility and engagement for your hackathon project.",
        tips: [
          "Plan launch timing strategically",
          "Coordinate across multiple channels",
          "Prepare for different audience segments",
        ],
        expected_outputs: [
          "Launch timeline and milestones",
          "Channel strategy and priorities",
          "Audience segmentation plan",
          "Success metrics and tracking",
        ],
        quality_checklist: [
          "Launch plan is realistic and achievable",
          "Channels are appropriate for audience",
          "Timeline allows for proper preparation",
          "Success metrics are measurable",
        ],
        prompts: [
          {
            id: "launch-strategy-plan",
            title: "Product Launch Strategy",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create a launch strategy for [PRODUCT_NAME] targeting [AUDIENCE] post-hackathon. Include timeline, channel priorities, content themes, and engagement tactics. Focus on building momentum and community interest.",
            variables: ["PRODUCT_NAME", "AUDIENCE"],
            example_output:
              "Week 1: Teaser content on LinkedIn/Twitter. Week 2: Demo video release. Week 3: Community engagement and feedback collection. Focus on developer communities and product management groups.",
            next_steps: ["Create detailed content calendar", "Prepare launch assets", "Set up tracking and analytics"],
          },
        ],
      },
    ],
  },
  {
    id: "team-productivity-collaboration",
    title: "Team Productivity & Collaboration Kit",
    slug: "team-productivity-collaboration",
    description: "Optimize team collaboration and productivity using AI-powered project management tools.",
    outcome_description: "Streamlined team workflow and collaboration system",
    difficulty: "beginner",
    estimated_duration: "1-2 hours",
    category: "Productivity",
    tags: ["ai-tools", "productivity", "collaboration", "project-management", "team"],
    tools_required: ["Notion AI", "Linear", "GitHub Copilot", "Slack AI"],
    final_deliverables: [
      "Project management setup",
      "Team communication guidelines",
      "Task tracking system",
      "Progress reporting framework",
    ],
    success_metrics: [
      "Team workflow is streamlined",
      "Communication is clear and efficient",
      "Tasks are tracked and prioritized",
      "Progress is visible to all team members",
    ],
    related_kits: ["ai-powered-rapid-prototype", "ai-research-validation", "ai-assisted-pitch-master"],
    sections: [
      {
        id: "project-setup-planning",
        title: "Project Setup & Planning",
        description: "Establish project structure and workflow",
        order: 1,
        estimated_time: "30 minutes",
        tools: ["Notion AI", "Linear"],
        instructions: "Set up your project management system and establish clear workflows for your hackathon team.",
        tips: [
          "Keep systems simple and focused",
          "Establish clear roles and responsibilities",
          "Plan for rapid iteration and changes",
        ],
        expected_outputs: [
          "Project workspace setup",
          "Task and milestone structure",
          "Team roles and responsibilities",
          "Workflow and process documentation",
        ],
        quality_checklist: [
          "Project structure is clear and logical",
          "Roles and responsibilities are defined",
          "Workflow supports rapid development",
          "Documentation is accessible to all team members",
        ],
        prompts: [
          {
            id: "project-setup",
            title: "Hackathon Project Setup",
            category: "technical",
            tool: "Notion AI",
            template:
              "Set up a project management system for a [TEAM_SIZE] person hackathon team building [PROJECT_TYPE]. Include task organization, milestone tracking, role assignments, and communication protocols. Optimize for speed and clarity.",
            variables: ["TEAM_SIZE", "PROJECT_TYPE"],
            example_output:
              "Project structure: Research → Design → Development → Demo → Pitch. Roles: PM, Designer, 2 Developers. Daily standups at 9am, milestone reviews every 8 hours. Shared workspace with real-time updates.",
            next_steps: [
              "Onboard team to project system",
              "Establish communication rhythms",
              "Set up progress tracking",
            ],
          },
        ],
      },
    ],
  },
]

export function getBuilderKitBySlug(slug: string): BuilderKit | undefined {
  return builderKits.find((kit) => kit.slug === slug)
}

export function getAllBuilderKits(): BuilderKit[] {
  return builderKits
}
