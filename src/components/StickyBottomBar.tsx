/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-xl animate-in slide-in-from-bottom-4 duration-300">
      <div className="paper-card rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-3 shadow-[8px_8px_0px_#121316]">
        <div className="flex items-center gap-2.5 pl-2">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFE500] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFE500] border border-[#121316]" />
          </div>
          <div className="font-mono text-xs text-[#121316] leading-tight">
            <span className="font-black block">Archit Sehgal:</span>
            <span className="text-[11px] text-neutral-600">30-Min Calls Open</span>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="btn-neo-yellow inline-flex items-center gap-2 rounded-xl px-4 py-2.5 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider cursor-pointer"
        >
          <Calendar className="h-4 w-4 stroke-[2.5]" />
          <span>Book 30-Min Call</span>
          <ArrowRight className="h-3.5 w-3.5 hidden sm:inline-block stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
