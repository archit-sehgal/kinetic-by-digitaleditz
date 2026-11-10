import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SafariSafeVideo } from './SafariSafeVideo';

interface ExecutionPipelineProps {
  onOpenBooking: () => void;
}

export const ExecutionPipeline: React.FC<ExecutionPipelineProps> = ({ onOpenBooking }) => {
  return (
    <section id="pipeline" className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-20 lg:py-28 paper-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-[#121316] font-mono text-xs font-bold bg-[#FFE500] text-[#121316]">
              02
            </span>
            <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider line-through decoration-[#121316] decoration-2">
              “Our partners don't have time to film, edit, or manage social media.”
            </span>
          </div>

          <h2 className="mt-4 font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#121316] leading-[0.95]">
            YOU RECORD <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-0.5 border-[2.5px] border-[#121316] my-1 shadow-[4px_4px_0px_#121316]">60 MINUTES.</span> WE RUN THE ENGINE.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-700 max-w-2xl font-medium leading-relaxed">
            No editing software. No guessing compliance rules. You record guided takes during a single 60-minute directed monthly session with our studio director, and our team handles market research, FCA-safe scriptwriting, kinetic post-production, targeted UK paid distribution, and inbound lead routing.
          </p>
        </div>

        {/* Terminal + Video Phone Mockup Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Terminal Console Card */}
          <div className="lg:col-span-7 rounded-2xl border-[2.5px] border-[#121316] bg-[#121316] p-6 sm:p-7 text-white shadow-[6px_6px_0px_#121316]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-700 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FFE500] inline-block border border-black/40" />
                <span className="h-3 w-3 rounded-full bg-[#FFE500]/60 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 font-bold text-neutral-200">socialxgrowth · ~/uk-client-pipeline</span>
              </div>
              <span className="text-[#FFE500] font-bold">status: active</span>
            </div>

            {/* Terminal Checklist */}
            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Write 12–16 UK market & property scripts</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">hook in 1.2s · FCA safe</span>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Guided 60-min directed recording</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">60 min / month</span>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Bionic typography, rate cuts & local overlays</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">cuts every 1.5s</span>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Modular paid ad set launch in UK regions</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">Meta & TikTok Ads</span>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded bg-[#FFE500] text-[#121316] flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span className="font-bold text-neutral-200">Comment-to-DM automated DIP / valuation funnel</span>
                </div>
                <span className="text-[11px] text-[#FFE500]">Calendly routing</span>
              </div>
            </div>

            {/* Output Bar */}
            <div className="mt-6 p-3.5 rounded-lg bg-black/90 border border-neutral-700 font-mono text-xs text-neutral-300 flex items-center justify-between">
              <span className="text-[#FFE500]">&gt; uk_client_pipeline.mp4 · qualified bookings</span>
              <span className="text-emerald-400 font-bold">100% Studio Run</span>
            </div>
          </div>

          {/* Right: Phone Frame with SafariSafeVideo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFE500] text-[#121316] border-[2px] border-[#121316] px-3.5 py-0.5 rounded-full text-xs font-mono font-black uppercase tracking-wider shadow-[3px_3px_0px_#121316] z-20 whitespace-nowrap">
                Live Video Output
              </div>
              <div className="rounded-[32px] border-[3.5px] border-[#121316] bg-[#121316] p-2.5 shadow-[8px_8px_0px_#121316] overflow-hidden aspect-[9/16]">
                <SafariSafeVideo
                  src="/videos/talking-head-reel-1.mp4"
                  className="rounded-[22px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Sequence */}
        <div className="mt-14 pt-10 border-t-[2px] border-[#121316]/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch text-center">
            {/* Step 1 */}
            <div className="paper-card rounded-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-black text-neutral-500 mb-2">STEP 01</div>
                <div className="inline-block bg-[#121316] text-[#FFE500] font-condensed text-2xl font-black uppercase px-3.5 py-1 rounded">
                  BOOK 30-MIN STRATEGY CALL
                </div>
                <p className="mt-3.5 text-xs text-neutral-700 font-medium leading-relaxed">
                  Choose a slot on Archit's calendar. We audit your current online footprint, analyze competitor hooks in your UK territory, and outline your content roadmap.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="paper-card rounded-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-black text-neutral-500 mb-2">STEP 02</div>
                <div className="inline-block bg-[#FFE500] text-[#121316] font-condensed text-2xl font-black uppercase px-3.5 py-1 rounded border border-[#121316]">
                  RECORD 60 MINUTES / MONTH
                </div>
                <p className="mt-3.5 text-xs text-neutral-700 font-medium leading-relaxed">
                  Shoot guided video takes with real-time teleprompter lines and director coaching. Zero setup hassle, zero video editing required from you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="paper-card rounded-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-black text-neutral-500 mb-2">STEP 03</div>
                <div className="inline-block bg-[#121316] text-white font-condensed text-2xl font-black uppercase px-3.5 py-1 rounded">
                  CLOSE INBOUND CLIENT LEADS
                </div>
                <p className="mt-3.5 text-xs text-neutral-700 font-medium leading-relaxed">
                  We deploy your videos across platforms, run regional ad sets, and automate comment-to-DM routing so qualified clients land directly in your calendar.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenBooking}
              className="btn-neo-yellow inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider cursor-pointer"
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

