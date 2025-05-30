"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ColorPalette from "@/components/style-guide/ColorPalette"
import TypographyScale from "@/components/style-guide/TypographyScale"
import ComponentShowcase from "@/components/style-guide/ComponentShowcase"
import { Download, Palette, Type, Layers, Zap, Eye, Code } from "lucide-react"

export default function StyleGuidePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      {/* Hero Section */}
      <div className="hero-gradient relative overflow-hidden">
        <div className="hero-lines"></div>
        <div className="grain-overlay"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">Springboard Style Guide</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              A comprehensive design system for building consistent, accessible, and beautiful experiences on the
              Springboard platform.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download Assets
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Code className="w-4 h-4" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger value="overview" className="gap-2">
              <Eye className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="colors" className="gap-2">
              <Palette className="w-4 h-4" />
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography" className="gap-2">
              <Type className="w-4 h-4" />
              Typography
            </TabsTrigger>
            <TabsTrigger value="components" className="gap-2">
              <Layers className="w-4 h-4" />
              Components
            </TabsTrigger>
            <TabsTrigger value="animations" className="gap-2">
              <Zap className="w-4 h-4" />
              Animations
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="gap-2">
              <Eye className="w-4 h-4" />
              Accessibility
            </TabsTrigger>
            <TabsTrigger value="implementation" className="gap-2">
              <Code className="w-4 h-4" />
              Implementation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#00C896]" />
                    Color System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Vibrant, accessible color palette with semantic meanings and consistent usage patterns.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("colors")}>
                    Explore Colors
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="w-5 h-5 text-[#00C896]" />
                    Typography
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Clear hierarchy using Inter, Poppins, and PT Mono with optimized scales and spacing.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("typography")}>
                    View Typography
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#00C896]" />
                    Components
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Reusable UI components with consistent styling and interactive states.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("components")}>
                    Browse Components
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#00C896]" />
                    Animations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Subtle micro-interactions and smooth transitions that enhance user experience.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("animations")}>
                    See Animations
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#00C896]" />
                    Accessibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    WCAG AA compliant design with focus states, color contrast, and screen reader support.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("accessibility")}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#00C896]" />
                    Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Code examples, best practices, and guidelines for implementing the design system.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("implementation")}>
                    View Code
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Design Principles */}
            <Card>
              <CardHeader>
                <CardTitle>Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FF7A7A] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <h3 className="font-semibold mb-2">Approachable</h3>
                    <p className="text-sm text-gray-600">Clean, friendly interface that welcomes all skill levels</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FF9F51] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">V</span>
                    </div>
                    <h3 className="font-semibold mb-2">Vibrant</h3>
                    <p className="text-sm text-gray-600">
                      Energetic colors and playful elements that inspire creativity
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4CAF50] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">P</span>
                    </div>
                    <h3 className="font-semibold mb-2">Professional</h3>
                    <p className="text-sm text-gray-600">Polished design that builds trust and credibility</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#5B7FFF] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <h3 className="font-semibold mb-2">Accessible</h3>
                    <p className="text-sm text-gray-600">Inclusive design that works for everyone</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colors">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="typography">
            <TypographyScale />
          </TabsContent>

          <TabsContent value="components">
            <ComponentShowcase />
          </TabsContent>

          <TabsContent value="animations" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Animation Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Hover Effects */}
                <div>
                  <h3 className="font-semibold mb-4">Hover Effects</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="h-24 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center font-medium hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
                      Lift on Hover
                    </div>
                    <div className="h-24 bg-[#FF7A7A] rounded-xl flex items-center justify-center font-medium text-white hover:scale-105 transition-transform duration-200 cursor-pointer">
                      Scale on Hover
                    </div>
                    <div className="h-24 bg-gradient-to-r from-[#00C896] to-[#4CAF50] rounded-xl flex items-center justify-center font-medium text-white hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      Shadow on Hover
                    </div>
                    <div className="h-24 bg-[#5B7FFF] rounded-xl flex items-center justify-center font-medium text-white hover:rotate-3 transition-transform duration-200 cursor-pointer">
                      Rotate on Hover
                    </div>
                  </div>
                </div>

                {/* Floating Animation */}
                <div>
                  <h3 className="font-semibold mb-4">Floating Animation</h3>
                  <div className="flex gap-4">
                    <div
                      className="h-24 w-24 bg-[#B57FFF] rounded-xl flex items-center justify-center font-medium text-white float"
                      style={{ "--rotation": "2deg" } as any}
                    >
                      Float
                    </div>
                    <div
                      className="h-24 w-24 bg-[#FFCC00] rounded-xl flex items-center justify-center font-medium float"
                      style={{ "--rotation": "-1deg" } as any}
                    >
                      Float
                    </div>
                    <div
                      className="h-24 w-24 bg-[#FF9F51] rounded-xl flex items-center justify-center font-medium float"
                      style={{ "--rotation": "3deg" } as any}
                    >
                      Float
                    </div>
                  </div>
                </div>

                {/* Loading States */}
                <div>
                  <h3 className="font-semibold mb-4">Loading States</h3>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded skeleton w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded skeleton w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded skeleton w-2/3"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Color Contrast</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white border rounded-lg">
                      <div className="text-black mb-2">Normal Text (21:1)</div>
                      <div className="text-gray-600 mb-2">Secondary Text (7:1)</div>
                      <div className="text-gray-500">Muted Text (4.5:1)</div>
                    </div>
                    <div className="p-4 bg-[#00C896] rounded-lg">
                      <div className="text-black mb-2">Primary Background (5.2:1)</div>
                      <div className="text-white bg-black bg-opacity-20 px-2 py-1 rounded">High Contrast Text</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Focus States</h3>
                  <div className="space-y-4">
                    <Button className="focus:outline-2 focus:outline-[#00C896] focus:outline-offset-2">
                      Focusable Button
                    </Button>
                    <input
                      type="text"
                      placeholder="Focusable Input"
                      className="px-3 py-2 border rounded-md focus:outline-2 focus:outline-[#00C896] focus:outline-offset-2"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Screen Reader Support</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="sr-only">This text is only visible to screen readers</span>
                      <span className="text-sm text-gray-600">Hidden text for screen readers</span>
                    </div>
                    <div aria-label="Descriptive label for complex UI">
                      <span className="text-sm text-gray-600">Element with aria-label</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>CSS Custom Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`:root {
  /* Colors */
  --color-primary: #00C896;
  --color-background: #F9F5F0;
  --color-text: #000000;
  
  /* Spacing */
  --space-unit: 0.25rem;
  --space-xs: calc(var(--space-unit) * 1);
  --space-sm: calc(var(--space-unit) * 2);
  --space-md: calc(var(--space-unit) * 4);
  
  /* Typography */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-display: 'Poppins', system-ui, sans-serif;
  --font-mono: 'PT Mono', monospace;
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Component Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`// Vibrant Card Component
interface VibrantCardProps {
  color: 'coral' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
  rotation?: number;
  children: React.ReactNode;
}

export function VibrantCard({ color, rotation = 0, children }: VibrantCardProps) {
  return (
    <div 
      className={\`card-vibrant card-\${color} hover:rotate-0 transition-transform\`}
      style={{ transform: \`rotate(\${rotation}deg)\` }}
    >
      {children}
    </div>
  );
}`}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
