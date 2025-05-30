"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"
import type { StarterPrompt } from "@/lib/builder-kits-data"

interface StarterPromptProps {
  prompt: StarterPrompt
}

export function StarterPromptCard({ prompt }: StarterPromptProps) {
  const [variables, setVariables] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const handleVariableChange = (variable: string, value: string) => {
    setVariables((prev) => ({ ...prev, [variable]: value }))
  }

  const generatePrompt = () => {
    let finalPrompt = prompt.template
    prompt.variables.forEach((variable) => {
      const value = variables[variable] || `[${variable}]`
      finalPrompt = finalPrompt.replace(new RegExp(`\\[${variable}\\]`, "g"), value)
    })
    return finalPrompt
  }

  const copyToClipboard = async () => {
    const finalPrompt = generatePrompt()
    await navigator.clipboard.writeText(finalPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "strategy":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "creative":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "technical":
        return "bg-green-100 text-green-700 border-green-200"
      case "optimization":
        return "bg-orange-100 text-orange-700 border-orange-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <Card className="border-2 border-gray-200 hover:border-black transition-all duration-300 bg-white">
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-mono uppercase tracking-tight text-black">{prompt.title}</CardTitle>
          <div className="flex gap-2">
            <Badge className={`font-mono text-xs ${getCategoryColor(prompt.category)}`}>{prompt.category}</Badge>
            <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 font-mono text-xs">
              {prompt.tool}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Variable Inputs */}
        {prompt.variables.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-mono uppercase text-sm font-semibold text-black">Customize Your Prompt:</h4>
            <div className="grid gap-3">
              {prompt.variables.map((variable) => (
                <div key={variable} className="space-y-1">
                  <Label htmlFor={variable} className="text-sm font-medium text-gray-700 font-mono">
                    {variable.replace(/_/g, " ").toLowerCase()}
                  </Label>
                  <Input
                    id={variable}
                    placeholder={`Enter your ${variable.replace(/_/g, " ").toLowerCase()}`}
                    value={variables[variable] || ""}
                    onChange={(e) => handleVariableChange(variable, e.target.value)}
                    className="border-gray-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Generated Prompt */}
        <div className="space-y-2">
          <h4 className="font-mono uppercase text-sm font-semibold text-black">Your Prompt:</h4>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-800 leading-relaxed font-mono">{generatePrompt()}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button onClick={copyToClipboard} className="flex-1 bg-black text-white hover:bg-black/90 font-mono">
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy Prompt
              </>
            )}
          </Button>
          <Button variant="outline" onClick={() => setShowExample(!showExample)} className="border-gray-300 font-mono">
            {showExample ? "Hide" : "Show"} Example
          </Button>
        </div>

        {/* Example Output */}
        {showExample && (
          <div className="space-y-2 pt-2 border-t border-gray-200">
            <h4 className="font-mono uppercase text-sm font-semibold text-black">Example Output:</h4>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-800 leading-relaxed">{prompt.example_output}</p>
            </div>
          </div>
        )}

        {/* Next Steps */}
        {prompt.next_steps.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-gray-200">
            <h4 className="font-mono uppercase text-sm font-semibold text-black">Next Steps:</h4>
            <ul className="space-y-1">
              {prompt.next_steps.map((step, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
