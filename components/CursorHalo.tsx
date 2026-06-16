"use client"

import { useEffect, useState } from "react"

export function CursorHalo() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener("mousemove", onMove)
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute rounded-full blur-2xl transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          width: 120,
          height: 120,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(232, 117, 58, 0.18) 0%, rgba(232, 117, 58, 0.06) 40%, transparent 70%)",
        }}
      />
    </div>
  )
}
