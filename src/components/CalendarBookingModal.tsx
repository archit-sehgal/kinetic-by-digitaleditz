/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { CalendlyEmbed, CALENDLY_URL } from './CalendlyEmbed';

interface CalendarBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarBookingModal: React.FC<CalendarBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white border-[3px] border-[#121316] rounded-2xl shadow-[10px_10px_0px_#121316] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#121316] text-white px-5 py-3.5 flex items-center justify-between border-b-[2.5px] border-[#121316]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFE500]" />
            <span className="text-[#FFE500]">Archit Sehgal:</span>
            <span className="text-neutral-200">30-Minute Instagram Growth Strategy Session</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg bg-[#FFE500] hover:bg-yellow-300 p-1.5 text-[#121316] font-bold border border-black transition-transform active:scale-90 cursor-pointer"
          >
            <X className="h-4 w-4 stroke-[3]" />
          </button>
        </div>

        {/* Modal Body with Direct Calendly Scheduler */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF8F5]">
          <CalendlyEmbed height={680} />
          <div className="mt-4 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-neutral-600 hover:text-[#121316] underline inline-flex items-center gap-1.5"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Having trouble viewing? Open Calendly directly in a new tab ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
