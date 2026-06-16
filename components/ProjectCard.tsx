import React from "react"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description?: string
  githubLink?: string
  liveLink?: string
  index?: number
}

export function ProjectCard({ title, description, githubLink, liveLink, index }: ProjectCardProps) {
  const link = liveLink || githubLink

  return (
    <div className="relative w-full rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-5 sm:p-6 flex flex-col text-left overflow-hidden group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base sm:text-lg font-archivo font-bold text-[#F3F3F3] leading-snug">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[#E8753A] hover:scale-110 transition-transform"
          >
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            <span className="sr-only">View project</span>
          </a>
        )}
      </div>

      {description && (
        <p className="text-sm text-[#888] leading-relaxed relative z-10">{description}</p>
      )}

      {index !== undefined && (
        <span
          className="absolute bottom-1 right-3 text-[80px] font-archivo-black font-bold text-[#222] leading-none select-none pointer-events-none"
          aria-hidden
        >
          {index}
        </span>
      )}
    </div>
  )
}
