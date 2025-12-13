"use client"
import Image from "next/image"
import SkillIcon from "../../../components/skill-icon"
import { Download, MessageSquare, Rocket } from "lucide-react"
import myPhoto from "../../../assets/my-photo.png"
import html from "../../../assets/html.png"
import css from "../../../assets/css.png"
import js from "../../../assets/js.png"
import react from "../../../assets/react.png"
import three from "../../../assets/three.png"
import angular from "../../../assets/angular.png"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AboutPage() {
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: 2,
      repeat: -1,
      yoyo: true,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <main className="bg-[url('../assets/bg.jpg')] bg-center bg-cover min-h-screen bg-[#0a1622] text-white relative overflow-hidden">
    

   
    <div className=" container mx-auto px-4 md:px-6 pt-8 pb-10 mb-2">
          <h2 className="text-xl font-medium opacity-90">About me -</h2>

          <div className="flex items-center gap-4 mt-2">
            <h1 className="text-5xl md:text-6xl font-bold text-pink-300">My Persona </h1>
            <Rocket className="w-12 h-12 text-white" />
          </div>
        </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 pt-8 pb-20 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 bg-grey-50 rounded-xl">
          {/* Left column - Photo (stacked on mobile, side by side on desktop) */}
          <div className=" w-full md:w-2/5 flex justify-center md:justify-start bg-[#001620] border-white border-2 rounded-xl  ">
         
              <Image
                src={myPhoto}
                alt="Profile"
                width={400}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
          
          </div>

          {/* Right column - Content */}
          <div className="w-full md:w-3/5">
            {/* Hello heading with gradient */}
            <h1 className="text-6xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-[#00ff9d] to-[#ff00c8] text-transparent bg-clip-text">
              Hello!
            </h1>

            {/* Bio paragraphs */}
            <div className="space-y-6 mb-8">
              <p className="text-lg">
                My name is Wisdom John, and I am a Front-end Developer. I specialize in building creative websites, web
                applications, mobile apps, and rich media ads.
              </p>
              <p className="text-lg">
                I am passionate about creating 3D and 2D websites, including web games. I also excel in API integration
                for both mobile and web-based apps. Additionally, I love visual illustration and storytelling.
              </p>
              <p className="text-lg">Hope you enjoy my portfolio!</p>
            </div>

            {/* Download CV button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1OJqE_yb4u-SKA-pWCz2e5scpqzo_1LsD"
              className="inline-flex items-center gap-2 bg-[#0a1622] border border-[#00ff9d] text-white px-6 py-3 rounded-lg hover:bg-[#00ff9d]/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div ref={iconRef}>
                <Download size={20} />
              </div>
              Download CV
            </a>


            {/* Contact information */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/+2347048529285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#00ff9d]"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full">
                  <MessageSquare size={14} />
                </span>
                +2347048529285
              </a>
              <a
                href="mailto:wisdomjohnikai@gmail.com"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#00ff9d]"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full">@</span>
                wisdomjohnikai@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/wisdom-john-ikoi-xenxei46/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#00ff9d]"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full">in</span>
                wisdom
              </a>
            </div>
          </div>
        </div>

        {/* Skills and Experience section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00ff9d] to-[#ff00c8] text-transparent bg-clip-text">My Skills</h2>
            <div className="grid grid-cols-3 gap-4">
              <SkillIcon name="HTML5" icon={html} />
              <SkillIcon name="CSS3" icon={css} />
              <SkillIcon name="JavaScript" icon={js} />
              <SkillIcon name="React" icon={react}/>
              <SkillIcon name="Angular" icon={angular} />
              <SkillIcon name="Three.js" icon={three} />
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00ff9d] to-[#ff00c8] text-transparent bg-clip-text">Experience</h2>
            <div className="space-y-6">
              <div className="experience-item">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">2019 - 2022</h3>
                </div>
                <p className="text-lg">Web Developer - Freelancer</p>
              </div>
              <div className="experience-item">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">2022 - 2023</h3>
                </div>
                <p className="text-lg">Junior Front-end Developer - CAD Consulting Limited, Nigeria</p>
              </div>
              <div className="experience-item">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">2023 - 2024</h3>
                </div>
                <p className="text-lg">Front-end Developer - Vroom ng</p>
              </div>
              <div className="experience-item">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">2024 - Present</h3>
                </div>
                <p className="text-lg">Front-end Rich Media Developer - Eskimi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ankara h-[5vh] w-full"></div> */}
    </main>
  )
}
