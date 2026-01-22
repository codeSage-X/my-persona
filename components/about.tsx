"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SiAngular, SiDocker, SiGreensock, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPhp, SiPostman, SiThreedotjs, SiTypescript } from "react-icons/si"

import {
  Globe,
  Palette,
  Zap,
  Atom,
  Server,
  Database,
  Rocket,
  Code,
} from "lucide-react"


gsap.registerPlugin(ScrollTrigger)

export function About() {
  const skillsRef = useRef<(HTMLDivElement | null)[]>([])

  const skills = [
    { name: "JavaScript & Typescript", level: 100 },
    { name: "React & Next.JS", level: 95 },
    { name: "Node.js & MongoDB", level: 90 },
    { name: "Gsap & Three.js", level: 85 },
    { name: "PHP & Laravel", level: 74 },
    { name: "AI & Automation", level: 78 },
    { name: "Vibe Coding & Prompting", level: 96 },
    { name: "Advocacy & Team Leading ", level: 94 },
    { name: "Technical Writing & API Documentation ", level: 90 },
    { name: "Angular ", level: 95 },
  ]

 const techStack = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Gsap", Icon: SiGreensock },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: Atom },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Three.js", Icon: SiThreedotjs },
  { name: "PHP", Icon: SiPhp },
  { name: "REST API", Icon: SiPostman },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Angular", Icon: SiAngular },
  { name: "Docker", Icon: SiDocker },


]

  useEffect(() => {
    skillsRef.current.forEach((skillBar, index) => {
      if (skillBar) {
        gsap.fromTo(
          skillBar,
          { width: "0%" },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: skillBar,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }
    })
  }, [])

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>

        <div className="space-y-12">
          {/* Profile and Bio Row */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-sm">
                <div className="relative aspect-square overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] rounded-2xl">
                  <img
                    src="/professional-full-stack-developer-portrait--young-.jpg"
                    alt="Wisdom Ikoi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <h3 className="text-4xl font-bold">WISDOM IKOI</h3>
                  <div className="inline-flex items-center gap-2 mt-2">
                    <span className="text-xl text-muted-foreground">Full Stack Developer</span>
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium">JS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 6 years of experience in software development, I am a passionate and dedicated full stack
                developer specializing in building seamless digital experiences from front-end interfaces to back-end
                architecture. I began my journey with a curiosity for coding, evolving into a career where I craft
                seamless digital experiences from front-end interfaces to back-end architecture.
              </p>
              <p>
                I possess a deep expertise in modern JavaScript frameworks, particularly React and Node.js, and have a
                strong foundation in data structures, algorithms, and system design. I thrive in collaborative
                environments, leveraging my problem-solving skills to deliver high-quality solutions that exceed
                expectations. My commitment to continuous learning ensures I stay ahead of industry trends, allowing me
                to implement cutting-edge technologies effectively.
              </p>
              <p>
                Beyond code, I am driven by the challenge of transforming complex problems into intuitive, elegant
                software that drives value for users and businesses alike. I am constantly exploring new tools and
                methodologies to refine my craft and contribute to impactful projects.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills Section */}
            <div className="bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-3xl font-bold mb-6">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-lg">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        ref={(el) => {
                          skillsRef.current[index] = el
                        }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
           <div className="grid grid-cols-3 gap-4">
  {techStack.map((tech) => (
    <div
      key={tech.name}
      className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border border-border
                 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
                 transition-all duration-300"
    >
      <tech.Icon className="w-10 h-10 mb-2 text-cyan-400" />
      <span className="text-sm text-center">{tech.name}</span>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
