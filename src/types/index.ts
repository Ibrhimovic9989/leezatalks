export type VideoCategory = 'all' | 'early-signs' | 'tips' | 'myths' | 'life-stories' | 'therapies';

export interface Video {
  url: string;
  category: VideoCategory;
  title: string;
}