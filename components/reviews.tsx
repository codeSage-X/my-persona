"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Star } from "lucide-react"
import { ReviewModal } from "@/components/review-modal"

export function Reviews() {
  const [showModal, setShowModal] = useState(false)
  const [reviews, setReviews] = useState([
    {
      name: "Jane Smith",
      company: "Tech Startup Inc.",
      rating: 5,
      text: "Working with [Developer] was an absolute pleasure. The web app they built for our startup is stunning and performs flawlessly. Their attention to detail and commitment to excellence is unmatched. Highly recommend! The project was completed well within the timeframe and communication was seamless.",
      date: "October 25, 2023",
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "John Doe",
      company: "Shopify Clone Ltd",
      rating: 5,
      text: "The developer delivered our e-commerce platform ahead of schedule and under budget. The code quality was exceptional, and they provided excellent support throughout the project. Their full stack expertise made them a valuable asset to our team. We look forward to working with them again.",
      date: "November 12, 2023",
      avatar: "/professional-man.jpg",
    },
    {
      name: "Sarah Johnson",
      company: "Business Solutions Co.",
      rating: 5,
      text: "Professional, efficient, and highly skilled. The developer's communication was excellent, and they always kept us updated on progress. The final product exceeded our expectations and has helped us scale our business significantly. A truly reliable partner.",
      date: "December 3, 2023",
      avatar: "/professional-woman-2.png",
    },
    {
      name: "Michael Brown",
      company: "Digital Agency",
      rating: 5,
      text: "Our experience with this developer was outstanding. Their deep knowledge of modern frameworks and problem-solving skills were impressive. They transformed our complex requirements into a user-friendly and robust application. We are thrilled with the results.",
      date: "December 20, 2023",
      avatar: "/professional-man-2.png",
    },
  ])

  return (
    <section id="reviews" className="min-h-screen py-20 px-4 light:bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold text-white light:text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-400 light:text-gray-600">Hear From Our Happy Clients</p>
          <Button
            onClick={() => setShowModal(true)}
            className="absolute top-0 right-4 md:right-0 bg-transparent hover:bg-cyan-400/10 text-cyan-400 border-2 border-cyan-400 px-6 py-6 flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
          >
            <Plus className="w-5 h-5" />
            <span className="font-bold">Write a Review</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-[#1a1f3a] light:bg-white border-cyan-500/10 p-6 space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white light:text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-400 light:text-gray-600">{review.company}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <span className="text-6xl text-cyan-400/20 absolute -top-4 -left-2">"</span>
                <p className="text-gray-300 light:text-gray-700 leading-relaxed pl-6">{review.text}</p>
              </div>
              <p className="text-sm text-gray-500 light:text-gray-500">{review.date}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-[#0a0e27] px-8">Load More</Button>
        </div>
      </div>

      <ReviewModal open={showModal} onClose={() => setShowModal(false)} onSubmit={setReviews} />
    </section>
  )
}
