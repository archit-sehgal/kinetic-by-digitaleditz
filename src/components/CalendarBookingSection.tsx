/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Clock, Shield, Users } from 'lucide-react';
import { CalendlyEmbed, CALENDLY_URL } from './CalendlyEmbed';

export const CalendarBookingSection: React.FC = () => {
  return (
    <section id="booking" className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-20 md:py-28 paper-grid-bg">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block bg-[#FFE500] text-[#121316] font-script text-xl font-bold px-3.5 py-1 border-[2px] border-[#121316] shadow-[2.5px_2.5px_0px_#121316] -rotate-1 mb-3">
            Direct Strategy Access · Free 1-on-1 Discovery
          </div>

          <h2 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#121316] leading-[0.95]">
            SCHEDULE A 30-MINUTE{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-3.5 py-0.5 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316] my-1 rotate-[-0.5deg]">
              GROWTH SESSION.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-700 font-medium leading-relaxed">
            Select a date and time slot below on studio director Archit Sehgal's live calendar. We will review your current Instagram presence, examine top hooks in your category, and map out your custom growth engine.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold text-neutral-800">
            <div className="flex items-center gap-1.5 bg-[#FFE500] border border-[#121316] px-2.5 py-1 rounded shadow-[2px_2px_0px_#121316]">
              <Clock className="h-3.5 w-3.5 text-[#121316]" />
              <span>30-Minute Focused Session</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FFE500] border border-[#121316] px-2.5 py-1 rounded shadow-[2px_2px_0px_#121316]">
              <Users className="h-3.5 w-3.5 text-[#121316]" />
              <span>Direct with Archit Sehgal</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-[#121316] px-2.5 py-1 rounded shadow-[2px_2px_0px_#121316]">
              <Shield className="h-3.5 w-3.5 text-[#121316]" />
              <span>Zero Sales Pressure · Strict NDA</span>
            </div>
          </div>
        </div>

        {/* Direct Calendly Embed Widget */}
        <div className="relative">
          <CalendlyEmbed height={720} />
        </div>

        <div className="mt-6 text-center text-xs font-mono text-neutral-600">
          Instant Google Meet invite automatically dispatched upon slot confirmation.
        </div>
      </div>
    </section>
  );
};
