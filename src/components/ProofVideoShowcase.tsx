/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProofVideoShowcaseProps {
  onOpenBooking: () => void;
}

export const ProofVideoShowcase: React.FC<ProofVideoShowcaseProps> = ({ onOpenBooking }) => {
  const proofCards = [
    {
      num: '10X',
      unit: 'PIPELINE MULTIPLIER',
      title: 'Founder & Expert Talking-Head Direction',
      subtitle: 'SocialXGrowth Strategy & Subtitle Cuts',
      description: 'Motion graphic kinetic typography, 1.2s hook pacing, and automated comment routing directly to 30-min strategy calls.',
      videoUrl: '/videos/talking-head-reel-2.mp4',
    },
    {
      num: '700%',
      unit: 'PEAK CAMPAIGN ROAS',
      title: 'D2C & Viral Brand Films',
      subtitle: 'Gourmet Launch Direction',
      description: 'High-contrast visual pattern interrupts and pacing cuts that stop the scroll and drive immediate customer acquisition.',
      videoUrl: 'https://www.digitaleditz.com/burgervideo.mp4',
    },
    {
      num: '100K+',
      unit: 'QUALIFIED PROPERTY VIEWS',
      title: 'Luxury Real Estate & High-Ticket',
      subtitle: 'Kapahi Properties Portfolio',
      description: 'Architectural walk-throughs and geo-targeted paid reels delivering verified property buyer bookings.',
      videoUrl: 'https://www.digitaleditz.com/realestatevideo.mp4',
    },
  ];

  return (
    <section id="proof" className="border-b-[2.5px] border-[#121316] bg-[#121316] py-20 md:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-[#FFE500] font-mono text-xs font-bold text-[#FFE500]">
              01
            </span>
            <span className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-wider line-through decoration-[#FFE500] decoration-2">
              “Organic reels don't convert.”
            </span>
          </div>

          <h2 className="mt-4 font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            OUR REELS CONVERT BROWSERS INTO{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-0.5 border-[2px] border-black my-1">
              30-MIN STRATEGY CALLS.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl font-normal leading-relaxed">
            Every reel produced by our studio follows our strict 8-point attention gate. Nobody guesses what works—every asset is engineered for algorithmic retention and inbox qualification.
          </p>
        </div>

        {/* 3 Live Video Proof Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofCards.map((card, idx) => (
            <div
              key={idx}
              onClick={onOpenBooking}
              className="rounded-2xl border-[2.5px] border-neutral-700 bg-[#FAF8F5] p-5 text-[#121316] shadow-[6px_6px_0px_#FFE500] flex flex-col justify-between cursor-pointer hover:border-[#FFE500] hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                {/* Phone mockup with looping video */}
                <div className="w-24 sm:w-28 shrink-0 rounded-xl border-[2px] border-[#121316] bg-[#121316] overflow-hidden aspect-[9/16] shadow-[2px_2px_0px_#121316]">
                  <video
                    src={card.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right side stats */}
                <div className="flex-1">
                  <div className="font-condensed text-3xl sm:text-4xl font-black text-[#121316] leading-none">
                    {card.num}
                  </div>
                  <div className="font-mono text-[10px] font-black uppercase text-neutral-500 tracking-wider mt-0.5">
                    {card.unit}
                  </div>
                  <h3 className="mt-2.5 font-condensed text-lg sm:text-xl font-bold uppercase text-[#121316] leading-tight group-hover:text-[#A16207] transition-colors">
                    {card.title}
                  </h3>
                  <div className="font-mono text-[11px] text-neutral-600 font-medium">
                    {card.subtitle}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-[1.5px] border-[#121316]/10 flex items-center justify-between text-[11px] font-mono font-bold text-[#121316]">
                <span>{card.description}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#121316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Proof Tagline */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-6">
          <span>Engineered by SocialXGrowth Studio · Directed by Archit Sehgal</span>
          <button
            onClick={onOpenBooking}
            className="text-[#FFE500] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Book 30-Min Strategy Call with Archit</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
