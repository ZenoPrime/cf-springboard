"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CalendarDays, Clock, Trophy, Users, FileText, ExternalLink } from 'lucide-react'
import { useState, useEffect, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X } from 'lucide-react'
import { toast } from "sonner"


// Define targetDate using UTC for timezone consistency
const GLOBAL_TARGET_DATE = new Date('2025-06-06T23:59:59Z'); // June 6, 2025, 23:59:59 UTC

export default function HackathonsPage() {
  
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teamName: "",
    experience: "",
    track: "",
    submissionLink: "",
    githubRepo: "",
  });

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [isExpired, setIsExpired] = useState(false);

  const updateFormData = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleInputChange = useCallback((field) => (e) => {
    updateFormData(field, e.target.value);
  }, [updateFormData]);
  
  // Correctly handle state changes for the track and clear selectedIdea
  const handleSelectChange = useCallback((field) => (value) => {
    if (field === 'track' && value !== 'vibe-coders') {
      setSelectedIdea(""); // Clear idea if not Vibe Coders
    }
    updateFormData(field, value);
  }, [updateFormData]);


  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = GLOBAL_TARGET_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        })
        setIsExpired(false)
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        })
        setIsExpired(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer);
  }, [])

  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-12">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Christex Foundation
          </h1>
          <p className="text-gray-600 md:text-xl font-mono">VibeShift Hackathon</p>
        </div>

        {/* Countdown Timer */}
        <Card className={`border-2 shadow-lg transition-colors duration-500 ${
          isExpired
            ? 'bg-gradient-to-r from-red-50 to-gray-50 border-red-400' // FIX: Corrected border class
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
        }`}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  isExpired ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <Clock className={`h-5 w-5 ${
                    isExpired ? 'text-red-600' : 'text-blue-600'
                  }`} />
                </div>
                <div className="text-lg font-semibold text-black">
                  {isExpired ? 'Submissions closed. Good Luck!' : 'Submission closes in:'}
                </div>
              </div>

              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className={`flex flex-col p-3 rounded-lg shadow-sm border transition-colors ${
                  isExpired ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'
                }`}>
                  <span className={`font-mono text-2xl font-bold ${
                    isExpired ? 'text-gray-500' : 'text-black'
                  }`}>{timeLeft.days}</span>
                  <span className="text-xs text-gray-600 font-mono uppercase">days</span>
                </div>
                <div className={`flex flex-col p-3 rounded-lg shadow-sm border transition-colors ${
                  isExpired ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'
                }`}>
                  <span className={`font-mono text-2xl font-bold ${
                    isExpired ? 'text-gray-500' : 'text-black'
                  }`}>{timeLeft.hours}</span>
                  <span className="text-xs text-gray-600 font-mono uppercase">hours</span>
                </div>
                <div className={`flex flex-col p-3 rounded-lg shadow-sm border transition-colors ${
                  isExpired ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'
                }`}>
                  <span className={`font-mono text-2xl font-bold ${
                    isExpired ? 'text-gray-500' : 'text-black'
                  }`}>{timeLeft.minutes}</span>
                  <span className="text-xs text-gray-600 font-mono uppercase">min</span>
                </div>
                <div className={`flex flex-col p-3 rounded-lg shadow-sm border transition-colors ${
                  isExpired ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'
                }`}>
                  <span className={`font-mono text-2xl font-bold ${
                    isExpired ? 'text-gray-500' : 'text-black'
                  }`}>{timeLeft.seconds}</span>
                  <span className="text-xs text-gray-600 font-mono uppercase">sec</span>
                </div>
              </div>

              <Button
                onClick={() => { if (!isExpired) setShowRegistrationForm(true) }}
                disabled={isExpired}
                className={`px-6 py-2 transition-all duration-300 ${
                  !isExpired
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400'
                }`}
              >
                {!isExpired ? 'Submit Your Project' : 'Submissions Closed'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Hackathon Content */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 p-1 bg-[#faf8f3] rounded-xl">
            <TabsTrigger
              value="about"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="timeline"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              Timeline
            </TabsTrigger>
            <TabsTrigger
              value="tracks"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              Tracks
            </TabsTrigger>
            <TabsTrigger
              value="prizes"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              Prizes
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                  About the Hackathon
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Unleash AI, Reimagine Projects! A 3-day intensive event where participants leverage AI tools to springboard new and existing project ideas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  The Christex Foundation VibeShift Hackathon is an exciting and intensive 3-day event where participants will leverage the power of AI tools to springboard new and existing project ideas. This hackathon challenges innovators, developers, designers, and creators to explore the full potential of artificial intelligence in rapidly conceptualizing, designing, and building solutions.
                </p>
                <p>
                  All participants are not only encouraged but <strong>required</strong> to utilize AI tools for as much of their project development as possible within the 3-day timeframe.
                </p>
                <p>Join us for an exciting journey of innovation, learning, and building the future with AI!</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                   {/* FIX: Added asChild prop and corrected link */}
                  <Button className="bg-white text-black hover:bg-gray-100 border border-gray-300" asChild>
                    <Link href="#register">View Resources</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="mt-6">
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">Timeline</CardTitle>
                <CardDescription className="text-gray-600">
                  Key dates and milestones for the Christex AI Hackathon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <CalendarDays className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Virtual Kickoff Event</h3>
                      <p className="text-sm text-gray-600 font-mono">Tuesday, June 4, 2025 at 10:00 AM (Your local time)</p>
                      <p className="mt-2 text-gray-700">
                        Official kickoff with keynote speakers, challenge announcements, and team formation assistance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <CalendarDays className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Hackathon Duration</h3>
                      <p className="text-sm text-gray-600 font-mono">3 Days (June 4-6, 2025)</p>
                      <p className="mt-2 text-gray-700">
                        Three days of intense development, with mentorship sessions and technical workshops.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <CalendarDays className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Submission Deadline</h3>
                      <p className="text-sm text-gray-600 font-mono">Friday, June 6, 2025 at 23:59 UTC</p>
                      <p className="mt-2 text-gray-700">
                        All projects must be submitted by this deadline. No late submissions will be accepted.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <CalendarDays className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Judging & Winner Announcement</h3>
                      <p className="text-sm text-gray-600 font-mono">Details to be announced</p>
                      <p className="mt-2 text-gray-700">
                        Finalists present their projects to judges, followed by the awards ceremony.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracks" className="mt-6">
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                  Tracks
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Choose from two distinct tracks based on your project status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-black">Sinai Track</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      For individuals or teams continuing projects they have been building and tracking through the Christex Foundation's Sinai initiative.
                    </p>
                    <p className="text-sm text-gray-700">
                      This track focuses on leveraging AI to significantly advance or pivot existing work.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-black">Vibe Coders Track</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      For new participants or those looking to start fresh. Teams in this track will select and develop ideas from the Springboard platform's curated Idea Bank.
                    </p>
                    <p className="text-sm text-gray-700">
                      Use AI tools to accelerate progress from concept to POC.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prizes" className="mt-6">
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                  Prizes & Judging Criteria
                </CardTitle>
                <CardDescription className="text-gray-600">
                  What you can win and how projects will be evaluated
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-black">Prizes</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Each track has its own $1,000 USD prize pool, with winners selected from each track independently.
                    </p>

                    {/* Sinai Track Prizes */}
                    <div className="mb-8">
                      <h4 className="text-md font-semibold mb-3 text-black flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                          <Users className="h-3 w-3 text-white" />
                        </div>
                        Sinai Track - $1,000 Prize Pool
                      </h4>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                          <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                          <h5 className="font-semibold text-black">1st Place</h5>
                          <p className="text-lg font-bold text-black">$500</p>
                          <p className="text-sm text-gray-700">USD</p>
                        </div>

                        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                          <Trophy className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                          <h5 className="font-semibold text-black">2nd Place</h5>
                          <p className="text-lg font-bold text-black">$300</p>
                          <p className="text-sm text-gray-700">USD</p>
                        </div>

                        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                          <Trophy className="h-8 w-8 mx-auto mb-2 text-amber-700" />
                          <h5 className="font-semibold text-black">3rd Place</h5>
                          <p className="text-lg font-bold text-black">$200</p>
                          <p className="text-sm text-gray-700">USD</p>
                        </div>
                      </div>
                    </div>

                    {/* Vibe Coders Track Prizes */}
                    <div className="mb-6">
                      <h4 className="text-md font-semibold mb-3 text-black flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600">
                          <Users className="h-3 w-3 text-white" />
                        </div>
                        Vibe Coders Track - $1,000 Prize Pool
                      </h4>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                          <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                          <h5 className="font-semibold text-black">1st Place</h5>
                          <p className="text-lg font-bold text-black">$500</p>
                          <p className="text-sm text-gray-700">USD</p>
                        </div>

                        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                          <Trophy className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                          <h5 className="font-semibold text-black">2nd Place</h5>
                          <p className="text-lg font-bold text-black">$300</p>
                          <p className="text-sm text-gray-700">USD</p>
                        </div>

                        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                          <Trophy className="h-8 w-8 mx-auto mb-2 text-amber-700" />
                          <h5 className="font-semibold text-black">3rd Place</h5>
                          <p className="text-lg font-bold text-black">$200</p>
                          <p className="text-sm text-gray-700">USD</p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-600">
                      Total prize pool: $2,000 USD. Winners will be selected independently from each track.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-black">Judging Criteria</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Projects will be evaluated by a panel from the <strong>Christex Foundation</strong> based on the following:
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-lg border p-3 bg-[#faf8f3]">
                        <h4 className="font-medium text-black">Innovation & Creativity</h4>
                        <p className="text-sm text-gray-700">
                          Novelty of the idea and its application of AI.
                        </p>
                      </div>

                      <div className="rounded-lg border p-3 bg-[#faf8f3]">
                        <h4 className="font-medium text-black">AI Tool Utilization</h4>
                        <p className="text-sm text-gray-700">
                          Extent and effectiveness of AI tool integration in the development process. Participants are encouraged to include some of the prompts they used in their submission form.
                        </p>
                      </div>

                      <div className="rounded-lg border p-3 bg-[#faf8f3]">
                        <h4 className="font-medium text-black">Technical Implementation & Feasibility</h4>
                        <p className="text-sm text-gray-700">
                          Quality of the build and technical execution within the 3-day timeframe.
                        </p>
                      </div>

                      <div className="rounded-lg border p-3 bg-[#faf8f3]">
                        <h4 className="font-medium text-black">Impact & Potential</h4>
                        <p className="text-sm text-gray-700">
                          The project's potential to solve a real-world problem or create value.
                        </p>
                      </div>

                      <div className="rounded-lg border p-3 bg-[#faf8f3]">
                        <h4 className="font-medium text-black">User Experience (UX/UI)</h4>
                        <p className="text-sm text-gray-700">
                          Design quality and ease of use of the developed solution.
                        </p>
                      </div>

                      <div className="rounded-lg border p-3 bg-[#faf8f3]">
                        <h4 className="font-medium text-black">Presentation</h4>
                        <p className="text-sm text-gray-700">
                          Clarity and effectiveness of the final project demonstration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Common questions about the Christex Foundation VibeShift Hackathon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Who can participate in the hackathon?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      The hackathon is open to everyone, regardless of experience level. Whether you're a student,
                      professional, or AI enthusiast, you're welcome to participate. Teams can have up to 4 members.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Do I need to have AI experience?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      While some AI knowledge is helpful, it's not mandatory. We'll provide resources, workshops, and
                      mentors to help participants get started with AI tools and technologies. Teams with diverse skills
                      (development, design, domain expertise) often perform best.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Is there a registration fee?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      No, participation in the Christex Foundation VibeShift Hackathon is completely free. We want to make this
                      opportunity accessible to all innovators.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Can I start working on my project before the hackathon?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      All projects must be developed during the official 3-day hackathon period. You can form teams,
                      brainstorm ideas, and familiarize yourself with tools beforehand, but actual development should
                      start after the kickoff event. All participants are required to utilize AI tools for as much of their project development as possible.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      What resources will be provided?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Participants will receive access to cloud computing resources, AI APIs, datasets, technical
                      workshops, and mentorship from industry experts throughout the hackathon.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-b-0">
                    <AccordionTrigger className="text-black hover:no-underline">
                      How will the judging work?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Projects will be evaluated by a panel from the Christex Foundation based on innovation & creativity, AI tool utilization, technical implementation & feasibility, impact & potential, user experience (UX/UI), and presentation quality.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Registration Section */}
        <section id="register" className="scroll-mt-16">
          <Card className="bg-white border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                How to Participate
              </CardTitle>
              <CardDescription className="text-gray-600">
                Follow these steps to join the Christex Foundation VibeShift Hackathon
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 md:items-end">
                <div className="space-y-4 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-black">Registration Process</h3>
                  <ol className="space-y-3 list-decimal list-inside text-gray-700 flex-grow">
                    <li>Complete the registration form on our official website</li>
                    <li>Receive confirmation email with important details</li>
                    <li>Join our Discord community for updates and team formation</li>
                    <li>Attend the virtual kickoff event on June 4, 2025 at 10:00 AM</li>
                  </ol>

                  <div className="flex flex-col gap-2 mt-6">
                    <Button className="bg-black text-white hover:bg-black/90" asChild>
                      <Link
                        href="https://example.com/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Register Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-black">Resources for Participants</h3>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Pre-hackathon workshops on AI fundamentals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Access to cloud computing resources and AI APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Mentorship from industry experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Datasets and sample code repositories</span>
                    </li>
                  </ul>

                  <div className="flex flex-col gap-2 mt-6">
                    <Button variant="outline" className="border-gray-300" asChild>
                      <Link href="/resources">View Resources</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-[#faf8f3] p-4 mt-6 border">
                <h3 className="font-semibold mb-2 text-black">Contact Information</h3>
                <p className="text-sm text-gray-700">
                  For any questions about the hackathon, please email{" "}
                  <Link href="mailto:hello@christex.foundation" className="text-blue-600 hover:underline">
                    hello@christex.foundation
                  </Link>{" "}
                  or join our{" "}
                  {/* FIX: Corrected Discord link */}
                  <Link href="https://discord.gg/DeYcW49v" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Discord community
                  </Link>
                  .
                </p>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="border-gray-300" asChild>
                    <Link href="https://discord.gg/DeYcW49v" target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300" asChild>
                    <Link href="https://linktr.ee/christexfndn" target="_blank" rel="noopener noreferrer">
                      All Links
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Registration Form Modal */}
        {showRegistrationForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-black shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                    Submit Your Hackathon Project
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1">
                    Submit your project for the Christex Foundation VibeShift Hackathon
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowRegistrationForm(false)}
                  className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4 text-gray-600" />
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    try {
                      const response = await fetch('/api/submit-hackathon', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ ...formData, selectedIdea })
                      })

                      if (response.ok) {
                        setShowRegistrationForm(false)
                        // Reset form data
                        setFormData({
                          name: "",
                          email: "",
                          teamName: "",
                          experience: "",
                          track: "",
                          submissionLink: "",
                          githubRepo: "",
                        })
                        setSelectedIdea("")
                        toast.success("Success! Your hackathon project has been submitted successfully.")
                      } else {
                        const errorData = await response.json()
                        console.error('Failed to submit registration:', errorData)
                        toast.error(errorData.error || "Submission failed. Please try again.")
                      }
                    } catch (error) {
                      console.error('Error submitting registration:', error)
                      toast.error("An unexpected error occurred. Please try again.")
                    }
                  }}
                  className="space-y-6"
                >
                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <h3 className="font-mono uppercase tracking-tight text-black text-sm border-b border-gray-200 pb-2">
                      Personal Information
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-mono text-sm text-black uppercase tracking-wide">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange('name')}
                          className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors placeholder:text-gray-500"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-mono text-sm text-black uppercase tracking-wide">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors placeholder:text-gray-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teamName" className="font-mono text-sm text-black uppercase tracking-wide">
                        Team Name
                        <span className="ml-2 text-xs text-gray-500 normal-case">(Optional)</span>
                      </Label>
                      <Input
                        id="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange('teamName')}
                        className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors placeholder:text-gray-500"
                        placeholder="Leave blank if participating solo"
                      />
                    </div>
                  </div>

                  {/* Hackathon Details Section */}
                  <div className="space-y-4">
                    <h3 className="font-mono uppercase tracking-tight text-black text-sm border-b border-gray-200 pb-2">
                      Hackathon Details
                    </h3>
                    <div className="space-y-2">
                      <Label className="font-mono text-sm text-black uppercase tracking-wide">Challenge Track *</Label>
                      <Select
                        value={formData.track}
                        onValueChange={handleSelectChange('track')}
                        required
                      >
                        <SelectTrigger className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors">
                          <SelectValue placeholder="Select a challenge track" className="text-gray-500" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-2 border-black">
                          <SelectItem value="sinai" className="text-black hover:bg-gray-100">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                              Sinai
                            </div>
                          </SelectItem>
                          <SelectItem value="vibe-coders" className="text-black hover:bg-gray-100">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              Vibe Coders
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* FIX: Correctly structured conditional rendering */}
                    {formData.track === 'vibe-coders' && (
                      <div className="space-y-2">
                        <Label className="font-mono text-sm text-black uppercase tracking-wide">
                          Project Idea from Idea Bank *
                        </Label>
                        <Select value={selectedIdea} onValueChange={setSelectedIdea} required>
                          <SelectTrigger className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors">
                            <SelectValue placeholder="Choose an idea from our idea bank" className="text-gray-500" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-2 border-black max-h-60">
                            <SelectItem value="ai-powered-public-service-utility">AI Powered Public Service Utility</SelectItem>
                            <SelectItem value="telehealth-platform-rural-women">Telehealth Platform for Rural Women</SelectItem>
                            <SelectItem value="ai-powered-hotel-guesthouse-booking">AI-Powered Hotel & Guesthouse Booking Platform</SelectItem>
                            <SelectItem value="blockchain-land-registry-system">Blockchain Land Registry System</SelectItem>
                            <SelectItem value="ai-powered-pharmacy-locator">AI-Powered Pharmacy Locator Platform</SelectItem>
                            <SelectItem value="dogood-protocol-proof-impact">DoGood Protocol - Proof of Impact Platform</SelectItem>
                            <SelectItem value="salonlink-microloan-smart-contract">SaloneLink MicroLoan - Smart Contract Microloan Platform</SelectItem>
                            <SelectItem value="skillproof-web3-freelancing">SkillProof - Web3 Freelancing Platform</SelectItem>
                            <SelectItem value="blockchain-digital-identity-credit">Blockchain-Based Digital Identity and Credit Scoring Platform</SelectItem>
                            <SelectItem value="blockchain-pension-social-security">Blockchain-Based Pension and Social Security System</SelectItem>
                            <SelectItem value="blockchain-transportation-payment">Blockchain-Based Public Transportation Payment and Tracking System</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mt-2">
                          <p className="text-xs text-blue-800">
                            💡 Browse our{" "}
                            <Link
                              href="/ideas"
                              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                              target="_blank"
                            >
                              idea bank
                            </Link>
                            {" "}for detailed descriptions and inspiration.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="font-mono text-sm text-black uppercase tracking-wide">
                        Prior AI/Development Experience
                        <span className="ml-2 text-xs text-gray-500 normal-case">(Optional)</span>
                      </Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={handleInputChange('experience')}
                        className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors placeholder:text-gray-500 min-h-[80px]"
                        placeholder="Tell us about your background in AI, development, or related fields..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Submission Details Section */}
                  <div className="space-y-4">
                    <h3 className="font-mono uppercase tracking-tight text-black text-sm border-b border-gray-200 pb-2">
                      Submission Details
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="submissionLink" className="font-mono text-sm text-black uppercase tracking-wide">
                          Project Submission Link *
                        </Label>
                        <Input
                          id="submissionLink"
                          type="url"
                          value={formData.submissionLink}
                          onChange={handleInputChange('submissionLink')}
                          className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors placeholder:text-gray-500"
                          placeholder="https://your-project.vercel.app or v0.dev/bolt.new link"
                          required
                        />
                        <p className="text-xs text-gray-600">
                          Link to your hosted project (Vercel, Netlify, v0.dev, bolt.new, Lovable, etc.)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="githubRepo" className="font-mono text-sm text-black uppercase tracking-wide">
                          GitHub Repository
                          <span className="ml-2 text-xs text-gray-500 normal-case">(Optional)</span>
                        </Label>
                        <Input
                          id="githubRepo"
                          type="url"
                          value={formData.githubRepo}
                          onChange={handleInputChange('githubRepo')}
                          className="bg-white text-black border-2 border-gray-300 focus:border-black transition-colors placeholder:text-gray-500"
                          placeholder="https://github.com/username/repository"
                        />
                        <p className="text-xs text-gray-600">
                          Link to your project's source code repository (optional)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form Status */}
                  {formData.name && formData.email && formData.track && (formData.track === 'sinai' || selectedIdea) && formData.submissionLink && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-3">
                      <p className="text-sm text-green-800 font-medium">
                        ✓ Ready to submit! All required fields completed.
                      </p>
                    </div>
                  )}

                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowRegistrationForm(false)}
                      className="flex-1 border-2 border-gray-300 bg-white text-black hover:bg-gray-100 font-mono uppercase tracking-wide transition-colors"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-black text-white hover:bg-gray-800 font-mono uppercase tracking-wide transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                      disabled={!formData.name || !formData.email || !formData.track || (formData.track === 'vibe-coders' && !selectedIdea) || !formData.submissionLink}
                    >
                      Submit Project
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}