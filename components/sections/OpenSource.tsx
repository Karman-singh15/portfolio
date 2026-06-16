import React from "react"
import { ArrowUpRight } from "lucide-react"
import { openSourceContributions } from "@/data/openSourceContributions"

const stateBadge: Record<string, string> = {
  merged: "bg-[#2A2A2A] text-[#AAA]",
  open: "bg-[#3D2A1A] text-[#E8753A]",
  closed: "bg-[#2A2A2A] text-[#666]",
}

export function OpenSource() {
  return (
    <div className="flex flex-col gap-3">
      {openSourceContributions.map((pr, i) => (
        <a
          key={i}
          href={pr.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-start justify-between gap-3 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-4 sm:p-5 hover:border-[#333] transition-colors text-left"
        >
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[#666] mb-0.5 truncate">{pr.repo}</p>
            <p className="text-sm font-archivo font-semibold text-[#E5E5E5] leading-snug">
              {pr.title}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span
                className={`text-[10px] font-archivo px-2 py-0.5 rounded-full ${stateBadge[pr.state] ?? stateBadge.closed}`}
              >
                {pr.state}
              </span>
              <span className="text-[10px] text-[#555]">{pr.createdAt}</span>
            </div>
          </div>
          <ArrowUpRight
            className="w-4 h-4 shrink-0 text-[#E8753A] group-hover:scale-110 transition-transform mt-0.5"
            strokeWidth={2.5}
          />
        </a>
      ))}
    </div>
  )
}
