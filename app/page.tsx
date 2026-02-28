"use client"

import React, { useState, useEffect, useRef } from "react"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion"

const sections = [
  {
    id: "about-me",
    title: "about me",
    content: "Hi, I'm Karman. I love building things for the web and figuring out how complex systems work. In my free time I mostly procrastinate."
  },
  {
    id: "projects",
    title: "projects",
    content: "A collection of my recent work including a vehicle tracking system to help my mom with her deliveries, using Next.js and the TomTom API."
  },
  {
    id: "work-experience",
    title: "work experience",
    content: "Member of the Technical Department at IEEE Comp Soc (2025 - Present). Currently looking for Summer '25 internships!"
  },
  {
    id: "github-activity",
    title: "github activity",
    content: "Check out my latest commits, PRs, and libraries I contribute to over on my GitHub profile."
  },
  {
    id: "open-source",
    title: "open source",
    content: "I strongly believe in open source software. Here's a look at some of the popular repositories I've helped improve."
  }
]

function MenuItem({ item, index, scrollYProgress, scrollToSection }: any) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [travelY, setTravelY] = useState(-220); // Default placeholder

  useEffect(() => {
    if (itemRef.current) {
      // Travel far enough to reach the -220px mark relative to the container, from wherever this item is naturally rendered
      setTravelY(-220 - itemRef.current.offsetTop);
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

  const scale = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      if (localV < 0.2) return 1 + (localV / 0.2) * 1.5;
      if (localV > 0.8) return 2.5 - ((localV - 0.8) / 0.2) * 1.5;
      return 2.5;
    }
    return 1;
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

  // Dynamically shift the Title to the left when scaled to close the massive gap
  // At 2.5x scale, shifting -25 locally moves it -62.5px visually, placing it exactly at the 72px offset where the description text waits.
  const titleX = useTransform(scrollYProgress, (v: number) => {
    const i = Math.min(Math.floor(v / 0.2), 4);
    const localV = (v - i * 0.2) / 0.2;
    if (i === index) {
      if (localV < 0.2) return -(localV / 0.2) * 25;
      if (localV > 0.8) return -25 + ((localV - 0.8) / 0.2) * 25;
      return -25;
    }
    return 0;
  });

  return (
    <motion.div
      ref={itemRef}
      style={{ y, scale, opacity, transformOrigin: "left top" }}
      onClick={() => scrollToSection(index)}
      className="flex items-center gap-5 md:gap-8 group cursor-pointer w-max"
    >
      <motion.div style={{ scale: chevronScale }} className="text-[#3ba55d] shrink-0 transition-transform duration-300 group-hover:translate-x-2 origin-left">
        <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] md:w-[22px]">
          <path d="M4 4L18 19L4 34" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <motion.span style={{ x: titleX }} className="text-xl md:text-3xl font-archivo font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
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
      {/* 
        Alignment calculation update (per user mockup):
        User wants the text aligned roughly with the gap between the chevron and the text, rather than the text itself.
        Chevron container width when scaled = ~55px.
        Setting padding to 72px aligns it just past the chevron in the empty space.
      */}
      <p className="text-lg md:text-xl font-archivo text-neutral-400 leading-relaxed pr-8 pl-12 md:pl-[72px]">
        {content}
      </p>
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
    <main className="bg-[#141414] text-[#e5e5e5] relative">

      {/* Hero Section Mega Scroll Spacer (Allows 7.5 full screen scrolls = 1500vh to slow things down) */}
      <div ref={heroRef} className="w-full h-[1500vh]">

        {/* Pinned Viewport Container */}
        <section className="sticky top-0 w-full min-h-[100dvh] relative flex items-center p-8 md:p-20 lg:p-32 max-w-7xl mx-auto overflow-hidden">

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
          <div className="flex flex-col w-full max-w-2xl mx-auto md:ml-32 relative">

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
                <p className="text-xl md:text-2xl font-archivo-black text-neutral-400 mb-6">
                  19 y/o cs undergrad
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
            <div className="flex flex-col gap-8 md:gap-10 pl-6 md:pl-16 relative">
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

            {/* Absolute Description Text Layer */}
            {/* The active list item moves -220px Up relative to its container.
                This block aligns perfectly underneath that resting spot. */}
            <div className="absolute top-[120px] md:top-[180px] left-6 md:left-16 w-[250%] md:w-[150%] max-w-xl pointer-events-none">
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

      {/* Global Fixed Peeking Next Topic */}
      <AnimatePresence mode="wait">
        {nextSection && (
          <motion.div
            key={nextSection.id}
            onClick={() => scrollToSection(activeIndex + 1)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-12 md:bottom-20 left-8 md:left-[5.5rem] lg:left-[8.5rem] flex flex-col gap-2 cursor-pointer group origin-left z-50 text-left"
          >
            <p className="text-[10px] md:text-xs font-archivo text-neutral-500 mb-1 ml-1 opacity-70 tracking-widest uppercase text-left">
              up next
            </p>
            <div className="flex items-center gap-4 md:gap-5 w-max">
              <div className="text-[#3ba55d] shrink-0 transition-transform duration-300 group-hover:translate-y-1">
                <svg width="18" height="42" viewBox="0 0 18 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10px] md:w-[14px]">
                  <path d="M9 2L9 38M9 38L2 31M9 38L16 31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-lg md:text-2xl font-archivo font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
                {nextSection.title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
