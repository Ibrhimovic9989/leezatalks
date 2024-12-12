import React, { useState } from 'react';
import { VideoFeed } from './components/VideoFeed';
import { FilterBar } from './components/FilterBar';
import { videos } from './data/videos';
import { VideoCategory } from './types';

function App() {
  const [activeFilter, setActiveFilter] = useState<VideoCategory>('all');

  const filteredVideos = videos.filter(
    video => activeFilter === 'all' || video.category === activeFilter
  );

  return (
    <div className="relative h-screen w-full bg-black">
      <div className="absolute left-0 top-0 z-40 w-full">
        <h1 className="p-4 text-center text-2xl font-bold text-white">Leeza talks</h1>
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>
      <div className="pt-24">
        <VideoFeed videos={filteredVideos} />
      </div>
    </div>
  );
}

export default App;