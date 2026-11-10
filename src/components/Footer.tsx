/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { CALENDLY_URL } from './CalendlyEmbed';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const whatsappUrl = "https://api.whatsapp.com/send?text=Hi%20SocialXGrowth,%20I'm%20interested%20in%20your%20Instagram%20content%20marketing%20packages.";

  return (
    <footer className="bg-[#121316] text-white py-16 border-t-[2.5px] border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-800">
          <div>
            <a href="#top" className="font-condensed text-3xl font-black uppercase text-white tracking-tight">
              SOCIALX<span className="text-[#FFE500]">GROWTH</span>
            </a>
            <p className="mt-2.5 text-xs font-mono text-neutral-400 max-w-md leading-relaxed">
              Instagram content marketing for ambitious mortgage, insurance and real estate professionals across the United Kingdom. We build the strategy, write the scripts, edit and publish. You just record.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono font-bold">
            <a href="#what-we-do" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              What We Do
            </a>
            <a href="#how-it-works" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              How It Works
            </a>
            <a href="#industries" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              Industries
            </a>
            <a href="#packages" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              Packages
            </a>
            <a href="#case-studies" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              Case Studies
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE500] hover:underline inline-flex items-center gap-1"
            >
              <span>Schedule Call</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} SocialXGrowth. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Specialist UK Content Marketing Agency</span>
            <span>·</span>
            <span>Directed by Archit Sehgal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
