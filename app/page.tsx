"use client"

import React, { useState, useEffect, useRef } from "react"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { ProjectsCarousel } from "@/components/ProjectsCarousel"
import { AboutMe } from "@/components/sections/AboutMe"
import { WorkExperience } from "@/components/sections/WorkExperience"
import { GithubActivity } from "@/components/sections/GithubActivity"
import { OpenSource } from "@/components/sections/OpenSource"

function Starfield() {
  const [stars, setStars] = useState({ layer1: "", layer2: "", layer3: "" });

  useEffect(() => {
    const generateStars = (count: number, maxSpread: number) => {
      let shadows = "";
      for (let i = 0; i < count; i++) {
        // distribute them randomly across a large vertical scrollable area (e.g. 5000px)
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * maxSpread);
        shadows += `${x}vw ${y}px #FFF${i === count - 1 ? "" : ", "}`;
      }
      return shadows;
    };

    // Layer 1: Background (tiny, numerous, dim, moving slow)
    // Layer 2: Midground (medium, fewer, normal, moving medium)
    // Layer 3: Foreground (large, sparse, bright, moving fast)
    setStars({
      // 5000 is an arbitrary large height for them to wrap around if animated.
      layer1: generateStars(400, 3000),
      layer2: generateStars(150, 3000),
      layer3: generateStars(50, 3000),
    });
  }, []);

  if (!stars.layer1) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#141414]">
      {/* 
        We use an absolute div that drifts upwards and repeats. 
        A clean way is to translateY iteratively using framer motion or CSS keyframes. 
      */}
      <style suppressHydrationWarning>{`
        @keyframes driftUp {
          from { transform: translateY(0px); }
          to { transform: translateY(-3000px); }
        }
        .star-layer {
          width: 100%;
          height: 3000px;
          position: absolute;
          top: 0; left: 0;
          animation: driftUp linear infinite;
        }
        .l1 { box-shadow: ${stars.layer1}; width: 1px; height: 1px; opacity: 0.15; animation-duration: 150s; }
        .l2 { box-shadow: ${stars.layer2}; width: 2px; height: 2px; opacity: 0.4; animation-duration: 90s; }
        .l3 { box-shadow: ${stars.layer3}; width: 3px; height: 3px; opacity: 0.8; animation-duration: 40s; }

        /* The ::after clones the starfield right below it to loop infinitely without tearing */
        .l1::after { content: " "; position: absolute; top: 3000px; width: 1px; height: 1px; box-shadow: ${stars.layer1}; }
        .l2::after { content: " "; position: absolute; top: 3000px; width: 2px; height: 2px; box-shadow: ${stars.layer2}; }
        .l3::after { content: " "; position: absolute; top: 3000px; width: 3px; height: 3px; box-shadow: ${stars.layer3}; }

        /* Dim the center of the screen to give a 3D tunnel effect */
        .vignette-center {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(20,20,20,0.8) 0%, rgba(20,20,20,0) 60%);
          z-index: 10;
        }
      `}</style>
      <div className="star-layer l1"></div>
      <div className="star-layer l2"></div>
      <div className="star-layer l3"></div>
      <div className="vignette-center pointer-events-none"></div>
    </div>
  );
}

const sections = [
  {
    id: "about-me",
    title: "about me",
    content: (props: any) => <AboutMe {...props} />
  },
  {
    id: "projects",
    title: "projects",
    content: (props: any) => <ProjectsCarousel {...props} />
  },
  {
    id: "work-experience",
    title: "work experience",
    content: (props: any) => <WorkExperience {...props} />
  },
  {
    id: "github-activity",
    title: "github activity",
    content: (props: any) => <GithubActivity {...props} />
  },
  {
    id: "open-source",
    title: "open source",
    content: (props: any) => <OpenSource {...props} />
  }
]

function MenuItem({ item, index, scrollYProgress, scrollToSection }: any) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [travelY, setTravelY] = useState(-220); // Default placeholder

  useEffect(() => {
    if (itemRef.current) {
      // Travel far enough to push this item to the top of the viewport-centred column
      const topAnchor = Math.round(window.innerHeight * 0.22);
      setTravelY(-topAnchor - itemRef.current.offsetTop);
    }
  }, []);

  const y = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      if (localV < 0.2) return (localV / 0.2) * travelY;
      if (localV > 0.8) return travelY - ((localV - 0.8) / 0.2) * travelY;
      return travelY;
    } else {
      if (localV < 0.2) return (localV / 0.2) * 50;
      if (localV > 0.8) return 50 - ((localV - 0.8) / 0.2) * 50;
      return 50;
    }
  });

  const opacity = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      return 1;
    } else {
      if (localV < 0.2) return 1 - (localV / 0.2);
      if (localV > 0.8) return (localV - 0.8) / 0.2;
      return 0;
    }
  });

  // Animate font-size instead of scale — this affects layout so text wraps naturally
  const fontSize = useTransform(scrollYProgress, (v: number) => {
    const mobile = typeof window !== "undefined" && window.innerWidth < 768;
    const basePx = mobile ? 20 : 30;   // text-xl / text-3xl
    const maxPx = mobile ? 32 : 75;   // active heading size — 32px keeps "work experience" on 1 line on mobile
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      if (localV < 0.2) return `${basePx + (localV / 0.2) * (maxPx - basePx)}px`;
      if (localV > 0.8) return `${maxPx - ((localV - 0.8) / 0.2) * (maxPx - basePx)}px`;
      return `${maxPx}px`;
    }
    return `${basePx}px`;
  });

  const chevronScale = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      if (localV < 0.2) return 1 - (localV / 0.2) * 0.4; // Shrink to 0.6x
      if (localV > 0.8) return 0.6 + ((localV - 0.8) / 0.2) * 0.4;
      return 0.6;
    }
    return 1;
  });

  return (
    <motion.div
      ref={itemRef}
      style={{ y, opacity }}
      onClick={() => scrollToSection(index)}
      className="flex items-center gap-3 md:gap-5 group cursor-pointer"
    >
      <motion.div style={{ scale: chevronScale }} className="text-[#3ba55d] shrink-0 transition-transform duration-300 group-hover:translate-x-2 origin-left">
        <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] md:w-[22px]">
          <path d="M4 4L18 19L4 34" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <motion.span
        style={{ fontSize }}
        className="font-archivo font-bold text-[#e5e5e5] group-hover:text-white transition-colors leading-tight"
      >
        {item.title}
      </motion.span>
    </motion.div>
  );
}

function SectionDescription({ content, index, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      if (localV >= 0.2 && localV <= 0.3) return (localV - 0.2) / 0.1;
      if (localV > 0.3 && localV < 0.7) return 1;
      if (localV >= 0.7 && localV <= 0.8) return 1 - ((localV - 0.7) / 0.1);
      return 0;
    }
    return 0;
  });

  const y = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      if (localV >= 0.2 && localV <= 0.3) return 30 - ((localV - 0.2) / 0.1) * 30;
      if (localV > 0.3 && localV < 0.7) return 0;
      if (localV >= 0.7 && localV <= 0.8) return ((localV - 0.7) / 0.1) * 30;
      return 30;
    }
    return 30;
  });

  const pointerEvents = useTransform(opacity, (o) => (o as number) > 0.5 ? "auto" : "none");

  return (
    <motion.div
      style={{ opacity, y, pointerEvents: pointerEvents as any }}
      className="absolute top-0 left-0 w-full"
    >
      <div className="w-full pr-4 md:pr-8">
        {content({ scrollYProgress, index })}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (localV < 0.2) return 1 - (localV / 0.2);
    if (localV > 0.8) return (localV - 0.8) / 0.2;
    return 0;
  });

  const headerY = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (localV < 0.2) return -(localV / 0.2) * 50;
    if (localV > 0.8) return -50 + ((localV - 0.8) / 0.2) * 50;
    return -50;
  });

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(Math.floor(latest / 0.2), 4);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const scrollToSection = (index: number) => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = heroHeight - viewportHeight;
      // Scroll precisely into the 'Hold' phase of the requested section
      const targetV = index * 0.2 + 0.1;
      const targetY = heroRef.current.offsetTop + (targetV * scrollableDistance);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }

  const nextSection = activeIndex < sections.length - 1 ? sections[activeIndex + 1] : null;

  return (
    <main className="text-[#e5e5e5] relative text-shadow-sm min-h-screen">
      <Starfield />

      {/* Hero Section Mega Scroll Spacer (Allows 7.5 full screen scrolls = 1500vh to slow things down) */}
      <div ref={heroRef} className="w-full h-[1500vh]">

        {/* Pinned Viewport Container */}
        <section className="sticky top-0 w-full min-h-[100dvh] relative flex items-center px-6 py-8 md:px-16 md:py-16 lg:px-24 lg:py-20 max-w-7xl mx-auto overflow-hidden">

          {/* Top Right Scroll Text */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12 flex items-start gap-2 text-neutral-400 group cursor-pointer hover:text-neutral-300 transition-colors pointer-events-none z-10">
            <div className="mt-1 opacity-70 animate-bounce">
              <svg width="12" height="28" viewBox="0 0 18 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2L9 38M9 38L2 31M9 38L16 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-[10px] md:text-xs leading-none tracking-wide flex flex-col pt-1 opacity-70">
              <span>scroll to find</span>
              <span>out about me</span>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="flex flex-col w-full max-w-3xl relative">

            {/* Header Area */}
            <motion.div
              style={{ opacity: headerOpacity, y: headerY }}
              className="flex items-start gap-5 md:gap-8 mb-16 md:mb-20"
            >
              {/* Big Green Chevron */}
              <div className="mt-3 md:mt-4 text-[#3ba55d] shrink-0">
                <svg width="45" height="75" viewBox="0 0 45 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] md:w-[45px]">
                  <path d="M5 5L38 37.5L5 70" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col">
                <h1 className="text-5xl md:text-7xl font-archivo-black tracking-tight text-[#f3f3f3] mb-2 leading-none">
                  Karman Singh
                </h1>
                <p className="text-xl md:text-xl font-archivo-black text-neutral-400 mb-6">
                  19 y/o CS undergrad
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4 md:gap-5 pl-1 mt-2 pointer-events-auto">
                  <a href="https://github.com/Karman-singh15" target="_blank" rel="noopener noreferrer" className="text-[#a68673] hover:text-[#c4a491] transition-colors">
                    <Github className="w-6 h-6 md:w-7 md:h-7" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://x.com/KarmanSingh1505" target="_blank" rel="noopener noreferrer" className="text-[#a68673] hover:text-[#c4a491] transition-colors">
                    <Twitter className="w-6 h-6 md:w-7 md:h-7" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://linkedin.com/in/karman-singh-151610217" target="_blank" rel="noopener noreferrer" className="text-[#a68673] hover:text-[#c4a491] transition-colors">
                    <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="mailto:karmansw15@gmail.com" className="text-[#a68673] hover:text-[#c4a491] transition-colors">
                    <Mail className="w-6 h-6 md:w-7 md:h-7" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Content List Items */}
            <div className="flex flex-col gap-8 md:gap-10 pl-4 md:pl-12 relative">
              {sections.map((item, i) => (
                <MenuItem
                  key={i}
                  item={item}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  scrollToSection={scrollToSection}
                />
              ))}
            </div>

            <div className="absolute top-[30%] md:top-[35%] left-8 md:left-[calc(3rem+2.5rem)] right-0 md:right-[-24rem] pointer-events-none">
              {sections.map((item, i) => (
                <SectionDescription
                  key={i}
                  index={i}
                  content={item.content}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </section>
      </div>
    </main>
  )
}
