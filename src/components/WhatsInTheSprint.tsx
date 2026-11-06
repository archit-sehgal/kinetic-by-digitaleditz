/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const WhatsInTheSprint: React.FC = () => {
  const sprintDeliverables = [
    {
      num: '01',
      title: 'Three Format Modes',
      description: 'Talking head, 3D motion graphics, and kinetic typography tailored to your category.',
    },
    {
      num: '02',
      title: 'Category Hook Bank',
      description: '50+ tested pattern interrupts reverse-engineered from the top 1% of reels in your space.',
    },
    {
      num: '03',
      title: 'Teleprompter Scripts',
      description: '12–16 complete word-by-word video scripts formatted for effortless delivery.',
    },
    {
      num: '04',
      title: 'Directed Recording',
      description: 'Single 60-minute directed monthly shoot with studio director Archit Sehgal.',
    },
    {
      num: '05',
      title: 'Sound Design & FX',
      description: 'Synthesized audio hits, swooshes, and subtle ducked background audio on every keyframe.',
    },
    {
      num: '06',
      title: 'Quality Gates',
      description: 'Every reel verified against our 8-point attention gate before public distribution.',
    },
    {
      num: '07',
      title: 'Meta Ads Matrix',
      description: 'Modular creative testing across custom and lookalike audiences in Meta Ads Manager.',
    },
    {
      num: '08',
      title: 'Inbound DM Funnel',
      description: 'Automated comment-to-DM routing that delivers lead magnets and books Calendly calls.',
    },
  ];

  return (
    <section id="sprint" className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-20 md:py-28 paper-grid-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="font-condensed text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#121316] leading-none">
            WHAT'S IN{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-4 py-0.5 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316]">
              THE STUDIO SPRINT
            </span>
          </h2>
          <p className="mt-3 font-mono text-xs sm:text-sm text-neutral-600">
            Full-service monthly execution · Zero fluff · 100% focused on business inquiries
          </p>
        </div>

        {/* 2-Column Numbered Dotted List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {sprintDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="pb-6 border-b border-dashed border-[#121316]/40 flex items-start gap-4 group"
            >
              <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded bg-[#FFE500] border-[1.5px] border-[#121316] font-mono text-xs font-black shadow-[2px_2px_0px_#121316]">
                {item.num}
              </div>
              <div>
                <h3 className="font-condensed text-2xl font-bold uppercase text-[#121316] tracking-tight group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-700 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
