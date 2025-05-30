"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const vibrantCards = [
  { color: "coral", bg: "#FF7A7A", text: "#000000" },
  { color: "orange", bg: "#FF9F51", text: "#000000" },
  { color: "yellow", bg: "#FFCC00", text: "#000000" },
  { color: "green", bg: "#4CAF50", text: "#000000" },
  { color: "blue", bg: "#5B7FFF", text: "#FFFFFF" },
  { color: "purple", bg: "#B57FFF", text: "#FFFFFF" },
]

const tags = [
  { name: "DeFi", color: "#FF7A7A" },
  { name: "Gaming", color: "#4CAF50" },
  { name: "Social", color: "#5B7FFF" },
  { name: "Payments", color: "#FF9F51" },
  { name: "Security", color: "#B57FFF" },
]

export default function ComponentShowcase() {
  return (
    <div className="space-y-8">
      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Buttons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Primary Buttons</h4>
              <div className="flex gap-4 flex-wrap">
                <Button>Default</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Secondary Buttons</h4>
              <div className="flex gap-4 flex-wrap">
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vibrant Cards */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Vibrant Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {vibrantCards.map((card) => (
              <div
                key={card.color}
                className="h-24 rounded-xl flex items-center justify-center font-semibold text-sm transform hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundColor: card.bg,
                  color: card.text,
                  transform: `rotate(${Math.random() * 6 - 3}deg)`,
                }}
              >
                {card.color}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags and Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Tags & Badges</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Category Tags</h4>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className="font-mono text-xs uppercase tracking-wide border rounded px-2 py-1"
                  style={{
                    color: tag.color,
                    borderColor: tag.color,
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Status Badges</h4>
            <div className="flex gap-2 flex-wrap">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cards */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Card Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Default Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Standard card with hover effects and clean styling.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-dashed border-gray-300">
              <CardHeader>
                <CardTitle className="text-lg">Outlined Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Card with dashed border for special content.</p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border">
              <h3 className="font-semibold text-lg mb-2">Gradient Card</h3>
              <p className="text-sm text-gray-600">Card with gradient background for featured content.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
