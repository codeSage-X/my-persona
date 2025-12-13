"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative z-50 md:hidden">
      <button onClick={toggleMenu} className="text-white p-2" aria-label="Toggle menu">
        <Menu size={32} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#0a1622] z-50 flex flex-col text-white">
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} className="text-white p-2" aria-label="Close menu">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1">
            <ul className="space-y-8 text-2xl">
              <li>
                <Link href="/" className="hover:text-[#00ff9d] transition-colors" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#00ff9d] transition-colors" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#00ff9d] transition-colors" onClick={toggleMenu}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-[#00ff9d] transition-colors" onClick={toggleMenu}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="#testimonial" className="hover:text-[#00ff9d] transition-colors" onClick={toggleMenu}>
                  Testimonial
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
