"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, Search, Command } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { poppins } from "@/lib/fonts"
// No need for search provider import since we'll trigger the global search directly

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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

  // Handle search - trigger global search modal via keyboard event
  const handleSearchClick = () => {
    // Simulate Cmd+K to trigger the global search modal
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true
    })
    document.dispatchEvent(event)
    setIsOpen(false)
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
          <Button
            onClick={handleSearchClick}
            variant="outline"
            className="relative w-48 justify-start rounded-full border-gray-200 bg-white text-gray-500 hover:text-black"
          >
            <Search className="h-4 w-4 mr-2" />
            <span>Search...</span>
            <div className="ml-auto flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <Command className="h-3 w-3" />
                K
              </kbd>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearchClick}
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
              <div className="mt-8 mb-4">
                <Button
                  onClick={handleSearchClick}
                  variant="outline"
                  className="w-full justify-start rounded-xl bg-white text-gray-500 hover:text-black"
                >
                  <Search className="h-4 w-4 mr-2" />
                  <span>Search...</span>
                  <div className="ml-auto flex items-center gap-1">
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                      <Command className="h-3 w-3" />
                      K
                    </kbd>
                  </div>
                </Button>
              </div>
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
