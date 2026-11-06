/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const UrgencyMarquee: React.FC = () => {
  const marqueeItems = [
    'CONTENT CREATION & DIRECTION',
    'TARGETED PAID MEDIA & META ADS',
    'INBOUND LEAD GENERATION FUNNELS',
    'CATEGORY GROWTH STRATEGY',
    'BUSINESS OUTCOMES OVER VANITY METRICS',
    'HIGH-RETENTION VERTICAL STORYTELLING',
    'COMMENT-TO-DM ACQUISITION ARCHITECTURE',
  ];

  return (
    <div className="relative w-full overflow-hidden border-b-[2.5px] border-[#121316] bg-[#121316] py-3.5 text-white select-none">
      <div className="marquee-track flex items-center gap-8 font-condensed text-base font-extrabold tracking-wider uppercase">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span className="hover:text-[#FFE500] transition-colors">{item}</span>
            <span className="text-[#FFE500] font-black">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
