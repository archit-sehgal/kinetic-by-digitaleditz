/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SafariSafeVideo } from './SafariSafeVideo';

interface HeroProps {
  onOpenBooking: (packageTier?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Supporting Target Text */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#121316] mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFE500] border border-[#121316]" />
              <span>Content marketing for ambitious mortgage, insurance and real estate professionals across the UK</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#121316] leading-[0.95]">
              YOU BUILD THE BUSINESS.{' '}
              <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-1 border-[2.5px] border-[#121316] my-1 shadow-[4px_4px_0px_#121316]">
                WE BUILD YOUR ONLINE PRESENCE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-neutral-800 font-medium leading-relaxed max-w-2xl">
              Turn your industry expertise into content that gets noticed, builds trust and brings the right people to your business.
              We handle your content strategy, ideas, scripts, editing and publishing. All you have to do is record.
            </p>

            {/* Key Value Proposition Callout */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-[#121316]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero scriptwriting or editing required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>60 minutes of recording per month</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Tailored for UK professional regulations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Done-for-you publishing & distribution</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="btn-neo-yellow inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-sm sm:text-base font-black uppercase tracking-wider cursor-pointer"
              >
                <span>Get Your Content Strategy</span>
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </button>

              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-[2.5px] border-[#121316] bg-white px-6 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-[#121316] shadow-[4px_4px_0px_#121316] hover:bg-neutral-50 transition-all cursor-pointer text-center"
              >
                <span>Explore Packages</span>
              </a>
            </div>

            {/* Quiet Reassurance Marker */}
            <div className="mt-6 text-xs font-mono text-neutral-600 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>We build your content strategy, create your content and grow your online presence. You just record.</span>
            </div>
          </div>

          {/* Right Column: Visual of Recording + Finished Reel Relationship */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border-[3px] border-[#121316] bg-white p-3 sm:p-4 shadow-[8px_8px_0px_#121316]">
              {/* Studio Recording Photography */}
              <div className="relative overflow-hidden rounded-xl border-[2px] border-[#121316] aspect-[16/10] bg-neutral-100">
                <img
                  src="/src/assets/images/hero_creator_recording_1794314258439.jpg"
                  alt="UK professional recording video content with studio smartphone tripod"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#121316] text-[#FFE500] px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase border border-black flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span>STEP 1: YOU RECORD (60 MINS)</span>
                </div>
              </div>

              {/* Overlapping Finished Instagram Reel Preview */}
              <div className="mt-3 bg-[#FAF8F5] border-[2px] border-[#121316] rounded-xl p-3 flex items-center gap-4">
                <div className="w-20 sm:w-24 shrink-0 rounded-lg border-[2px] border-[#121316] overflow-hidden aspect-[9/16] bg-black shadow-[2px_2px_0px_#121316]">
                  <SafariSafeVideo
                    src="/videos/talking-head-reel-2.mp4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-[#FFE500] text-[#121316] px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider border border-black mb-1">
                    STEP 2: WE EDIT & PUBLISH
                  </div>
                  <h4 className="font-condensed text-base sm:text-lg font-black uppercase text-[#121316] leading-tight">
                    Finished High-Impact Instagram Reel
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-snug">
                    Bionic captions, color grade, sound design & scheduling handled entirely for you.
                  </p>
                </div>
              </div>

              {/* Tag below image */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono font-bold text-neutral-600 px-1">
                <span>Done-for-you UK Instagram Growth</span>
                <span className="text-[#121316]">SocialXGrowth Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
