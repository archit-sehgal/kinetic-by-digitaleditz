/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Calculator, Landmark, ShieldCheck, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { calculateInstagramGrowth, NICHE_BENCHMARKS } from '../utils/calculator';

interface PracticeCalculatorProps {
  onOpenBooking: () => void;
}

export const PracticeCalculator: React.FC<PracticeCalculatorProps> = ({ onOpenBooking }) => {
  const [selectedNiche, setSelectedNiche] = useState<string>('uk_mortgage_broker');
  const [videoCount, setVideoCount] = useState<number>(14);
  const [region, setRegion] = useState<string>('london_southeast');

  const projection = calculateInstagramGrowth(3500, selectedNiche, videoCount);

  // Region multiplier for UK property / advisory values
  const regionMultipliers: Record<string, { label: string; multiplier: number }> = {
    london_southeast: { label: 'London & South East', multiplier: 1.35 },
    midlands: { label: 'Midlands & Central', multiplier: 1.0 },
    north_west: { label: 'North West & Yorkshire', multiplier: 0.95 },
    scotland_wales: { label: 'Scotland, Wales & Northern Ireland', multiplier: 0.9 },
    south_west: { label: 'South West & East Anglia', multiplier: 1.1 },
  };

  const currentMultiplier = regionMultipliers[region]?.multiplier || 1.0;
  const adjustedPipeline = Math.round(projection.projectedPipelineValue * currentMultiplier);

  return (
    <section className="border-b-[2.5px] border-[#121316] bg-[#FAF8F5] py-20 lg:py-28 paper-grid-bg relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-[#FFE500] text-[#121316] font-script text-xl font-bold px-3.5 py-1 border-[2px] border-[#121316] shadow-[2.5px_2.5px_0px_#121316] -rotate-1 mb-3">
            Interactive Forecast
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#121316] leading-[0.95]">
            UK PRACTICE{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-3.5 py-0.5 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316]">
              CLIENT INQUIRY CALCULATOR
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-medium leading-relaxed">
            Test how consistent, FCA-safe video content marketing compounds into qualified DIP applications, protection inquiries, and sole-agency instructions across your UK territory.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Controls Card */}
          <div className="lg:col-span-6 rounded-2xl border-[2.5px] border-[#121316] bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#121316] flex flex-col justify-between">
            <div>
              {/* Sector Selection */}
              <label className="block font-mono text-xs font-bold text-[#121316] uppercase tracking-wider mb-3">
                1. Select Your Practice Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setSelectedNiche('uk_mortgage_broker')}
                  className={`p-3 rounded-xl border-[2px] text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedNiche === 'uk_mortgage_broker'
                      ? 'border-[#121316] bg-[#FFE500] shadow-[2px_2px_0px_#121316]'
                      : 'border-neutral-300 hover:border-black bg-[#FAF8F5]'
                  }`}
                >
                  <Landmark className="h-5 w-5 mb-2 text-[#121316]" />
                  <span className="font-condensed text-sm font-bold uppercase leading-tight text-[#121316]">
                    Mortgage Broker
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedNiche('uk_insurance_broker')}
                  className={`p-3 rounded-xl border-[2px] text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedNiche === 'uk_insurance_broker'
                      ? 'border-[#121316] bg-[#FFE500] shadow-[2px_2px_0px_#121316]'
                      : 'border-neutral-300 hover:border-black bg-[#FAF8F5]'
                  }`}
                >
                  <ShieldCheck className="h-5 w-5 mb-2 text-[#121316]" />
                  <span className="font-condensed text-sm font-bold uppercase leading-tight text-[#121316]">
                    Insurance Broker
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedNiche('uk_real_estate')}
                  className={`p-3 rounded-xl border-[2px] text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedNiche === 'uk_real_estate'
                      ? 'border-[#121316] bg-[#FFE500] shadow-[2px_2px_0px_#121316]'
                      : 'border-neutral-300 hover:border-black bg-[#FAF8F5]'
                  }`}
                >
                  <Building2 className="h-5 w-5 mb-2 text-[#121316]" />
                  <span className="font-condensed text-sm font-bold uppercase leading-tight text-[#121316]">
                    Estate Agent
                  </span>
                </button>
              </div>

              {/* Monthly Video Cadence Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="font-mono text-xs font-bold text-[#121316] uppercase tracking-wider">
                    2. Monthly Video Output
                  </label>
                  <span className="font-mono text-sm font-black text-black bg-[#FFE500] px-2 py-0.5 rounded border border-black">
                    {videoCount} Videos / Mo
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="24"
                  step="2"
                  value={videoCount}
                  onChange={(e) => setVideoCount(Number(e.target.value))}
                  className="w-full accent-[#121316] cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[10px] text-neutral-500 mt-1">
                  <span>8 (Essential)</span>
                  <span>14 (Studio Sprint Standard)</span>
                  <span>24 (Market Leader)</span>
                </div>
              </div>

              {/* UK Region Selector */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#121316] uppercase tracking-wider mb-2">
                  3. UK Target Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full p-3 rounded-xl border-[2px] border-[#121316] bg-[#FAF8F5] font-mono text-xs font-bold text-[#121316] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
                >
                  {Object.entries(regionMultipliers).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
              *Calibrated using real UK financial promotion retention rates & 2026 housing market averages.
            </div>
          </div>

          {/* Forecast Output Card */}
          <div className="lg:col-span-6 rounded-2xl border-[2.5px] border-[#121316] bg-[#121316] p-6 sm:p-8 text-white shadow-[6px_6px_0px_#FFE500] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="font-mono text-xs font-bold text-[#FFE500] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Estimated Monthly Impact
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">Live Simulation</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/90">
                  <div className="font-condensed text-3xl sm:text-4xl font-black text-white">
                    {projection.projectedMonthlyReach.toLocaleString()}
                  </div>
                  <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider mt-1">
                    Targeted UK Reach
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/90">
                  <div className="font-condensed text-3xl sm:text-4xl font-black text-[#FFE500]">
                    {projection.projectedMonthlyQualifiedLeads}–{Math.round(projection.projectedMonthlyQualifiedLeads * 1.5)}
                  </div>
                  <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider mt-1">
                    Qualified Inquiries / Mo
                  </div>
                </div>
              </div>

              {/* Pipeline Value Box */}
              <div className="mt-6 p-4 rounded-xl border border-[#FFE500]/40 bg-[#FFE500]/10 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-neutral-300 uppercase tracking-wider">
                    Est. Monthly Pipeline Generated
                  </div>
                  <div className="font-condensed text-4xl sm:text-5xl font-black text-[#FFE500]">
                    £{adjustedPipeline.toLocaleString()}
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-[#FFE500] shrink-0" />
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="w-full btn-neo-yellow inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider cursor-pointer"
              >
                <span>Claim Your Territory on a 30-Min Call</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>
              <div className="mt-2 text-center text-[10px] font-mono text-neutral-400">
                100% Free · 1-on-1 with Archit Sehgal · UK Practice Confidentiality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
