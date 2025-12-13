
// import altComm from "../assets/AltCommSumm-53.jpg"
// import altComm1 from "../assets/AltCommSumm-52.jpg"
// import altComm2 from "../assets/AltCommSumm-55.jpg"
// import altComm3 from "../assets/AltCommSumm-56.jpg"
// import altComm4 from "../assets/AltCommSumm-76.jpg"
// import deElite from "../assets/DE-ELITE-IMAGE-24.jpg"
// import deElite1 from "../assets/DE-ELITE-IMAGE-41.jpg"
// import fbImg from "../assets/FB_IMG_1701526983811.jpg"


"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import altComm from "../assets/AltCommSumm-53.jpg"
import altComm1 from "../assets/AltCommSumm-52.jpg"
import altComm2 from "../assets/AltCommSumm-55.jpg"
import altComm3 from "../assets/AltCommSumm-56.jpg"
import altComm4 from "../assets/AltCommSumm-76.jpg"
import deElite from "../assets/DE-ELITE-IMAGE-24.jpg"
import deElite1 from "../assets/DE-ELITE-IMAGE-41.jpg"
import fbImg from "../assets/FB_IMG_1701526983811.jpg"

const eventImages = [
  {
    id: 1,
    src: altComm,
    alt: "Speaking at a community event with audience",
    title: "Community Event",
  },
  {
    id: 2,
    src: altComm1,
    alt: "Speaking on stage with a co-presenter",
    title: "Conference Talk",
  },
  {
    id: 3,
    src: altComm2,
    alt: "Group photo with event attendees",
    title: "Networking Event",
  },
  {
    id: 4,
    src: altComm3,
    alt: "Panel discussion with multiple speakers",
    title: "Panel Discussion",
  },
  {
    id: 5,
    src: altComm4,
    alt: "Speaking at a tech conference",
    title: "Tech Conference",
  },
  {
    id: 6,
    src: deElite,
    alt: "Audience view of a speaking event",
    title: "Keynote Speech",
  },
  {
    id: 7,
    src: deElite1 ,
    alt: "Audience view of a speaking event",
    title: "Workshop",
  },
  {
    id: 8,
    src:  fbImg ,
    alt: "Audience view of a speaking event",
    title: "Community Meetup",
  },
 
]
export default function EventsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides] = useState(eventImages.length)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Handle navigation
  const navigateSlide = (direction: "prev" | "next") => {
    if (isAnimating) return

    setIsAnimating(true)

    let newIndex = currentSlide
    if (direction === "prev") {
      newIndex = (currentSlide - 1 + totalSlides) % totalSlides
    } else {
      newIndex = (currentSlide + 1) % totalSlides
    }

    setCurrentSlide(newIndex)

    // Reset animation flag after transition
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)

    // Reset animation flag after transition
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Setup autoplay
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayTimerRef.current = setInterval(() => {
        navigateSlide("next")
      }, 5000)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [currentSlide, autoplayEnabled])

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current)
      setAutoplayEnabled(false)
    }
  }

  // Resume autoplay on mouse leave
  const resumeAutoplay = () => {
    setAutoplayEnabled(true)
  }

  // Calculate positions for the 3D carousel effect
  const getCardStyle = (index: number) => {
    const diff = (index - currentSlide + totalSlides) % totalSlides

    // Create a 3D perspective effect
    if (diff === 0) {
      // Center card
      return {
        transform: "translateX(-50%) scale(1.1)",
        zIndex: 30,
        left: "50%",
        opacity: 1,
      }
    } else if (diff === 1 || diff === totalSlides - 1) {
      // Side cards
      return {
        transform:
          diff === 1 ? "translateX(40%) rotateY(-15deg) scale(0.9)" : "translateX(-140%) rotateY(15deg) scale(0.9)",
        zIndex: 20,
        left: diff === 1 ? "50%" : "50%",
        opacity: 0.8,
      }
    } else {
      // Hidden cards
      return {
        transform:
          diff < totalSlides / 2
            ? "translateX(150%) rotateY(-30deg) scale(0.7)"
            : "translateX(-250%) rotateY(30deg) scale(0.7)",
        zIndex: 10,
        left: "50%",
        opacity: 0,
      }
    }
  }

  return (
    <div
      className="relative w-full bg-pink-100 py-16 bg-[url('../assets/bg.jpg')] bg-center bg-cover min-h-screen bg-[#0a1622] text-white relative overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="container mx-auto px-4">
      <div className="mb-16 pt-18">
        <p className="text-lg font-medium text-[#4cd3a9]">Community Building & Events -</p>
        <h1 className="text-5xl font-bold mt-2">Events I&apos;ve featured in</h1>
      </div>
        <div className="relative h-[500px] md:h-[600px] perspective-1000">
          {/* Carousel container */}
          <div className="relative h-full w-full preserve-3d">
            {eventImages.map((image, index) => (
              <div
                key={image.id}
                className="absolute top-1/2 -translate-y-1/2 w-[280px] md:w-[350px] h-[400px] md:h-[450px] transition-all duration-500 ease-out"
                style={getCardStyle(index)}
              >
                <div
                  className="relative w-full h-full rounded-lg overflow-hidden shadow-xl bg-white border-4 border-transparent"
                  style={{
                    backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #ff80b5, #e94c89)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 350px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center z-40 hover:bg-white/50 transition-colors"
            onClick={() => navigateSlide("prev")}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center z-40 hover:bg-white/50 transition-colors"
            onClick={() => navigateSlide("next")}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 gap-2">
          {eventImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentSlide === index ? "bg-gray-800 w-6" : "bg-gray-400 hover:bg-gray-600",
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Title */}
        <div className="text-center mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {eventImages[currentSlide]?.title || "Events Gallery"}
          </h2>
        </div>
      </div>
    </div>
  )
}
