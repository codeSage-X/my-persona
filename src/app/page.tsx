"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronUp } from "lucide-react";
import MobileMenu from "@/components/mobile-menu";
import NavBar from "../components/nav";
import AnimatedProfile from "../components/animated-profile";
import AboutPage from "./pages/about/page";
import PortfolioShowcase from "../app/pages/my-skills/page";
import EventsGallery from "@/components/events-gallery";
import { TestimonialSection } from "@/components/testimonial-section";
import EventsGallery2 from "@/components/events-gallery2";

export default function Home() {
  const backToTopRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showButton, setShowButton] = useState(false);

  // Animation refs for intro text
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    // GSAP intro animation for text
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(line1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
      .fromTo(line2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(line3Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setShowButton(true);
        gsap.to(backToTopRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      } else {
        setShowButton(false);
        gsap.to(backToTopRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="home relative">
      <div className="header h-[100vh] w-full">
        {/* Desktop profile image */}
        <div className="w-32 h-32 hidden md:block mb-16 absolute mt-10 ml-15">
          <AnimatedProfile alt="Profile" className="w-full h-full" />
        </div>

        {/* Desktop Navigation */}
        <NavBar />

        {/* Mobile Navigation */}
        <MobileMenu />

        {/* Mobile Content */}
        <section className="md:hidden text-white w-full flex flex-col h-[80%] justify-center items-center">
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-1/2 flex flex-col justify-end items-center pb-8">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <AnimatedProfile alt="Profile" className="w-full h-full" />
              </div>
            </div>
            <div className="w-full h-1/5 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold text-center">Creative Front-end</h2>
              <h1 className="text-6xl font-extrabold tracking-tighter my-2 text-center">
                DEVELOPER
              </h1>
              <p className="text-lg text-center">
                {/* Based in Port Harcourt, Nigeria */}
                </p>
            </div>
          </div>
        </section>

        {/* Desktop Content */}
        <section className="hidden md:block text-white w-full h-[80%]">
          <div className="flex flex-col w-full h-full items-center justify-center overflow-hidden">
            <h2 ref={line1Ref} className="md:text-3xl font-bold opacity-0">
              Creative Front-end
            </h2>
            <h1
              ref={line2Ref}
              className="text-8xl font-extrabold tracking-tighter my-4 opacity-0"
            >
              DEVELOPER
            </h1>
            <p ref={line3Ref} className="text-xl opacity-0">
              {/* Based in Port Harcourt, Nigeria */}
            </p>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div id="about">
        <AboutPage />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <PortfolioShowcase />
      </div>

      {/* Events Section */}
      <div id="events">
        <div className="hidden lg:block">
          <EventsGallery />
        </div>
        <div className="block lg:hidden">
          <EventsGallery2 />
        </div>
      </div>

      {/* Testimonial Section */}
      <div id="testimonial">
        <TestimonialSection />
      </div>

      {/* Back to Top Button */}
      <button
        ref={backToTopRef}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#00ff9d] text-black shadow-lg transition-all"
        style={{ transform: "translateY(100px)", opacity: 0 }}
        aria-label="Back to Top"
      >
        <ChevronUp size={24} />
      </button>
    </main>
  );
}
