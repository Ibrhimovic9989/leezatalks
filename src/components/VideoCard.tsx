import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';
import { cn, getYouTubeVideoId } from '../lib/utils';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  className?: string;
}

export function VideoCard({ video, className }: VideoCardProps) {
  const [isReady, setIsReady] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const videoId = getYouTubeVideoId(video.url);
  const embedUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div 
      ref={ref}
      className={cn(
        "relative h-screen w-full snap-start bg-black",
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative aspect-[9/16] w-full max-w-[400px]">
          <ReactPlayer
            url={embedUrl}
            width="100%"
            height="100%"
            playing={inView}
            loop
            muted={!inView}
            controls
            onReady={() => setIsReady(true)}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: isReady ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  playsinline: 1,
                  rel: 0,
                  showinfo: 0,
                  controls: 1
                }
              }
            }}
          />
          {!isReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <h2 className="text-lg font-semibold text-white">{video.title}</h2>
            <span className="mt-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-xs text-white">
              {video.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}