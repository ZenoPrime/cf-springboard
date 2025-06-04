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
    title: "Complete Branding Kit",
    slug: "complete-branding-kit",
    description: "Create a comprehensive brand identity from strategy to visual assets. Guides you through market research, brand positioning, and visual identity creation using AI tools.",
    outcome_description: "Complete professional brand package ready for immediate deployment, including comprehensive brand strategy document with market insights, complete visual identity system (logo, colors, typography), detailed brand voice and messaging guidelines, social media content templates, website copy framework, and brand application examples across multiple touchpoints.",
    difficulty: "beginner",
    estimated_duration: "6-8 hours",
    category: "Branding",
    tags: ["branding", "design", "strategy", "visual-identity", "ai-tools", "logo-design", "brand-voice"],
    tools_required: ["ChatGPT (OpenAI)", "Perplexity AI", "Ideogram AI", "Copy.ai"],
    final_deliverables: [
      "Brand strategy document (including market insights)",
      "Logo and visual assets",
      "Brand voice guidelines",
      "Social media templates",
      "Website copy framework"
    ],
    success_metrics: [
      "Complete brand identity package ready for launch",
      "Consistent visual language across all touchpoints",
      "Clear brand positioning informed by market research",
      "Ready-to-use marketing materials and templates",
      "Professional brand guidelines document"
    ],
    related_kits: ["ai-content-workflow", "social-buzz-marketing", "ai-powered-rapid-prototype"],
    sections: [
      {
        id: "brand-strategy",
        title: "Brand Strategy",
        description: "Define your brand's core identity, positioning, and value proposition. This foundational understanding, informed by initial research, will guide all your visual and communication decisions.",
        order: 1,
        estimated_time: "1.5 hours",
        tools: ["Perplexity AI", "ChatGPT"],
        instructions:
          "Begin by understanding your market landscape with Perplexity AI. Then, use the insights gained to fuel the ChatGPT prompts below, developing a comprehensive brand strategy.",
        tips: [
          "Be specific about your target audience in your research and prompts",
          "Use insights from your market research (competitors, trends, customer sentiments) when defining your unique position",
          "Focus on what makes your brand genuinely different and valuable",
          "Remember, the outputs from ChatGPT are excellent starting points. Refine them to truly reflect your vision"
        ],
        expected_outputs: [
          "Summary of market & competitor insights",
          "Brand positioning statement",
          "Target audience profile",
          "Unique value proposition",
          "Brand personality traits"
        ],
        quality_checklist: [
          "Market research provides a clear context for your brand",
          "Positioning is clear, differentiated, and informed by research",
          "Target audience is specific, well-defined, and actionable",
          "Value proposition addresses real customer needs and highlights differentiation",
          "Brand personality is authentic, consistent, and will resonate with your target audience"
        ],
        prompts: [
          {
            id: "market-research",
            title: "Market & Competitor Research",
            category: "strategy",
            tool: "Perplexity AI",
            template:
              "Analyze current market trends, key competitors (list 2-3 if known, or ask Perplexity to identify them), and general customer sentiments for a [INDUSTRY] business. What are the common pain points and unmet needs of [TARGET_AUDIENCE] when looking for solutions in the [INDUSTRY] sector? Identify successful branding strategies used by companies in the [INDUSTRY] targeting a similar audience to [TARGET_AUDIENCE].",
            variables: ["INDUSTRY", "TARGET_AUDIENCE"],
            example_output:
              "Market Analysis: The digital marketing consulting industry shows 15% annual growth with increasing demand for AI-powered solutions. Key competitors include HubSpot, Mailchimp, and local agencies. Customer pain points include high costs, complex tools, and lack of personalized service. Successful strategies focus on education-first content, transparent pricing, and local community building.",
            next_steps: [
              "Synthesize findings into a brief summary",
              "Note key competitor names and unique approaches",
              "Use insights to inform subsequent ChatGPT prompts",
            ],
          },
          {
            id: "brand-positioning",
            title: "Brand Positioning Statement",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Based on market research indicating [KEY_RESEARCH_INSIGHT_ABOUT_MARKET_OR_COMPETITORS], create a brand positioning statement for a [INDUSTRY] business called [BUSINESS_NAME] that targets [TARGET_AUDIENCE]. Our unique value, differentiating us from competitors like [COMPETITOR_EXAMPLE_IF_ANY], is [UNIQUE_VALUE]. Include: target market, competitive frame of reference, point of difference, and reason to believe.",
            variables: ["KEY_RESEARCH_INSIGHT_ABOUT_MARKET_OR_COMPETITORS", "INDUSTRY", "BUSINESS_NAME", "TARGET_AUDIENCE", "COMPETITOR_EXAMPLE_IF_ANY", "UNIQUE_VALUE"],
            example_output:
              "For small business owners in Sierra Leone struggling with inconsistent digital marketing, informed by the market trend of increasing mobile internet usage and the competitor focus on larger enterprises, [Business Name] is the AI-powered consulting firm that provides accessible, tech-savvy solutions with a personal touch. Unlike agencies that offer generic packages, we combine enterprise-level digital strategies with the affordability and dedicated care that small businesses deserve, empowering them to thrive online.",
            next_steps: [
              "Refine the positioning based on further reflection on your market research",
              "Consider how you will prove your 'reason to believe'",
              "Use this statement as the foundational message for all brand communications",
            ],
          },
          {
            id: "target-audience",
            title: "Target Audience Profile",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Leveraging insights from market research about [TARGET_AUDIENCE_BEHAVIORS_OR_PAIN_POINTS_FROM_RESEARCH], create a detailed target audience profile for [BUSINESS_NAME] in the [INDUSTRY] industry. Include demographics, psychographics, specific pain points related to [INDUSTRY], goals, preferred communication channels (e.g., WhatsApp, Facebook, LinkedIn), and typical buying behavior. Make it specific and actionable for marketing and product development.",
            variables: ["TARGET_AUDIENCE_BEHAVIORS_OR_PAIN_POINTS_FROM_RESEARCH", "BUSINESS_NAME", "INDUSTRY"],
            example_output:
              "Primary Audience: Sierra Leonean small business owners (25-45 years old), often sole proprietors or with 1-10 employees, annual revenue $50K-$500K. Tech-curious but time-constrained and sometimes overwhelmed by complex tools. Pain points include lack of marketing budget, difficulty reaching customers online, and inconsistent sales. Goals include increasing visibility, generating more leads, and saving time. Preferred channels: WhatsApp for direct communication, Facebook for community, LinkedIn for professional insights. Values personal relationships, proven results, and solutions that are easy to implement.",
            next_steps: [
              "Create 1-2 detailed buyer personas based on this profile",
              "Use this profile to tailor your visual identity and brand voice to resonate deeply",
              "Research where your specific audience segments spend their time online for targeted marketing",
            ],
          },
          {
            id: "value-proposition",
            title: "Unique Value Proposition",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Develop a compelling Unique Value Proposition (UVP) for [BUSINESS_NAME] that serves [TARGET_AUDIENCE] in [INDUSTRY]. Focus on the specific problem we solve (identified from research), how we solve it differently or better than [COMPETITOR_APPROACH_OR_GENERAL_MARKET_SOLUTION], and the measurable benefits for the customer. Make it clear, concise, customer-focused, and memorable.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE", "INDUSTRY", "COMPETITOR_APPROACH_OR_GENERAL_MARKET_SOLUTION"],
            example_output:
              "[Business Name] empowers Sierra Leonean small businesses to achieve a 40% increase in online leads within 90 days through personalized, AI-driven digital marketing strategies that are affordable and easy to implement, unlike complex agency retainers or time-consuming DIY efforts.",
            next_steps: [
              "Test the clarity and appeal of your UVP with individuals matching your target audience profile",
              "Create variations for different marketing materials or specific service offerings",
              "Ensure your UVP is front and center in all your marketing communications",
            ],
          },
          {
            id: "brand-personality",
            title: "Brand Personality Traits",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Define the brand personality for [BUSINESS_NAME] targeting [TARGET_AUDIENCE]. Include 5-7 core personality traits (e.g., Innovative, Supportive, Pragmatic, Energetic, Trustworthy), the overall communication style, desired tone of voice across different contexts (e.g., website, social media, customer support), and how the brand would ideally behave in common situations (e.g., responding to a customer query, announcing a new service). Make it distinctive, authentic to your vision, and aligned with audience preferences identified in research.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE"],
            example_output:
              "Personality Traits: Approachable Expert, Innovative Guide, Reliable Partner, Community-Focused, Optimistic. Communication Style: Clear, direct, and jargon-free. Tone: Conversational and encouraging on social media; professional yet supportive in consultations; solution-focused and empathetic in support. Behavior: Celebrates client wins publicly (with permission); proactively shares valuable insights; admits mistakes openly and offers solutions.",
            next_steps: [
              "Use these defined brand personality traits as direct input for your logo, color palette, visual style, and brand voice prompts",
              "Create a concise brand voice guidelines document based on this",
              "Train any team members or collaborators on this brand personality to ensure consistency",
              "Apply consistently across all brand touchpoints",
            ],
          },
        ],
      },
      {
        id: "visual-identity",
        title: "Visual Identity",
        description: "Create your logo, color palette, and visual brand elements that reflect your defined brand personality and appeal to your target audience.",
        order: 2,
        estimated_time: "2.5 hours",
        tools: ["Ideogram AI", "ChatGPT", "Canva"],
        instructions:
          "Transform your brand strategy and personality into tangible visual elements. Start with logo concepts using Ideogram AI. Refine your chosen concept and develop a cohesive color palette and visual style using ChatGPT for guidance and Canva for practical application and refinement.",
        tips: [
          "Generate multiple logo concepts (at least 5-10 variations) before narrowing down",
          "For text-heavy logos or when specific text rendering is critical, Ideogram AI provides excellent results for text-based designs",
          "Use Canva to clean up AI-generated logo concepts, convert them to vector (if possible with Canva's features or by tracing), test variations, and create mockups",
          "Test colors for accessibility (e.g., using an online contrast checker) and emotional resonance",
          "Keep designs relatively simple, memorable, and scalable for various applications",
          "Iterate! Don't be afraid to go back to the AI tools with refined prompts based on initial outputs"
        ],
        expected_outputs: [
          "Primary logo design",
          "Logo variations (e.g., horizontal, vertical, icon-only/monogram)",
          "Brand color palette with hex codes and usage rationale",
          "Typography recommendations (initial suggestions, can be refined)",
          "Visual style guidelines (mood, imagery style, graphic elements)"
        ],
        quality_checklist: [
          "Logo is distinctive, memorable, scalable, and readable at small sizes",
          "Colors work well together, reflect brand personality, and meet accessibility standards",
          "Visual style is cohesive and consistently reflects the defined brand personality",
          "All visual elements work harmoniously together"
        ],
        prompts: [
          {
            id: "logo-design",
            title: "Logo Design",
            category: "creative",
            tool: "Ideogram AI",
            template:
              "I need to create a logo for [BRAND_NAME]. Here's the context:\n\nBrand Personality: [BRAND_PERSONALITY]\nTarget Audience: [TARGET_AUDIENCE]\nUnique Value Proposition: [VALUE_PROPOSITION]\nIndustry/Category: [INDUSTRY]\n\nPlease generate 8-10 diverse logo concepts that reflect this brand identity. Include a mix of:\n- Wordmarks (text-only)\n- Logomarks (symbol-only)\n- Combination marks (text + symbol)\n- Different stylistic approaches (modern, classic, playful, etc.)\n\nFor each concept, provide a brief rationale explaining how it connects to the brand personality and appeals to the target audience.",
            variables: ["BRAND_NAME", "BRAND_PERSONALITY", "TARGET_AUDIENCE", "VALUE_PROPOSITION", "INDUSTRY"],
            example_output:
              "Logo Concept 1: Modern geometric wordmark with custom typography - Appeals to tech-savvy audience through clean, forward-thinking design\nLogo Concept 2: Icon + text featuring interconnected circles - Symbolizes collaboration and community\nLogo Concept 3: Minimalist monogram with subtle gradient - Conveys premium quality and sophistication\nLogo Concept 4: Hand-drawn style with organic shapes - Emphasizes authenticity and human connection\nLogo Concept 5: Bold sans-serif with dynamic underline - Projects confidence and innovation",
            next_steps: [
              "Use Ideogram AI to generate visual concepts based on your favorites",
              "Refine and iterate on the most promising concepts",
              "Create variations (horizontal, stacked, icon-only) of your top choice",
              "Test logo readability at various sizes (favicon to billboard)",
            ],
          },
          {
            id: "color-palette",
            title: "Color Palette Development",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Based on my brand personality of [BRAND_PERSONALITY] and target audience of [TARGET_AUDIENCE], help me develop a comprehensive color palette for [BRAND_NAME].\n\nConsider:\n- Psychological impact of colors on my target audience\n- Industry standards and expectations\n- Accessibility requirements (WCAG contrast ratios)\n- Versatility across digital and print applications\n\nProvide:\n1. Primary color (main brand color)\n2. Secondary colors (2-3 supporting colors)\n3. Accent colors (1-2 for highlights/CTAs)\n4. Neutral colors (grays, whites for backgrounds/text)\n5. Hex codes and RGB values\n6. Usage guidelines for each color\n7. Rationale for color choices",
            variables: ["BRAND_NAME", "BRAND_PERSONALITY", "TARGET_AUDIENCE"],
            example_output:
              "PRIMARY COLOR:\n• Deep Teal (#0D7377) - Conveys trust, stability, and innovation\n• Use for: Main logo, primary CTAs, headers\n\nSECONDARY COLORS:\n• Warm Gray (#6B7280) - Professional, modern\n• Soft Blue (#E0F2FE) - Calming, approachable\n• Use for: Supporting elements, backgrounds\n\nACCENT COLOR:\n• Coral (#FF6B6B) - Energy, urgency, highlights\n• Use for: CTAs, important notifications, accents\n\nNEUTRALS:\n• Charcoal (#374151) - Text, strong contrast\n• Light Gray (#F9FAFB) - Backgrounds, subtle elements",
            next_steps: [
              "Test color combinations using an online contrast checker",
              "Apply colors to your logo concepts",
              "Create color swatches and save hex codes for easy reference",
              "Consider how colors will look across different mediums (web, print, merchandise)",
            ],
          },
          {
            id: "visual-style-guidelines",
            title: "Visual Style Guidelines",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Develop practical visual style guidelines for [BUSINESS_NAME], whose brand personality is [BRAND_PERSONALITY]. These guidelines should be actionable for creating consistent brand applications. Include recommendations for:\n\nTypography: Suggest 1-2 primary web-safe font pairings (one for headings, one for body) that reflect the brand personality. Specify weights and general usage.\nImagery Style: Describe the preferred style for photographs and illustrations (e.g., authentic people-focused photos, bright and optimistic, minimalist flat illustrations, tech-forward abstract graphics). Include mood/keywords.\nGraphic Elements: Suggest types of icons, patterns, or other visual motifs that would align with the brand.\nSpacing & Layout Principles: General advice on using whitespace, alignment, and grid systems for a clean and organized look.\nDo's and Don'ts: 2-3 key pointers for maintaining visual consistency.",
            variables: ["BUSINESS_NAME", "BRAND_PERSONALITY"],
            example_output:
              "TYPOGRAPHY:\n• Headings: Poppins (SemiBold, Bold) - modern, friendly. Body: Inter (Regular, Medium) - clean, highly legible.\n\nIMAGERY STYLE:\n• Authentic, diverse photos of people collaborating or benefiting from our service; bright, natural lighting; avoid overly staged stock photos. Mood: Uplifting, clear, professional. Keywords: innovation, connection, clarity.\n\nGRAPHIC ELEMENTS:\n• Use simple geometric shapes with rounded corners, subtle line work, and occasional use of a defined brand pattern (e.g., minimalist wave or dot pattern). Icons should be clean line icons.\n\nSPACING & LAYOUT:\n• Embrace generous whitespace. Use a consistent 8pt grid for spacing. Align elements clearly for a structured, uncluttered feel.\n\nDO'S: Maintain high contrast for text. Use brand colors consistently. Keep layouts clean.\nDON'TS: Use more than 2-3 fonts. Clutter designs with too many elements. Use inconsistent icon styles.",
            next_steps: [
              "Create a more formal Brand Style Guide document (e.g., in Canva or Google Docs) incorporating these guidelines, your logo, and color palette",
              "Design initial templates (e.g., social media post, presentation slide) in Canva using these guidelines",
              "Share these guidelines with anyone creating visual content for your brand",
            ],
          },
        ],
      },
      {
        id: "brand-voice",
        title: "Brand Voice",
        description: "Develop your brand's communication style and messaging templates that consistently reflect your brand personality across all channels.",
        order: 3,
        estimated_time: "1.5 hours",
        tools: ["ChatGPT", "Copy.ai"],
        instructions:
          "Create consistent messaging and communication guidelines that reflect your brand personality defined in Section 1. Develop templates and examples for various communication scenarios including social media, website copy, and customer interactions.",
        tips: [
          "Reference your defined brand personality traits consistently throughout all communications",
          "Create specific examples for different contexts (formal vs. casual, customer support vs. marketing)",
          "Test your voice guidelines with real scenarios to ensure they feel authentic",
          "Keep your target audience's communication preferences and cultural context in mind",
          "Be consistent across all communication channels while adapting tone appropriately"
        ],
        expected_outputs: [
          "Comprehensive brand voice guidelines document",
          "Social media content templates and examples",
          "Website copy framework (headlines, CTAs, about section)",
          "Customer communication templates",
          "Content creation guidelines for team members"
        ],
        quality_checklist: [
          "Voice guidelines clearly reflect the defined brand personality traits",
          "Templates and examples feel authentic and consistent with brand identity",
          "Guidelines cover various communication scenarios and contexts",
          "Content resonates with target audience preferences and cultural context",
          "Guidelines are practical and easy for team members to implement"
        ],
        prompts: [
          {
            id: "voice-guidelines",
            title: "Brand Voice Guidelines",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create comprehensive brand voice guidelines for [BUSINESS_NAME] with [BRAND_PERSONALITY] personality targeting [TARGET_AUDIENCE]. Based on the brand positioning and personality traits defined earlier, develop detailed guidelines that include:\n\n1. Core Voice Characteristics (3-4 key traits)\n2. Tone Variations for different contexts (formal, casual, supportive, promotional)\n3. Language Preferences (vocabulary, sentence structure, technical level)\n4. Words and Phrases to Use vs. Avoid\n5. Communication Do's and Don'ts\n6. Voice Examples in different scenarios\n\nEnsure the voice guidelines reflect the brand's [UNIQUE_VALUE_PROPOSITION] and resonate with [TARGET_AUDIENCE]'s communication preferences.",
            variables: ["BUSINESS_NAME", "BRAND_PERSONALITY", "TARGET_AUDIENCE", "UNIQUE_VALUE_PROPOSITION"],
            example_output:
              "**Core Voice: Approachable Expert**\n\n**Tone Variations:**\n- Formal: Professional yet warm, solution-focused\n- Casual: Friendly, conversational, encouraging\n- Supportive: Empathetic, patient, reassuring\n\n**Language Preferences:**\n- Use: Simple, clear language; active voice; specific examples\n- Avoid: Industry jargon, overly formal language, negative framing\n\n**Examples:**\n✅ 'Let's solve this together' ❌ 'This problem requires resolution'\n✅ 'Here's what works best' ❌ 'The optimal solution is'",
            next_steps: [
              "Create comprehensive voice guidelines document",
              "Develop voice training materials for team members",
              "Create voice consistency checklist for content review",
              "Test guidelines with sample content across different channels"
            ],
          },
          {
            id: "social-media-posts",
            title: "Social Media Content Templates",
            category: "creative",
            tool: "Copy.ai",
            template:
              "Create 15 diverse, platform-optimized social media post templates for [BUSINESS_NAME] targeting [TARGET_AUDIENCE] with [BRAND_PERSONALITY] voice. Using the brand voice guidelines developed earlier, create templates for:\n\n1. Educational carousel posts (LinkedIn/Instagram)\n2. Behind-the-scenes video content\n3. Client success story highlights\n4. Industry trend commentary\n5. Interactive polls and questions\n6. Motivational quote graphics\n7. Product demo snippets\n8. Team member spotlights\n9. User-generated content campaigns\n10. Trending hashtag participation\n11. Community appreciation posts\n12. Thought leadership threads (Twitter/LinkedIn)\n13. Quick tip reels/videos\n14. Live Q&A announcements\n15. Cross-platform story content\n\nEach template should include: hook, body content, call-to-action, relevant hashtags, and platform-specific optimizations. Ensure templates reflect [UNIQUE_VALUE_PROPOSITION] and include engagement psychology principles.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE", "BRAND_PERSONALITY", "UNIQUE_VALUE_PROPOSITION"],
            example_output:
              "**Educational Carousel (LinkedIn):** 'Slide 1: \"5 mistakes killing your [topic] strategy\" | Slides 2-6: Each mistake with solution | Slide 7: CTA \"Save this post and share your biggest challenge below!\" #IndustryTips #Strategy'\n\n**Success Story (Instagram):** 'Client transformation Tuesday! 📈 [Client] went from [before state] to [after state] in [timeframe]. The game-changer? [key strategy]. What's your biggest win this week? Drop it below! 👇 #ClientSuccess #Transformation'\n\n**Thought Leadership Thread (Twitter):** '1/ Hot take: [controversial but valuable opinion about industry] 🧵 2/ Here's why this matters... 3/ The data shows... 4/ What this means for you... 5/ Try this instead... What's your take? Reply and let's discuss!'\n\n**Interactive Poll (Instagram Stories):** 'Quick question for my [audience type] friends! Which challenge hits hardest? A) [Option 1] B) [Option 2] I'll share solutions for the winner tomorrow! 💡'",
            next_steps: [
              "Adapt templates for each platform's specific format and audience behavior",
              "Create a content batching system using these templates",
              "Develop platform-specific posting schedules based on audience activity",
              "Set up A/B testing for different template variations",
              "Create visual brand templates for graphics and videos"
            ],
          },
          {
            id: "website-copy",
            title: "Website Copy Framework",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Create a comprehensive website copy framework for [BUSINESS_NAME] targeting [TARGET_AUDIENCE] using [BRAND_PERSONALITY] voice. Based on the brand positioning and voice guidelines developed earlier, create copy for:\n\n1. Homepage Elements:\n   - Compelling headline that communicates [UNIQUE_VALUE_PROPOSITION]\n   - Subheadline that clarifies the benefit\n   - Hero section copy\n   - Social proof statements\n\n2. About Section:\n   - Brand story that connects with [TARGET_AUDIENCE]\n   - Mission/vision statements\n   - Team introduction copy\n\n3. Services/Products:\n   - Benefit-focused descriptions\n   - Feature explanations in customer language\n\n4. Call-to-Action Phrases:\n   - Primary CTA variations\n   - Secondary CTA options\n   - Urgency/scarcity language\n\nEnsure all copy reflects the brand personality and addresses [TARGET_AUDIENCE] pain points.",
            variables: ["BUSINESS_NAME", "TARGET_AUDIENCE", "BRAND_PERSONALITY", "UNIQUE_VALUE_PROPOSITION"],
            example_output:
              "**Homepage Headline:** 'Grow your business without the marketing headaches'\n**Subheadline:** 'We handle the digital marketing strategy and execution so you can focus on what you do best'\n\n**Value Proposition:** 'Get more qualified leads and higher conversions with marketing that actually works for your business'\n\n**About Section:** 'We're the team that gets genuinely excited about your success. Founded by entrepreneurs who understand the struggle of wearing too many hats...'\n\n**Primary CTA:** 'Let's chat about your goals' | **Secondary CTA:** 'See our case studies' | **Urgency CTA:** 'Book your free strategy call today'",
            next_steps: [
              "Expand each section with detailed, conversion-focused copy",
              "Create A/B test variations for headlines and CTAs",
              "Develop page-specific copy using this framework",
              "Optimize copy based on user behavior and feedback data"
            ],
          },
        ],
      },
      {
        id: "brand-applications",
        title: "Brand Application & Templates",
        description: "Create practical brand applications and templates that demonstrate how your visual identity and messaging work across different touchpoints and marketing materials.",
        order: 3,
        estimated_time: "1.5 hours",
        tools: ["ChatGPT", "Ideogram AI"],
        instructions:
          "Apply your brand identity to create templates and examples for business cards, social media, website elements, and other marketing materials.",
        tips: [
          "Maintain consistency across all applications",
          "Consider the context where each application will be used",
          "Create templates that can be easily updated",
          "Test applications at actual sizes and in real environments"
        ],
        expected_outputs: [
          "Business card design template",
          "Social media post templates",
          "Email signature design",
          "Website header/banner concepts",
          "Brand application guidelines"
        ],
        quality_checklist: [
          "All applications maintain brand consistency",
          "Designs are practical and functional",
          "Templates are easy to customize",
          "Applications work across different sizes and formats",
          "Brand guidelines are clearly documented"
        ],
        prompts: [
          {
            id: "business-card",
            title: "Business Card Design",
            category: "creative",
            tool: "Ideogram AI",
            template:
              "Design a professional business card for [BUSINESS_NAME] using brand colors [BRAND_COLORS] and typography [BRAND_FONTS]. Include: logo, name, title, contact information, and website. Style should reflect [BRAND_PERSONALITY]. Standard business card size (3.5 x 2 inches). Clean, readable layout with good use of white space.",
            variables: ["BUSINESS_NAME", "BRAND_COLORS", "BRAND_FONTS", "BRAND_PERSONALITY"],
            example_output:
              "Clean, modern business card with logo prominently displayed, using Ocean Blue and Growth Green color scheme. Contact information in Source Sans Pro, with plenty of white space for a professional, uncluttered look.",
            next_steps: [
              "Create front and back designs",
              "Consider special finishes or materials",
              "Prepare print-ready files"
            ],
          },
          {
            id: "social-templates",
            title: "Social Media Templates",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Create social media post templates for [BUSINESS_NAME] that incorporate brand colors [BRAND_COLORS], fonts [BRAND_FONTS], and voice [BRAND_VOICE]. Include templates for: announcement posts, educational content, behind-the-scenes, and promotional posts. Specify dimensions for Instagram, Facebook, and LinkedIn.",
            variables: ["BUSINESS_NAME", "BRAND_COLORS", "BRAND_FONTS", "BRAND_VOICE"],
            example_output:
              "Template 1: Educational posts with Ocean Blue header, white background, Growth Green accent for key points. Template 2: Announcements with gradient background, bold typography. Template 3: Behind-the-scenes with casual layout, warm gray borders. All templates include logo placement and consistent spacing.",
            next_steps: [
              "Create templates in design software",
              "Develop content calendar using templates",
              "Test templates with actual content"
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
    tools_required: ["Perplexity AI", "ChatGPT"],
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
        tools: ["ChatGPT"],
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
        tools: ["ChatGPT"],
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
      {
        id: "competitive-analysis",
        title: "Competitive Analysis",
        description: "Analyze competitors and identify market gaps using AI-powered research to position your solution effectively.",
        order: 3,
        estimated_time: "1 hour",
        tools: ["Perplexity AI", "ChatGPT"],
        instructions:
          "Use AI tools to systematically analyze direct and indirect competitors, identify their strengths and weaknesses, and find opportunities for differentiation.",
        tips: [
          "Look at both direct and indirect competitors",
          "Analyze their marketing messages and positioning",
          "Identify gaps in their offerings",
          "Consider emerging competitors and new market entrants"
        ],
        expected_outputs: [
          "Competitive landscape map",
          "Competitor feature comparison",
          "Pricing analysis",
          "Market positioning opportunities",
          "Differentiation strategy recommendations"
        ],
        quality_checklist: [
          "Analysis covers both direct and indirect competitors",
          "Competitor strengths and weaknesses are clearly identified",
          "Market gaps and opportunities are documented",
          "Differentiation opportunities are actionable",
          "Competitive intelligence is current and accurate"
        ],
        prompts: [
          {
            id: "competitor-research",
            title: "Competitor Landscape Analysis",
            category: "strategy",
            tool: "Perplexity AI",
            template:
              "Analyze the competitive landscape for [PRODUCT_CATEGORY] solutions targeting [TARGET_MARKET]. Identify the top 5-7 competitors, their key features, pricing models, target customers, strengths, and weaknesses. Include both established players and emerging startups.",
            variables: ["PRODUCT_CATEGORY", "TARGET_MARKET"],
            example_output:
              "Top competitors: Notion (all-in-one workspace), Airtable (database-focused), Monday.com (project management). Notion's strength: flexibility, weakness: complexity. Market gap: simple AI-powered automation for small teams. Pricing ranges from $8-20/user/month.",
            next_steps: [
              "Create detailed competitor profiles",
              "Analyze competitor customer reviews",
              "Identify partnership opportunities"
            ],
          },
          {
            id: "positioning-strategy",
            title: "Market Positioning Strategy",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Based on the competitive analysis of [INDUSTRY] and target audience [TARGET_AUDIENCE], develop a unique positioning strategy for [PRODUCT_NAME]. Include: unique value proposition, key differentiators, positioning statement, and messaging strategy that sets us apart from competitors [MAIN_COMPETITORS].",
            variables: ["INDUSTRY", "TARGET_AUDIENCE", "PRODUCT_NAME", "MAIN_COMPETITORS"],
            example_output:
              "Position as 'The AI-first project management tool for creative teams.' Differentiators: visual workflow automation, creative asset integration, intuitive AI assistance. Messaging: 'Project management that thinks like a creative' - emphasizing simplicity over feature complexity.",
            next_steps: [
              "Test positioning with target audience",
              "Develop supporting marketing materials",
              "Create competitive battle cards"
            ],
          },
        ],
      },
      {
        id: "validation-methodology",
        title: "Validation & Testing Strategy",
        description: "Design and execute validation experiments to test your assumptions and validate market demand before building.",
        order: 4,
        estimated_time: "1 hour",
        tools: ["ChatGPT"],
        instructions:
          "Create a systematic approach to validate your idea through experiments, surveys, and user feedback before investing significant development time.",
        tips: [
          "Start with the riskiest assumptions",
          "Design quick, low-cost validation experiments",
          "Focus on learning, not proving you're right",
          "Set clear success criteria for each test"
        ],
        expected_outputs: [
          "Assumption mapping and prioritization",
          "Validation experiment designs",
          "Survey questions and interview guides",
          "Success metrics and criteria",
          "Testing timeline and milestones"
        ],
        quality_checklist: [
          "Key assumptions are clearly identified and prioritized",
          "Experiments are designed to test specific hypotheses",
          "Success criteria are measurable and realistic",
          "Validation methods are appropriate for the assumptions",
          "Timeline allows for iteration based on learnings"
        ],
        prompts: [
          {
            id: "assumption-mapping",
            title: "Assumption Identification & Prioritization",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "For [PRODUCT_CONCEPT] targeting [TARGET_AUDIENCE], identify and prioritize the key assumptions that need validation. Include: customer problem assumptions, solution assumptions, market assumptions, and business model assumptions. Rank by risk level (high/medium/low) and ease of testing.",
            variables: ["PRODUCT_CONCEPT", "TARGET_AUDIENCE"],
            example_output:
              "High Risk: 1) Small teams struggle with project visibility (customer problem), 2) Users will pay $15/month for AI automation (pricing). Medium Risk: 3) Integration with existing tools is essential (solution). Low Risk: 4) Market is growing 20% annually (market size).",
            next_steps: [
              "Design experiments for high-risk assumptions",
              "Create validation timeline",
              "Identify required resources for testing"
            ],
          },
          {
            id: "validation-experiments",
            title: "Validation Experiment Design",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Design validation experiments for [TOP_ASSUMPTIONS] related to [PRODUCT_CONCEPT]. For each assumption, create: experiment hypothesis, testing method (survey, interview, landing page, prototype), success criteria, timeline, and required resources. Focus on lean, cost-effective approaches.",
            variables: ["TOP_ASSUMPTIONS", "PRODUCT_CONCEPT"],
            example_output:
              "Experiment 1: Landing page test for pricing assumption. Hypothesis: 30% of visitors will click 'Start Free Trial' at $15/month. Method: Create landing page with pricing, drive traffic via ads. Success: >25% click-through rate. Timeline: 2 weeks, Budget: $200.",
            next_steps: [
              "Execute highest priority experiments first",
              "Set up tracking and measurement systems",
              "Plan iteration cycles based on results"
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
    tools_required: ["Khroma", "ChatGPT"],
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
        tools: ["Khroma", "ChatGPT"],
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
              "Generate a comprehensive color system for [PROJECT_TYPE] targeting [AUDIENCE] with [BRAND_PERSONALITY] feel. Include: Primary colors (3 shades: light, main, dark), Secondary colors (2 complementary), Accent colors (2 for highlights/CTAs), Neutral grays (5-step scale from light to dark), Semantic colors (success, warning, error, info), and Background colors (light/dark mode). Ensure WCAG 2.1 AA compliance (4.5:1 contrast ratio minimum). Provide hex codes, HSL values, and usage guidelines for each color.",
            variables: ["PROJECT_TYPE", "AUDIENCE", "BRAND_PERSONALITY"],
            example_output:
              "Primary: #3B82F6 (main), #60A5FA (light), #1D4ED8 (dark). Secondary: #10B981 (success green), #8B5CF6 (accent purple). Accent: #F59E0B (warning amber), #EF4444 (error red). Neutrals: #F8FAFC, #E2E8F0, #64748B, #334155, #0F172A. Semantic: Success #10B981, Warning #F59E0B, Error #EF4444, Info #3B82F6. All combinations achieve 4.5:1+ contrast ratios for accessibility.",
            next_steps: [
              "Test color combinations using WebAIM contrast checker",
              "Create comprehensive color usage guidelines with do/don't examples",
              "Generate color tokens for design systems (CSS custom properties)",
              "Design dark mode color variations"
            ],
          },
        ],
      },
      {
        id: "component-system",
        title: "Component Library Design",
        description: "Create a comprehensive library of reusable UI components that maintain consistency across your application.",
        order: 2,
        estimated_time: "1.5 hours",
        tools: ["ChatGPT"],
        instructions:
          "Design and document a complete set of UI components including buttons, forms, cards, navigation elements, and interactive components.",
        tips: [
          "Start with the most commonly used components",
          "Define component states (default, hover, active, disabled)",
          "Consider responsive behavior for each component",
          "Document component usage guidelines and best practices"
        ],
        expected_outputs: [
          "Button component variations and states",
          "Form input components (text, select, checkbox, radio)",
          "Navigation components (header, sidebar, breadcrumbs)",
          "Content components (cards, modals, tooltips)",
          "Component usage documentation"
        ],
        quality_checklist: [
          "Components follow consistent design patterns",
          "All interactive states are defined",
          "Components are accessible and keyboard navigable",
          "Responsive behavior is documented",
          "Usage guidelines are clear and comprehensive"
        ],
        prompts: [
          {
            id: "button-system",
            title: "Button Component System",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Design a comprehensive button system for [PROJECT_TYPE] using colors [COLOR_PALETTE] and typography [FONT_SYSTEM]. Include: primary, secondary, tertiary button styles, sizes (small, medium, large), states (default, hover, active, disabled, loading), and icon button variations. Provide CSS specifications and usage guidelines.",
            variables: ["PROJECT_TYPE", "COLOR_PALETTE", "FONT_SYSTEM"],
            example_output:
              "Primary Button: #2563EB background, white text, 12px padding, rounded corners. Hover: #1D4ED8. Sizes: Small (32px), Medium (40px), Large (48px). Loading state: spinner animation. Usage: Main CTAs, form submissions.",
            next_steps: [
              "Create button variations for different contexts",
              "Test button accessibility with screen readers",
              "Document button hierarchy and usage rules"
            ],
          },
          {
            id: "form-components",
            title: "Form Component Library",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Design a complete form component system for [PROJECT_TYPE] including: text inputs, textareas, select dropdowns, checkboxes, radio buttons, file uploads, and date pickers. Define states (default, focus, error, disabled), validation styling, and accessibility features. Use color palette [COLORS] and typography [FONTS].",
            variables: ["PROJECT_TYPE", "COLORS", "FONTS"],
            example_output:
              "Text Input: 1px border #D1D5DB, focus: #2563EB border, error: #EF4444 border with error message. Label: 14px medium weight above input. Placeholder: #9CA3AF. Required fields marked with red asterisk.",
            next_steps: [
              "Create form validation patterns",
              "Design error and success message styles",
              "Test form accessibility and keyboard navigation"
            ],
          },
        ],
      },
      {
        id: "iconography-illustrations",
        title: "Iconography & Visual Elements",
        description: "Develop a consistent icon system and visual elements that enhance your design system and improve user experience.",
        order: 3,
        estimated_time: "1 hour",
        tools: ["ChatGPT"],
        instructions:
          "Create guidelines for iconography, illustrations, and visual elements that maintain consistency and enhance the overall design system.",
        tips: [
          "Choose a consistent icon style (outline, filled, or mixed)",
          "Maintain consistent stroke weights and corner radius",
          "Create icons in multiple sizes for different use cases",
          "Consider creating custom illustrations for key features"
        ],
        expected_outputs: [
          "Icon style guidelines and specifications",
          "Core icon set for common actions",
          "Illustration style guide",
          "Visual element usage rules",
          "Icon sizing and spacing guidelines"
        ],
        quality_checklist: [
          "Icons follow consistent visual style",
          "Icon meanings are intuitive and universal",
          "Icons work well at different sizes",
          "Visual elements enhance rather than distract",
          "Accessibility considerations are addressed"
        ],
        prompts: [
          {
            id: "icon-system",
            title: "Icon System Design",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Design an icon system for [PROJECT_TYPE] that complements the visual style [DESIGN_STYLE]. Define: icon style (outline/filled), stroke weight, corner radius, grid system, sizing (16px, 24px, 32px), and create specifications for common icons: navigation (home, menu, search), actions (edit, delete, save), status (success, warning, error), and social media.",
            variables: ["PROJECT_TYPE", "DESIGN_STYLE"],
            example_output:
              "Style: 2px stroke outline icons, 4px corner radius, 24px grid. Sizes: 16px (inline), 24px (buttons), 32px (headers). Navigation: house icon (home), hamburger (menu), magnifying glass (search). Consistent visual weight across all icons.",
            next_steps: [
              "Create icon library with common symbols",
              "Test icon recognition with users",
              "Develop icon naming conventions"
            ],
          },
        ],
      },
      {
        id: "design-documentation",
        title: "Design System Documentation",
        description: "Create comprehensive documentation that enables consistent implementation and maintenance of your design system.",
        order: 4,
        estimated_time: "1 hour",
        tools: ["ChatGPT"],
        instructions:
          "Document all design decisions, usage guidelines, and implementation details to ensure consistent application of your design system.",
        tips: [
          "Include visual examples for every guideline",
          "Provide do's and don'ts for each component",
          "Create templates for common page layouts",
          "Include accessibility guidelines and requirements"
        ],
        expected_outputs: [
          "Design system style guide",
          "Component usage documentation",
          "Layout and spacing guidelines",
          "Accessibility standards and checklist",
          "Implementation guidelines for developers"
        ],
        quality_checklist: [
          "Documentation is comprehensive and easy to follow",
          "Visual examples accompany all guidelines",
          "Accessibility requirements are clearly stated",
          "Implementation details are developer-friendly",
          "Documentation is organized and searchable"
        ],
        prompts: [
          {
            id: "style-guide",
            title: "Comprehensive Style Guide",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Create a comprehensive style guide for [PROJECT_NAME] design system. Include: brand overview, color palette with usage rules, typography hierarchy, spacing system (4px, 8px, 16px, 24px, 32px), component guidelines, layout principles, accessibility standards, and implementation notes for developers. Make it actionable and easy to reference.",
            variables: ["PROJECT_NAME"],
            example_output:
              "Style Guide: Brand reflects modern, trustworthy, innovative values. Colors: Primary #2563EB (CTAs, links), Secondary #10B981 (success states). Typography: Inter for headings (bold), Source Sans Pro for body (regular). 8px base spacing unit. Components maintain 16px minimum touch targets.",
            next_steps: [
              "Create visual examples for each guideline",
              "Develop component usage templates",
              "Set up design system maintenance process"
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai-powered-rapid-prototype",
    title: "AI-Powered UI Prototype Kit",
    slug: "ai-powered-rapid-prototype",
    description: "Build complete UI components and user flows for your prototype using AI-powered design and development tools. Focus on creating polished, interactive interfaces that demonstrate your product's core user experience.",
    outcome_description: "Complete UI prototype with polished components, user flows, and interactive elements ready for user testing or development handoff",
    difficulty: "intermediate",
    estimated_duration: "3-4 hours",
    category: "Development",
    tags: ["ui-design", "prototyping", "user-flows", "components", "ai-tools"],
    tools_required: ["v0.dev", "ChatGPT", "Figma"],
    final_deliverables: [
      "Complete UI component library",
      "Interactive user flow prototypes",
      "Responsive design system",
      "Component documentation and usage guidelines",
    ],
    success_metrics: [
      "All major user flows are prototyped and functional",
      "UI components are consistent and reusable",
      "Prototype effectively communicates product vision",
      "Design is responsive across device sizes",
      "Components follow accessibility best practices",
    ],
    related_kits: ["ai-powered-design-system", "poc-development-workflow", "ai-enhanced-demo-visualization"],
    sections: [
      {
        id: "user-flow-mapping",
        title: "User Flow Mapping & Wireframing",
        description: "Map out complete user journeys and create wireframes for all key interactions in your prototype",
        order: 1,
        estimated_time: "45 minutes",
        tools: ["ChatGPT", "Figma"],
        instructions:
          "Define your core user flows and create wireframes that outline the complete user journey through your product. Focus on the most critical paths users will take.",
        tips: [
          "Start with your primary user persona and their main goal",
          "Map out happy path first, then edge cases",
          "Keep wireframes simple but comprehensive",
          "Consider mobile-first design approach",
        ],
        expected_outputs: [
          "Complete user flow diagrams",
          "Low-fidelity wireframes for all screens",
          "User journey documentation",
          "Screen transition specifications",
        ],
        quality_checklist: [
          "All major user paths are documented",
          "Wireframes show clear navigation flow",
          "User goals are achievable through the flow",
          "Edge cases and error states are considered",
        ],
        prompts: [
          {
            id: "user-flow-design",
            title: "Complete User Flow Mapping",
            category: "creative",
            tool: "ChatGPT",
            template:
              "Create a comprehensive user flow for [PRODUCT_TYPE] targeting [USER_PERSONA]. Map the journey from [ENTRY_POINT] to [END_GOAL]. Include: main flow steps, decision points, alternative paths, error handling, and screen transitions. Focus on [KEY_FEATURES].",
            variables: ["PRODUCT_TYPE", "USER_PERSONA", "ENTRY_POINT", "END_GOAL", "KEY_FEATURES"],
            example_output:
              "User Flow: Landing → Sign Up → Onboarding → Dashboard → Feature Discovery → Task Creation → Completion → Success State. Decision points: Login vs Sign Up, Skip vs Complete Onboarding. Error handling: Invalid inputs, network issues.",
            next_steps: [
              "Create wireframes for each flow step",
              "Define interaction patterns",
              "Plan responsive behavior",
            ],
          },
        ],
      },
      {
        id: "ui-development",
        title: "Complete UI Prototype Development",
        description: "Build a fully interactive, high-fidelity UI prototype that demonstrates all user flows and interactions using v0.dev and modern design systems.",
        order: 2,
        estimated_time: "3 hours",
        tools: ["v0.dev", "ChatGPT", "Figma"],
        instructions:
          "Transform your wireframes into a complete, interactive UI prototype. Focus on creating pixel-perfect components that handle all user states and interactions. Build a cohesive design system that can be easily exported.",
        tips: [
          "Start with your design system tokens (colors, typography, spacing)",
          "Build components in order of user flow priority",
          "Include all interactive states (loading, error, success, empty)",
          "Test every user interaction and transition",
          "Use real or realistic placeholder content",
          "Ensure mobile-first responsive design"
        ],
        expected_outputs: [
          "Complete design system with tokens and components",
          "Fully interactive prototype covering all user flows",
          "Responsive layouts for mobile, tablet, and desktop",
          "All form components with validation states",
          "Data visualization and dashboard components",
          "Modal, overlay, and navigation components",
          "Loading, error, and empty state designs"
        ],
        quality_checklist: [
          "All wireframe screens are implemented as high-fidelity designs",
          "Every user interaction is functional and intuitive",
          "Design system is consistent across all components",
          "Responsive behavior works seamlessly on all devices",
          "All edge cases and error states are designed",
          "Prototype feels like a real, functional product"
        ],
        prompts: [
          {
            id: "design-system-creation",
            title: "Complete Design System Setup",
            category: "creative",
            tool: "v0.dev",
            template:
              "Create a comprehensive design system for [PROJECT_TYPE] including: 1) Color system with primary/secondary/neutral/semantic colors plus dark mode variants, 2) Typography scale with font families, weights, and responsive sizing, 3) Spacing tokens using 4px/8px grid system, 4) Component variants (buttons, inputs, cards) with all interactive states, 5) Elevation system with consistent shadows, 6) Border radius and layout tokens. Base design on [DESIGN_INSPIRATION] trends and ensure accessibility (WCAG 2.1 AA). Support [BRAND_PERSONALITY] through visual choices. Include CSS custom properties and design tokens for easy implementation.",
            variables: ["PROJECT_TYPE", "DESIGN_INSPIRATION", "BRAND_PERSONALITY"],
            example_output:
              "Modern SaaS design system: Primary #3B82F6 (blue), Secondary #10B981 (green), 9-step neutral scale, Inter font family with 6 weight variants, 8px spacing grid, 12 component variants including buttons (primary/secondary/ghost/danger), form inputs with validation states, card components with 3 elevation levels, 4px/8px/12px border radius scale, and comprehensive dark mode support with 95% contrast compliance.",
            next_steps: [
              "Generate CSS custom properties and design tokens file",
              "Test all color combinations for WCAG AA compliance",
              "Create component usage guidelines with do/don't examples",
              "Set up design system documentation site"
            ],
          },
          {
            id: "complete-user-flow-prototype",
            title: "End-to-End User Flow Implementation",
            category: "technical",
            tool: "v0.dev",
            template:
              "Build a complete, interactive prototype for [USER_FLOW] including all screens: [SCREEN_LIST]. Each screen should have: proper navigation, interactive elements, form validation, loading states, error handling, and responsive design. Connect the flow logically with realistic transitions and data flow.",
            variables: ["USER_FLOW", "SCREEN_LIST"],
            example_output:
              "Complete onboarding flow: Landing → Sign Up → Email Verification → Profile Setup → Dashboard. Includes form validation, progress indicators, success/error states, mobile responsive design, and smooth transitions.",
            next_steps: [
              "Test complete user journey",
              "Validate all interactive elements",
              "Ensure data persistence between screens"
            ],
          },
          {
            id: "advanced-component-library",
            title: "Production-Ready Component Library",
            category: "technical",
            tool: "v0.dev",
            template:
              "Create a comprehensive component library for [PROJECT_TYPE] including: navigation (header, sidebar, breadcrumbs), data display (tables, cards, lists, charts), forms (inputs, selects, file upload, validation), feedback (modals, toasts, alerts), and utility components (loading spinners, empty states, error boundaries). Each component should handle all states and be fully responsive.",
            variables: ["PROJECT_TYPE"],
            example_output:
              "Complete component library with 25+ components: responsive data table with sorting/filtering, multi-step form wizard, dashboard cards with real-time updates, modal system, toast notifications, and comprehensive loading/error states.",
            next_steps: [
              "Test component interactions",
              "Validate responsive behavior",
              "Document component APIs"
            ],
          },
        ],
      },
      {
        id: "prototype-testing-validation",
        title: "Prototype Testing & Validation",
        description: "Thoroughly test your UI prototype across devices, validate user flows, and prepare comprehensive documentation for export to development environments.",
        order: 3,
        estimated_time: "1.5 hours",
        tools: ["ChatGPT", "Figma", "v0.dev"],
        instructions:
          "Systematically test every aspect of your prototype, validate all user interactions, and create detailed documentation that will facilitate smooth transition to full development.",
        tips: [
          "Test on multiple devices and screen sizes",
          "Validate every user interaction and state",
          "Document all design decisions and component specifications",
          "Create a comprehensive handoff package",
          "Identify and fix any usability issues",
          "Prepare realistic data scenarios for testing"
        ],
        expected_outputs: [
          "Complete prototype testing report",
          "Cross-device compatibility validation",
          "User flow validation documentation",
          "Component specification sheets",
          "Design system documentation",
          "Export-ready prototype package",
          "Identified improvement areas for development phase"
        ],
        quality_checklist: [
          "All user flows work seamlessly across devices",
          "Every interactive element responds correctly",
          "Design system is consistent and well-documented",
          "Prototype feels polished and production-ready",
          "All edge cases and error states are handled",
          "Documentation is comprehensive and clear"
        ],
        prompts: [
          {
            id: "comprehensive-testing",
            title: "Complete Prototype Testing Protocol",
            category: "optimization",
            tool: "ChatGPT",
            template:
              "Create a comprehensive testing protocol for [PROJECT_TYPE] prototype covering: user flow validation, cross-device testing, interaction testing, accessibility validation, and performance assessment. Include specific test cases for [KEY_FEATURES] and document any issues found.",
            variables: ["PROJECT_TYPE", "KEY_FEATURES"],
            example_output:
              "Testing protocol with 25+ test cases covering: mobile responsiveness (iPhone, Android), tablet layouts, desktop interactions, form validation, navigation flows, loading states, error handling, and accessibility compliance. Includes issue tracking template.",
            next_steps: [
              "Execute all test cases systematically",
              "Document and prioritize any issues found",
              "Create improvement recommendations"
            ],
          },
          {
            id: "export-documentation",
            title: "Development Handoff Documentation",
            category: "strategy",
            tool: "ChatGPT",
            template:
              "Create comprehensive handoff documentation for [PROJECT_TYPE] prototype including: component specifications, design system tokens, user flow documentation, interaction specifications, responsive breakpoints, and technical requirements for development implementation.",
            variables: ["PROJECT_TYPE"],
            example_output:
              "Complete handoff package with: component library documentation, design token specifications, user flow diagrams, interaction guidelines, responsive behavior specs, accessibility requirements, and recommended tech stack for implementation.",
            next_steps: [
              "Review documentation completeness",
              "Prepare prototype export files",
              "Create development roadmap"
            ],
          },
        ],
      },
      {
        id: "testing-optimization",
        title: "Testing & Performance Optimization",
        description: "Test your prototype thoroughly and optimize performance to ensure a smooth demo experience.",
        order: 4,
        estimated_time: "1 hour",
        tools: ["ChatGPT"],
        instructions:
          "Systematically test your prototype, identify and fix critical issues, and optimize performance for the best possible demo experience.",
        tips: [
          "Test on different devices and browsers",
          "Focus on fixing critical bugs first",
          "Optimize loading times and responsiveness",
          "Prepare fallback plans for demo scenarios"
        ],
        expected_outputs: [
          "Comprehensive testing checklist",
          "Bug fixes for critical issues",
          "Performance optimizations",
          "Demo script and scenarios",
          "Deployment and hosting setup"
        ],
        quality_checklist: [
          "All core features work reliably",
          "UI is responsive across different screen sizes",
          "Loading times are acceptable",
          "Error handling prevents crashes",
          "Demo scenarios are tested and documented"
        ],
        prompts: [
          {
            id: "testing-checklist",
            title: "Comprehensive Testing Strategy",
            category: "technical",
            tool: "ChatGPT",
            template:
              "Create a testing checklist for [PROJECT_TYPE] with features [FEATURE_LIST]. Include: functionality testing, UI/UX testing, responsive design testing, performance testing, and edge case scenarios. Prioritize tests by importance for demo success.",
            variables: ["PROJECT_TYPE", "FEATURE_LIST"],
            example_output:
              "Critical: Core feature functionality, form submissions, navigation. Important: Responsive design, loading states, error handling. Nice-to-have: Advanced interactions, edge cases. Test on Chrome, Safari, mobile devices.",
            next_steps: [
              "Execute testing checklist systematically",
              "Document and prioritize found issues",
              "Fix critical bugs before demo"
            ],
          },
          {
            id: "demo-preparation",
            title: "Demo Preparation & Deployment",
            category: "technical",
            tool: "ChatGPT",
            template:
              "Prepare [PROJECT_TYPE] for demo presentation. Include: deployment setup, demo script with key talking points, backup plans for technical issues, performance optimizations, and presentation tips. Ensure smooth demo experience.",
            variables: ["PROJECT_TYPE"],
            example_output:
              "Deploy to Vercel with custom domain. Demo script: 1) Problem introduction, 2) Solution walkthrough, 3) Key features demo, 4) Future roadmap. Backup: local version, screenshots, video recording. Optimize images and lazy load content.",
            next_steps: [
              "Practice demo presentation multiple times",
              "Test deployment and backup plans",
              "Prepare for common questions and issues"
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
    tools_required: ["ChatGPT"],
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
        tools: ["ChatGPT"],
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
    tools_required: ["v0.dev", "Figma"],
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
    tools_required: ["ChatGPT"],
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
        tools: ["ChatGPT"],
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
    tools_required: ["ChatGPT"],
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
        tools: ["ChatGPT"],
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
    tools_required: ["Notion AI"],
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
        tools: ["Notion AI"],
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
  {
    id: "poc-development-workflow",
    title: "POC Development Workflow Kit",
    slug: "poc-development-workflow",
    description: "Build and validate proof of concepts efficiently with structured workflows, testing methodologies, and stakeholder presentation materials.",
    outcome_description: "Complete POC with technical validation, user feedback, and presentation materials ready for stakeholder review",
    difficulty: "intermediate",
    estimated_duration: "4-6 hours",
    category: "Development",
    tags: ["poc", "validation", "testing", "feasibility", "prototype", "development"],
    tools_required: ["ChatGPT", "v0.dev", "Figma"],
    final_deliverables: [
      "Technical feasibility assessment",
      "Working POC prototype",
      "User validation report",
      "Stakeholder presentation deck",
      "Next steps roadmap"
    ],
    success_metrics: [
      "Technical feasibility is clearly demonstrated",
      "Core concept functionality is validated",
      "User feedback confirms value proposition",
      "Stakeholders understand next development steps",
      "Risk assessment identifies potential challenges"
    ],
    related_kits: ["ai-powered-rapid-prototype", "ai-research-validation", "ai-assisted-pitch-master"],
    sections: [
      {
        id: "concept-definition-planning",
        title: "Concept Definition & Planning",
        description: "Define POC scope, success criteria, and development plan",
        order: 1,
        estimated_time: "1 hour",
        tools: ["ChatGPT"],
        instructions: "Use AI to clearly define your POC objectives, scope boundaries, and measurable success criteria to ensure focused development.",
        tips: [
          "Keep scope minimal and focused on core concept",
          "Define specific, measurable success criteria",
          "Identify key assumptions to test",
          "Set realistic timeline and resource constraints"
        ],
        expected_outputs: [
          "POC objective statement",
          "Scope definition and boundaries",
          "Success criteria and metrics",
          "Risk assessment framework",
          "Development timeline"
        ],
        quality_checklist: [
          "Objectives are specific and measurable",
          "Scope is realistic for available resources",
          "Success criteria are clearly defined",
          "Key assumptions are identified",
          "Timeline accounts for testing and iteration"
        ],
        prompts: [
          {
            id: "poc-planning-framework",
            title: "POC Planning Framework",
            category: "strategy",
            tool: "ChatGPT",
            template: "Create a comprehensive POC plan for [CONCEPT_DESCRIPTION] targeting [TARGET_AUDIENCE]. Include: 1) Clear objective statement, 2) Scope boundaries and limitations, 3) Specific success criteria, 4) Key assumptions to validate, 5) Resource requirements, 6) Timeline with milestones, 7) Risk assessment. Focus on proving [CORE_HYPOTHESIS].",
            variables: ["CONCEPT_DESCRIPTION", "TARGET_AUDIENCE", "CORE_HYPOTHESIS"],
            example_output: "POC Objective: Validate AI-powered task automation reduces manual work by 50%. Scope: Core automation engine only, 3 use cases, 10 test users. Success: 50%+ time savings, 80%+ user satisfaction, technical feasibility confirmed. Timeline: 2 weeks development, 1 week testing. Key risks: API limitations, user adoption challenges.",
            next_steps: [
              "Review plan with stakeholders",
              "Finalize resource allocation",
              "Begin technical research phase"
            ]
          }
        ]
      },
      {
        id: "technical-feasibility-validation",
        title: "Technical Feasibility & Validation",
        description: "Build core functionality and validate technical assumptions",
        order: 2,
        estimated_time: "2 hours",
        tools: ["ChatGPT", "v0.dev"],
        instructions: "Develop the minimal technical implementation needed to prove your core concept works, focusing on critical functionality rather than polish.",
        tips: [
          "Build only what's needed to prove the concept",
          "Use existing tools and frameworks when possible",
          "Focus on core functionality over user interface",
          "Document technical decisions and limitations"
        ],
        expected_outputs: [
          "Working prototype demonstrating core concept",
          "Technical architecture documentation",
          "Performance benchmarks",
          "Integration feasibility assessment",
          "Technical risk evaluation"
        ],
        quality_checklist: [
          "Core functionality works as intended",
          "Technical approach is scalable",
          "Performance meets basic requirements",
          "Integration points are validated",
          "Technical limitations are documented"
        ],
        prompts: [
          {
            id: "technical-poc-implementation",
            title: "Technical POC Implementation",
            category: "technical",
            tool: "v0.dev",
            template: "Build a minimal working prototype for [CONCEPT_NAME] that demonstrates [CORE_FUNCTIONALITY]. Include: basic UI for testing, core logic implementation, data handling, and integration points. Focus on proving technical feasibility rather than production readiness. Use [TECH_STACK] and ensure it can handle [PERFORMANCE_REQUIREMENTS].",
            variables: ["CONCEPT_NAME", "CORE_FUNCTIONALITY", "TECH_STACK", "PERFORMANCE_REQUIREMENTS"],
            example_output: "Simple dashboard with API integration, core algorithm implementation, basic data visualization, and performance metrics display. Demonstrates 2-second response time and handles 100 concurrent requests.",
            next_steps: [
              "Test core functionality thoroughly",
              "Document technical findings",
              "Prepare for user validation phase"
            ]
          },
          {
            id: "technical-validation-report",
            title: "Technical Validation Report",
            category: "strategy",
            tool: "ChatGPT",
            template: "Create a technical validation report for [POC_NAME] covering: 1) Technical approach and architecture, 2) Performance benchmarks and results, 3) Integration capabilities and limitations, 4) Scalability assessment, 5) Security considerations, 6) Technical risks and mitigation strategies, 7) Recommendations for next development phase. Base on testing results: [TEST_RESULTS].",
            variables: ["POC_NAME", "TEST_RESULTS"],
            example_output: "Technical validation confirms feasibility. Architecture supports 10x scale, API response time <2s, security framework adequate. Key risks: database performance at scale, third-party API dependencies. Recommend: performance optimization, backup API strategy.",
            next_steps: [
              "Review findings with technical team",
              "Address critical technical risks",
              "Plan next development iteration"
            ]
          }
        ]
      },
      {
        id: "user-validation-testing",
        title: "User Validation & Testing",
        description: "Test POC with real users and gather feedback on value proposition",
        order: 3,
        estimated_time: "1.5 hours",
        tools: ["ChatGPT", "Figma"],
        instructions: "Design and execute user testing sessions to validate that your POC solves real user problems and delivers expected value.",
        tips: [
          "Test with representative users from target audience",
          "Focus on core value proposition validation",
          "Gather both quantitative and qualitative feedback",
          "Document user behavior and pain points"
        ],
        expected_outputs: [
          "User testing protocol and scenarios",
          "Feedback collection framework",
          "User validation results",
          "Value proposition confirmation",
          "User experience insights"
        ],
        quality_checklist: [
          "Testing scenarios cover core use cases",
          "Feedback is collected systematically",
          "Results validate or challenge assumptions",
          "User experience issues are identified",
          "Value proposition is confirmed or refined"
        ],
        prompts: [
          {
            id: "user-testing-protocol",
            title: "User Testing Protocol",
            category: "strategy",
            tool: "ChatGPT",
            template: "Design a user testing protocol for [POC_NAME] targeting [USER_SEGMENT]. Include: 1) Testing objectives and hypotheses, 2) User recruitment criteria, 3) Testing scenarios and tasks, 4) Feedback collection methods, 5) Success metrics, 6) Session structure and timing. Focus on validating [VALUE_PROPOSITION] and measuring [KEY_METRICS].",
            variables: ["POC_NAME", "USER_SEGMENT", "VALUE_PROPOSITION", "KEY_METRICS"],
            example_output: "Test with 8 project managers, 30-min sessions. Tasks: complete workflow, compare to current process, rate satisfaction. Metrics: task completion rate, time savings, satisfaction score. Hypothesis: 50% time reduction, 8/10 satisfaction.",
            next_steps: [
              "Recruit test participants",
              "Prepare testing environment",
              "Conduct user testing sessions"
            ]
          },
          {
            id: "validation-results-analysis",
            title: "Validation Results Analysis",
            category: "strategy",
            tool: "ChatGPT",
            template: "Analyze user validation results for [POC_NAME] based on testing data: [TESTING_DATA]. Provide: 1) Key findings summary, 2) Success criteria assessment, 3) User feedback themes, 4) Value proposition validation, 5) Identified pain points and opportunities, 6) Recommendations for improvement, 7) Go/no-go recommendation with rationale.",
            variables: ["POC_NAME", "TESTING_DATA"],
            example_output: "8/8 users completed core tasks successfully. Average time savings: 45% (vs 50% target). Satisfaction: 8.2/10. Key insight: users want mobile access. Recommendation: Proceed with mobile-first development approach.",
            next_steps: [
              "Present findings to stakeholders",
              "Refine concept based on feedback",
              "Plan next development phase"
            ]
          }
        ]
      },
      {
        id: "stakeholder-presentation-next-steps",
        title: "Stakeholder Presentation & Next Steps",
        description: "Create compelling presentation and roadmap for stakeholder decision-making",
        order: 4,
        estimated_time: "1.5 hours",
        tools: ["ChatGPT", "Figma"],
        instructions: "Synthesize POC results into a clear, compelling presentation that enables stakeholders to make informed decisions about next steps.",
        tips: [
          "Lead with key findings and recommendations",
          "Use data and user feedback to support conclusions",
          "Address risks and mitigation strategies",
          "Provide clear next steps with resource requirements"
        ],
        expected_outputs: [
          "Executive summary of POC results",
          "Stakeholder presentation deck",
          "Risk assessment and mitigation plan",
          "Next phase development roadmap",
          "Resource requirements and timeline"
        ],
        quality_checklist: [
          "Presentation tells clear story from problem to solution",
          "Data supports key conclusions",
          "Risks are honestly assessed",
          "Next steps are actionable and realistic",
          "Business case is compelling"
        ],
        prompts: [
          {
            id: "poc-results-presentation",
            title: "POC Results Presentation",
            category: "presentation",
            tool: "ChatGPT",
            template: "Create a stakeholder presentation for [POC_NAME] results. Structure: 1) Executive summary and recommendation, 2) POC objectives and approach, 3) Technical validation results, 4) User validation findings, 5) Risk assessment, 6) Next steps roadmap, 7) Resource requirements. Use data: [POC_RESULTS]. Make compelling case for [RECOMMENDATION].",
            variables: ["POC_NAME", "POC_RESULTS", "RECOMMENDATION"],
            example_output: "Slide deck: POC validates 45% efficiency gain, 8.2/10 user satisfaction. Technical feasibility confirmed. Risks: scaling challenges, competitive response. Recommendation: Proceed to MVP with $50K budget, 3-month timeline.",
            next_steps: [
              "Schedule stakeholder presentation",
              "Prepare for Q&A session",
              "Gather stakeholder feedback"
            ]
          },
          {
            id: "development-roadmap",
            title: "Next Phase Development Roadmap",
            category: "strategy",
            tool: "ChatGPT",
            template: "Create a development roadmap for [PROJECT_NAME] based on POC results: [POC_FINDINGS]. Include: 1) Phase breakdown (MVP, Beta, Launch), 2) Feature prioritization, 3) Timeline and milestones, 4) Resource requirements, 5) Risk mitigation strategies, 6) Success metrics for each phase, 7) Go/no-go decision points. Address key learnings: [KEY_LEARNINGS].",
            variables: ["PROJECT_NAME", "POC_FINDINGS", "KEY_LEARNINGS"],
            example_output: "3-phase roadmap: MVP (3 months, core features), Beta (2 months, user feedback), Launch (1 month, market entry). Priority: mobile interface, API optimization. Budget: $150K total. Key milestone: 1000 beta users.",
            next_steps: [
              "Validate roadmap with stakeholders",
              "Secure development resources",
              "Begin MVP planning phase"
            ]
          }
        ]
      }
    ]
  },
]

export function getBuilderKitBySlug(slug: string): BuilderKit | undefined {
  return builderKits.find((kit) => kit.slug === slug)
}

export function getAllBuilderKits(): BuilderKit[] {
  return builderKits
}
