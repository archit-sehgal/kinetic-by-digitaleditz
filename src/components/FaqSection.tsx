/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the 60-minute monthly recording work?',
      a: 'We research your market and write 12–16 complete word-by-word scripts. During a single 60-minute virtual session with Archit Sehgal, we feed you teleprompter lines, direct pacing, and capture all raw takes. You never need to edit or touch video software.',
    },
    {
      q: 'Do you create generic social media reels or business outcome assets?',
      a: 'Zero generic templates or dancing reels. Every single video is built around clear problem-solution psychology, bionic captioning, and comment-to-DM keyword triggers designed to route high-intent buyers into calendar bookings.',
    },
    {
      q: 'What is the format of the 30-minute strategy call?',
      a: 'It is a 1-on-1 strategy deep dive via Google Meet directly with studio director Archit Sehgal. We review your current profile, diagnose your hook retention rate, and determine if our studio sprint is the right fit for your business.',
    },
    {
      q: 'Do we need an existing Instagram following to start?',
      a: 'No. Our paired approach uses organic algorithmic retention gates combined with targeted paid Meta Ads distribution to get your best reels in front of verified ideal customers from day one.',
    },
    {
      q: 'What if we already have an in-house marketing manager?',
      a: 'Our studio functions as your dedicated video creative and acquisition unit. We supply the scripts, the directed shoots, the video post-production, and the inbound DM funnels so your internal team can focus on closing deals.',
    },
  ];

  return (
    <section id="faq" className="border-b-[2.5px] border-[#121316] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFE500] text-[#121316] font-script text-xl font-bold px-3.5 py-1 border-[2px] border-[#121316] shadow-[2.5px_2.5px_0px_#121316] -rotate-1 mb-3">
            Clear Answers
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#121316]">
            FREQUENTLY ASKED{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-0.5 border-[2px] border-[#121316]">
              QUESTIONS.
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border-[2.5px] border-[#121316] bg-[#FAF8F5] overflow-hidden shadow-[4px_4px_0px_#121316] transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-condensed text-xl sm:text-2xl font-bold uppercase text-[#121316] flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`p-1.5 rounded bg-[#FFE500] border border-[#121316] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-4 w-4 text-[#121316] stroke-[3]" />
                  </div>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed border-t border-[#121316]/10 mt-2 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-neutral-600 mb-3">
            Have a unique business model or question not covered here?
          </p>
          <button
            onClick={onOpenBooking}
            className="btn-neo-yellow inline-flex items-center gap-2 rounded-lg px-6 py-3 text-xs font-black uppercase tracking-wider cursor-pointer"
          >
            <span>Ask Archit on a 30-Min Call</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
