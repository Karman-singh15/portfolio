"use client"

import { useEffect, useRef, useState } from "react"

export function CursorHalo() {
  const [visible, setVisible] = useState(false)
  
  const mouseRef = useRef({ x: -100, y: -100 })
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const isHoveredRef = useRef(false)

  useEffect(() => {
    // Hide standard cursor on desktop screens with pointer capabilities
    const style = document.createElement("style")
    style.innerHTML = `
      @media (pointer: fine) {
        body, a, button, input, textarea, select, [role="button"] {
          cursor: none !important;
        }
      }
    `
    document.head.appendChild(style)

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    // Detect hovers over links/buttons for custom cursor expand interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button")
      ) {
        isHoveredRef.current = true
      } else {
        isHoveredRef.current = false
      }
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", handleMouseOver)
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)

    // Smooth animation loop variables
    let ringX = -100
    let ringY = -100
    let currentScale = 1
    let reqId: number

    const render = () => {
      const targetX = mouseRef.current.x
      const targetY = mouseRef.current.y

      // Lerp ring coordinate movement
      ringX += (targetX - ringX) * 0.15
      ringY += (targetY - ringY) * 0.15

      // Lerp ring scaling during hover
      const targetScale = isHoveredRef.current ? 1.6 : 1
      currentScale += (targetScale - currentScale) * 0.15

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${currentScale})`
        ringRef.current.style.backgroundColor = isHoveredRef.current ? "rgba(232, 117, 58, 0.12)" : "rgba(232, 117, 58, 0)"
        ringRef.current.style.borderColor = isHoveredRef.current ? "rgba(232, 117, 58, 0.8)" : "rgba(232, 117, 58, 0.4)"
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`
      }

      reqId = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", handleMouseOver)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
      cancelAnimationFrame(reqId)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block"
      aria-hidden
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease-out" }}
    >
      {/* Outer trailing circle */}
      <div
        ref={ringRef}
        className="absolute w-8 h-8 rounded-full border border-[#E8753A]/40 pointer-events-none transition-[background-color,border-color] duration-300"
        style={{
          willChange: "transform",
        }}
      />
      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className="absolute w-2 h-2 rounded-full bg-[#E8753A] pointer-events-none"
        style={{
          willChange: "transform",
        }}
      />
    </div>
  )
}
