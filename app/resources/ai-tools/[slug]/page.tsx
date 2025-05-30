"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Copy,
  ExternalLink,
  Info,
  LinkIcon,
  MessageSquare,
  PenTool,
  ImageIcon,
  Video,
  Mic,
  Code2,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Box,
  BookOpen,
  Layers,
} from "lucide-react"

// Import the AI tools data
import { getAiToolBySlug } from "@/lib/ai-tools-data"

export default function AiToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = getAiToolBySlug(params.slug)
  const category = tool.category // Declare the category variable

  if (!tool) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Tool Not Found</h1>
        <p className="text-gray-600 mb-8">The AI tool you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-black text-white hover:bg-black/90">
          <Link href="/resources/ai-tools">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Tools
          </Link>
        </Button>
      </div>
    )
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "chatbots & conversational ai":
        return <MessageSquare className="mr-2 h-5 w-5" />
      case "writing & content creation":
        return <PenTool className="mr-2 h-5 w-5" />
      case "image generation & editing":
        return <ImageIcon className="mr-2 h-5 w-5" />
      case "graphic design platforms":
        return <Layers className="mr-2 h-5 w-5" />
      case "video generation & editing":
        return <Video className="mr-2 h-5 w-5" />
      case "audio & music creation/editing":
        return <Mic className="mr-2 h-5 w-5" />
      case "productivity & task management":
        return <Box className="mr-2 h-5 w-5" />
      case "business, marketing & sales":
        return <Briefcase className="mr-2 h-5 w-5" />
      case "ux research & product management":
        return <Lightbulb className="mr-2 h-5 w-5" />
      case "coding & web development":
        return <Code2 className="mr-2 h-5 w-5" />
      case "education & learning":
        return <GraduationCap className="mr-2 h-5 w-5" />
      default:
        return <BookOpen className="mr-2 h-5 w-5" />
    }
  }

  // Get badge color class for pricing
  const getPricingColorClass = (pricing: string) => {
    const colorMap: Record<string, string> = {
      freemium: "bg-green-50 text-green-700 border-green-200",
      paid: "bg-yellow-50 text-yellow-700 border-yellow-200",
      free: "bg-blue-50 text-blue-700 border-blue-200",
      "open source": "bg-purple-50 text-purple-700 border-purple-200",
    }
    return colorMap[pricing.toLowerCase()] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  // Copy prompt to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real app, you would show a toast notification here
  }

  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/resources" className="hover:text-gray-900">
            Resources
          </Link>
          <span>/</span>
          <Link href="/resources/ai-tools" className="hover:text-gray-900">
            AI Tools
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">{tool.name}</span>
        </div>

        {/* Hero Section */}
        <div className="p-8 rounded-xl bg-gray-50 border border-gray-200 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
            <div className="w-24 h-24 rounded-xl bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-700">
              {tool.logoPlaceholder}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-tight mb-2 text-gray-900">
                {tool.name}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                <Badge className={`${getPricingColorClass(tool.pricing)}`}>{tool.pricing}</Badge>
                <Badge className="bg-gray-100 text-gray-800 border-gray-200 flex items-center">
                  {getCategoryIcon(category)}
                  {category}
                </Badge>
              </div>
              <p className="text-gray-700 text-lg max-w-2xl">{tool.description}</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4">
            <Button asChild className="bg-black text-white hover:bg-black/90">
              <Link href={tool.websiteUrl} target="_blank" rel="noopener noreferrer">
                Visit Official Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Detailed Description */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight flex items-center text-gray-900">
                  <Info className="mr-2 h-5 w-5" />
                  About {tool.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  {tool.detailedDescription ||
                    `${tool.name} is a powerful ${category.toLowerCase()} tool that helps users ${tool.description.toLowerCase()} The tool offers a ${tool.pricing.toLowerCase()} pricing model, making it accessible for various users with different needs and budgets.`}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            {tool.features && (
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight flex items-center text-gray-900">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Use Cases */}
            {tool.useCases && (
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight flex items-center text-gray-900">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Primary Use Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {tool.useCases.map((useCase, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h3 className="font-bold mb-2 text-gray-900">{useCase.title}</h3>
                        <p className="text-sm text-gray-600">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Example Prompts / Usage Examples */}
            {tool.examplePrompts && (
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight flex items-center text-gray-900">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Example Prompts & Usage
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Copy these examples to get started quickly with {tool.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="prompt-1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 p-1 bg-gray-100 rounded-xl">
                      {tool.examplePrompts.map((_, index) => (
                        <TabsTrigger
                          key={index}
                          value={`prompt-${index + 1}`}
                          className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                        >
                          Example {index + 1}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {tool.examplePrompts.map((prompt, index) => (
                      <TabsContent key={index} value={`prompt-${index + 1}`}>
                        <div className="mt-4">
                          <h3 className="font-bold mb-2 text-gray-900">{prompt.title}</h3>
                          <div className="relative">
                            <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap border border-gray-200 text-gray-700">
                              {prompt.prompt}
                            </pre>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2"
                              onClick={() => copyToClipboard(prompt.prompt)}
                            >
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy to clipboard</span>
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Pricing Details */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight flex items-center text-gray-900">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className={`mb-4 ${getPricingColorClass(tool.pricing)}`}>{tool.pricing}</Badge>
                <p className="text-gray-600">
                  {tool.pricingDetails ||
                    `${tool.name} offers a ${tool.pricing.toLowerCase()} pricing model. Visit their official website for the most up-to-date pricing information and available plans.`}
                </p>
                <Button asChild className="w-full mt-4 bg-black text-white hover:bg-black/90">
                  <Link href={tool.websiteUrl} target="_blank" rel="noopener noreferrer">
                    Check Current Pricing
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pairs Well With */}
            {tool.pairsWellWith && (
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight flex items-center text-gray-900">
                    <LinkIcon className="mr-2 h-5 w-5" />
                    Pairs Well With
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tool.pairsWellWith.map((pair, index) => (
                      <Link
                        key={index}
                        href={`/resources/ai-tools/${pair.slug}`}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                      >
                        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700 mr-3">
                          {pair.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{pair.name}</h3>
                          <p className="text-xs text-gray-600">View details</p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-500" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Guides */}
            {tool.relatedGuides && (
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight flex items-center text-gray-900">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Related Guides
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tool.relatedGuides.map((guide, index) => (
                      <Link
                        key={index}
                        href={`/resources/how-to/${guide.slug}`}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                      >
                        <div className="mr-3 bg-gray-200 p-2 rounded-md">
                          <BookOpen className="h-5 w-5 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm text-gray-900">{guide.title}</h3>
                          <p className="text-xs text-gray-600">Read guide</p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-500" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Back to AI Tools */}
        <div className="mt-8">
          <Button variant="outline" asChild className="border-gray-300">
            <Link href="/resources/ai-tools">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to AI Tools
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
