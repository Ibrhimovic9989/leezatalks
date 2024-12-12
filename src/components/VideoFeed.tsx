import React from 'react';
import { VideoCard } from './VideoCard';
import { Video } from '../types';

interface VideoFeedProps {
  videos: Video[];
}

export function VideoFeed({ videos }: VideoFeedProps) {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {videos.map((video, index) => (
        <VideoCard key={`${video.url}-${index}`} video={video} />
      ))}
    </div>
  );
}