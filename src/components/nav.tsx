import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="p-8 hidden md:block lg:block text-white">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="#home" className="hover:text-[#00ff9d] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-[#00ff9d] transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:text-[#00ff9d] transition-colors">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#events" className="hover:text-[#00ff9d] transition-colors">
            Events
          </Link>
        </li>
        <li>
          <Link href="#testimonial" className="hover:text-[#00ff9d] transition-colors">
            Testimonial
          </Link>
        </li>
      </ul>
    </nav>
  )
}
