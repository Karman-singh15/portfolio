"use client"

import React from "react"
import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    id: 1,
    title: "desktop assistant",
    description:
      "a desktop search feature which can help you browse through your files, folder, help you search on google, stackoverflow, yt and gemini with simple commands",
    githubLink: "https://github.com/Karman-singh15/desktop-assistant",
    liveLink: "https://x.com/KarmanSingh1505/status/1928883025594490939",
  },
  {
    id: 2,
    title: "explainer ai",
    description:
      "a extension where if you ask a doubt to the llm it summarizes the answer there instead of making a new chat so you can keep the explainations at one place rather than scrollin back and forth",
    githubLink: "https://github.com/Karman-singh15/explainer-ai",
    liveLink: "",
  },
  {
    id: 3,
    title: "bot arena",
    description:
      "Built a multi-agent trading simulator combining behavioral modeling and machine learning to analyze how economic background affects financial decisions.",
    githubLink: "https://github.com/Karman-singh15/bot-arena",
    liveLink: "",
  }
]

export function ProjectsCarousel() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} {...p} index={i + 1} />
        ))}
      </div>
      <a
        href="https://github.com/Karman-singh15"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-xs text-[#666] hover:text-[#E8753A] transition-colors"
      >
        view all on github →
      </a>
    </div>
  )
}
