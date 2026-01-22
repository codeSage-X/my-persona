"use client"

import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { uploadAvatar } from "@/lib/uploadAvatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Camera, X } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
  onOptimisticAdd: (review: any) => void
}

export function ReviewModal({ open, onClose, onOptimisticAdd }: Props) {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [rating, setRating] = useState(0)
  const [text, setText] = useState("")
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (!open) return null

  const isValid =
    name.trim() &&
    role.trim() &&
    text.trim() &&
    rating > 0

  const handleSubmit = async () => {
    if (!isValid) return

    setLoading(true)

    const optimisticReview = {
      id: `temp-${Date.now()}`,
      name,
      role,
      rating,
      text,
      avatar: avatarPreview || "/placeholder-user.jpg",
      date: new Date(),
    }

    onOptimisticAdd(optimisticReview)
    onClose()

    try {
      let avatarUrl = "/placeholder-user.jpg"
      if (avatarFile) avatarUrl = await uploadAvatar(avatarFile)

      await addDoc(collection(db, "reviews"), {
        name,
        role,
        rating,
        text,
        avatar: avatarUrl,
        date: serverTimestamp(),
      })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <Card className="
        w-full max-w-md
        max-h-[90vh]
        bg-[#0b1026]
        border border-cyan-500/20
        flex flex-col
        overflow-hidden
      ">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20">
          <h3 className="text-xl font-bold text-white">Write a Review</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">

          {/* Avatar Picker */}
          <div className="flex justify-center">
            <label className="relative cursor-pointer group">
              <img
                src={avatarPreview || "/placeholder-user.jpg"}
                className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
              />
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (!file) return
                  setAvatarFile(file)
                  setAvatarPreview(URL.createObjectURL(file))
                }}
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Full name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md bg-[#131a3a] px-4 py-3 text-white border border-cyan-500/20 focus:border-cyan-400 outline-none"
              placeholder="John Doe"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-400">Your Role</label>
            <input
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 w-full rounded-md bg-[#131a3a] px-4 py-3 text-white border border-cyan-500/20 focus:border-cyan-400 outline-none"
              placeholder="Startup Inc"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm text-gray-400 block mb-2">Rating</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(n => (
                <Star
                  key={n}
                  onClick={() => setRating(n)}
                  className={`w-7 h-7 cursor-pointer transition ${
                    rating >= n
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Review */}
          <div>
            <label className="text-sm text-gray-400">Review</label>
            <textarea
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 w-full rounded-md bg-[#131a3a] px-4 py-3 text-white border border-cyan-500/20 focus:border-cyan-400 outline-none resize-none"
              placeholder="Share your experience..."
            />
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="px-6 py-4 border-t border-cyan-500/20 flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="w-[50%] border-cyan-400 text-cyan-400"
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={!isValid || loading}
            className="w-[50%] bg-cyan-400 text-[#0a0e27] hover:bg-cyan-500"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
