/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const caseStudies = [
    {
      id: 'pushti',
      client: 'PUSHTI TURF & FARMS',
      scope: 'Demand & Conversion System Launch',
      metrics: [
        { label: 'Total Reach', value: '1M+' },
        { label: 'Verified Inbound Leads', value: '1,000+' },
        { label: 'Peak Campaign ROAS', value: '~700%' },
      ],
      description: 'End-to-end digital acquisition launch combining paid creative testing, landing page architecture, and automated qualification.',
      category: 'Commercial Leisure & Hospitality',
    },
    {
      id: 'kapahi',
      client: 'KAPAHI PROPERTIES',
      scope: 'Real Estate Lead Generation System',
      metrics: [
        { label: 'Inbound Lead Growth', value: '3X' },
        { label: 'Qualified Pipeline', value: '₹45Cr+' },
        { label: 'Target Market', value: 'Luxury Property' },
      ],
      description: 'High-intent digital lead generation system targeting high-net-worth real estate buyers and institutional investors.',
      category: 'Real Estate & Land Acquisition',
    },
    {
      id: 'kashmir_ply',
      client: 'KASHMIR PLY CO.',
      scope: 'B2B Lead Generation & Brand Growth',
      metrics: [
        { label: 'B2B Lead Growth', value: '10X' },
        { label: 'Verified Dealer Network', value: '150+' },
        { label: 'Channel Expansion', value: 'Multi-Region' },
      ],
      description: 'B2B distributor outreach and trade brand repositioning that expanded regional dealer and contractor acquisition.',
      category: 'B2B Building Materials & Manufacturing',
    },
    {
      id: 'jammu',
      client: 'DISTRICT ADMINISTRATION JAMMU',
      scope: 'Public Awareness & Engagement Campaign',
      metrics: [
        { label: 'Citizens Reached', value: '1M+' },
        { label: 'Engagement Increase', value: '+58%' },
        { label: 'Initiative Type', value: 'Public Outreach' },
      ],
      description: 'Mass-reach civic communication and digital awareness campaign delivering vital administrative information at scale.',
      category: 'Public Sector & Civic Engagement',
    },
  ];

  return (
    <section id="case-studies" className="border-b-[2.5px] border-[#121316] bg-[#121316] text-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFE500]">
            Track Record & Delivery Background
          </div>
          <h2 className="mt-3 font-condensed text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.98]">
            EXPERIENCE THAT GOES{' '}
            <span className="bg-[#FFE500] text-[#121316] px-2 py-0.5 border-[2px] border-black inline-block">
              BEYOND CONTENT.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-medium leading-relaxed">
            SocialXGrowth is built on practical experience in digital marketing, brand building and business growth.
          </p>
        </div>

        {/* Clear Disclaimer Note */}
        <div className="mt-8 rounded-xl border border-neutral-700 bg-neutral-900/80 p-4 sm:p-5 flex items-start gap-3.5 text-xs font-mono text-neutral-300">
          <Info className="h-5 w-5 text-[#FFE500] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-white uppercase tracking-wider">Historical Agency Portfolio Note:</span>{' '}
            These projects represent broader digital marketing, paid acquisition and public awareness campaigns delivered by our founding agency team. They illustrate our foundational experience in marketing strategy and are clearly distinguished from our dedicated Instagram content marketing packages.
          </div>
        </div>

        {/* 4 Case Study Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl border-[2px] border-neutral-700 bg-[#FAF8F5] p-6 text-[#121316] shadow-[5px_5px_0px_#FFE500] flex flex-col justify-between hover:border-[#FFE500] transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-600">
                    {cs.category}
                  </span>
                  <span className="inline-block bg-[#121316] text-[#FFE500] px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase">
                    Agency Case Study
                  </span>
                </div>

                <h3 className="mt-3 font-condensed text-2xl sm:text-3xl font-black uppercase text-[#121316] leading-tight">
                  {cs.client}
                </h3>
                <div className="font-mono text-xs font-bold text-[#855800] mt-0.5">
                  {cs.scope}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {cs.description}
                </p>

                {/* Metrics Grid */}
                <div className="mt-5 grid grid-cols-3 gap-2 p-3 bg-white rounded-xl border border-neutral-300">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-condensed text-xl sm:text-2xl font-black text-[#121316] leading-tight">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono font-bold uppercase text-neutral-500 mt-0.5 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-mono font-bold text-[#121316]">
                <span>Proven Execution Framework</span>
                <button
                  onClick={onOpenBooking}
                  className="hover:underline inline-flex items-center gap-1 text-[#855800] cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
