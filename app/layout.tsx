import type React from "react"
import type { Metadata, Viewport } from "next"
import { inter, ptMono, poppins } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import FloatingNav from "@/components/layout/FloatingNav"
import Footer from "@/components/layout/Footer"
import GlobalSearchProvider from "@/components/search/GlobalSearchProvider"
// Uncomment the line below and comment out the line above to use the alternative footer
// import Footer from "@/components/layout/FooterAlt"

export const metadata: Metadata = {
  title: "Springboard - Web3 Project Ideas",
  description: "Discover your next Web3 project idea",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Springboard",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Springboard",
    title: "Springboard - Web3 Project Ideas",
    description: "Discover your next Web3 project idea",
  },
  twitter: {
    card: "summary_large_image",
    title: "Springboard - Web3 Project Ideas",
    description: "Discover your next Web3 project idea",
  },
    generator: 'v0.dev'
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
      <body className={`${inter.variable} ${ptMono.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
