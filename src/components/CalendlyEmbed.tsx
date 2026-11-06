/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Loader2, Calendar } from 'lucide-react';

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
  height?: number | string;
}

export const CALENDLY_URL = 'https://calendly.com/architsehgal19/20-minute-instagram-growth-strategy-session';

export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url = CALENDLY_URL,
  className = '',
  height = 720,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Clean embed URL with styling parameters
  const embedUrl = `${url}?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ffe500`;

  return (
    <div className={`relative w-full rounded-2xl border-[2.5px] border-[#121316] bg-white shadow-[6px_6px_0px_#121316] overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF8F5] z-10 font-mono text-xs text-neutral-700">
          <Loader2 className="h-6 w-6 animate-spin text-[#121316] mb-2" />
          <span className="font-bold">Connecting with Archit Sehgal's Calendar…</span>
        </div>
      )}
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        title="Schedule 30-Minute Instagram Growth Strategy Session with Archit Sehgal"
        onLoad={() => setIsLoading(false)}
        className="w-full relative z-20"
      />
    </div>
  );
};
