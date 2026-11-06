/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { ArrowRight, Volume2, VolumeX, Sparkles, Check } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isMuted, setIsMuted] = useState(true);
  const centerVideoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (centerVideoRef.current) {
      centerVideoRef.current.muted = !centerVideoRef.current.muted;
      setIsMuted(centerVideoRef.current.muted);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-12 paper-grid-bg border-b-[2.5px] border-[#121316]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Text Group */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Handwritten marker tape kicker */}
          <div className="inline-block bg-[#FFE500] text-[#121316] font-script text-xl sm:text-2xl font-bold px-4 py-1 border-[2px] border-[#121316] shadow-[2.5px_2.5px_0px_#121316] -rotate-1 mb-3">
            built for business outcomes, not vanity metrics
          </div>

          {/* Giant condensed display headline with yellow block knockout */}
          <h1 className="font-condensed text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#121316] uppercase leading-[0.92] text-balance">
            TURN INSTAGRAM INTO YOUR{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-3 sm:px-5 py-0.5 sm:py-1 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316] my-1 rotate-[-0.5deg]">
              #1 CLIENT ENGINE.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-neutral-800 max-w-2xl leading-relaxed font-medium">
            We partner with ambitious founders, modern clinics, and high-ticket service brands to build category authority, engineered organic reels, targeted paid media, and automated inbound lead pipelines.
          </p>

          {/* CTA & Sticky Note Group */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button
              onClick={onOpenBooking}
              className="btn-neo-yellow w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-base font-black uppercase tracking-wider cursor-pointer"
            >
              <span>Book 30-Min Strategy Call</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </button>

            {/* Tape-style Sticky Note Badge */}
            <div className="paper-card-yellow rounded-lg px-4 py-3 flex items-center gap-2 rotate-[0.8deg] text-xs font-mono font-black tracking-tight">
              <Sparkles className="h-4 w-4 shrink-0 text-[#121316]" />
              <span>Current Intake: 1-on-1 Studio Cohort Open</span>
            </div>
          </div>

          {/* 3 Trust Checkmarks */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-neutral-800 font-mono">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#FFE500] border-[1.5px] border-[#121316] p-0.5">
                <Check className="h-3 w-3 text-[#121316] stroke-[3.5]" />
              </div>
              <span>Zero Generic Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#FFE500] border-[1.5px] border-[#121316] p-0.5">
                <Check className="h-3 w-3 text-[#121316] stroke-[3.5]" />
              </div>
              <span>Full Meta Ads Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#FFE500] border-[1.5px] border-[#121316] p-0.5">
                <Check className="h-3 w-3 text-[#121316] stroke-[3.5]" />
              </div>
              <span>Automated Inbound Lead Routing</span>
            </div>
          </div>
        </div>

        {/* The 5-Phone Fanned Curved Reel Showcase with Real Brand Reels */}
        <div className="mt-14 relative max-w-5xl mx-auto pt-6 pb-2">
          <div className="flex items-center justify-center -space-x-8 sm:-space-x-12 md:-space-x-16 perspective-1000 overflow-x-hidden py-4">
            {/* Phone 1: Far Left (Tilted -10deg) - Real Estate Walkthrough */}
            <div className="relative w-44 sm:w-52 md:w-56 shrink-0 transform -rotate-10 -translate-y-2 hover:translate-y-[-12px] hover:rotate-0 hover:z-30 transition-all duration-300 z-10 hidden sm:block">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#121316] border-[2px] border-[#121316] px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider shadow-[2px_2px_0px_#121316] z-20 whitespace-nowrap">
                Luxury Real Estate
              </div>
              <div className="rounded-[28px] border-[3px] border-[#121316] bg-[#121316] p-2 shadow-[5px_5px_0px_#121316] overflow-hidden aspect-[9/16]">
                <video
                  src="https://www.digitaleditz.com/realestatevideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>

            {/* Phone 2: Inner Left (Tilted -5deg) - Fine Fragrance Campaign */}
            <div className="relative w-48 sm:w-56 md:w-60 shrink-0 transform -rotate-5 -translate-y-4 hover:translate-y-[-14px] hover:rotate-0 hover:z-30 transition-all duration-300 z-15">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFE500] text-[#121316] border-[2px] border-[#121316] px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider shadow-[2px_2px_0px_#121316] z-20 whitespace-nowrap">
                Haute Perfumery
              </div>
              <div className="rounded-[30px] border-[3px] border-[#121316] bg-[#121316] p-2 shadow-[6px_6px_0px_#121316] overflow-hidden aspect-[9/16]">
                <video
                  src="https://www.digitaleditz.com/perfumevideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
            </div>

            {/* Phone 3: Center (Prominent, Straight, Tallest, Interactive Sound) - Gourmet Burger Launch */}
            <div className="relative w-56 sm:w-64 md:w-72 shrink-0 transform hover:translate-y-[-10px] transition-all duration-300 z-20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#121316] text-[#FFE500] border-[2px] border-[#121316] px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider shadow-[3px_3px_0px_#FFE500] z-30 whitespace-nowrap">
                Viral Product Launch
              </div>
              <div className="rounded-[34px] border-[3.5px] border-[#121316] bg-[#121316] p-2.5 shadow-[8px_8px_0px_#121316] overflow-hidden aspect-[9/16] relative group">
                <video
                  ref={centerVideoRef}
                  src="https://www.digitaleditz.com/burgervideo.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover rounded-[24px]"
                />

                {/* Tap For Sound Overlay Button */}
                <button
                  type="button"
                  onClick={toggleSound}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#121316]/90 hover:bg-[#121316] text-white border-[1.5px] border-white/40 px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 cursor-pointer backdrop-blur-sm shadow-lg transition-transform active:scale-95 z-30"
                >
                  {isMuted ? <VolumeX className="h-3.5 w-3.5 text-[#FFE500]" /> : <Volume2 className="h-3.5 w-3.5 text-[#FFE500]" />}
                  <span>{isMuted ? 'Tap for sound' : 'Sound active'}</span>
                </button>
              </div>
            </div>

            {/* Phone 4: Inner Right (Tilted 5deg) - Le Vora Luxury Handbags */}
            <div className="relative w-48 sm:w-56 md:w-60 shrink-0 transform rotate-5 -translate-y-4 hover:translate-y-[-14px] hover:rotate-0 hover:z-30 transition-all duration-300 z-15">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFE500] text-[#121316] border-[2px] border-[#121316] px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider shadow-[2px_2px_0px_#121316] z-20 whitespace-nowrap">
                Luxury Fashion D2C
              </div>
              <div className="rounded-[30px] border-[3px] border-[#121316] bg-[#121316] p-2 shadow-[6px_6px_0px_#121316] overflow-hidden aspect-[9/16]">
                <video
                  src="https://www.digitaleditz.com/levorabagvideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
            </div>

            {/* Phone 5: Far Right (Tilted 10deg) - Clinical Skincare Routine */}
            <div className="relative w-44 sm:w-52 md:w-56 shrink-0 transform rotate-10 -translate-y-2 hover:translate-y-[-12px] hover:rotate-0 hover:z-30 transition-all duration-300 z-10 hidden sm:block">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#121316] border-[2px] border-[#121316] px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider shadow-[2px_2px_0px_#121316] z-20 whitespace-nowrap">
                Clinical Skincare
              </div>
              <div className="rounded-[28px] border-[3px] border-[#121316] bg-[#121316] p-2 shadow-[5px_5px_0px_#121316] overflow-hidden aspect-[9/16]">
                <video
                  src="https://www.digitaleditz.com/skincarevideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
