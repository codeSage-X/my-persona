"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import profile  from "../assets/profile.jpg"

interface AnimatedProfileProps {
  // src: string
  alt: string
  className?: string
}

export default function AdvancedAnimatedProfile({  alt, className = "" }: AnimatedProfileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const outerGlowRef = useRef<HTMLDivElement>(null)
  const middleGlowRef = useRef<HTMLDivElement>(null)
  const innerGlowRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create a master timeline
    const masterTl = gsap.timeline()

    // Initial setup - start with a slightly larger scale and fade in
    gsap.set([outerGlowRef.current, middleGlowRef.current, innerGlowRef.current], {
      scale: 1.1,
      opacity: 0,
    })

    // Fade in animation
    masterTl.to([outerGlowRef.current, middleGlowRef.current, innerGlowRef.current], {
      opacity: (i) => [0.7, 0.6, 0.5][i],
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    })

    // Create pulsing animations for each glow layer
    const createPulseAnimation = (element: HTMLDivElement | null, duration: number, delay: number) => {
      if (!element) return

      gsap.to(element, {
        scale: 1.05,
        opacity: (i, target) => Number.parseFloat(getComputedStyle(target).opacity) * 0.8,
        filter: "blur(12px)",
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      })
    }

    createPulseAnimation(outerGlowRef.current, 3, 0)
    createPulseAnimation(middleGlowRef.current, 4, 1)
    createPulseAnimation(innerGlowRef.current, 2.5, 0.5)

    // Create slow rotation for the gradient effect
    gsap.to(outerGlowRef.current, {
      rotation: 360,
      transformOrigin: "center center",
      duration: 30,
      repeat: -1,
      ease: "none",
    })

    gsap.to(middleGlowRef.current, {
      rotation: -360,
      transformOrigin: "center center",
      duration: 40,
      repeat: -1,
      ease: "none",
    })

    // Create particles effect (optional)
    if (particlesRef.current) {
      const createParticle = () => {
        if (!containerRef.current || !particlesRef.current) return

        const particle = document.createElement("div")
        particle.className = "absolute w-1 h-1 rounded-full bg-white opacity-70"
        particlesRef.current.appendChild(particle)

        // Random position around the circle
        const angle = Math.random() * Math.PI * 3
        const radius = containerRef.current.offsetWidth / 2
        const x = Math.cos(angle) * radius + radius
        const y = Math.sin(angle) * radius + radius

        gsap.set(particle, {
          x: x,
          y: y,
          scale: Math.random() * 1.5 + 1,
        })

        // Animate particle
        gsap.to(particle, {
          x: x + (Math.random() - 0.5) * 30,
          y: y + (Math.random() - 0.5) * 30,
          opacity: 0.5,
          duration: Math.random() * 2 + 1,
          onComplete: () => {
            if (particlesRef.current && particlesRef.current.contains(particle)) {
              particlesRef.current.removeChild(particle)
            }
          },
        })
      }

      // Create particles at intervals
      const particleInterval = setInterval(createParticle, 300)

      // Cleanup
      return () => {
        clearInterval(particleInterval)
        masterTl.kill()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        gsap.killTweensOf([outerGlowRef.current, middleGlowRef.current, innerGlowRef.current])
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 z-20 overflow-hidden rounded-full pointer-events-none"></div>

      {/* Outer glow layer */}
      <div
        ref={outerGlowRef}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ff9d] to-[#ff00c8] blur-md opacity-70"
      ></div>

      {/* Middle glow layer */}
      <div
        ref={middleGlowRef}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00ff9d] via-[#9d00ff] to-[#ff00c8] blur-sm opacity-60 glow-pulse"
      ></div>

      {/* Inner glow layer */}
      <div
        ref={innerGlowRef}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#ff00c8] blur-[6px] opacity-50 glow-pulse-delayed"
      ></div>

      {/* Image container */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#00ff9d] z-10">
        <Image src={profile} alt={alt} fill className="object-cover" priority />
      </div>
    </div>
  )
}
