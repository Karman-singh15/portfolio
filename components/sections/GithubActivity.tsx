'use client';

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export function GithubActivity() {
    return (
        <div className="w-full mt-2 [pointer-events:inherit]">
            <GitHubCalendar
                username="Karman-singh15"
                colorScheme="dark"
                theme={{
                    dark: ['#1a1a1a', '#1a4731', '#166534', '#15803d', '#22c55e'],
                }}
                style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '12px',
                    color: '#737373',
                }}
                blockSize={11}
                blockMargin={3}
                fontSize={12}
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                        'data-tooltip-id': 'github-cal-tooltip',
                        'data-tooltip-html':
                            activity.count === 0
                                ? `No contributions on ${activity.date}`
                                : `<strong>${activity.count}</strong> contribution${activity.count > 1 ? 's' : ''} on ${activity.date}`,
                    })
                }
            />
            <Tooltip
                id="github-cal-tooltip"
                style={{
                    background: '#1f1f1f',
                    color: '#e5e5e5',
                    fontSize: '12px',
                    fontFamily: 'Archivo, sans-serif',
                    borderRadius: '6px',
                    padding: '5px 10px',
                    border: '1px solid #333',
                }}
            />
        </div>
    );
}
