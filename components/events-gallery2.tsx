"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import altComm from "../assets/AltCommSumm-53.jpg"
import altComm1 from "../assets/AltCommSumm-52.jpg"
import altComm2 from "../assets/AltCommSumm-55.jpg"
import altComm3 from "../assets/AltCommSumm-56.jpg"
import altComm4 from "../assets/AltCommSumm-76.jpg"
import deElite from "../assets/DE-ELITE-IMAGE-24.jpg"
import deElite1 from "../assets/DE-ELITE-IMAGE-41.jpg"
import fbImg from "../assets/FB_IMG_1701526983811.jpg"




// This array can be expanded with more events in the future
const eventImages = [
  {
    id: 1,
    src: altComm,
    alt: "Speaking at a community event with audience",
  },
  {
    id: 2,
    src: altComm1,
    alt: "Speaking on stage with a co-presenter",
  },
  {
    id: 3,
    src: altComm2,
    alt: "Group photo with event attendees",
  },
  {
    id: 4,
    src: altComm3,
    alt: "Panel discussion with multiple speakers",
  },
  {
    id: 5,
    src: altComm4,
    alt: "Speaking at a tech conference",
  },
  {
    id: 6,
    src: deElite,
    alt: "Audience view of a speaking event",
  },
  {
    id: 7,
    src: deElite1,
    alt: "Audience view of a speaking event",
  },
  {
    id: 8,
    src: fbImg,
    alt: "Audience view of a speaking event",
  },
]

export default function EventsGallery() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [totalSlides] = useState(eventImages.length)

  const handleSlideClick = (index: number) => {
    if (isDragging) return

    if (activeIndex === index) {
      setActiveIndex(null)
      return
    }

    setActiveIndex(index)
  }

  const navigateSlide = (direction: "prev" | "next") => {
    if (!carouselRef.current) return

    const carousel = carouselRef.current
    const slideWidth = carousel.offsetWidth

    let newIndex = currentSlide
    if (direction === "prev") {
      newIndex = Math.max(0, currentSlide - 1)
    } else {
      newIndex = Math.min(totalSlides - 1, currentSlide + 1)
    }

    setCurrentSlide(newIndex)

    carousel.scrollTo({
      left: newIndex * (slideWidth / 2),
      behavior: "smooth",
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const x = e.pageX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    carouselRef.current!.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const x = e.touches[0].pageX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current!.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Update current slide based on scroll position
  const handleScroll = () => {
    if (!carouselRef.current) return

    const carousel = carouselRef.current
    const slideWidth = carousel.offsetWidth / 2
    const index = Math.round(carousel.scrollLeft / slideWidth)

    if (index !== currentSlide) {
      setCurrentSlide(index)
    }
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    if (!carouselRef.current) return

    const carousel = carouselRef.current
    const slideWidth = carousel.offsetWidth / 2

    setCurrentSlide(index)
    carousel.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="text-lg font-medium text-[#4cd3a9]">Community Building & Events -</p>
        <h1 className="text-5xl font-bold mt-2">Events I&apos;ve featured in</h1>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
        >
          {eventImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "min-w-[280px] md:min-w-[350px] lg:min-w-[400px] border-4 rounded-lg overflow-hidden transition-all duration-300 snap-center",
                index % 2 === 0 ? "border-[#4cd3a9]" : "border-[#e94c89]",
                activeIndex === index ? "border-[#e94c89] scale-105 z-10" : "scale-90 hover:scale-95",
              )}
              onClick={() => handleSlideClick(index)}
            >
              <div className="relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white">
                  <h3 className="text-lg font-bold">Event {index + 1}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white z-10"
          onClick={() => navigateSlide("prev")}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white z-10"
          onClick={() => navigateSlide("next")}
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {eventImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-[#e94c89] w-6" : "bg-gray-400 hover:bg-gray-300",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


