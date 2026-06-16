"use client"

import React from "react"
import { GitHubCalendar } from "react-github-calendar"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

export function GithubActivity() {
  return (
    <div className="rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-5 sm:p-6 responsive-calendar overflow-hidden">
      <GitHubCalendar
        username="Karman-singh15"
        colorScheme="dark"
        theme={{
          dark: ["#1A1A1A", "#3D2A1A", "#6B3D1F", "#A8551F", "#E8753A"],
        }}
        style={{
          fontFamily: "Archivo, sans-serif",
          fontSize: "11px",
          color: "#666",
        }}
        blockSize={10}
        blockMargin={3}
        fontSize={11}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "github-cal-tooltip",
            "data-tooltip-html":
              activity.count === 0
                ? `No contributions on ${activity.date}`
                : `<strong>${activity.count}</strong> contribution${activity.count > 1 ? "s" : ""} on ${activity.date}`,
          })
        }
      />
      <Tooltip
        id="github-cal-tooltip"
        style={{
          background: "#1A1A1A",
          color: "#E5E5E5",
          fontSize: "12px",
          fontFamily: "Archivo, sans-serif",
          borderRadius: "8px",
          padding: "6px 12px",
          border: "1px solid #333",
        }}
      />
    </div>
  )
}
