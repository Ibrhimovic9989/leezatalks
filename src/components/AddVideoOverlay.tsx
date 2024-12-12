import React, { useState } from 'react';
import { Link2, X } from 'lucide-react';
import { isValidVideoUrl } from '../lib/utils';

interface AddVideoOverlayProps {
  onSubmit: (url: string) => void;
  onClose: () => void;
}

export function AddVideoOverlay({ onSubmit, onClose }: AddVideoOverlayProps) {
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add Video</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>
    </div>
  );
}