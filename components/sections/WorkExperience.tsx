import React from "react"

const experiences = [
   {
    company: "Grus & Grade Pvt. Ltd.",
    duration: "June 2026 - Present",
    description:
      "Building a end to end product for companies to calculate the most optimised mixture of compounds and the cost to extract the necessary chemicals",
  },
  {
    company: "FLSmidth",
    duration: "Feb 2026 - March 2026",
    description:
      "Built an efficient algorithm that removes noise from scans of the mills where my algorithms brought down error from 150% to 10%.",
  },
  {
    company: "IEEE Computer Society",
    duration: "Jan 2025 - Present",
    description:
      "Member of the Technical Department, contributing to software projects and technical initiatives.",
  },
]

export function WorkExperience() {
  return (
    <div className="text-left max-w-md">
      {experiences.map((exp, i) => (
        <div key={i} className="flex gap-5 group">
          <div className="flex flex-col items-center shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#333] group-hover:bg-[#E8753A] ring-4 ring-[#0F0F0F] shrink-0 mt-1.5 transition-colors duration-300" />
            {i < experiences.length - 1 && (
              <div className="w-px bg-[#2A2A2A] grow mt-2 min-h-[60px]" />
            )}
          </div>
          <div className="pb-10">
            <h3 className="text-base font-archivo font-bold text-[#F3F3F3] mb-0.5">
              {exp.company}
            </h3>
            <time className="block text-xs text-[#666] mb-2">{exp.duration}</time>
            <p className="text-sm text-[#888] leading-relaxed">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
