"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"



export default function ProjectCard({ project }: { project: { title: string; description: string; tags: string[]; github: string; link: string } }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="border-2 border-primary overflow-hidden h-full flex flex-col transition-all duration-300 bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={project.title} className="flex-grow"><div className="flex-grow p-6">
        <h2 className="text-xl font-mono text-primary mb-2">"{project.title}"</h2>
        <p className="text-foreground mb-4 font-mono flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag:string, index:number) => (
            <span key={index} className="px-2 py-1 border border-primary text-primary text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div></a>

      <div className="p-6 pt-2 flex justify-between gap-4 border-t border-primary">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-primary px-4 py-2 text-primary hover:bg-primary hover:text-background transition-colors font-mono"
        >
          <Github className="h-4 w-4" />
          CODE
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-primary px-4 py-2 bg-primary text-background hover:bg-transparent hover:text-primary transition-colors font-mono"
        >
          DEMO
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
