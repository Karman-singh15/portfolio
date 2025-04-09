"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Settings, Smartphone, BrainCircuit, SquareDashedBottomCode } from "lucide-react"

const skills = [
  {
    category: "web dev",
    icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
    items: ["React", "Next.js", "MongoDB", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Firebase", "Node.js", "Express",],
  },
  {
    category: "ai ml",
    icon: <BrainCircuit className="h-8 w-8 mb-4 text-primary" />,
    items: ["Python", "PyTorch", "TensorFlow", "Fast APIs"],
  },
  {
    category: "languages",
    icon: <SquareDashedBottomCode className="h-8 w-8 mb-4 text-primary" />,
    items: ["Python", "C", "C++"],
  },
  {
    category: "other",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    items: ["Git", "GitHub", "Figma", "Vercel"],
  },
]

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-2 border-primary p-6 hover:bg-primary/5 transition-colors"
        >
          <div className="text-center mb-4">
            {skill.icon}
            <h3 className="text-xl font-mono text-primary">{skill.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className="px-3 py-1 border border-primary text-primary rounded-none text-sm font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
