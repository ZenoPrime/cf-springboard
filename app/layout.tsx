import type React from "react"
import type { Metadata, Viewport } from "next"
import { inter, ptMono, poppins } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import FloatingNav from "@/components/layout/FloatingNav"
import Footer from "@/components/layout/Footer"
import GlobalSearchProvider from "@/components/search/GlobalSearchProvider"
import StructuredData from "@/components/seo/StructuredData"
// Uncomment the line below and comment out the line above to use the alternative footer
// import Footer from "@/components/layout/FooterAlt"

export const metadata: Metadata = {
  title: {
    default: "Springboard - Web3 Project Ideas & Builder Resources",
    template: "%s | Springboard"
  },
  description: "Discover vetted Web3 project ideas, builder kits, and hackathon opportunities. Your launchpad for blockchain innovation with DeFi, NFT, DAO, and DePIN project concepts.",
  keywords: ["Web3", "blockchain", "project ideas", "DeFi", "NFT", "DAO", "DePIN", "hackathon", "builder kits", "crypto", "ethereum", "solana"],
  authors: [{ name: "Springboard Team" }],
  creator: "Springboard",
  publisher: "Springboard",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/Frame-736.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/icons/Frame-736.ico",
    apple: [
      { url: "/icons/Frame-736.ico", sizes: "180x180" }
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Springboard",
    startupImage: [
      {
        url: "/icons/icon-512x512.png",
        media: "(device-width: 768px) and (device-height: 1024px)"
      }
    ]
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://springboard-web3.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Springboard",
    title: "Springboard - Web3 Project Ideas & Builder Resources",
    description: "Discover vetted Web3 project ideas, builder kits, and hackathon opportunities. Your launchpad for blockchain innovation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Springboard - Web3 Project Ideas Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Springboard - Web3 Project Ideas & Builder Resources",
    description: "Discover vetted Web3 project ideas, builder kits, and hackathon opportunities. Your launchpad for blockchain innovation.",
    images: ["/og-image.png"],
    creator: "@springboard_web3"
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "Technology",
  classification: "Web3 Development Platform",
  generator: 'Next.js'
}

export const viewport: Viewport = {
  themeColor: "#00c896",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData type="website" />
        <StructuredData type="organization" />
      </head>
      <body className={`${inter.variable} ${ptMono.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <GlobalSearchProvider>
            <div className="flex min-h-screen flex-col">
              <FloatingNav />
              <main className="flex-1">{children}</main>
             
            </div>
          </GlobalSearchProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
