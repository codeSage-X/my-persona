"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Events } from "@/components/events"
import { Reviews } from "@/components/reviews"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"

export default function Page() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Events />
        <Reviews />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
