import type { Review } from "../types/reviews"

export const mockReviews: Review[] = [
  {
    id: "1",
    fullName: "Wisdom Ikoi",
    jobTitle: "CEO",
    company: "Next GEN",
    photoUrl: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewText: "An exceptional team member whose professionalism, dedication, and positive attitude have greatly benefited our company. Their contributions and commitment to excellence make them a valued and respected asset to our team.",
    date: "2023-12-15",
    
  },
  {
    id: "2",
    fullName: "Sarah Johnson",
    jobTitle: "Marketing Director",
    company: "TechSolutions",
    photoUrl: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewText: "Delivered outstanding results that exceeded our expectations. The attention to detail and creative approach to problem-solving made a significant impact on our project's success.",
    date: "2023-11-20",
    
  },
  {
    id: "3",
    fullName: "Michael Chen",
    jobTitle: "Product Manager",
    company: "Innovate Inc",
    photoUrl: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewText: "Working with this team has been a game-changer for our product development. Their insights and technical expertise helped us navigate complex challenges with ease.",
    date: "2023-10-05",
  
  },
]
