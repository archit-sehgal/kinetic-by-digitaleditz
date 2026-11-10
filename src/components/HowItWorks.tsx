/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Video, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'WE UNDERSTAND YOUR BUSINESS',
      detail: 'We learn about your services, expertise, target audience and business objectives.',
      owner: 'SocialXGrowth Team',
      ownerTag: 'WE DO THIS',
      isClientAction: false,
    },
    {
      step: '02',
      title: 'WE BUILD YOUR CONTENT STRATEGY',
      detail: 'We plan your content topics, ideas, hooks and scripts.',
      owner: 'SocialXGrowth Team',
      ownerTag: 'WE DO THIS',
      isClientAction: false,
    },
    {
      step: '03',
      title: 'YOU RECORD',
      detail: 'You simply record videos following the scripts we provide. No brainstorming or writing required.',
      owner: 'You (Just 60 Mins/Month)',
      ownerTag: 'YOUR ONLY STEP',
      isClientAction: true,
    },
    {
      step: '04',
      title: 'WE CREATE YOUR CONTENT',
      detail: 'We professionally edit your videos, create carousels and prepare everything for publishing.',
      owner: 'SocialXGrowth Team',
      ownerTag: 'WE DO THIS',
      isClientAction: false,
    },
    {
      step: '05',
      title: 'WE PUBLISH & GROW YOUR PRESENCE',
      detail: 'Your content goes live consistently, helping your business build visibility, credibility and audience engagement.',
      owner: 'SocialXGrowth Team',
      ownerTag: 'WE DO THIS',
      isClientAction: false,
    },
  ];

  return (
    <section id="how-it-works" className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            <span>Effortless 5-Step Process</span>
          </div>
          <h2 className="mt-3 font-condensed text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#121316]">
            YOU JUST RECORD.{' '}
            <span className="bg-[#FFE500] px-3 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              WE DO THE REST.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            Our entire workflow is engineered so you never spend hours figuring out what to say or trying to edit videos. You just record once a month.
          </p>
        </div>

        {/* Process Flow - Clean Horizontal on Desktop, Vertical on Mobile */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`rounded-2xl border-[2.5px] border-[#121316] p-5 flex flex-col justify-between transition-all duration-200 ${
                item.isClientAction
                  ? 'bg-[#FFE500] shadow-[6px_6px_0px_#121316] scale-[1.03] z-10'
                  : 'bg-white shadow-[4px_4px_0px_#121316]'
              }`}
            >
              <div>
                {/* Step Number & Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-[#121316]/20">
                  <span className="font-condensed text-3xl font-black text-[#121316]">
                    {item.step}
                  </span>
                  <span
                    className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#121316] ${
                      item.isClientAction
                        ? 'bg-[#121316] text-[#FFE500]'
                        : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    {item.ownerTag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-condensed text-lg sm:text-xl font-black uppercase text-[#121316] leading-tight">
                  {item.title}
                </h3>

                {/* Detail */}
                <p className="mt-2 text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-6 pt-3 border-t border-[#121316]/10 flex items-center justify-between text-[11px] font-mono font-bold text-neutral-700">
                <span className="truncate">{item.owner}</span>
                {item.isClientAction ? (
                  <Video className="h-4 w-4 text-[#121316] shrink-0" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Time Commitment Callout */}
        <div className="mt-12 max-w-2xl mx-auto rounded-xl border-[2px] border-[#121316] bg-white p-4 sm:p-5 shadow-[4px_4px_0px_#121316] flex items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-neutral-800 font-semibold">
            Average client time required: <span className="font-black text-[#121316]">under 60 minutes per month</span>. We handle 100% of the strategy, writing, editing, and publishing.
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-neo-yellow text-xs font-black uppercase px-4 py-2.5 rounded-lg whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-1.5"
          >
            <span>Start Now</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
