import React from 'react';
import { openSourceContributions } from '@/data/openSourceContributions';

const stateBadge: Record<string, string> = {
    merged: 'bg-purple-900/50 text-purple-300 border border-purple-700',
    open: 'bg-green-900/50  text-green-300  border border-green-700',
    closed: 'bg-neutral-800   text-neutral-400 border border-neutral-700',
};

export function OpenSource() {
    return (
        <div className="w-full mt-2">
            <div className="overflow-y-auto max-h-[55vh] pr-4 [pointer-events:inherit] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                {openSourceContributions.map((pr, i) => (
                    <a
                        key={i}
                        href={pr.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start gap-3 mb-5 group"
                    >
                        {/* Repo + title */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-neutral-500 font-archivo mb-0.5 truncate">
                                {pr.repo}
                            </p>
                            <p className="text-xl font-archivo text-neutral-300 group-hover:text-white transition-colors leading-snug">
                                {pr.title}
                            </p>
                        </div>

                        {/* Right side: state badge + date */}
                        <div className="flex flex-col items-end gap-1 shrink-0 mt-0.5">
                            <span className={`text-xs font-archivo px-2 py-0.5 rounded-full ${stateBadge[pr.state] ?? stateBadge.closed}`}>
                                {pr.state}
                            </span>
                            <span className="text-xs text-neutral-600 font-archivo">{pr.createdAt}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
