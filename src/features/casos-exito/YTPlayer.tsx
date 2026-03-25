// components/YouTubePlayer.tsx
import React from 'react';

interface YouTubePlayerProps {
    videoId: string;
    title?: string;
}

const YouTubePlayer = ({ videoId, title = "YouTube video player" }: YouTubePlayerProps) => {
    return (
        <div className="w-full max-w-4xl mx-auto my-8">
            {/* Contenedor con relación de aspecto 16:9 */}
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubePlayer;