/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Clock, Shield, Users, MessageCircle } from 'lucide-react';
import { CalendlyEmbed } from './CalendlyEmbed';

export const CalendarBookingSection: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?text=Hi%20SocialXGrowth,%20I'd%20like%20to%20discuss%20Instagram%20content%20marketing%20packages%20for%20my%20UK%20practice.";

  return (
    <section id="booking" className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-16 sm:py-20 lg:py-24 paper-grid-bg">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block bg-[#FFE500] text-[#121316] text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 border-[2px] border-[#121316] shadow-[2px_2px_0px_#121316] mb-3">
            Direct 30-Minute Discovery
          </div>

          <h2 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#121316] leading-[0.95]">
            SCHEDULE YOUR{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-3.5 py-0.5 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316] my-1">
              CONTENT STRATEGY CALL.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            Pick a time that works for you. We will review your current online presence, discuss what your ideal UK clients want to see, and map out your content roadmap.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold text-neutral-800">
            <div className="flex items-center gap-1.5 bg-white border border-[#121316] px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#121316]">
              <Clock className="h-3.5 w-3.5 text-[#121316]" />
              <span>30-Minute Focused Call</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-[#121316] px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#121316]">
              <Users className="h-3.5 w-3.5 text-[#121316]" />
              <span>With Archit Sehgal</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-[#121316] px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#121316]">
              <Shield className="h-3.5 w-3.5 text-[#121316]" />
              <span>Zero Sales Pressure</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#FFE500] border border-[#121316] px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#121316] hover:bg-yellow-300 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-800" />
              <span>Or Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Direct Calendly Embed Widget */}
        <div className="relative">
          <CalendlyEmbed height={700} />
        </div>
      </div>
    </section>
  );
};
