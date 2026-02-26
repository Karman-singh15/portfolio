"use client"

import React, { useState, useEffect } from "react"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);

    sections.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = sections.findIndex(s => s.id === activeSection);
  const nextSection = activeIndex >= 0 && activeIndex < sections.length - 1 ? sections[activeIndex + 1] : null;

  return (
    <main className="bg-[#141414] text-[#e5e5e5] relative">

      {/* Hero Section */}
      <section id="hero" className="w-full min-h-[100dvh] relative flex items-center p-8 md:p-20 lg:p-32 max-w-7xl mx-auto">

        {/* Top Right Scroll Text */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 flex items-start gap-2 text-neutral-400 group cursor-pointer hover:text-neutral-300 transition-colors pointer-events-none">
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

        {/* Main Content Area */}
        <div className="flex flex-col w-full max-w-2xl mx-auto md:ml-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              <div className="flex items-center gap-4 md:gap-5 pl-1 mt-2">
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

          {/* Menu Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8 md:gap-10 pl-6 md:pl-16"
          >
            {sections.map((item, i) => (
              <div
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-5 md:gap-7 group cursor-pointer w-max"
              >
                <div className="text-[#3ba55d] shrink-0 transition-transform duration-300 group-hover:translate-x-2">
                  <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] md:w-[22px]">
                    <path d="M4 4L18 19L4 34" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xl md:text-3xl font-archivo font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Dynamic Content Sections */}
      <div className="w-full flex flex-col pb-40">
        {sections.map((section, index) => {
          const nextSection = sections[index + 1];
          return (
            <section
              key={section.id}
              id={section.id}
              className="w-full min-h-[100dvh] max-w-7xl mx-auto flex flex-col justify-center px-8 md:px-20 lg:px-32 relative"
            >
              <div className="flex flex-col w-full max-w-2xl mx-auto md:ml-32">

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 80 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-start gap-5 md:gap-8 min-h-[300px]"
                >
                  {/* Big Green Chevron for Section Headings */}
                  <div className="mt-2 md:mt-3 text-[#3ba55d] shrink-0">
                    <svg width="45" height="75" viewBox="0 0 45 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] md:w-[45px]">
                      <path d="M5 5L38 37.5L5 70" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    {/* Section Title behaving like the main header */}
                    <h2 className="text-5xl md:text-7xl font-archivo-black tracking-tight text-[#f3f3f3] mb-8 leading-none">
                      {section.title}
                    </h2>

                    {/* Sample Text */}
                    <div className="text-lg md:text-xl font-archivo text-neutral-400 leading-relaxed max-w-xl pl-2">
                      <p>{section.content}</p>
                    </div>
                  </div>
                </motion.div>

              </div>

            </section>
          )
        })}
      </div>

      {/* Global Fixed Peeking Next Topic */}
      <AnimatePresence mode="wait">
        {nextSection && (
          <motion.div
            key={nextSection.id}
            onClick={() => scrollToSection(nextSection.id)}
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
