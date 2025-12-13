"use client";

import { ExternalLink, Github, Rocket } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioShowcase() {
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const counterEl = counterRef.current;
    const counterObj = { count: 0 };

    if (counterEl) {
      gsap.to(counterObj, {
        count: 100,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: counterEl,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          counterEl.textContent = Math.floor(counterObj.count).toString();
        },
      });
    }
  }, []);

  const projects = [
    {
      title: "Mently Web App",
      tech: "Next Js / Tailwind css",
      link: "https://www.mymently.com/",
      github: "https://github.com/codeSage-X",
    },
    {
      title: "3D Car Sim",
      tech: "Html/Css Js/Gsap Three.js",
      link: "https://3dcarsimulator.netlify.app/",
      github: "https://github.com/codeSage-X",
    },
    {
      title: "Andy Website",
      tech: "Html/Css Js/Gsap",
      link: "https://www.andyisback.com/",
      github: "https://github.com/codeSage-X",
    },

    {
      title: "2D Shooting Game",
      tech: "Html/Css Js/Gsap",
      link: "https://shootergame2d.netlify.app/",
      github: "https://github.com/codeSage-X",
    },
    {
      title: "GME on Solana Web3 Website",
      tech: "Next Js / Tailwind css / Solana Web3",
      link: "https://www.gme2onsol.com/",
      github: "https://github.com/codeSage-X",
    },
    {
      title: "Tensei Website",
      tech: "Html/Css Js/Gsap Three.js",
      link: "https://www.abstracttensei.com/",
      github: "https://github.com/codeSage-X",
    },
    {
      title: "MetroCare AI",
      tech: "Next.js/Deep Seek AI Model / Tailwind CSS",
      link: "https://metro-care-red.vercel.app/",
      github: "https://github.com/codeSage-X",
    }

  ];

  return (
    <div className="bg-[url('../assets/bg.jpg')] bg-center bg-cover min-h-screen text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-medium opacity-90">Featured Projects -</h2>
          <div className="flex items-center gap-4 mt-2">
            <h1 className="text-5xl md:text-6xl font-bold text-pink-300">Stuff I Worked On</h1>
            <Rocket className="w-12 h-12 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tech={project.tech}
              link={project.link}
              github={project.github}
            />
          ))}

          <div className="aspect-square rounded-lg bg-gray-950 flex flex-col justify-center items-center text-center p-6">
            <div className="text-6xl font-bold text-white">
              <span ref={counterRef}>0</span>
              <span className="text-pink-300">+</span>
            </div>
            <div className="text-lg font-medium mt-2">
              COMPLETED
              <br />
              PROJECTS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  tech,
  link,
  github,
}: {
  title: string;
  tech: string;
  link: string;
  github: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="cursor-pointer relative aspect-square rounded-lg overflow-hidden transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full h-full p-6 flex flex-col justify-between transition-all duration-300 ${
          isHovered
            ? "bg-gray-900"
            : "bg-gradient-to-b from-pink-400 via-purple-300 to-emerald-300"
        }`}
      >
        <div className="flex justify-end gap-2 z-10 relative">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-90">{tech}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
