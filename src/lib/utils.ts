import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getYouTubeVideoId(url: string): string {
  const shortUrlPattern = /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/;
  const match = url.match(shortUrlPattern);
  return match ? match[1] : '';
}