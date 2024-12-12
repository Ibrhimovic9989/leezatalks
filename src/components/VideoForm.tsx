import React, { useState } from 'react';
import { Link2 } from 'lucide-react';
import { isValidVideoUrl } from '../lib/utils';

interface VideoFormProps {
  onSubmit: (url: string) => void;
}

export function VideoForm({ onSubmit }: VideoFormProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a video URL');
      return;
    }
    if (!isValidVideoUrl(url)) {
      setError('Please enter a valid YouTube Shorts or Instagram Reels URL');
      return;
    }
    setError('');
    onSubmit(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="relative">
        <Link2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube Shorts or Instagram Reels URL"
          className="w-full rounded-lg border border-gray-300 bg-white px-10 py-2 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Video
      </button>
    </form>
  );
}