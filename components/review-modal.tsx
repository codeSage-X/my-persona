"use client"

import type React from "react"

import { useState } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface ReviewModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (reviews: any) => void
}

export function ReviewModal({ open, onClose, onSubmit }: ReviewModalProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    description: "",
  })

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast.error("Please select a rating")
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.role || !formData.description) {
      toast.error("Please fill in all fields")
      return
    }

    // Here you would typically send to Firebase
    // For now, we'll just show a success message
    toast.success("Thank you for your review! It has been submitted.")

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      role: "",
      description: "",
    })
    setRating(0)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#1a1f3a] light:bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white light:hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-white light:text-gray-900 mb-6">Write a Review</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">First Name</label>
              <Input
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-[#0a0e27] light:bg-gray-50 border-cyan-500/20 text-white light:text-gray-900"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Last Name</label>
              <Input
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-[#0a0e27] light:bg-gray-50 border-cyan-500/20 text-white light:text-gray-900"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Role</label>
            <Input
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="bg-[#0a0e27] light:bg-gray-50 border-cyan-500/20 text-white light:text-gray-900"
              placeholder="CEO at Company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-[#0a0e27] light:bg-gray-50 border-cyan-500/20 text-white light:text-gray-900 min-h-32"
              placeholder="Tell us about your experience..."
            />
          </div>

          <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-[#0a0e27]">
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  )
}
