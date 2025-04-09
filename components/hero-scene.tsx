"use client"

import { useEffect, useRef } from "react"

export default function FloatingDots() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Clear any existing dots
    container.innerHTML = ""

    // Create dots
    const dotCount = 150
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div")
      dot.className = "floating-dot"

      // Random position
      const x = Math.random() * containerWidth
      const y = Math.random() * containerHeight
      dot.style.left = `${x}px`
      dot.style.top = `${y}px`

      // Random size (1-4px)
      const size = 1 + Math.random() * 3
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`

      // Random opacity
      const opacity = 0.3 + Math.random() * 0.7
      dot.style.opacity = opacity.toString()

      // Random animation delay
      const delay = Math.random() * 5
      dot.style.animationDelay = `${delay}s`

      container.appendChild(dot)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
