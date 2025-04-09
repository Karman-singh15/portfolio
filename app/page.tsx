"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingDots from "@/components/hero-scene"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [typedText, setTypedText] = useState("")
  const fullText = "tech anthusiast"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index))
      index++

      if (index > fullText.length) {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = window.scrollY / totalScroll
      setScrollProgress(currentProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "vehicle-tracking",
      description:
        "a website made just to help my mother with her work. it calculates time taken by a vehicle to reach the delivery location from its hub and return back to the nearest hub.",
      tags: ["Next.js", "tomtom API", "MongoDB", "TailwindCSS"],
      link: "https://vehicle-tracking-five.vercel.app",
      github: "https://github.com/Karman-singh15/vehicle-tracking",
    },
  ]

  const experiences = [
    {
      title: "looking summer'25 internships",
      company: "",
      period: "",
      description:
        ""
    },
    {
      title: "IEEE Comp Soc",
      company: "club@vitc",
      period: "2025 - Present",
      description:
        "In the Technical Department of IEEE club in campus"
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground flex flex-col relative">
        {/* Scanlines effect */}
        <div className="scanlines" />

        {/* Progress bar */}
        <div className="fixed top-0 left-0 h-1 bg-primary z-50" style={{ width: `${scrollProgress * 100}%` }} />

        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="relative h-screen flex items-center">
            <div className="absolute inset-0 z-0">
              <FloatingDots />
            </div>
            <div className="container mx-auto px-4 z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl"
              >
                <div className="border-2 border-primary p-6 bg-background/80 backdrop-blur-sm">
                  <h1 className="text-3xl md:text-4xl mb-6 text-primary">&gt; hello,world!</h1>
                  <h2 className="text-xl md:text-2xl mb-6">
                    i'm <span className="text-primary">Karman Singh</span>
                  </h2>
                  <div className="flex items-center mb-6">
                    <span className="text-lg md:text-xl">&gt; {typedText}</span>
                    <span className="w-3 h-6 bg-primary ml-1 animate-blink"></span>
                  </div>
                  <p className="text-lg mb-8">
                    i like to solve problems and build cool stuff. in my free time i mostly procrastinate.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() =>
                        window.scrollTo({
                          top: document.getElementById("projects")?.offsetTop || 0,
                          behavior: "smooth",
                        })
                      }
                      className="retro-button"
                    >
                      VIEW_WORK
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-8">
                    <a
                      href="https://github.com/Karman-singh15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://x.com/KarmanSingh1505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/karman-singh-151610217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:karmansw15@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <button
                onClick={() =>
                  window.scrollTo({ top: document.getElementById("skills")?.offsetTop || 0, behavior: "smooth" })
                }
                aria-label="Scroll to skills section"
              >
                <ChevronDown className="h-8 w-8 text-primary" />
              </button>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 border-y-2 border-primary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <div className="inline-block px-4 py-2 mb-4">
                  <h2 className="text-2xl md:text-3xl text-primary">skills.exe</h2>
                </div>
              </motion.div>

              <SkillsSection />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <div className="inline-block px-4 py-2 mb-4">
                  <h2 className="text-2xl md:text-3xl text-primary">projects.dat</h2>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://github.com/Karman-Singh15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button inline-flex items-center"
                >
                  VIEW_ALL_PROJECTS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 border-y-2 border-primary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <div className="inline-block px-4 py-2 mb-4">
                  <h2 className="text-2xl md:text-3xl text-primary">experience.log</h2>
                </div>
              </motion.div>

              <ExperienceTimeline experiences={experiences} />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t-2 border-primary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-primary">© {new Date().getFullYear()} Karman Singh. ALL RIGHTS RESERVED.</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/Karman-singh15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://x.com/karmansingh1505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com/in/karman-singh-151610217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:karmansw15@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}