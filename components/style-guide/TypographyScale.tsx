"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const typographyScale = [
  { name: "Hero Title", class: "text-6xl", size: "3.75rem", usage: "Hero sections, main page titles" },
  { name: "Page Title", class: "text-5xl", size: "3rem", usage: "Page headers, major sections" },
  { name: "Section Title", class: "text-4xl", size: "2.25rem", usage: "Section headers" },
  { name: "Card Title", class: "text-3xl", size: "1.875rem", usage: "Card headers, subsections" },
  { name: "Subsection", class: "text-2xl", size: "1.5rem", usage: "Subsection headers" },
  { name: "Large Text", class: "text-xl", size: "1.25rem", usage: "Emphasized content" },
  { name: "Emphasized", class: "text-lg", size: "1.125rem", usage: "Important text" },
  { name: "Body Text", class: "text-base", size: "1rem", usage: "Main content, paragraphs" },
  { name: "Small Text", class: "text-sm", size: "0.875rem", usage: "Secondary information" },
  { name: "Caption", class: "text-xs", size: "0.75rem", usage: "Captions, labels" },
]

const fontFamilies = [
  {
    name: "Inter",
    class: "font-sans",
    usage: "Body text, UI elements, general content",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "Poppins",
    class: "font-display",
    usage: "Headings, hero text, brand elements",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "PT Mono",
    class: "font-mono",
    usage: "Code, tags, technical elements",
    sample: "The quick brown fox jumps over the lazy dog",
  },
]

export default function TypographyScale() {
  return (
    <div className="space-y-8">
      {/* Font Families */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Font Families</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {fontFamilies.map((font) => (
            <div key={font.name} className="space-y-2">
              <div className="flex items-center gap-4">
                <h3 className="font-semibold text-lg">{font.name}</h3>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">{font.class}</code>
              </div>
              <p className="text-sm text-gray-600 mb-2">{font.usage}</p>
              <p className={`text-lg ${font.class}`}>{font.sample}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Typography Scale */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Typography Scale</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {typographyScale.map((type) => (
            <div key={type.name} className="space-y-2">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="font-medium">{type.name}</span>
                <code className="bg-gray-100 px-2 py-1 rounded">{type.class}</code>
                <span>{type.size}</span>
              </div>
              <p className={`${type.class} font-display`}>Sample text for {type.name.toLowerCase()}</p>
              <p className="text-sm text-gray-600">{type.usage}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
