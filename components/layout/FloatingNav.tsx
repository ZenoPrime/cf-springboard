"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { poppins } from "@/lib/fonts"

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navigation = [
    { name: "Ideas", href: "/ideas" },
    { name: "Resources", href: "/resources" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "About", href: "/about" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/ideas?search=${encodeURIComponent(searchQuery.trim())}`
      setSearchQuery("")
      setIsOpen(false)
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <motion.div
        className={`mx-auto max-w-7xl bg-white rounded-full px-4 py-3 flex items-center justify-between shadow-md pointer-events-auto ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 pl-2">
          <div className="flex h-8 w-8 items-center justify-center">
            <Image src="/images/cf-logomark.svg" alt="CF Logo" width={28} height={28} className="h-7 w-7" priority />
          </div>
          <span
            className={`text-xl font-black text-black tracking-tight ${poppins.className}`}
            style={{ letterSpacing: "-0.03em" }}
          >
            Springboard
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-mono uppercase tracking-wide text-gray-500 transition-colors hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Search and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative w-48">
            <Input
              type="search"
              placeholder="Search ideas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-8 rounded-full border-gray-200 bg-white text-black placeholder:text-gray-500"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full text-gray-700"
              disabled={!searchQuery.trim()}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(true)}
            aria-label="Search"
            className="text-gray-700"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-1 text-gray-700">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <form onSubmit={handleSearch} className="flex gap-2 mt-8 mb-4">
                <Input
                  type="search"
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 rounded-xl bg-white text-black placeholder:text-gray-500"
                />
                <Button
                  type="submit"
                  variant="outline"
                  size="icon"
                  disabled={!searchQuery.trim()}
                  className="text-gray-700"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-mono uppercase tracking-wide text-gray-500 transition-colors hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </div>
  )
}
