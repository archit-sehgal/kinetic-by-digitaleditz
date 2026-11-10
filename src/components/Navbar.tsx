/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (packageTier?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b-[2.5px] border-[#121316] bg-[#F6F3EC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Single text element wordmark */}
        <a href="#top" className="font-condensed text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#121316] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity">
          SOCIALX<span className="text-[#855800]">GROWTH</span>
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121316]">
          <a href="#what-we-do" className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0">
            What We Do
          </a>
          <a href="#how-it-works" className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0">
            How It Works
          </a>
          <a href="#industries" className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0">
            Industries
          </a>
          <a href="#packages" className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0">
            Packages
          </a>
          <a href="#case-studies" className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0">
            Case Studies
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="btn-neo-yellow inline-flex items-center gap-2 rounded-lg px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="h-4 w-4 stroke-[2.5]" />
            <span>Get Your Content Strategy</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 border-[2px] border-[#121316] rounded-lg bg-[#FFE500] text-[#121316] cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b-[2px] border-[#121316] bg-[#F6F3EC] px-4 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-[#121316]">
            <a
              href="#what-we-do"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 border-b border-neutral-300"
            >
              What We Do
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 border-b border-neutral-300"
            >
              How It Works
            </a>
            <a
              href="#industries"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 border-b border-neutral-300"
            >
              Industries
            </a>
            <a
              href="#packages"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 border-b border-neutral-300"
            >
              Packages & Pricing
            </a>
            <a
              href="#case-studies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 border-b border-neutral-300"
            >
              Case Studies
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-neo-yellow mt-2 w-full py-3 text-center text-xs font-black uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Get Your Content Strategy</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
