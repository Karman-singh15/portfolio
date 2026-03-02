import React from 'react';

const experiences = [
    {
        company: "FLSmidth",
        duration: "Jan 2026 - March 2026",
        description: "Built an efficient algorithm that removes noise from scans of the mills where my algorithms brought down error from 150% to 10%."
    },
    {
        company: "IEEE Computer Society",
        duration: "Jan 2025 - Present",
        description: "Member of the Technical Department, contributing to software projects and technical initiatives."
    }
];

export function WorkExperience() {
    return (
        <div className="w-full mt-2">
            {/* Scrollable entries — flex layout avoids overflow clipping on dots */}
            <div className="overflow-y-auto max-h-[55vh] [pointer-events:inherit] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                {experiences.map((exp, i) => (
                    <div key={i} className="flex gap-6 group">
                        {/* Left column: dot + connecting line */}
                        <div className="flex flex-col items-center shrink-0">
                            <span className="w-4 h-4 rounded-full bg-neutral-600 group-hover:bg-[#3ba55d] ring-8 ring-[#141414] shrink-0 mt-1.5 transition-colors duration-300"></span>
                            {/* Connector line to next entry */}
                            <div className="w-[2px] bg-neutral-700 grow mt-1"></div>
                        </div>
                        {/* Right column: text */}
                        <div className="pb-10">
                            <h3 className="flex items-center mb-1 text-xl font-bold text-[#e5e5e5] font-archivo">
                                {exp.company}
                            </h3>
                            <time className="block mb-3 text-sm font-normal leading-none text-neutral-500 font-archivo">
                                {exp.duration}
                            </time>
                            <p className="text-base md:text-lg font-normal text-neutral-400 font-archivo leading-relaxed md:max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
                {/* Bottom terminating dot */}
                <div className="flex gap-6">
                    <div className="flex flex-col items-center shrink-0">
                        <span className="w-3 h-3 rounded-full bg-neutral-700 ring-4 ring-[#141414] shrink-0"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
