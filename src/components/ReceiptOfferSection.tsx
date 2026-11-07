/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Calendar, Video, Shield } from 'lucide-react';

interface ReceiptOfferSectionProps {
  onOpenBooking: () => void;
}

export const ReceiptOfferSection: React.FC<ReceiptOfferSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-20 md:py-28 paper-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Physical Supermarket Receipt Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white border-[2.5px] border-[#121316] shadow-[8px_8px_0px_#121316] p-6 sm:p-7 relative font-mono text-xs rotate-[-1deg] hover:rotate-0 transition-transform">
              {/* Receipt Header */}
              <div className="text-center pb-4 border-b-2 border-dashed border-[#121316]">
                <div className="font-condensed text-3xl font-black uppercase text-[#121316] tracking-tight">
                  SocialXGrowth Sprint
                </div>
                <div className="text-[11px] text-neutral-600 mt-0.5">
                  1 × Monthly Client Partnership · Directed by Archit
                </div>
              </div>

              {/* Itemized Deliverables */}
              <div className="py-5 space-y-2.5 text-xs text-neutral-800 border-b-2 border-dashed border-[#121316]">
                <div className="flex justify-between">
                  <span>30-min strategy discovery</span>
                  <span className="font-bold text-emerald-700">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>12–16 teleprompter scripts</span>
                  <span className="font-bold">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>60-min guided recording shoot</span>
                  <span className="font-bold">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>bionic kinetic typography</span>
                  <span className="font-bold">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>custom audio hits & sound FX</span>
                  <span className="font-bold">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>paid media testing matrix</span>
                  <span className="font-bold">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>comment-to-DM inbound funnel</span>
                  <span className="font-bold">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>category territory exclusivity</span>
                  <span className="font-bold">✓</span>
                </div>
              </div>

              {/* Discovery Pricing Callout */}
              <div className="py-4 border-b-2 border-dashed border-[#121316]">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-bold uppercase text-[11px] text-neutral-500">First Step:</span>
                    <div className="font-condensed text-2xl font-black text-[#121316]">
                      Strategy Discovery
                    </div>
                  </div>
                  <div className="font-condensed text-3xl font-black text-[#121316] bg-[#FFE500] px-3 py-0.5 rounded border border-[#121316] shadow-[2px_2px_0px_#121316]">
                    Free
                  </div>
                </div>
                <div className="text-[10px] text-neutral-500 mt-1">
                  Duration: 30 minutes · 1-on-1 with Archit Sehgal
                </div>
              </div>

              {/* Receipt Barcode Graphic */}
              <div className="pt-5 text-center">
                <div className="h-10 flex items-center justify-center gap-1 opacity-80 mb-2">
                  {[2, 4, 1, 3, 5, 2, 6, 1, 4, 2, 5, 1, 3, 2, 4, 1, 5, 3, 2, 4, 1, 3, 5, 2, 4].map((h, i) => (
                    <div
                      key={i}
                      className="bg-[#121316]"
                      style={{
                        width: `${(i % 3) + 1.5}px`,
                        height: `${24 + h * 2}px`,
                      }}
                    />
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                  SOCIALXGROWTH · DISCOVERY SESSION · NO OBLIGATION
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-7">
            <div className="inline-block bg-[#FFE500] text-[#121316] font-script text-xl font-bold px-3.5 py-1 border-[2px] border-[#121316] shadow-[2.5px_2.5px_0px_#121316] -rotate-1 mb-3">
              One Monthly Session · Full Studio Engine
            </div>

            <h2 className="font-condensed text-4xl sm:text-6xl font-black tracking-tight text-[#121316] uppercase leading-[0.95]">
              SET IT GOING,{' '}
              <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-0.5 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316] my-1 rotate-[-0.5deg]">
                COME BACK TO A PIPELINE.
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-neutral-800 font-medium leading-relaxed max-w-xl">
              You record guided takes for 60 minutes. Our studio scripts, edits, animations, and deploys everything across organic reels, paid Meta ads, and automated comment-to-DM funnels.
            </p>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="btn-neo-yellow w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-base font-black uppercase tracking-wider cursor-pointer"
              >
                <span>Book 30-Min Strategy Call</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>
              <p className="mt-2 text-xs font-mono text-neutral-600">
                Direct access to Calendly · Choose your date & time slot in 30 seconds
              </p>
            </div>

            {/* 3 Tech Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-neutral-800">
              <div className="flex items-center gap-2 rounded-lg border-[1.5px] border-[#121316] bg-white px-3 py-2 shadow-[2px_2px_0px_#121316]">
                <Calendar className="h-4 w-4 text-[#121316]" />
                <span>Calendly 30-Min Direct Schedule</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border-[1.5px] border-[#121316] bg-white px-3 py-2 shadow-[2px_2px_0px_#121316]">
                <Video className="h-4 w-4 text-[#121316]" />
                <span>Google Meet Private Room</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border-[1.5px] border-[#121316] bg-white px-3 py-2 shadow-[2px_2px_0px_#121316]">
                <Shield className="h-4 w-4 text-[#121316]" />
                <span>Strict 1-on-1 Confidentiality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
