"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function SubmitIdeaPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    problemSolved: "",
    category: "",
    name: "",
    email: "",
    potentialTools: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would send data to Airtable via an API route
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Idea Submitted Successfully",
        description: "Thank you! Your idea has been submitted for review.",
      })

      // Reset form
      setFormData({
        title: "",
        description: "",
        problemSolved: "",
        category: "",
        name: "",
        email: "",
        potentialTools: "",
      })

      // Optionally redirect after a delay
      // setTimeout(() => router.push('/ideas'), 2000)
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your idea. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black font-mono uppercase">
            Share Your Innovative Idea
          </h1>
          <p className="text-gray-600 font-mono">
            Have a great project idea? Submit it below and it might be featured in our Idea Hub after review.
          </p>
        </div>

        <Card className="border border-gray-200">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="font-mono uppercase tracking-tight text-black">Submit Your Idea</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below with details about your project idea.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-900 font-medium">
                  Idea Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter a concise title for your idea"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-900 font-medium">
                  Idea Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your idea in detail"
                  className="min-h-[120px] border-gray-300"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problemSolved" className="text-gray-900 font-medium">
                  Problem it Solves <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="problemSolved"
                  name="problemSolved"
                  placeholder="What problem does this idea solve?"
                  className="min-h-[100px] border-gray-300"
                  value={formData.problemSolved}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-gray-900 font-medium">
                  Category
                </Label>
                <Select value={formData.category} onValueChange={handleSelectChange}>
                  <SelectTrigger id="category" className="border-gray-300">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AI/ML">AI/ML</SelectItem>
                    <SelectItem value="Web App">Web App</SelectItem>
                    <SelectItem value="Mobile">Mobile</SelectItem>
                    <SelectItem value="IoT">IoT</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-900 font-medium">
                    Your Name (Optional)
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 font-medium">
                    Your Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="potentialTools" className="text-gray-900 font-medium">
                  Potential Tools/Technologies (Optional)
                </Label>
                <Textarea
                  id="potentialTools"
                  name="potentialTools"
                  placeholder="List any tools or technologies you think would be useful for this project"
                  value={formData.potentialTools}
                  onChange={handleChange}
                  className="border-gray-300"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-black text-white hover:bg-black/90" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Idea"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}
