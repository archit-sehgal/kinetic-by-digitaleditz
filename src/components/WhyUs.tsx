/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Sparkles, PenTool, Scissors, CalendarCheck2, Users2 } from 'lucide-react';

interface WhyUsProps {
  onOpenBooking: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenBooking }) => {
  const highlights = [
    {
      title: 'Strategy built around your actual business',
      description: 'No generic influencer templates. We study your local market, services, fees, and ideal clients before writing a single word.',
      icon: Compass,
    },
    {
      title: 'Content ideas relevant to your industry',
      description: 'Topics that address real client concerns—from remortgages to sole instructions—establishing your genuine professional authority.',
      icon: Sparkles,
    },
    {
      title: 'Scripts written for you',
      description: 'Word-for-word scripts formatted for effortless recording on your phone. You will never stare at a blank screen wondering what to say.',
      icon: PenTool,
    },
    {
      title: 'Professional video editing',
      description: 'Paced cuts, bionic typography subtitles, colour grading and sound design that make your videos look clean, modern, and credible.',
      icon: Scissors,
    },
    {
      title: 'Consistent publishing',
      description: 'We prepare, schedule, and distribute your Reels and carousels so your brand stays consistently visible week after week.',
      icon: CalendarCheck2,
    },
    {
      title: 'One team handling your content from start to finish',
      description: 'A single, accountable creative team. No juggling freelance editors, copywriters, or agency account managers.',
      icon: Users2,
    },
  ];

  return (
    <section className="border-b-[2.5px] border-[#121316] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            The SocialXGrowth Difference
          </div>
          <h2 className="mt-3 font-condensed text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#121316] leading-[0.98]">
            NOT ANOTHER AGENCY ASKING YOU TO{' '}
            <span className="bg-[#FFE500] px-2 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              FIGURE OUT WHAT TO POST.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            We believe your time is better spent running your business. Our job is to make sure your expertise gets the online presence it deserves.
          </p>
        </div>

        {/* 6 Core Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border-[2px] border-[#121316] bg-[#FAF8F5] p-6 shadow-[4px_4px_0px_#121316] hover:-translate-y-1 transition-transform"
              >
                <div className="h-10 w-10 rounded-xl bg-[#FFE500] border-[2px] border-[#121316] flex items-center justify-center text-[#121316] shadow-[2px_2px_0px_#121316] mb-4">
                  <Icon className="h-5 w-5 stroke-[2.5]" />
                </div>
                <h3 className="font-condensed text-xl font-black uppercase text-[#121316] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
