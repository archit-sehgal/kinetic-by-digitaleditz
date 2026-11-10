/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface SafariSafeVideoProps {
  src: string;
  poster?: string;
  className?: string;
  isMuted?: boolean;
  onToggleMute?: () => void;
  showTapForSound?: boolean;
  objectFit?: 'cover' | 'contain';
}

/**
 * Bulletproof auto-looping video player optimized for Safari, WebKit, iOS, and Chromium.
 * Resolves Safari's strict autoplay restrictions by explicitly setting defaultMuted, muted,
 * playsinline attributes directly on the DOM node and binding fallbacks for low-power modes.
 */
export const SafariSafeVideo: React.FC<SafariSafeVideoProps> = ({
  src,
  poster,
  className = '',
  isMuted = true,
  onToggleMute,
  showTapForSound = false,
  objectFit = 'cover',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFailedAutoplay, setIsFailedAutoplay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Force strict Safari / WebKit properties
    video.defaultMuted = isMuted;
    video.muted = isMuted;
    video.playsInline = true;

    // 2. Explicitly apply WebKit attributes into the DOM
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    if (isMuted) {
      video.setAttribute('muted', '');
    } else {
      video.removeAttribute('muted');
    }
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsFailedAutoplay(false);
          })
          .catch(() => {
            // Safari Low Power Mode or initial policy block:
            // Recover automatically on the first user interaction (touch/click/scroll)
            setIsPlaying(false);
            setIsFailedAutoplay(true);

            const triggerOnInteraction = () => {
              video
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setIsFailedAutoplay(false);
                })
                .catch(() => {});

              window.removeEventListener('touchstart', triggerOnInteraction);
              window.removeEventListener('click', triggerOnInteraction);
              window.removeEventListener('scroll', triggerOnInteraction);
            };

            window.addEventListener('touchstart', triggerOnInteraction, { once: true, passive: true });
            window.addEventListener('click', triggerOnInteraction, { once: true, passive: true });
            window.addEventListener('scroll', triggerOnInteraction, { once: true, passive: true });
          });
      }
    };

    if (video.readyState >= 2) {
      startPlayback();
    } else {
      video.addEventListener('loadeddata', startPlayback, { once: true });
      video.addEventListener('canplay', startPlayback, { once: true });
    }

    return () => {
      video.removeEventListener('loadeddata', startPlayback);
      video.removeEventListener('canplay', startPlayback);
    };
  }, [src]);

  // Keep muted synced when props change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.defaultMuted = isMuted;
      if (isMuted) {
        videoRef.current.setAttribute('muted', '');
      } else {
        videoRef.current.removeAttribute('muted');
      }
    }
  }, [isMuted]);

  const handleManualPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setIsFailedAutoplay(false);
      }).catch(() => {});
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#121316] ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        disablePictureInPicture
        className={`w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
      />

      {/* Safari Low Power Mode Play button overlay if autoplay was blocked */}
      {isFailedAutoplay && !isPlaying && (
        <button
          type="button"
          onClick={handleManualPlay}
          aria-label="Play video"
          className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-[#121316]/80 text-[#FFE500] border-2 border-[#FFE500] flex items-center justify-center backdrop-blur-sm cursor-pointer shadow-lg hover:scale-105 transition-transform z-20"
        >
          <Play className="h-5 w-5 fill-[#FFE500] ml-0.5" />
        </button>
      )}

      {/* Tap For Sound Overlay Button */}
      {showTapForSound && onToggleMute && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleMute();
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#121316]/90 hover:bg-[#121316] text-white border-[1.5px] border-white/40 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 cursor-pointer backdrop-blur-md shadow-lg transition-transform active:scale-95 z-30 whitespace-nowrap"
        >
          {isMuted ? (
            <VolumeX className="h-3.5 w-3.5 text-[#FFE500]" />
          ) : (
            <Volume2 className="h-3.5 w-3.5 text-[#FFE500]" />
          )}
          <span>{isMuted ? 'Tap for sound' : 'Sound active'}</span>
        </button>
      )}
    </div>
  );
};
