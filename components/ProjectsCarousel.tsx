"use client"

import React from 'react';
import { ProjectCard } from './ProjectCard';

export function ProjectsCarousel({ scrollYProgress, index }: { scrollYProgress: any, index: number }) {

    // 12 Placeholders
    const dummyProjects = [
        { id: 1, title: 'Project 1', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 2, title: 'Project 2', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 3, title: 'Project 3', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 4, title: 'Project 4', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 5, title: 'Project 5', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 6, title: 'Project 6', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 7, title: 'Project 7', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 8, title: 'Project 8', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 9, title: 'Project 9', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 10, title: 'Project 10', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 11, title: 'Project 11', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 12, title: 'Project 12', description: 'A short description of what this project does and the tech stack used.', githubLink: 'https://github.com', liveLink: 'https://example.com' },
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
