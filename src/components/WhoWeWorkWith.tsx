/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WhoWeWorkWithProps {
  onOpenBooking: () => void;
}

export const WhoWeWorkWith: React.FC<WhoWeWorkWithProps> = ({ onOpenBooking }) => {
  const industries = [
    {
      id: 'mortgage',
      title: 'MORTGAGE BROKERS',
      subtitle: 'UK CeMAP Licensed Advisors & Practices',
      description: 'Turn your mortgage knowledge into content that answers questions, builds credibility and helps potential borrowers discover your business.',
      image: '/src/assets/images/uk_mortgage_broker_1794314258974.jpg',
      contentAngles: [
        'First-Time Buyer DIP Explainers',
        'Fixed vs Tracker Rate Comparisons',
        'Buy-to-Let Stamp Duty Nuances',
        'Remortgage Deadlines & Traps',
      ],
      deliverableBadge: 'FCA Compliance Conscious',
    },
    {
      id: 'insurance',
      title: 'INSURANCE BROKERS',
      subtitle: 'UK Commercial & Personal Protection Brokers',
      description: 'Make insurance easier to understand. Educate your audience, communicate your expertise and build trust before potential clients even contact you.',
      image: '/src/assets/images/uk_insurance_broker_1794314259675.jpg',
      contentAngles: [
        'Income Protection vs Critical Illness',
        'Key Person Cover for UK Directors',
        'Commercial Liability Policy Gaps',
        'Real Claim Scenario Breakdowns',
      ],
      deliverableBadge: 'Clear Risk Explanations',
    },
    {
      id: 'real_estate',
      title: 'REAL ESTATE PROFESSIONALS',
      subtitle: 'UK Estate Agents, Negotiators & Property Finders',
      description: 'Showcase your market knowledge, property expertise and professional insights through content that keeps your brand visible and relevant.',
      image: '/src/assets/images/uk_real_estate_agent_1794314259894.jpg',
      contentAngles: [
        'Local Market Price Trend Updates',
        'Vendor Advice to Win Sole Instructions',
        'Architectural Property Walkthroughs',
        'Off-Market UK Sourcing Insights',
      ],
      deliverableBadge: 'Local Territory Authority',
    },
  ];

  return (
    <section id="industries" className="border-b-[2.5px] border-[#121316] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            Target Audience Focus
          </div>
          <h2 className="mt-3 font-condensed text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#121316] leading-[0.98]">
            BUILT FOR PROFESSIONALS WHO KNOW THEIR INDUSTRY,{' '}
            <span className="bg-[#FFE500] px-2 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              BUT NEED HELP SHOWING IT ONLINE.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            You are already great at what you do offline. We give your expertise the modern digital presence it deserves so ideal clients find and choose you first.
          </p>
        </div>

        {/* 3 Industry Cards with Real Photography */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border-[2.5px] border-[#121316] bg-[#FAF8F5] overflow-hidden shadow-[6px_6px_0px_#121316] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Real Photography Asset */}
                <div className="relative aspect-[4/3] border-b-[2px] border-[#121316] overflow-hidden bg-neutral-200">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#121316] text-[#FFE500] px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border border-black shadow-[2px_2px_0px_#121316]">
                    {card.deliverableBadge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-condensed text-2xl sm:text-3xl font-black uppercase text-[#121316] leading-tight">
                    {card.title}
                  </h3>
                  <div className="font-mono text-xs font-bold text-[#855800] mt-1">
                    {card.subtitle}
                  </div>

                  <p className="mt-3 text-sm text-neutral-700 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* Typical Content Topics */}
                  <div className="mt-5 pt-4 border-t border-neutral-300">
                    <div className="text-[11px] font-mono font-bold uppercase text-neutral-500 mb-2">
                      Content Topics We Script For You:
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-800 font-medium">
                      {card.contentAngles.map((angle, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#121316]" />
                          <span>{angle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom CTA trigger */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl border-[2px] border-[#121316] bg-white hover:bg-[#FFE500] text-xs font-bold uppercase tracking-wider text-[#121316] shadow-[2px_2px_0px_#121316] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Build Strategy for this Niche</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
