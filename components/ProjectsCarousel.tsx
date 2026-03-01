"use client"

import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export function ProjectsCarousel({ scrollYProgress, index }: { scrollYProgress: any, index: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (containerRef.current) {
                // Calculate how much the content overflows the parent container height
                const parentHeight = containerRef.current.parentElement?.offsetHeight || 0;
                const overflow = containerRef.current.scrollHeight - parentHeight;
                setScrollHeight(overflow > 0 ? overflow + 48 : 0); // Include padding/margin spacing
            }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        // Timeout to ensure initial layout is complete
        const timeout = setTimeout(updateHeight, 100);
        return () => {
            window.removeEventListener("resize", updateHeight);
            clearTimeout(timeout);
        };
    }, []);

    const y = useTransform(scrollYProgress, (v: number) => {
        const i = Math.min(Math.floor(v / 0.2), 4);
        const localV = (v - i * 0.2) / 0.2;
        if (i === index) {
            if (localV < 0.3) return 0;
            if (localV > 0.7) return -scrollHeight;
            return -((localV - 0.3) / 0.4) * scrollHeight;
        }
        if (i > index) return -scrollHeight;
        return 0;
    });

    // 6 Placeholders
    const dummyProjects = [
        { id: 1, title: 'Project 1', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 2, title: 'Project 2', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 3, title: 'Project 3', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 4, title: 'Project 4', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 5, title: 'Project 5', githubLink: 'https://github.com', liveLink: 'https://example.com' },
        { id: 6, title: 'Project 6', githubLink: 'https://github.com', liveLink: 'https://example.com' },
    ];

    return (
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden py-4 -my-4 pr-8 md:pr-12 pointer-events-auto">
            <motion.div
                ref={containerRef}
                style={{ y }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start"
            >
                {dummyProjects.map((p) => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </motion.div>
        </div>
    );
}
