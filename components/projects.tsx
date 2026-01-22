"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiJavascript, SiNextdotjs, SiMongodb, SiReact, SiThreedotjs, SiNodedotjs, SiGreensock, SiExpo } from "react-icons/si"
import { JSX } from "react"


export function Projects() {
const projects = [
  {
    title: "E-commerce Gamified Store",
    description:
      "Pages is a Gamified online store with user authentication, product catalog, and checkout.",
    image: "/pages.png",
    tech: ["node", "next", "mongo"],
    link: "https://www.shopwithpages.com",
    embedLink: "", // you’ll fix later
    appType: "web",
  },
  {
    title: "My Mently",
    description:
      "Your all-in-one platform for mentorship, training, and building impactful communities.",
    image: "/mently.png",
    tech: ["react", "next"],
    link: "https:mymently.com",
    embedLink: "",
    appType: "web",
  },
  {
    title: "3D Car Simulator",
    description:
      "A Luxury 3D Car Simulator that offers an immersive experience with realistic graphics.",
    image: "/3d-car.png",
    tech: ["three", "js", "gsap"],
    link: "https://3dcarsimulator.netlify.app/",
    embedLink: "",
    appType: "live_demo",
  },
  {
    title: "Pages Dashboard",
    description:
      "A comprehensive dashboard for managing and analyzing business operations.",
    image: "/dashboard.png",
    tech: ["node", "next", "mongo"],
    link: "https://admin.shopwithpages.com",
    embedLink: "",
    appType: "web",
  },
  {
    title: "Creek n greek",
    description:
      "Luxury resort website with stunning visuals and seamless navigation.",
    image: "/creek.png",
    tech: ["next", "react"],
    link: "https://creek-n-greek.vercel.app/",
    embedLink: "",
    appType: "Website",
  },
  {
    title: "Kuda App Clone",
    description:
      "A clone of the Kuda banking Mobile app with essential features and user-friendly interface.",
    image: "/kuda.png",
    tech: [ "react", "expo"],
    link: "https://github.com/codeSage-X/Kuda-App-clone",
    embedLink: "",
    appType: "mobile",
  },

]

const techIcons: Record<string, JSX.Element> = {
  js: <SiJavascript className="text-yellow-400 w-5 h-5" />,
  react: <SiReact className="text-blue-400 w-5 h-5" />,
  next: <SiNextdotjs className="text-white w-5 h-5" />,
  mongo: <SiMongodb className="text-green-500 w-5 h-5" />,
  three: <SiThreedotjs className="text-green-500 w-5 h-5" />,
  node: <SiNodedotjs className="text-green-600 w-5 h-5" />,
  gsap: <SiGreensock className="text-green-400 w-5 h-5" />,
  expo: <SiExpo className="text-black w-5 h-5" />,
}



  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground">Check out my latest work</p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <Card
      key={index}
      className="bg-card border-cyan-500/20 overflow-hidden hover:border-cyan-400 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>

        {/* Tech Stack */}
        <div className="flex gap-2">
          {project.tech.map((tech, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-muted border border-cyan-500/20 rounded-lg flex items-center justify-center"
            >
              {techIcons[tech]}
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm">
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-[#0a0e27]">
              View Details
            </Button>
          </a>

          <Button
            variant="outline"
            className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a0e27] bg-transparent"
          >
            {project.appType === "live_demo" ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                Live Demo
              </a>
            ) : project.appType === "mobile" ? (
              "Download Apk"
            ) : project.appType === "web" ? (
              "Web App"
            ) : (
              "Website"
            )}  
          </Button>
        </div>
      </div>
    </Card>
  ))}
</div>

      </div>
    </section>
  )
}
