/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b-[2.5px] border-[#121316] bg-[#F6F3EC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 h-18">
        {/* Brand Wordmark with Yellow Capsule Badge */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-condensed text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#121316]">
            SOCIALX<span className="text-[#855800]">GROWTH</span>
          </span>
          <span className="rounded-full border-[1.5px] border-[#121316] bg-[#FFE500] px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-widest text-[#121316] uppercase shadow-[1.5px_1.5px_0px_#121316]">
            Studio
          </span>
        </a>

        {/* Minimal Nav Anchors */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#121316]">
          <a href="#proof" className="hover:text-neutral-600 transition-colors font-semibold">
            The Proof
          </a>
          <a href="#pipeline" className="hover:text-neutral-600 transition-colors font-semibold">
            How It Works
          </a>
          <a href="#sprint" className="hover:text-neutral-600 transition-colors font-semibold">
            What You Get
          </a>
          <a href="#audit" className="hover:text-neutral-600 transition-colors font-semibold">
            Quality Gates
          </a>
          <a href="#faq" className="hover:text-neutral-600 transition-colors font-semibold">
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <button
          onClick={onOpenBooking}
          className="btn-neo-yellow inline-flex items-center gap-2 rounded-lg px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider cursor-pointer"
        >
          <Calendar className="h-4 w-4 stroke-[2.5]" />
          <span>Book 30-Min Call</span>
          <ArrowUpRight className="h-3.5 w-3.5 hidden sm:inline-block stroke-[3]" />
        </button>
      </div>
    </header>
  );
};
