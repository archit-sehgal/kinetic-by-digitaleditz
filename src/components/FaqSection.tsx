/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to come up with my own content ideas?',
      a: 'No. We research your industry, understand your business and develop relevant content ideas for you.',
    },
    {
      q: 'Do I need to record the videos?',
      a: 'Yes. You simply record yourself following the scripts we provide. We handle the rest.',
    },
    {
      q: 'Do you write the video scripts?',
      a: 'Yes. We provide the hooks and complete scripts so you know exactly what to say.',
    },
    {
      q: 'Do you edit the videos?',
      a: 'Yes. Professional video editing is included in all packages.',
    },
    {
      q: 'Do you create carousel posts?',
      a: 'Yes. Carousel design and creation are included in all packages.',
    },
    {
      q: 'Do you manage publishing?',
      a: 'Yes. We prepare, schedule and publish your content.',
    },
    {
      q: 'Which industries do you work with?',
      a: 'We primarily work with mortgage brokers, insurance brokers and real estate professionals across the UK.',
    },
    {
      q: 'How much do your services cost?',
      a: 'Our monthly packages start at £500, with options at £750 and £1,200.',
    },
    {
      q: 'Can you guarantee leads or followers?',
      a: "We don't make artificial guarantees. Our focus is building a consistent content strategy designed to improve visibility, reach relevant audiences, establish credibility and create more opportunities for enquiries.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-b-[2.5px] border-[#121316] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            Frequently Asked Questions
          </div>
          <h2 className="mt-3 font-condensed text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#121316]">
            EVERYTHING YOU NEED TO{' '}
            <span className="bg-[#FFE500] px-3 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              KNOW BEFORE STARTING.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            Straightforward answers about our process, packages, and how we manage your Instagram content.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border-[2px] border-[#121316] bg-[#FAF8F5] overflow-hidden transition-all shadow-[3px_3px_0px_#121316]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-condensed text-xl sm:text-2xl font-black uppercase text-[#121316] leading-snug">
                    {faq.q}
                  </span>
                  <div className="h-8 w-8 rounded-lg bg-[#FFE500] border border-[#121316] flex items-center justify-center shrink-0 text-[#121316]">
                    {isOpen ? <Minus className="h-4 w-4 stroke-[3]" /> : <Plus className="h-4 w-4 stroke-[3]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-neutral-200 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 text-center">
          <p className="text-xs font-mono text-neutral-600">
            Have a question specific to your practice or partnership model?
          </p>
          <button
            onClick={onOpenBooking}
            className="mt-3 text-xs font-mono font-bold text-[#121316] hover:text-amber-800 underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Ask us on a 30-Minute Strategy Call</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
