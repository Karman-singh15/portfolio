"use client"

import React from 'react';
import { ProjectCard } from './ProjectCard';

export function ProjectsCarousel({ scrollYProgress, index }: { scrollYProgress: any, index: number }) {

    // 12 Placeholders
    const dummyProjects = [
        { id: 1, title: 'desktop assistant', description: 'a desktop search feature which can help you browse through your files, folder, help you search on google, stackoverflow, yt and gemini with simple commands', githubLink: 'https://github.com/Karman-singh15/desktop-assistant', liveLink: 'https://x.com/KarmanSingh1505/status/1928883025594490939' },
        { id: 2, title: 'explainer ai', description: 'a extension where if you ask a doubt to the llm it summarizes the answer there instead of making a new chat so you can keep the explainations at one place rather than scrollin back and forth', githubLink: 'https://github.com/Karman-singh15/explainer-ai', liveLink: '' },
        { id: 3, title: 'bot arena', description: 'Built a multi-agent trading simulator combining behavioral modeling and machine learning to analyze how economic background affects financial decisions.', githubLink: 'https://github.com/Karman-singh15/bot-arena', liveLink: '' },
        { id: 4, title: 'news', description: 'a news app where you can see the articles of right,left and centrist wing to make your own informed desicion', githubLink: 'https://github.com/Karman-singh15/news', liveLink: '' },
        { id: 5, title: 'arc', description: 'a app where you can track your progress in the gym,diet and personal goals', githubLink: 'https://github.com/Karman-singh15/arc', liveLink: '' },
        { id: 6, title: 'driver name updater', description: 'a website which was made with the sole purpose of making my moms life simpler', githubLink: 'https://github.com/Karman-singh15/driver-name-updater', liveLink: 'https://driver-name-updater.vercel.app/' },
        

    ];

    return (
        <div className="w-full overflow-y-auto max-h-[55vh] pr-4 [pointer-events:inherit] 
[&::-webkit-scrollbar]:w-1 
[&::-webkit-scrollbar-track]:bg-transparent 
[&::-webkit-scrollbar-thumb]:bg-neutral-700 
[&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
                {dummyProjects.map((p) => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </div>
    );
}
