"use client"

import React from "react"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#141414] text-[#e5e5e5] p-3 md:p-6 flex flex-col justify-center items-center relative overflow-hidden">

      {/* Outer Container */}
      <div className="w-full max-w-7xl h-full min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-3rem)] relative flex items-center p-8 md:p-20 lg:p-32">

        {/* Top Right Scroll Text */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 flex items-start gap-2 text-neutral-400 group cursor-pointer hover:text-neutral-300 transition-colors">
          <div className="mt-1 opacity-70 group-hover:opacity-100 transition-opacity animate-bounce">
            <svg width="12" height="28" viewBox="0 0 18 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L9 38M9 38L2 31M9 38L16 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-[10px] md:text-xs leading-none tracking-wide flex flex-col pt-1">
            <span>scroll to find</span>
            <span>out about me</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col w-full max-w-2xl mx-auto md:ml-32">

          {/* Header Row */}
          <div className="flex items-start gap-5 md:gap-8 mb-16 md:mb-20">
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
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-8 md:gap-10 pl-6 md:pl-16">
            {[
              "about me",
              "projects",
              "work experience",
              "github activity",
              "open source"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 md:gap-7 group cursor-pointer w-max">
                <div className="text-[#3ba55d] shrink-0 transition-transform duration-300 group-hover:translate-x-2">
                  <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] md:w-[22px]">
                    <path d="M4 4L18 19L4 34" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xl md:text-3xl font-archivo font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}
