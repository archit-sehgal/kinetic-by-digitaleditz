/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Lightbulb, FileText, Film, Layers, SendHorizontal } from 'lucide-react';

interface WhatWeDoProps {
  onOpenBooking: () => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenBooking }) => {
  const services = [
    {
      num: '01',
      title: 'Content Strategy',
      description: 'We understand your business, audience and goals before developing a content strategy specifically for your brand.',
      icon: Target,
      highlight: 'Tailored for UK professional audiences',
    },
    {
      num: '02',
      title: 'Content Ideas',
      description: 'We research your industry and develop relevant ideas that educate, engage and position you as an expert.',
      icon: Lightbulb,
      highlight: 'Answering real questions clients ask',
    },
    {
      num: '03',
      title: 'Hooks & Scripts',
      description: 'We write attention-grabbing hooks and complete video scripts. You never have to wonder what to say in front of the camera.',
      icon: FileText,
      highlight: 'Ready-to-read scripts on your phone',
    },
    {
      num: '04',
      title: 'Video Editing',
      description: 'You send us your recordings. We turn them into engaging, professionally edited Instagram Reels.',
      icon: Film,
      highlight: 'Bionic subtitles, color & sound design',
    },
    {
      num: '05',
      title: 'Carousel Creation',
      description: 'We design educational, informative and visually appealing carousel posts that communicate your expertise.',
      icon: Layers,
      highlight: 'Swipeable authority decks for your feed',
    },
    {
      num: '06',
      title: 'Publishing & Distribution',
      description: 'We prepare, schedule and publish your content to maintain a consistent online presence.',
      icon: SendHorizontal,
      highlight: 'Consistent weekly cadence, zero hassle',
    },
  ];

  return (
    <section id="what-we-do" className="border-b-[2.5px] border-[#121316] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            Complete Done-For-You Service
          </div>
          <h2 className="mt-3 font-condensed text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#121316] leading-[0.98]">
            YOUR BRAND DESERVES MORE THAN{' '}
            <span className="bg-[#FFE500] px-2 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              RANDOM POSTS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            Showing up consistently online shouldn't become another full-time job. We turn your business expertise into a structured content strategy that helps your brand stay visible, relevant and memorable.
          </p>
        </div>

        {/* 6 Category Bento Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative rounded-2xl border-[2.5px] border-[#121316] bg-[#FAF8F5] p-6 shadow-[5px_5px_0px_#121316] hover:bg-white hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121316] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-300">
                    <span className="font-condensed text-3xl font-black text-[#855800]">
                      {item.num}
                    </span>
                    <div className="p-2.5 rounded-xl border-[2px] border-[#121316] bg-[#FFE500] text-[#121316] shadow-[2px_2px_0px_#121316]">
                      <Icon className="h-5 w-5 stroke-[2.5]" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-condensed text-2xl font-black uppercase text-[#121316]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono font-bold text-neutral-600">
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner with Direct Action */}
        <div className="mt-12 rounded-2xl border-[2.5px] border-[#121316] bg-[#FFE500] p-6 sm:p-8 shadow-[6px_6px_0px_#121316] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-condensed text-2xl sm:text-3xl font-black uppercase text-[#121316] leading-tight">
              Ready to stop stressing over what to post?
            </h4>
            <p className="text-sm font-semibold text-neutral-800 mt-1">
              We handle the strategy, scripts, edits and publishing so you can focus entirely on your clients.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="rounded-xl border-[2.5px] border-[#121316] bg-[#121316] text-white px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-neutral-800 transition-colors whitespace-nowrap shadow-[3px_3px_0px_#FFE500] cursor-pointer shrink-0"
          >
            Get Your Content Strategy
          </button>
        </div>
      </div>
    </section>
  );
};
