/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CALENDLY_URL } from './CalendlyEmbed';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#121316] text-white py-14 border-t-[2.5px] border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-condensed text-3xl font-black uppercase text-white tracking-tight">
                SOCIALX<span className="text-[#FFE500]">GROWTH</span>
              </span>
              <span className="rounded-full border border-[#FFE500] bg-[#FFE500] px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest text-[#121316] uppercase">
                STUDIO
              </span>
            </div>
            <p className="mt-2 text-xs font-mono text-neutral-400 max-w-md">
              Engineered Instagram growth marketing for ambitious founders, healthcare clinics, and high-ticket service brands.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#proof" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              The Proof
            </a>
            <a href="#pipeline" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              How It Works
            </a>
            <a href="#sprint" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              The Sprint
            </a>
            <a href="#audit" className="text-neutral-300 hover:text-[#FFE500] transition-colors">
              Quality Gates
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE500] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Schedule Call</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} SocialXGrowth Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Directed by Archit Sehgal</span>
            <span>·</span>
            <span>1-on-1 Confidential Client Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
