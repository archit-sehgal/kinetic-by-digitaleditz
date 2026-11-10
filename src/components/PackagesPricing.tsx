/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PackagesPricingProps {
  onOpenBooking: (packageTier: string) => void;
}

export const PackagesPricing: React.FC<PackagesPricingProps> = ({ onOpenBooking }) => {
  const packages = [
    {
      id: 'starter',
      name: 'STARTER',
      price: '£500',
      period: '/ MONTH',
      isPopular: false,
      description: 'Ideal for independent advisors launching consistent, professional Instagram content.',
      features: [
        '10 Instagram Reels',
        '3 Carousel Posts',
        'Content Strategy',
        'Content Ideas & Hooks',
        'Complete Video Scripts',
        'Professional Video Editing',
        'Content Publishing & Distribution',
      ],
      ctaText: 'GET STARTED',
    },
    {
      id: 'growth',
      name: 'GROWTH',
      price: '£750',
      period: '/ MONTH',
      isPopular: true,
      popularLabel: 'Popular Choice',
      description: 'Built for ambitious practices looking to dominate their local territory and win consistent inquiries.',
      features: [
        '18 Instagram Reels',
        '5 Carousel Posts',
        'Content Strategy',
        'Content Ideas & Hooks',
        'Complete Video Scripts',
        'Professional Video Editing',
        'Content Publishing & Distribution',
      ],
      ctaText: 'GET STARTED',
    },
    {
      id: 'authority',
      name: 'AUTHORITY',
      price: '£1,200',
      period: '/ MONTH',
      isPopular: false,
      description: 'The complete category-leadership engine for leading brokerages and prime agencies.',
      features: [
        '25 Instagram Reels',
        '10 Carousel Posts',
        'Complete Brand Content Strategy',
        'Content Ideas & Hooks',
        'Complete Video Scripts',
        'Professional Video Editing',
        'Content Publishing & Distribution',
      ],
      ctaText: 'GET STARTED',
    },
  ];

  return (
    <section id="packages" className="border-b-[2.5px] border-[#121316] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            Transparent Monthly Retainers
          </div>
          <h2 className="mt-3 font-condensed text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#121316]">
            CONSISTENT CONTENT.{' '}
            <span className="bg-[#FFE500] px-3 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              ONE LESS THING TO WORRY ABOUT.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            Choose the content plan that matches your business ambitions. We take care of the planning, creation and publishing.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border-[3px] border-[#121316] p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                pkg.isPopular
                  ? 'bg-[#FAF8F5] shadow-[8px_8px_0px_#FFE500] ring-2 ring-[#FFE500] md:-translate-y-2'
                  : 'bg-white shadow-[6px_6px_0px_#121316]'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#121316] text-[#FFE500] border-[2px] border-[#121316] px-3 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_#FFE500]">
                  {pkg.popularLabel}
                </div>
              )}

              <div>
                {/* Title & Price */}
                <div className="border-b border-neutral-200 pb-5">
                  <h3 className="font-condensed text-2xl font-black uppercase text-[#121316]">
                    {pkg.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="font-condensed text-5xl font-black text-[#121316] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
                      {pkg.period}
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-6">
                  <div className="text-[11px] font-mono font-bold uppercase text-neutral-400 mb-3 tracking-wider">
                    Included In Package:
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-semibold">
                        <div className="h-4 w-4 rounded bg-[#FFE500] border border-[#121316] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-[#121316] stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <button
                  onClick={() => onOpenBooking(pkg.name)}
                  className={`w-full py-4 rounded-xl border-[2px] border-[#121316] text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'btn-neo-yellow'
                      : 'bg-[#121316] text-white hover:bg-neutral-800 shadow-[3px_3px_0px_#121316]'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Reassurance Statement Underneath */}
        <div className="mt-12 text-center">
          <p className="font-condensed text-2xl sm:text-3xl font-black uppercase text-[#121316] tracking-tight">
            “You record. We take care of everything else.”
          </p>
          <p className="mt-2 text-xs font-mono text-neutral-600 max-w-xl mx-auto">
            All prices in GBP. Rolling monthly agreement. No long-term lock-in. 100% transparent scope.
          </p>
        </div>
      </div>
    </section>
  );
};
