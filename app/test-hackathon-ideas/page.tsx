'use client'

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Sparkles, Zap, Lock, Unlock, Trophy, Target, Users, Code, Heart, Globe } from 'lucide-react'
import Link from "next/link"

export default function TestHackathonIdeasPage() {
  // Set target date to June 4th at 10am of the current year
  const targetDate = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const date = new Date(currentYear, 5, 4, 10, 0, 0);
    if (date < new Date()) {
      date.setFullYear(currentYear + 1);
    }
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

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
      } else {
        setIsRevealed(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  // Hackathon-specific ideas with enhanced metadata
  const hackathonIdeas = [
    {
      id: 1,
      title: "Pension Management System",
      description: "Blockchain-based pension fund management with transparent tracking and automated distributions",
      category: "FinTech",
      difficulty: "Advanced",
      icon: Trophy,
      color: "from-emerald-500 to-teal-600",
      tags: ["Blockchain", "Smart Contracts", "Finance"]
    },
    {
      id: 2,
      title: "AI-Powered Public Service Utility",
      description: "Intelligent platform streamlining government services with AI-driven assistance and automation",
      category: "GovTech",
      difficulty: "Advanced",
      icon: Globe,
      color: "from-blue-500 to-indigo-600",
      tags: ["AI", "Government", "Automation"]
    },
    {
      id: 3,
      title: "Proof of Impact Platform",
      description: "Verifiable impact measurement system for social and environmental initiatives",
      category: "Social Impact",
      difficulty: "Intermediate",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      tags: ["Impact", "Verification", "Social Good"]
    },
    {
      id: 4,
      title: "Digital Identity Verification",
      description: "Secure, decentralized identity management system with privacy-first approach",
      category: "Security",
      difficulty: "Advanced",
      icon: Lock,
      color: "from-red-500 to-orange-600",
      tags: ["Identity", "Security", "Privacy"]
    },
    {
      id: 5,
      title: "Web3 Freelancing Platform",
      description: "Decentralized marketplace connecting freelancers with clients using smart contracts",
      category: "Web3",
      difficulty: "Advanced",
      icon: Users,
      color: "from-cyan-500 to-blue-600",
      tags: ["Web3", "Freelancing", "Smart Contracts"]
    },
    {
      id: 6,
      title: "Transportation Payment System",
      description: "Unified payment solution for public transportation with real-time tracking",
      category: "Transport",
      difficulty: "Intermediate",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      tags: ["Payments", "Transport", "IoT"]
    },
    {
      id: 7,
      title: "Smart Contract Microfinance",
      description: "Automated microfinance platform using blockchain for transparent lending",
      category: "FinTech",
      difficulty: "Advanced",
      icon: Code,
      color: "from-green-500 to-emerald-600",
      tags: ["Microfinance", "Blockchain", "DeFi"]
    },
    {
      id: 8,
      title: "Land Registry System",
      description: "Immutable land ownership records with smart contract-based transfers",
      category: "PropTech",
      difficulty: "Advanced",
      icon: Globe,
      color: "from-amber-500 to-yellow-600",
      tags: ["Land Registry", "Blockchain", "Property"]
    },
    {
      id: 9,
      title: "AI Guesthouse Booking System",
      description: "Intelligent booking platform with AI-powered recommendations and management",
      category: "Hospitality",
      difficulty: "Intermediate",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      tags: ["AI", "Hospitality", "Booking"]
    },
    {
      id: 10,
      title: "Pharmacy Locator Platform",
      description: "Real-time pharmacy finder with medication availability and price comparison",
      category: "HealthTech",
      difficulty: "Beginner",
      icon: Heart,
      color: "from-teal-500 to-cyan-600",
      tags: ["Healthcare", "Location", "Pharmacy"]
    },
    {
      id: 11,
      title: "Rural Telehealth Platform",
      description: "Accessible healthcare platform designed for rural women with voice-based interaction",
      category: "HealthTech",
      difficulty: "Intermediate",
      icon: Heart,
      color: "from-violet-500 to-purple-600",
      tags: ["Telehealth", "Rural", "Accessibility"]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Advanced": return "bg-red-100 text-red-800 border-red-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "FinTech": "bg-emerald-100 text-emerald-800",
      "GovTech": "bg-blue-100 text-blue-800",
      "Social Impact": "bg-purple-100 text-purple-800",
      "Security": "bg-red-100 text-red-800",
      "Web3": "bg-cyan-100 text-cyan-800",
      "Transport": "bg-yellow-100 text-yellow-800",
      "PropTech": "bg-amber-100 text-amber-800",
      "Hospitality": "bg-pink-100 text-pink-800",
      "HealthTech": "bg-teal-100 text-teal-800"
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container pt-24 pb-12 md:pt-28 md:pb-12">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Hackathon Challenge Ideas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              DaVinci Challenge
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated project ideas for the Christex Foundation Hackathon
            </p>
          </motion.div>

          {/* Countdown or Reveal Section */}
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="countdown"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <Lock className="w-8 h-8 text-white" />
                      <h2 className="text-2xl font-bold text-white">Ideas Locked</h2>
                    </div>
                    <p className="text-blue-100 mb-8 text-lg">
                      The hackathon challenge ideas will be revealed when the countdown reaches zero
                    </p>
                    
                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                      {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds }
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
                        >
                          <div className="text-3xl font-mono font-bold text-white">{item.value}</div>
                          <div className="text-xs uppercase tracking-wider text-blue-100">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Teaser Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                  {[
                    { icon: Trophy, title: "11 Curated Ideas", desc: "Handpicked challenges across multiple domains" },
                    { icon: Target, title: "3 Difficulty Levels", desc: "From beginner-friendly to advanced projects" },
                    { icon: Sparkles, title: "Multiple Categories", desc: "FinTech, HealthTech, Web3, and more" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200"
                    >
                      <item.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Reveal Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                    <Unlock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">Ideas Revealed!</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Choose Your Challenge
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Select from these carefully curated project ideas designed to showcase innovation across multiple domains
                  </p>
                </motion.div>

                {/* Ideas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hackathonIdeas.map((idea, index) => {
                    const IconComponent = idea.icon
                    return (
                      <motion.div
                        key={idea.id}
                        initial={{ opacity: 0, y: 30, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          delay: 0.4 + index * 0.1, 
                          duration: 0.6,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        className="group"
                      >
                        <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                          {/* Gradient Header */}
                          <div className={`h-2 bg-gradient-to-r ${idea.color}`} />
                          
                          <CardHeader className="space-y-3">
                            <div className="flex items-start justify-between">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${idea.color} shadow-lg`}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex flex-col gap-2">
                                <Badge className={`text-xs ${getCategoryColor(idea.category)} border-0`}>
                                  {idea.category}
                                </Badge>
                                <Badge variant="outline" className={`text-xs ${getDifficultyColor(idea.difficulty)}`}>
                                  {idea.difficulty}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {idea.title}
                              </CardTitle>
                              <CardDescription className="text-sm text-gray-600 mt-2 line-clamp-3">
                                {idea.description}
                              </CardDescription>
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-4">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {idea.tags.map((tag, tagIndex) => (
                                <Badge 
                                  key={tagIndex} 
                                  variant="secondary" 
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Action Button */}
                            <Button 
                              className={`w-full bg-gradient-to-r ${idea.color} hover:opacity-90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200`}
                              asChild
                            >
                              <Link href="/hackathons">
                                Select This Idea
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="text-center space-y-4 pt-8"
                >
                  <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ready to Build Something Amazing?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join the DaVinci Challenge and turn one of these ideas into reality
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                      asChild
                    >
                      <Link href="/hackathons">
                        Register for Hackathon
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Test Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="fixed bottom-4 right-4 space-y-2"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRevealed(!isRevealed)}
              className="bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-white"
            >
              {isRevealed ? "Hide Ideas" : "Reveal Ideas"} (Test)
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}