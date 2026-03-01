import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    image?: string;
    githubLink?: string;
    liveLink?: string;
}

export function ProjectCard({ title, image, githubLink, liveLink }: ProjectCardProps) {
    return (
        <div className="w-full h-[240px] md:h-[280px] shrink-0 rounded-[32px] border-2 border-[#e5e5e5] bg-[#141414] flex flex-col relative overflow-hidden group transition-all hover:scale-[1.02]">
            {/* Top half / Image placeholder */}
            <div className="flex-1 bg-[linear-gradient(45deg,rgba(59,165,93,0.3)_25%,transparent_25%,transparent_50%,rgba(59,165,93,0.3)_50%,rgba(59,165,93,0.3)_75%,transparent_75%,transparent_100%)] bg-[length:24px_24px] group-hover:bg-[length:28px_28px] transition-all duration-500 relative flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" />
                ) : (
                    <span className="font-archivo text-xl text-white/50">image</span>
                )}
                <div className="absolute inset-0 flex items-center justify-center font-archivo-black text-2xl text-white/90 drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    {title}
                </div>
            </div>
            {/* Bottom section with links */}
            <div className="h-[60px] md:h-[70px] shrink-0 bg-[#141414] border-t-2 border-[#e5e5e5] flex items-center justify-between px-6 z-10">
                <div className="flex items-center gap-4">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                            <span className="text-xs md:text-sm font-archivo font-semibold">github link</span>
                        </a>
                    )}
                </div>
                <div>
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-[#3ba55d] transition-colors">
                            <ExternalLink className="w-5 h-5" />
                            <span className="text-xs md:text-sm font-archivo font-semibold pb-[1px]">live preview</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
