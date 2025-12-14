"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"

import {
  Code,
  Palette,
  Zap,
  Atom,
  Server,
  Database,
  Bug
} from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Floating animation for tech icons
    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: "+=20",
          rotation: "+=5",
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        })
      }
    })

    // Profile image glow animation
    const profileImage = containerRef.current.querySelector(".profile-image")
    if (profileImage) {
      gsap.to(profileImage, {
        boxShadow: "0 0 40px rgba(34, 211, 238, 0.8), 0 0 80px rgba(34, 211, 238, 0.4)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

const techIcons = [
  { name: "HTML", Icon: Code, position: "top-[20%] left-[10%]" },
  { name: "CSS", Icon: Palette, position: "top-[30%] left-[5%]" },
  { name: "JavaScript", Icon: Zap, position: "bottom-[30%] left-[8%]" },
  { name: "React", Icon: Atom, position: "top-[15%] right-[10%]" },
  { name: "Node.js", Icon: Server, position: "top-[25%] right-[15%]" },
  { name: "Python", Icon: Bug, position: "bottom-[25%] right-[12%]" },
  { name: "Database", Icon: Database, position: "bottom-[20%] right-[8%]" },
]


  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating tech icons */}
      {techIcons.map((tech, index) => (
        <div
          key={tech.name}
          ref={(el) => {
            iconsRef.current[index] = el
          }}
          className={`absolute ${tech.position} w-16 h-16 bg-card rounded-xl flex items-center justify-center text-3xl shadow-lg border border-cyan-500/20`}
        >
          <tech.Icon className="w-8 h-8" />
        </div>
      ))}

      <div className="relative z-10 text-center px-4">
        {/* Profile image */}
        <div className="profile-image w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
          <img src="/professional-developer-portrait.png" alt="Wisdom Ikoi" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-cyan-400 tracking-tight">FULL STACK DEVELOPER</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">WISDOM IKOI</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Building immersive web experiences with modern technologies.
        </p>
        <Button
          onClick={scrollToProjects}
          className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a0e27] transition-all duration-300 px-8 py-6 text-lg rounded-full"
        >
          VIEW PROJECTS
        </Button>
      </div>
    </section>
  )
}
