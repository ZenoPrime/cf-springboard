import { poppins } from "@/lib/fonts"

interface SpringboardLogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
  color?: string
}

export default function SpringboardLogo({ size = "md", className = "", color = "#000000" }: SpringboardLogoProps) {
  // Size mapping
  const sizeMap = {
    sm: { height: 24, width: 140 },
    md: { height: 32, width: 186 },
    lg: { height: 48, width: 280 },
  }

  const { height, width } = sizeMap[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 186 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="#00C896" />
      <text x="16" y="22" textAnchor="middle" dominantBaseline="middle" fill="white" fontWeight="bold" fontSize="16">
        SB
      </text>
      <text
        x="116"
        y="22"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontWeight="600"
        fontSize="20"
        fontFamily="var(--font-poppins), sans-serif"
        className={poppins.className}
      >
        Springboard
      </text>
    </svg>
  )
}
