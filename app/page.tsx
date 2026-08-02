"use client"

import React from "react"
import { Github, Twitter, Linkedin, Mail, FileText } from "lucide-react"
import { CursorHalo } from "@/components/CursorHalo"
import { SectionHeading } from "@/components/SectionHeading"
import { Footer } from "@/components/Footer"
import { ProjectsCarousel } from "@/components/ProjectsCarousel"
import { AboutMe } from "@/components/sections/AboutMe"
import { WorkExperience } from "@/components/sections/WorkExperience"
import { GithubActivity } from "@/components/sections/GithubActivity"
import { OpenSource } from "@/components/sections/OpenSource"

export default function Portfolio() {
  return (
    <>
      <CursorHalo />
      <main className="relative z-10 min-h-screen font-archivo">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-8 text-left">
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-archivo-black font-bold text-[#F3F3F3] tracking-tight mb-2">
              Karman Singh
            </h1>
            <p className="text-sm sm:text-base text-[#888] mb-6">20 y/o CS undergrad</p>
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#E8753A] transition-colors flex items-center gap-1.5"
                title="Resume"
              >
                <FileText className="w-4 h-4" />
                <span className="text-xs font-archivo font-medium">Resume</span>
              </a>
              <a
                href="https://github.com/Karman-singh15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#E8753A] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/KarmanSingh1505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#E8753A] transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/karmansingh15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#E8753A] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:karmanwork15@gmail.com"
                className="text-[#666] hover:text-[#E8753A] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </header>

          <section id="about-me" className="py-14 sm:py-16">
            <SectionHeading>about me</SectionHeading>
            <AboutMe />
          </section>

          <section id="projects" className="py-14 sm:py-16">
            <SectionHeading>projects</SectionHeading>
            <ProjectsCarousel />
          </section>

          <section id="work-experience" className="py-14 sm:py-16">
            <SectionHeading>work experience</SectionHeading>
            <WorkExperience />
          </section>

          <section id="github-activity" className="py-14 sm:py-16">
            <SectionHeading>github activity</SectionHeading>
            <GithubActivity />
          </section>

          <section id="open-source" className="py-14 sm:py-16">
            <SectionHeading>open source</SectionHeading>
            <OpenSource />
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
