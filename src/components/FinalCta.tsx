/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  const whatsappUrl = "https://api.whatsapp.com/send?text=Hi%20SocialXGrowth,%20I%20am%20interested%20in%20your%20Instagram%20content%20marketing%20packages%20for%20my%20practice.";

  return (
    <section className="border-b-[2.5px] border-[#121316] bg-[#FFE500] py-16 sm:py-20 lg:py-24 text-[#121316]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle kicker */}
        <div className="inline-block bg-[#121316] text-[#FFE500] px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-black shadow-[2px_2px_0px_#121316]">
          Ready to Start?
        </div>

        {/* Headline */}
        <h2 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#121316] leading-[0.95] max-w-4xl mx-auto">
          YOUR NEXT CLIENT COULD BE WATCHING YOUR CONTENT.
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-neutral-900 font-semibold max-w-2xl mx-auto leading-relaxed">
          Let's turn your industry expertise into a brand people recognise, trust and remember.
        </p>

        {/* Dual Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border-[2.5px] border-[#121316] bg-[#121316] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_#121316] hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>LET'S BUILD YOUR ONLINE PRESENCE</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl border-[2.5px] border-[#121316] bg-white text-[#121316] text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_#121316] hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Reassurance text */}
        <div className="mt-8 text-xs font-mono text-neutral-800 font-medium">
          No long-term contracts · Strategy & scripts delivered within 5 days · Directed by Archit Sehgal
        </div>
      </div>
    </section>
  );
};
