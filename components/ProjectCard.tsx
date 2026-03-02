import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description?: string;
    githubLink?: string;
    liveLink?: string;
}

export function ProjectCard({ title, description, githubLink, liveLink }: ProjectCardProps) {
    return (
        <div className="w-full shrink-0 rounded-[24px] border border-[#333] bg-[#141414] flex flex-col overflow-hidden group transition-all hover:border-[#555]">
            {/* Top: title + description */}
            <div className="flex-1 flex flex-col gap-3 p-5 pb-6">
                <h3 className="text-lg font-archivo font-bold text-[#e5e5e5] group-hover:text-white transition-colors leading-snug">
                    {title}
                </h3>
                {description && (
                    <p className="text-sm font-archivo text-neutral-500 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#333] mx-0" />

            {/* Bottom: links */}
            <div className="flex items-center gap-5 px-5 py-4">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
                    >
                        <span className="w-7 h-7 rounded-full border border-[#444] flex items-center justify-center shrink-0 group-hover:border-[#666] transition-colors">
                            <Github className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-archivo">github</span>
                    </a>
                )}
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-500 hover:text-[#3ba55d] transition-colors"
                    >
                        <span className="w-7 h-7 rounded-full border border-[#444] flex items-center justify-center shrink-0 group-hover:border-[#666] transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-archivo">live preview</span>
                    </a>
                )}
            </div>
        </div>
    );
}
