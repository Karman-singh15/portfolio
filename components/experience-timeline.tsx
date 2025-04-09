"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="max-w-3xl mx-auto">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative pl-8 pb-12 last:pb-0"
        >
          {/* Timeline line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-[15px] top-[30px] bottom-0 w-[2px] bg-primary" />
          )}

          {/* Timeline dot */}
          <div className="absolute left-0 top-1 bg-background p-2 border-2 border-primary">
            <Briefcase className="h-4 w-4 text-primary" />
          </div>

          <div className="border-2 border-primary p-6 bg-background">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-xl font-mono text-primary">{experience.title.toUpperCase()}</h3>
              <span className="text-sm font-mono text-primary">{experience.period}</span>
            </div>
            <p className="text-foreground mb-4 font-mono">{experience.company}</p>
            <p className="font-mono">{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
