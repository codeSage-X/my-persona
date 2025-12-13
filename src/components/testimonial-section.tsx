"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarRating } from "./star-rating"
import { ReviewForm } from "./review-form"
import { TestimonialSkeleton } from "./testimonial-skeleton"
import type { Review } from "../app/types/reviews"
import gsap from "gsap"
import { db } from "../../firebase.config"
import { collection, getDocs, addDoc } from "firebase/firestore/lite"
import Image from "next/image"

export function TestimonialSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedReview, setDisplayedReview] = useState<Review | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const slideContainerRef = useRef<HTMLDivElement>(null)
  const currentSlideRef = useRef<HTMLDivElement>(null)
  const nextSlideRef = useRef<HTMLDivElement>(null)
  const directionRef = useRef(1)

  // Fetch reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsCol = collection(db, "reviews")
        const reviewSnapshot = await getDocs(reviewsCol)
        const reviewList = reviewSnapshot.docs
          .map((doc) => doc.data() as Review)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

        setReviews(reviewList)
        setDisplayedReview(reviewList[0])
      } catch (error) {
        console.error("Error fetching reviews:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const getNextIndex = (current: number, direction: number) => {
    return direction > 0
      ? current === reviews.length - 1 ? 0 : current + 1
      : current === 0 ? reviews.length - 1 : current - 1
  }

  const handleSlideChange = (newIndex: number) => {
    if (isAnimating || isLoading || !reviews.length) return

    const direction =
      newIndex === 0 && currentIndex === reviews.length - 1
        ? 1
        : newIndex === reviews.length - 1 && currentIndex === 0
        ? -1
        : newIndex > currentIndex
        ? 1
        : -1

    directionRef.current = direction
    const nextReview = reviews[newIndex]
    setIsAnimating(true)
    setIsLoading(true)

    if (nextSlideRef.current && currentSlideRef.current) {
      gsap.set(nextSlideRef.current, {
        x: `${100 * direction}%`,
        opacity: 1,
        display: "flex",
      })

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(newIndex)
          setDisplayedReview(nextReview)

          if (currentSlideRef.current && nextSlideRef.current) {
            gsap.set(currentSlideRef.current, { x: 0, display: "flex" })
            gsap.set(nextSlideRef.current, { display: "none" })
          }

          setTimeout(() => {
            setIsLoading(false)
            setIsAnimating(false)
          }, 800)
        },
      })

      tl.to(currentSlideRef.current, {
        x: `${-100 * direction}%`,
        duration: 0.6,
        ease: "power2.inOut",
      }, 0)

      tl.to(nextSlideRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }, 0)
    }
  }

  const handlePrevious = () => {
    const newIndex = getNextIndex(currentIndex, -1)
    handleSlideChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = getNextIndex(currentIndex, 1)
    handleSlideChange(newIndex)
  }

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) handleSlideChange(index)
  }

  const handleAddReview = (newReview: Omit<Review, "id" | "date">) => {
    const review: Review = {
      ...newReview,
      id: `review-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
    }

    const addReview = async () => {
      try {
        const docRef = await addDoc(collection(db, "reviews"), { ...review })
        console.log("Document written with ID: ", docRef.id)

        setReviews((prev) => [review, ...prev])
        setCurrentIndex(0)
        setDisplayedReview(review)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    }

    addReview()
  }

  useEffect(() => {
    if (!isAnimating && !isLoading && reviews.length) {
      setDisplayedReview(reviews[currentIndex])
    }
  }, [currentIndex, reviews, isAnimating, isLoading])

  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (!isAnimating && !isLoading && reviews.length) {
        handleNext()
      }
    }, 5000)

    return () => clearInterval(autoScrollInterval)
  }, [isAnimating, isLoading, currentIndex, reviews])

  return (
    <div className="w-full py-16 px-4 bg-[#0a1622] bg-[url('../assets/bg.jpg')] bg-center bg-cover min-h-screen bg-[#0a1622] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h3 className="text-xl font-medium mb-2">Testimonia -</h3>
            <h2 className="text-5xl font-bold">What my Clients Say:</h2>
          </div>
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-teal-400 to-pink-400 hover:from-teal-500 hover:to-pink-500 text-white px-6 py-2 rounded-md"
          >
            Write review
          </Button>
        </div>

        <div className="flex items-center justify-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 z-10 text-white hover:bg-white/10 h-12 w-12"
            onClick={handlePrevious}
            disabled={isAnimating || isLoading}
          >
            <ChevronLeft size={36} />
            <span className="sr-only">Previous</span>
          </Button>

          <div className="relative w-full max-w-2xl mx-auto overflow-hidden" ref={slideContainerRef}>
            <div ref={currentSlideRef} className="flex flex-col items-center w-full px-4">
              {isLoading || !displayedReview ? (
                <TestimonialSkeleton />
              ) : (
                <>
                  <div className="relative mb-6">
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4  bg-gradient-to-r from-teal-400 to-pink-400 p-1">
                  
                        <Image
                            src={displayedReview.photoUrl ||  "https://res.cloudinary.com/xenxei46/image/upload/v1745451231/avatar-1577909_1280_q2lzbc.webp"}
                            alt={displayedReview.fullName}
                            fill
                            className="object-cover rounded-full"
                            priority
                          />
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold mb-1 text-center">{displayedReview.fullName}</h3>
                  <p className="text-xl mb-4 text-center">
                    {displayedReview.jobTitle} {displayedReview.company}
                  </p>

                  <div className="mb-4 flex justify-center">
                    <StarRating initialRating={displayedReview.rating} readOnly size={24} />
                  </div>

                  <p className="text-center text-lg leading-relaxed mb-8">{displayedReview.reviewText}</p>
                </>
              )}
            </div>

            <div
              ref={nextSlideRef}
              className="flex flex-col items-center w-full px-4 absolute top-0 left-0"
              style={{ display: "none" }}
            >
              {isAnimating && <TestimonialSkeleton />}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 z-10 text-white hover:bg-white/10 h-12 w-12"
            onClick={handleNext}
            disabled={isAnimating || isLoading}
          >
            <ChevronRight size={36} />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="flex gap-2 mt-4 justify-center">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-4" : "bg-white/30"
              }`}
              onClick={() => handleDotClick(index)}
              disabled={isAnimating || isLoading}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <ReviewForm open={isFormOpen} onOpenChange={setIsFormOpen} onSubmit={handleAddReview} />
    </div>
  )
}
