"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const colorGroups = [
  {
    title: "Primary Colors",
    colors: [
      { name: "Primary Green", value: "#00C896", textColor: "#000000" },
      { name: "Primary Dark", value: "#000000", textColor: "#FFFFFF" },
      { name: "Primary Light", value: "#FFFFFF", textColor: "#000000", border: true },
    ],
  },
  {
    title: "Background System",
    colors: [
      { name: "Background Primary", value: "#F9F5F0", textColor: "#000000" },
      { name: "Background Secondary", value: "#FFFFFF", textColor: "#000000", border: true },
      { name: "Background Tertiary", value: "#F5F5F5", textColor: "#000000" },
    ],
  },
  {
    title: "Vibrant Cards",
    colors: [
      { name: "Coral", value: "#FF7A7A", textColor: "#000000" },
      { name: "Orange", value: "#FF9F51", textColor: "#000000" },
      { name: "Yellow", value: "#FFCC00", textColor: "#000000" },
      { name: "Green", value: "#4CAF50", textColor: "#000000" },
      { name: "Blue", value: "#5B7FFF", textColor: "#FFFFFF" },
      { name: "Purple", value: "#B57FFF", textColor: "#FFFFFF" },
    ],
  },
  {
    title: "Semantic Colors",
    colors: [
      { name: "Success", value: "#4CAF50", textColor: "#FFFFFF" },
      { name: "Warning", value: "#FF9F51", textColor: "#000000" },
      { name: "Error", value: "#FF7A7A", textColor: "#000000" },
      { name: "Info", value: "#5B7FFF", textColor: "#FFFFFF" },
    ],
  },
]

export default function ColorPalette() {
  return (
    <div className="space-y-8">
      {colorGroups.map((group) => (
        <Card key={group.title}>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{group.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.colors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div
                    className={`h-20 rounded-lg flex items-center justify-center font-medium ${color.border ? "border-2 border-gray-200" : ""}`}
                    style={{
                      backgroundColor: color.value,
                      color: color.textColor,
                    }}
                  >
                    {color.name}
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="font-mono text-xs">{color.value}</div>
                    <div className="text-gray-600 text-xs">Text: {color.textColor}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
