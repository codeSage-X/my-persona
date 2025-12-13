"use client"

import { Star } from "lucide-react"
import { useState } from "react"

interface StarRatingProps {
  totalStars?: number
  initialRating?: number
  onChange?: (rating: number) => void
  readOnly?: boolean
  size?: number
}

export function StarRating({
  totalStars = 5,
  initialRating = 0,
  onChange,
  readOnly = false,
  size = 20,
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (index: number) => {
    if (readOnly) return
    const newRating = index + 1
    setRating(newRating)
    onChange?.(newRating)
  }

  const handleMouseEnter = (index: number) => {
    if (readOnly) return
    setHoverRating(index + 1)
  }

  const handleMouseLeave = () => {
    if (readOnly) return
    setHoverRating(0)
  }

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const filled = (hoverRating || rating) > index

        return (
          <Star
            key={index}
            size={size}
            className={`${
              filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${!readOnly ? "cursor-pointer" : ""}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        )
      })}
    </div>
  )
}
