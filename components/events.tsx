"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Events() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const events = [
    {
      image: "/image.png",
      title: "Conference Talk",
    },
    {
      image: "/tech-conference-speaking.jpg",
      title: "Developer Meetup",
    },
    {
      image: "/hackathon-event.png",
      title: "Hackathon",
    },
    {
      image: "/workshop-teaching.jpg",
      title: "Workshop Facilitator",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <section id="events" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-cyan-400 text-lg mb-2">Community Building & Events -</p>
          <h2 className="text-5xl font-bold">Events I've featured in</h2>
        </div>

        <div className="relative">
          {/* Main carousel */}
          <div className="relative aspect-[16/9] max-h-[600px] overflow-hidden rounded-2xl">
            <img
              src={events[currentSlide].image || "/placeholder.svg"}
              alt={events[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-3xl font-bold text-white">{events[currentSlide].title}</h3>
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-cyan-400 w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
