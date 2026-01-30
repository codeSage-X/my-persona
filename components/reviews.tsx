"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Star, Linkedin } from "lucide-react" // Use Linkedin icon
import { ReviewModal } from "@/components/review-modal"

const PAGE_SIZE = 4

// Mock reviews data
let MOCK_REVIEWS: any[] = [
  {
    id: 1,
    name: "Marta Jurkšaitienė",
    company: "Director, Global Client Success and Operations @ Eskimi",
    avatar: "/marta.png",
    rating: 5,
    text: "Had the pleasure of working with Wisdom in our Creative Studio, where he contributed to developing our rich media banners. He quickly became a reliable team member, proactive, curious, and always eager to learn. Wisdom brought great energy to every project, adapted fast to feedback, and delivered on time. He showed interest in AI and had several innovative projects using the skills. A promising developer with a bright future ahead!",
    socials: {
      linkedin: "https://www.linkedin.com/in/martajurksaitiene/",
    },
  },
  {
    id: 2,
    name: "Babajide Awodire",
    company: "Android Developer",
    avatar: "/jide.png",
    rating: 4,
    text: "I had the pleasure of working with Wisdom at Vroom NG, where we collaborated on building a ride-hailing solution. Wisdom handled the web development side of things, and his technical skill, creativity, and attention to detail stood out from day one. He consistently delivered high-quality work, communicated effectively, and approached every challenge with a positive and solution-oriented mindset. Working with him made the entire development process smoother and more efficient. Wisdom is not only a talented developer but also a great team player who understands how to bring ideas to life. I strongly recommend him for any opportunity that values innovation, collaboration, and solid technical expertise.",
    socials: {
      linkedin: "https://www.linkedin.com/in/babajide-awodire-927b6215b/",
    },
  },
  {
    id: 3,
    name: "Chibuzo Madumere",
    company: "Front-end Rich Media Developer @ Eskimi",
    avatar: "/venaz.png",
    rating: 5,
    text: "I worked with Wisdom as a teammate and highly recommend him. He is a strong fullstack web and mobile developer with excellent problem solving skills, fast delivery, and a high level of reliability. He communicates clearly, takes ownership of his tasks, and is a pleasure to work with. A great asset to any team.",
    socials: {
      linkedin: "https://www.linkedin.com/in/babajide-awodire-927b6215b/",
    },
  },
  {
    id: 4,
    name: "Kasper Apsega",
    company: "Creative Project Manager @ Eskimi",
    avatar: "/kas.png",
    rating: 5,
    text: "What stands out most about Wisdom is his attitude and determination. He works incredibly hard to improve his coding skills and never backs down from a tough problem. He is a resilient professional who brings 100% effort to the table every day. Was an absolute pleasure to have him on the team! ",
    socials: {
      linkedin: "https://www.linkedin.com/in/kasper-apsega-417196228/",
    },
  },
]

export function Reviews() {
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)

  const totalPages = Math.ceil(MOCK_REVIEWS.length / PAGE_SIZE)

  const fetchReviews = (page: number) => {
    setLoading(true)
    const start = page * PAGE_SIZE
    const end = start + PAGE_SIZE
    const pageData = MOCK_REVIEWS.slice(start, end)
    setReviews(pageData)
    setLoading(false)
  }

  useEffect(() => {
    fetchReviews(pageIndex)
  }, [pageIndex])

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold text-white">
                Reviews From People I’ve Worked With
              </h2>
              <p className="text-gray-400 mt-2">
                Real feedback from people I’ve worked with
              </p>
            </div>
          </div>
        </div>

        {/* Spinner */}
        {loading && (
          <div className="flex justify-center py-24">
            <div className="h-10 w-10 animate-spin border-4 border-cyan-400 border-t-transparent rounded-full" />
          </div>
        )}

        {/* Empty */}
        {!loading && reviews.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            No reviews yet
          </div>
        )}

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map(r => (
            <Card key={r.id} className="bg-[#1a1f3a] p-6">
              <div className="flex gap-4">
                <img
                  src={r.avatar}
                  className="w-14 h-14 rounded-full border border-cyan-400"
                />
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold">{r.name}</h3>
                    {r.socials?.linkedin && (
                      <a
                        href={r.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{r.company}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mt-4">{r.text}</p>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-10">
          <Button
            disabled={pageIndex === 0}
            onClick={() => setPageIndex(p => p - 1)}
            variant="outline"
          >
            Previous
          </Button>

          <Button
            disabled={pageIndex + 1 >= totalPages}
            onClick={() => setPageIndex(p => p + 1)}
            className="bg-cyan-400 text-[#0a0e27]"
          >
            Next
          </Button>
        </div>
      </div>

      <ReviewModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onOptimisticAdd={(r) => setReviews(prev => [r, ...prev])}
      />
    </section>
  )
}
