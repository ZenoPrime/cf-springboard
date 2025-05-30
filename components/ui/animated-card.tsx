"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  className?: string
  children: React.ReactNode
  rotationIntensity?: number
  glareIntensity?: number
}

export function AnimatedCard({ className, children, rotationIntensity = 10, glareIntensity = 0.5 }: AnimatedCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center (in percentage, -50 to 50)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    setPosition({ x, y })
    setGlarePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={cardRef}
      className={cn("relative group perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setPosition({ x: 0, y: 0 })
      }}
    >
      <div
        className="card-content transition-transform duration-200 ease-out preserve-3d"
        style={{
          transform: isHovered
            ? `rotateY(${position.x * rotationIntensity}deg) rotateX(${-position.y * rotationIntensity}deg)`
            : "rotateY(0deg) rotateX(0deg)",
        }}
      >
        {children}
      </div>

      {/* Glare effect */}
      {isHovered && glareIntensity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glareIntensity}), transparent 50%)`,
          }}
        />
      )}
    </div>
  )
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
