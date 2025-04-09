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
  const fullText = "FULL STACK WEB DEVELOPER"

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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment processing, user authentication, and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      github: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "Web application that leverages machine learning to generate custom content for marketing and social media.",
      tags: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      github: "#",
    },
    {
      title: "Real-time Dashboard",
      description: "Interactive analytics dashboard with real-time data visualization and customizable widgets.",
      tags: ["Vue.js", "D3.js", "Firebase", "WebSockets"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      github: "#",
    },
  ]

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Led development of the company's flagship SaaS product, improving performance by 40% and implementing new features that increased user engagement by 25%.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Agency",
      period: "2018 - 2021",
      description:
        "Developed responsive web applications for clients across various industries, focusing on performance optimization and accessibility.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description:
        "Collaborated in an agile team to build and maintain web applications using modern JavaScript frameworks.",
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
                  <h1 className="text-3xl md:text-4xl mb-6 text-primary">&gt; HELLO_WORLD</h1>
                  <h2 className="text-xl md:text-2xl mb-6">
                    I'M <span className="text-primary">YOUR_NAME</span>
                  </h2>
                  <div className="flex items-center mb-6">
                    <span className="text-lg md:text-xl">&gt; {typedText}</span>
                    <span className="w-3 h-6 bg-primary ml-1 animate-blink"></span>
                  </div>
                  <p className="text-lg mb-8">
                    I BUILD EXCEPTIONAL DIGITAL EXPERIENCES WITH MODERN TECHNOLOGIES. SPECIALIZING IN CREATING
                    INTERACTIVE, HIGH-PERFORMANCE WEB APPLICATIONS.
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
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:your.email@example.com"
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
                <div className="inline-block border-2 border-primary px-4 py-2 mb-4">
                  <h2 className="text-2xl md:text-3xl text-primary">SKILLS.EXE</h2>
                </div>
                <p className="text-lg max-w-2xl mx-auto">
                  I'VE WORKED WITH A RANGE OF TECHNOLOGIES IN THE WEB DEVELOPMENT WORLD, FROM FRONT-END TO BACK-END AND
                  EVERYTHING IN BETWEEN.
                </p>
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
                <div className="inline-block border-2 border-primary px-4 py-2 mb-4">
                  <h2 className="text-2xl md:text-3xl text-primary">PROJECTS.DAT</h2>
                </div>
                <p className="text-lg max-w-2xl mx-auto">
                  HERE ARE SOME OF MY RECENT PROJECTS THAT SHOWCASE MY SKILLS AND EXPERTISE. EACH PROJECT REPRESENTS A
                  UNIQUE CHALLENGE AND SOLUTION.
                </p>
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
                  href="https://github.com"
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
                <div className="inline-block border-2 border-primary px-4 py-2 mb-4">
                  <h2 className="text-2xl md:text-3xl text-primary">EXPERIENCE.LOG</h2>
                </div>
                <p className="text-lg max-w-2xl mx-auto">
                  MY PROFESSIONAL JOURNEY IN WEB DEVELOPMENT, SHOWCASING MY GROWTH AND EXPERTISE.
                </p>
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
                <p className="text-sm text-primary">© {new Date().getFullYear()} YOUR_NAME. ALL RIGHTS RESERVED.</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:your.email@example.com"
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
