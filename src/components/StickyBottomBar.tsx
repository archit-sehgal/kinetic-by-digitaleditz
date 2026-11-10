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
      if (window.scrollY > 450) {
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
    <div className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-lg animate-in slide-in-from-bottom-3 duration-200">
      <div className="bg-white border-[2.5px] border-[#121316] rounded-xl p-2 sm:p-2.5 flex items-center justify-between gap-3 shadow-[5px_5px_0px_#121316]">
        <div className="pl-2">
          <div className="font-condensed text-sm sm:text-base font-black uppercase text-[#121316] tracking-tight">
            SOCIALX<span className="text-[#855800]">GROWTH</span>
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-neutral-600">
            You record. We do the rest.
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="btn-neo-yellow inline-flex items-center gap-1.5 rounded-lg px-4 py-2 sm:px-5 sm:py-2 text-xs font-black uppercase tracking-wider cursor-pointer whitespace-nowrap"
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>Get Strategy</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
