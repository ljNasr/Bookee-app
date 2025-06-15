import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Add Inter as our clean, modern font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Keep the Neue Machina font for headings
const neueMachina = localFont({
  src: [
    {
      path: "../public/fonts/NeueMachina-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMachina-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMachina-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
})

export const metadata: Metadata = {
  title: "Bookee - Connect with Artists",
  description: "Seamless booking platform for event organizers and artists",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${neueMachina.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

