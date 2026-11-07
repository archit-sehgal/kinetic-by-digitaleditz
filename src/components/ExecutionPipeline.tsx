/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ExecutionPipelineProps {
  onOpenBooking: () => void;
}

export const ExecutionPipeline: React.FC<ExecutionPipelineProps> = ({ onOpenBooking }) => {
  return (
    <section id="pipeline" className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-20 md:py-28 paper-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-[#121316] font-mono text-xs font-bold bg-[#FFE500] text-[#121316]">
              02
            </span>
            <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider line-through decoration-[#121316] decoration-2">
              “Our team doesn't have bandwidth for video.”
            </span>
          </div>

          <h2 className="mt-4 font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#121316] leading-[0.95]">
            YOU RECORD <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-0.5 border-[2.5px] border-[#121316] my-1 shadow-[4px_4px_0px_#121316]">60 MINUTES.</span> WE RUN THE ENGINE.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-700 max-w-2xl font-medium leading-relaxed">
            No video editing software. No learning complex advertising dashboards. You record guided takes during a single directed monthly recording session, and our studio handles scripting, editing, ad sets, and inbound funnel routing.
          </p>
        </div>

        {/* Terminal + Video Phone Mockup Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Terminal Console Card */}
          <div className="lg:col-span-7 rounded-2xl border-[2.5px] border-[#121316] bg-[#121316] p-6 text-white shadow-[6px_6px_0px_#121316]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-700 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FFE500] inline-block border border-black/40" />
                <span className="h-3 w-3 rounded-full bg-[#FFE500]/60 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 font-bold text-neutral-200">socialxgrowth · ~/growth-sprint</span>
              </div>
              <span className="text-[#FFE500] font-bold">status: active</span>
            </div>

            {/* Terminal Checklist */}
            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Write 12–16 category scripts</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">hook in 1.2s</span>
              </div>

              <div className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Guided 60-min directed recording</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">60 min / month</span>
              </div>

              <div className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Bionic typography & micro-cuts</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">cuts every 1.5s</span>
              </div>

              <div className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Modular paid ad set launch</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">Meta Ads Manager</span>
              </div>

              <div className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Comment-to-DM automated funnel</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">ManyChat routing</span>
              </div>
            </div>

            {/* Output Bar */}
            <div className="mt-6 p-3 rounded-lg bg-black/90 border border-neutral-700 font-mono text-xs text-neutral-300 flex items-center justify-between">
              <span className="text-[#FFE500]">&gt; campaign_ready.mp4 + leads · client pipeline</span>
              <span className="text-emerald-400 font-bold">100% Studio Run</span>
            </div>
          </div>

          {/* Right: Phone Frame with Live Video Reel */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFE500] text-[#121316] border-[2px] border-[#121316] px-3.5 py-0.5 rounded-full text-xs font-mono font-black uppercase tracking-wider shadow-[3px_3px_0px_#121316] z-20 whitespace-nowrap">
                Live Video Output
              </div>
              <div className="rounded-[32px] border-[3.5px] border-[#121316] bg-[#121316] p-2.5 shadow-[8px_8px_0px_#121316] overflow-hidden aspect-[9/16]">
                <video
                  src="/videos/talking-head-reel-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Sequence */}
        <div className="mt-14 pt-8 border-t-[2px] border-[#121316]/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
            {/* Step 1 */}
            <div className="paper-card rounded-xl p-6 relative">
              <div className="font-mono text-xs font-black text-neutral-500 mb-1">STEP 01</div>
              <div className="inline-block bg-[#121316] text-[#FFE500] font-condensed text-2xl font-black uppercase px-3 py-0.5 rounded">
                BOOK 30-MIN CALL
              </div>
              <p className="mt-3 text-xs text-neutral-700 font-medium leading-relaxed">
                Choose a slot on Archit's calendar. We audit your space and plan your scripts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="paper-card rounded-xl p-6 relative">
              <div className="font-mono text-xs font-black text-neutral-500 mb-1">STEP 02</div>
              <div className="inline-block bg-[#FFE500] text-[#121316] font-condensed text-2xl font-black uppercase px-3 py-0.5 rounded border border-[#121316]">
                RECORD 60 MINUTES
              </div>
              <p className="mt-3 text-xs text-neutral-700 font-medium leading-relaxed">
                Shoot guided takes with teleprompter directives once a month. Zero editing needed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="paper-card rounded-xl p-6 relative">
              <div className="font-mono text-xs font-black text-neutral-500 mb-1">STEP 03</div>
              <div className="inline-block bg-[#121316] text-white font-condensed text-2xl font-black uppercase px-3 py-0.5 rounded">
                CLOSE INBOUND LEADS
              </div>
              <p className="mt-3 text-xs text-neutral-700 font-medium leading-relaxed">
                We deploy the reels, run paid ad sets, and automate comment-to-DM calendar bookings.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenBooking}
              className="btn-neo-yellow inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              <span>Schedule 30-Minute Consultation</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
