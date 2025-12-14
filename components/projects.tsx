"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A scalable online store with user authentication, product catalog, and secure checkout.",
      image: "/ecommerce-website-interface.png",
      tech: ["⚛️", "🟢", "🍃"],
    },
    {
      title: "Social Media App",
      description: "A scalable online store with user authentication, product catalog, and social Media.",
      image: "/social-media-app-mobile.png",
      tech: ["⚛️", "🟢", "🍃"],
    },
    {
      title: "Dashboard Analytics Tool",
      description: "A scalable online store with user authentication, product catalog, and secure checkout.",
      image: "/analytics-dashboard-dark.jpg",
      tech: ["⚛️", "🟢", "🍃"],
    },
    {
      title: "Portfolio Website",
      description: "A scalable online store with user authentication, product catalog, and secure checkout.",
      image: "/portfolio-website-design.png",
      tech: ["⚛️", "🟢", "🍃"],
    },
    {
      title: "Task Management App",
      description: "A scalable online store with user authentication, product catalog, and task Management App.",
      image: "/task-management-interface.png",
      tech: ["⚛️", "🟢", "🍃"],
    },
    {
      title: "Blog Platform",
      description: "A scalable online store with user authentication, product catalog, and secure checkout.",
      image: "/blog-platform-cms.png",
      tech: ["⚛️", "🟢", "🍃"],
    },
  ]

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
                <div className="flex gap-2">
                  {project.tech.map((icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-muted border border-cyan-500/20 rounded-lg flex items-center justify-center text-xl"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-[#0a0e27]">View Details</Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a0e27] bg-transparent"
                  >
                    Live Demo
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
