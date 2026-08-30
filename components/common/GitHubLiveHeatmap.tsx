'use client';
import { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export default function GitHubLiveHeatmap() {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/github-contributions')
      .then((res) => {
        if (!res.ok) throw new Error('API failed');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setWeeks(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-xs font-mono text-zinc-500 py-4">Loading live activity...</div>;
  if (error || weeks.length === 0) return <div className="text-xs font-mono text-red-400 py-4">No data found. Check your GitHub username and token.</div>;

  // Dark theme palette for seamless integration
  const getColor = (count: number) => {
    if (count === 0) return '#18181b'; // zinc-900
    if (count <= 2) return '#064e3b'; // emerald-900
    if (count <= 5) return '#047857'; // emerald-700
    if (count <= 10) return '#10b981'; // emerald-500
    return '#34d399'; // emerald-400
  };

  const rectSize = 10;
  const gap = 3;

  return (
    <div className="w-full flex flex-col items-end">
      {/* Heatmap Grid - Right aligned so latest dates always show on mobile */}
      <div className="w-full overflow-hidden flex justify-end">
        <svg 
          width={weeks.length * (rectSize + gap)} 
          height={7 * (rectSize + gap)}
          className="shrink-0 overflow-visible"
        >
          <g>
            {weeks.map((week, weekIndex) => 
              week.contributionDays.map((day) => {
                const x = weekIndex * (rectSize + gap);
                const y = day.weekday * (rectSize + gap);

                return (
                  <rect
                    key={day.date}
                    x={x}
                    y={y}
                    width={rectSize}
                    height={rectSize}
                    rx={2}
                    ry={2}
                    fill={getColor(day.contributionCount)}
                  >
                    <title>{`${day.contributionCount} contributions on ${day.date}`}</title>
                  </rect>
                );
              })
            )}
          </g>
        </svg>
      </div>
      
      {/* Right-Aligned Legend */}
      <div className="flex items-center gap-1.5 mt-3 text-[10px] font-mono text-zinc-500">
        <span>Less</span>
        <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-900 border border-zinc-800" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
        <span>More</span>
      </div>
    </div>
  );
}