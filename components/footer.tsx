"use client"

import { Mail, Phone, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Get In Touch</h3>
            <p className="text-gray-400 text-sm">Let's build something amazing together</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:alex.chen@example.com"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">alex.chen@example.com</span>
            </a>

            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+1 (234) 567-890</span>
            </a>

            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://instagram.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyan-500/10 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
