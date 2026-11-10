/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, Calendar, MessageCircle } from 'lucide-react';
import { CalendlyEmbed, CALENDLY_URL } from './CalendlyEmbed';

interface CalendarBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

export const CalendarBookingModal: React.FC<CalendarBookingModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
}) => {
  const whatsappUrl = `https://api.whatsapp.com/send?text=Hi%20SocialXGrowth,%20I'm%20interested%20in%20the%20${encodeURIComponent(
    selectedPackage || 'Content Marketing'
  )}%20package%20for%20my%20practice.`;

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
        className="relative w-full max-w-4xl bg-white border-[3px] border-[#121316] rounded-2xl shadow-[10px_10px_0px_#121316] overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#121316] text-white px-5 py-4 flex items-center justify-between border-b-[2.5px] border-[#121316]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFE500]" />
            <span className="text-[#FFE500]">SocialXGrowth:</span>
            <span className="text-neutral-200">
              {selectedPackage ? `${selectedPackage} Package Onboarding` : '30-Minute Content Strategy Session'}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg bg-[#FFE500] hover:bg-yellow-300 p-1.5 text-[#121316] font-bold border border-black transition-transform active:scale-90 cursor-pointer"
          >
            <X className="h-4 w-4 stroke-[3]" />
          </button>
        </div>

        {/* Selected Package Banner if applicable */}
        {selectedPackage && (
          <div className="bg-[#FAF8F5] border-b border-neutral-300 px-5 py-2.5 flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-600">Selected Plan: <strong className="text-[#121316]">{selectedPackage}</strong></span>
            <span className="text-emerald-700 font-bold">Rolling Monthly · Cancel Anytime</span>
          </div>
        )}

        {/* Modal Body with Direct Calendly Scheduler */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF8F5]">
          <CalendlyEmbed height={640} />

          {/* Fallbacks */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-600">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#121316] underline inline-flex items-center gap-1.5 font-bold"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Open Calendly in new tab</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Prefer WhatsApp? Message Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
