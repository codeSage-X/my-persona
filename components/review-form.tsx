"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { StarRating } from "./star-rating"
import type { Review } from "../app/types/reviews"

interface ReviewFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (review: Omit<Review, "id" | "date">) => void
}

export function ReviewForm({ open, onOpenChange, onSubmit }: ReviewFormProps) {
  const [fullName, setFullName] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(5)
  const [photoUrl, setPhotoUrl] = useState("/placeholder.svg?height=300&width=300")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission delay
    setTimeout(() => {
      onSubmit({
        fullName,
        jobTitle,
        company,
        photoUrl,
        rating,
        reviewText,
    
      })

    
      // Reset form
      setFullName("")
      setJobTitle("")
      setCompany("")
      setReviewText("")
      setRating(5)
      setPhotoUrl("/placeholder.svg?height=300&width=300")
      setIsSubmitting(false)
      onOpenChange(false)
    }, 500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Write a Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="photoUrl">Photo URL</Label>
            <Input
              id="photoUrl"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://res.cloudinary.com/xenxei46/image/upload/v1745451231/avatar-1577909_1280_q2lzbc.webp"
            />
            <p className="text-xs text-muted-foreground">Leave blank to use a placeholder image</p>
          </div>

          <div className="grid gap-2">
            <Label>Rating</Label>
            <StarRating initialRating={rating} onChange={setRating} totalStars={5} />
            <p className="text-xs text-muted-foreground">Select 2-5 stars for your rating</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="reviewText">Review</Label>
            <Textarea
              id="reviewText"
              value={reviewText}
              onChange={(e: { target: { value: React.SetStateAction<string> } }) => setReviewText(e.target.value)}
              rows={4}
              required
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || rating < 2}
              className="bg-gradient-to-r from-teal-400 to-pink-400 hover:from-teal-500 hover:to-pink-500"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
