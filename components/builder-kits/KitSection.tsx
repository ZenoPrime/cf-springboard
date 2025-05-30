"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, Clock, CheckCircle2, Target, Lightbulb } from "lucide-react"
import type { KitSection } from "@/lib/builder-kits-data"
import { StarterPromptCard } from "./StarterPrompt"

interface KitSectionProps {
  section: KitSection
  isCompleted?: boolean
  onToggleComplete?: () => void
}

export function KitSectionCard({ section, isCompleted = false, onToggleComplete }: KitSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card
      className={`border-2 transition-all duration-300 bg-white ${
        isCompleted ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-black"
      }`}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm ${
                    isCompleted ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : section.order}
                </div>
                <div>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1">{section.description}</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="font-mono text-sm">{section.estimated_time}</span>
                </div>
                {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-6">
            {/* Section Overview */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div>
                <h4 className="font-mono uppercase text-sm font-semibold text-black mb-2">Instructions:</h4>
                <p className="text-gray-700 leading-relaxed">{section.instructions}</p>
              </div>

              {/* Tools Required */}
              <div>
                <h4 className="font-mono uppercase text-sm font-semibold text-black mb-2">Tools You'll Use:</h4>
                <div className="flex flex-wrap gap-2">
                  {section.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 font-mono text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tips */}
              {section.tips.length > 0 && (
                <div>
                  <h4 className="font-mono uppercase text-sm font-semibold text-black mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Pro Tips:
                  </h4>
                  <ul className="space-y-1">
                    {section.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Starter Prompts */}
            <div className="space-y-4">
              <h4 className="font-mono uppercase text-lg font-semibold text-black">Starter Prompts</h4>
              <div className="grid gap-6">
                {section.prompts.map((prompt) => (
                  <StarterPromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            </div>

            {/* Expected Outputs */}
            <div className="bg-blue-50 rounded-lg p-4 space-y-3">
              <h4 className="font-mono uppercase text-sm font-semibold text-black flex items-center gap-2">
                <Target className="h-4 w-4" />
                What You'll Create:
              </h4>
              <ul className="space-y-2">
                {section.expected_outputs.map((output, index) => (
                  <li key={index} className="text-sm text-blue-800 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality Checklist */}
            <div className="bg-green-50 rounded-lg p-4 space-y-3">
              <h4 className="font-mono uppercase text-sm font-semibold text-black">Quality Checklist:</h4>
              <ul className="space-y-2">
                {section.quality_checklist.map((item, index) => (
                  <li key={index} className="text-sm text-green-800 flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Actions */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <Button
                onClick={onToggleComplete}
                className={`flex-1 font-mono ${
                  isCompleted ? "bg-green-600 text-white hover:bg-green-700" : "bg-black text-white hover:bg-black/90"
                }`}
              >
                {isCompleted ? "Completed ✓" : "Mark as Complete"}
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
