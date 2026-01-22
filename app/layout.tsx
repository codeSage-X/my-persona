import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codesage - Full Stack Developer Portfolio",
  description: "Building immersive web experiences with modern technologies",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/professional-full-stack-developer-portrait--young-.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/professional-full-stack-developer-portrait--young-.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/professional-full-stack-developer-portrait--young-.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
