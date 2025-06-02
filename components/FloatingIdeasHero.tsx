"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

// Static featured ideas - Sierra Leone focused projects
const STATIC_FEATURED_IDEAS = [
  {
    id: "1",
    slug: "sierra-leone-food-trust",
    title: "Sierra Leone Food Trust",
    description:
      "Sierra Leone Food Trust is a blockchain-based food traceability and supply chain solution for Sierra Leone's agricultural ecosystem. It enables stakeholders to securely store and share data, providing real-time visibility from farm to table.",
    category: "Social",
    color: "card-green",
    displayCategory: "Social",
  },
  {
    id: "2",
    slug: "local-artisan-marketplace-sl",
    title: "Local Artisan Marketplace SL",
    description:
      "A mobile platform connecting local Sierra Leonean artisans (crafts, textiles, art) directly with buyers, both locally and internationally.",
    category: "Consumer",
    color: "card-coral",
    displayCategory: "Consumer",
  },
  {
    id: "3",
    slug: "agricultural-supply-chain-tracking",
    title: "Agricultural Supply Chain Tracking System",
    description:
      "A blockchain-based platform designed to revolutionize how agricultural products move from farm to market in Sierra Leone. By leveraging blockchain technology, QR codes, and mobile money integration, the system aims to introduce transparency, efficiency, and trust into agricultural supply chains while providing instant payments to farmers.",
    category: "Consumer",
    color: "card-yellow",
    displayCategory: "Consumer",
  },
  {
    id: "4",
    slug: "freetown-waste-recycling-reporter",
    title: "Freetown Waste Recycling Reporter",
    description:
      "A platform for citizens to report illegal dumping sites and locate nearby community recycling points or collection services in Freetown.",
    category: "DePIN",
    color: "card-orange",
    displayCategory: "DePIN",
  },
]

export default function FloatingIdeasHero() {
  const [mounted, setMounted] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [isHackathonCardVisible, setIsHackathonCardVisible] = useState(true)
  const [isLoadingRandom, setIsLoadingRandom] = useState(false)

  // Check online status
  useEffect(() => {
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // Simple mount effect
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleRandomIdea = () => {
    setIsLoadingRandom(true)
    // Use static ideas for random selection
    const randomIndex = Math.floor(Math.random() * STATIC_FEATURED_IDEAS.length)
    const randomIdea = STATIC_FEATURED_IDEAS[randomIndex]
    window.location.href = `/ideas/${randomIdea.slug}`
  }

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden bg-[#f9f5f0]">
      {!isOnline && (
        <div className="offline-indicator fixed top-16 inset-x-0 z-50">
          You are currently offline. Some features may be limited.
        </div>
      )}

      {/* Darker grid background */}
      <div className="hero-lines opacity-30"></div>

      {mounted && (
        <>
          {/* Top left card - only visible on large screens (>1550px) */}
          <motion.div
            className="absolute top-[10%] md:top-[20%] left-[5%] w-[min(250px,30%)] md:w-[min(300px,25%)] z-30 opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-110 hidden 3xl:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.8,
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Link href={`/ideas/${STATIC_FEATURED_IDEAS[0].slug}`} className="block cursor-pointer">
                <Card className={`border-none shadow-lg ${STATIC_FEATURED_IDEAS[0].color}`}>
                  <CardContent className="p-4">
                    <div className="angled-text mb-2 text-xs uppercase">{STATIC_FEATURED_IDEAS[0].displayCategory}</div>
                    <h3 className="text-lg font-mono uppercase tracking-tight mb-1">
                      {STATIC_FEATURED_IDEAS[0].title}
                    </h3>
                    <p className="text-sm">{STATIC_FEATURED_IDEAS[0].description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>

          {/* Top right card - only visible on large screens (>1550px) */}
          <motion.div
            className="absolute top-[10%] md:top-[15%] right-[5%] w-[250px] md:w-[300px] z-30 opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-110 hidden 3xl:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.8,
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Link href={`/ideas/${STATIC_FEATURED_IDEAS[1].slug}`} className="block cursor-pointer">
                <Card className={`border-none shadow-lg ${STATIC_FEATURED_IDEAS[1].color}`}>
                  <CardContent className="p-4">
                    <div className="angled-text mb-2 text-xs uppercase">{STATIC_FEATURED_IDEAS[1].displayCategory}</div>
                    <h3 className="text-lg font-mono uppercase tracking-tight mb-1">
                      {STATIC_FEATURED_IDEAS[1].title}
                    </h3>
                    <p className="text-sm">{STATIC_FEATURED_IDEAS[1].description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hackathon Card - Using flex layout instead of absolute positioning */}
          {isHackathonCardVisible && (
            <div className="w-full flex justify-center my-12 px-4">
              <motion.div
                className="w-full max-w-[520px] z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3,
                    duration: 0.8,
                  },
                }}
              >
                <div className="relative">
                  {/* Dismiss button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsHackathonCardVisible(false)
                    }}
                    className="absolute top-2 right-2 z-30 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Dismiss hackathon card"
                  >
                    <X className="h-3 w-3" />
                  </button>

                  <Card className="border-2 border-black bg-white shadow-lg overflow-hidden relative mx-auto cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Image - 1:1 ratio */}
                        <div className="w-full md:w-1/3 relative aspect-square">
                          <Image
                            src="/ai-hackathon-neural-network.png"
                            alt="AI Hackathon"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-mono uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-full">
                                Upcoming Hackathon
                              </span>
                              <motion.div
                                className="h-2 w-2 rounded-full bg-black"
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              />
                            </div>
                            <h3 className="text-lg font-mono uppercase tracking-tight mb-1 text-black">
                              Christex AI Hackathon: DaVinci Challenge
                            </h3>
                            <p className="text-sm text-gray-700 mb-3">
                              Join innovators to build AI-powered solutions that solve real-world problems. June 4-6,
                              2025.
                            </p>
                          </div>

                          {/* Register button - full width */}
                          <Button className="bg-black text-white hover:bg-black/90 rounded-md w-full" size="sm" asChild>
                            <Link href="/hackathons" className="flex items-center justify-center">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          )}

          {/* Bottom left card - only visible on large screens (>1550px) */}
          <motion.div
            className="absolute bottom-[25%] md:bottom-[15%] left-[8%] w-[250px] md:w-[300px] z-30 opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-110 hidden 3xl:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.6,
                duration: 0.8,
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: -1,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Link href={`/ideas/${STATIC_FEATURED_IDEAS[2].slug}`} className="block cursor-pointer">
                <Card className={`border-none shadow-lg ${STATIC_FEATURED_IDEAS[2].color}`}>
                  <CardContent className="p-4">
                    <div className="angled-text mb-2 text-xs uppercase">{STATIC_FEATURED_IDEAS[2].displayCategory}</div>
                    <h3 className="text-lg font-mono uppercase tracking-tight mb-1">
                      {STATIC_FEATURED_IDEAS[2].title}
                    </h3>
                    <p className="text-sm">{STATIC_FEATURED_IDEAS[2].description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom right card - only visible on large screens (>1550px) */}
          <motion.div
            className="absolute bottom-[25%] md:bottom-[20%] right-[8%] w-[250px] md:w-[300px] z-30 opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-110 hidden 3xl:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.8,
                duration: 0.8,
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Link href={`/ideas/${STATIC_FEATURED_IDEAS[3].slug}`} className="block cursor-pointer">
                <Card className={`border-none shadow-lg ${STATIC_FEATURED_IDEAS[3].color}`}>
                  <CardContent className="p-4">
                    <div className="angled-text mb-2 text-xs uppercase">{STATIC_FEATURED_IDEAS[3].displayCategory}</div>
                    <h3 className="text-lg font-mono uppercase tracking-tight mb-1">
                      {STATIC_FEATURED_IDEAS[3].title}
                    </h3>
                    <p className="text-sm">{STATIC_FEATURED_IDEAS[3].description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Central content */}
      <div className="container relative z-20 px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
          <p className="text-base font-mono uppercase tracking-wider font-bold text-white bg-black px-4 py-1 rounded-full inline-block">
            Welcome to SpringBoard
          </p>
          <h1 className="text-4xl hero-title font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Find inspiration for your next build
          </h1>
          <p className="max-w-[700px] font-mono md:text-xl text-gray-600">
            We've collected 25+ ideas that are perfect for your hackathon project. Whether you're a beginner or a
            seasoned builder, there's something for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="bg-black text-white hover:bg-black/90 rounded-lg" size="lg">
              <Link href="/ideas" className="flex items-center">
                Explore All Ideas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg border-2 border-blue-500 bg-blue-500/10 text-blue-700 hover:bg-blue-500/20"
              onClick={handleRandomIdea}
              disabled={isLoadingRandom}
            >
              {isLoadingRandom ? "Loading..." : "Random Idea"}
            </Button>
          </div>
        </div>
      </div>


    </section>
  )
}
