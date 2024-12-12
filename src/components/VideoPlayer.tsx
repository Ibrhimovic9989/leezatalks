import React from 'react';
import ReactPlayer from 'react-player';
import { cn } from '../lib/utils';

interface VideoPlayerProps {
  url: string;
  className?: string;
}

export function VideoPlayer({ url, className }: VideoPlayerProps) {
  return (
    <div className={cn("relative aspect-[9/16] w-full max-w-[400px]", className)}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing
        loop
        style={{ position: 'absolute', top: 0, left: 0 }}
        config={{
          youtube: {
            playerVars: { modestbranding: 1 }
          }
        }}
      />
    </div>
  );
}