import { Inter, PT_Mono, Poppins } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true
})

export const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-mono",
  preload: true
})

export const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true
})
