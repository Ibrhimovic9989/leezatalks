import React from 'react';
import { VideoCategory } from '../types';

interface FilterBarProps {
  activeFilter: VideoCategory;
  onFilterChange: (filter: VideoCategory) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters: { label: string; value: VideoCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Early Signs', value: 'early-signs' },
    { label: 'Tips & Tricks', value: 'tips' },
    { label: 'Myths', value: 'myths' },
    { label: 'Life Stories', value: 'life-stories' },
    { label: 'Therapies', value: 'therapies' },
  ];

  return (
    <div className="scrollbar-hide flex w-full gap-2 overflow-x-auto px-4 py-2">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeFilter === value
              ? 'bg-blue-600 text-white'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}