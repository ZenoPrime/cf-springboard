import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, BookOpen, Trophy, Heart, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container pt-24 pb-12 md:pt-28 md:pb-12">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">About Springboard</h1>
          <p className="text-gray-600 md:text-xl font-mono">Empowering builders with ideas, resources, and community</p>
        </div>

        {/* Mission Statement Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-black font-mono uppercase">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                  To democratize innovation by providing builders with vetted project ideas, comprehensive resources,
                  and a supportive community to turn concepts into reality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 p-1 bg-[#faf8f3] rounded-xl">
            <TabsTrigger
              value="about"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              About Us
            </TabsTrigger>
            <TabsTrigger
              value="platform"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              Platform
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              Community
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="font-mono uppercase text-xs tracking-wide rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <div className="space-y-8">
              {/* About Christex Foundation */}
              <Card className="bg-white border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                    The Christex Foundation
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Building the future of innovation and technology
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    The Christex Foundation is a non-profit organization dedicated to fostering innovation and
                    technological advancement. We believe that great ideas can come from anywhere, and our mission is to
                    provide the tools, resources, and community support needed to bring those ideas to life.
                  </p>
                  <p>
                    Founded with the vision of democratizing access to innovation resources, we focus on creating
                    platforms and programs that empower builders, developers, and entrepreneurs to create meaningful
                    solutions that address real-world challenges.
                  </p>
                  <p>
                    Through Springboard, our flagship platform, we curate and share vetted project ideas, provide
                    comprehensive development resources, and facilitate connections within our global community of
                    builders.
                  </p>
                </CardContent>
              </Card>

              {/* Our Values */}
              <Card className="bg-white border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-lg border p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                          <Heart className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-black">Accessibility</h3>
                      </div>
                      <p className="text-sm text-gray-700">
                        Making innovation resources available to everyone, regardless of background or experience level.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-black">Community</h3>
                      </div>
                      <p className="text-sm text-gray-700">
                        Building a supportive ecosystem where builders can learn, collaborate, and grow together.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
                          <Lightbulb className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-black">Innovation</h3>
                      </div>
                      <p className="text-sm text-gray-700">
                        Encouraging creative solutions and breakthrough thinking to solve meaningful problems.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
                          <Globe className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-black">Impact</h3>
                      </div>
                      <p className="text-sm text-gray-700">
                        Focusing on projects and solutions that create positive change in communities worldwide.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="platform" className="mt-6">
            <div className="space-y-8">
              {/* Platform Overview */}
              <Card className="bg-white border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                    What is Springboard?
                  </CardTitle>
                  <CardDescription className="text-gray-600">Your launchpad for digital innovation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Springboard is a comprehensive platform designed to bridge the gap between having an idea and
                    building a successful project. We understand that one of the biggest challenges for builders is not
                    just the technical implementation, but knowing what to build and how to get started.
                  </p>
                  <p>
                    Our platform provides three core pillars of support: curated project ideas with detailed Product
                    Requirements Documents (PRDs), comprehensive resource libraries, and information about hackathons
                    and community events.
                  </p>
                </CardContent>
              </Card>

              {/* Platform Features */}
              <div className="grid gap-6 sm:grid-cols-3">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                        <Lightbulb className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-lg font-mono uppercase text-black">Idea Hub</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">
                      200+ vetted project ideas across multiple categories, each with detailed PRDs, target audiences,
                      and technical specifications.
                    </p>
                    <Button asChild className="w-full bg-green-600 text-white hover:bg-green-700">
                      <Link href="/ideas">Explore Ideas</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-lg font-mono uppercase text-black">Resources</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">
                      Comprehensive guides, tool recommendations, and documentation to help you build effectively and
                      efficiently.
                    </p>
                    <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      <Link href="/resources">View Resources</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-lg font-mono uppercase text-black">Hackathons</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">
                      Stay updated on the latest hackathons and events where you can showcase your skills and connect
                      with other builders.
                    </p>
                    <Button asChild className="w-full bg-purple-600 text-white hover:bg-purple-700">
                      <Link href="/hackathons">View Events</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* How It Works */}
              <Card className="bg-white border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-1">Discover</h3>
                        <p className="text-gray-700">
                          Browse our curated collection of project ideas or use our random idea generator for
                          inspiration.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-1">Learn</h3>
                        <p className="text-gray-700">
                          Access detailed PRDs, technical specifications, and recommended resources for your chosen
                          project.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-1">Build</h3>
                        <p className="text-gray-700">
                          Start building with confidence, knowing you have a solid foundation and community support.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-1">Share</h3>
                        <p className="text-gray-700">
                          Showcase your completed project and contribute back to the community with your own ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-6">
            <div className="space-y-8">
              {/* Community Overview */}
              <Card className="bg-white border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                    Join Our Community
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Connect with builders, innovators, and creators worldwide
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    The Springboard community is a diverse group of builders, developers, designers, entrepreneurs, and
                    innovators from around the world. Whether you're just starting your journey or you're an experienced
                    builder, our community provides support, collaboration opportunities, and inspiration.
                  </p>
                  <p>
                    We believe that the best innovations come from diverse perspectives and collaborative efforts. Our
                    community channels provide spaces for technical discussions, project showcases, team formation, and
                    knowledge sharing.
                  </p>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <div className="grid gap-6 sm:grid-cols-3">
                <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                    <div className="text-sm font-mono uppercase text-gray-700">Project Ideas</div>
                  </CardContent>
                </Card>

                <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-sm font-mono uppercase text-gray-700">Resource Guides</div>
                  </CardContent>
                </Card>

                <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                    <div className="text-sm font-mono uppercase text-gray-700">Community Members</div>
                  </CardContent>
                </Card>
              </div>

              {/* Get Involved */}
              <Card className="bg-white border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">Get Involved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">


                    <div className="rounded-lg border p-4 bg-[#faf8f3]">
                      <h3 className="font-semibold text-black mb-2">Join Discord</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Connect with other builders, get help with your projects, and participate in community events.
                      </p>
                      <Button variant="outline" className="w-full border-gray-300" asChild>
                        <Link href="https://discord.gg/DeYcW49vQuestions?" target="_blank" rel="noopener noreferrer">
                          Join Discord Community
                        </Link>
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4 bg-[#faf8f3]">
                      <h3 className="font-semibold text-black mb-2">Contribute Resources</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Share your knowledge by contributing guides, tools, or documentation to help other builders.
                      </p>
                      <Button variant="outline" className="w-full border-gray-300">
                        Contribute Resources
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4 bg-[#faf8f3]">
                      <h3 className="font-semibold text-black mb-2">Mentor Others</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Share your expertise and help guide new builders on their journey to creating amazing projects.
                      </p>
                      <Button variant="outline" className="w-full border-gray-300">
                        Become a Mentor
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Common questions about Springboard and the Christex Foundation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      What is Springboard and how is it different from other platforms?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Springboard is unique because we provide not just project ideas, but complete Product Requirements
                      Documents (PRDs) with detailed specifications, target audiences, and technical considerations.
                      Unlike other platforms that might just list ideas, we give you everything you need to start
                      building with confidence.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Are the project ideas free to use?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Yes, all project ideas on Springboard are completely free to use. You can build upon any idea,
                      modify it to suit your needs, and even commercialize your implementation. We believe in open
                      innovation and want to remove barriers to building great projects.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      How are project ideas selected and vetted?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Our team of experienced builders and product managers reviews each submitted idea for feasibility,
                      market potential, and technical clarity. We ensure that each idea has a clear problem statement,
                      defined target audience, and realistic scope for implementation. Ideas that pass our review
                      process are then developed into comprehensive PRDs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Can I submit my own project ideas?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We encourage community contributions. You can submit your project ideas through our submission
                      form. If your idea is selected, our team will work with you to develop it into a comprehensive PRD
                      that will help other builders bring it to life.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Do you provide funding or investment for projects?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      While the Christex Foundation doesn't directly provide funding, we do connect promising projects
                      with our network of investors and accelerators. Additionally, our hackathons often feature prizes
                      and opportunities for further development support.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      What kind of support do you provide to builders?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We provide comprehensive resources including technical guides, tool recommendations, and access to
                      our community of experienced builders. Our Discord community offers real-time support, and we
                      regularly host workshops and mentorship sessions during hackathons and special events.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-b border-gray-200">
                    <AccordionTrigger className="text-black hover:no-underline">
                      How can I stay updated on new ideas and resources?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      The best way to stay updated is to join our Discord community and follow our social media
                      channels. We regularly announce new project ideas, resource additions, and upcoming hackathons.
                      You can also bookmark the Springboard platform and check back regularly for updates.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="border-b-0">
                    <AccordionTrigger className="text-black hover:no-underline">
                      Can I collaborate with other builders on projects?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Yes! Our Discord community has dedicated channels for team formation and collaboration. Many of
                      our project ideas are designed to be built by teams, and we encourage builders to work together.
                      During hackathons, we also facilitate team formation sessions to help you find collaborators with
                      complementary skills.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <Card className="bg-[#faf8f3] border shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-mono uppercase tracking-tight text-black">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2 text-black">General Inquiries</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Have questions about Springboard or want to learn more about the Christex Foundation?
                </p>
                <Button variant="outline" className="border-gray-300">
                  <Link href="mailto:hello@christex.foundation">Contact Us</Link>
                </Button>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-black">Follow Us</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Stay connected with our community and get the latest updates.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-gray-300" asChild>
                    <Link href="https://discord.gg/DeYcW49vQuestions?" target="_blank" rel="noopener noreferrer">
                      Discord
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-gray-300" asChild>
                    <Link href="https://linktr.ee/christexfndn" target="_blank" rel="noopener noreferrer">
                      Linktree
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
