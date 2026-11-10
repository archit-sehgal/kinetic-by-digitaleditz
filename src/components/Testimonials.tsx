/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'The team understood our market dynamics and created campaigns that generated real business inquiries rather than just meaningless vanity numbers. Their clarity in execution was exceptional.',
      author: 'Leadership Team',
      role: 'Project Partner',
      organization: 'Kapahi Properties',
      projectType: 'Real Estate Lead Generation',
    },
    {
      quote: 'From concept to live execution, the launch brought unprecedented visibility and verified customer demand to our facility. Highly structured and transparent to work with.',
      author: 'Founding Management',
      role: 'Operations & Growth',
      organization: 'Pushti Turf & Farms',
      projectType: 'Commercial Hospitality Launch',
    },
    {
      quote: 'Helped us reach key decision-makers across our target region. The strategic messaging communicated our industry standards with total professional confidence.',
      author: 'Commercial Director',
      role: 'B2B Distribution',
      organization: 'Kashmir Ply Co.',
      projectType: 'B2B Lead Generation & Brand Growth',
    },
  ];

  return (
    <section className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            Verified Partner Feedback
          </div>
          <h2 className="mt-3 font-condensed text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#121316] leading-[0.98]">
            TRUSTED BY BUSINESSES THAT VALUE{' '}
            <span className="bg-[#FFE500] px-2 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              REAL OUTCOMES.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            Feedback directly from founding teams and commercial leaders who have worked with our core team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border-[2px] border-[#121316] bg-white p-6 shadow-[5px_5px_0px_#121316] flex flex-col justify-between"
            >
              <div>
                <Quote className="h-8 w-8 text-[#FFE500] stroke-[2.5] fill-[#FFE500]/30 mb-3" />
                <p className="text-sm text-neutral-800 leading-relaxed font-medium italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200">
                <div className="font-condensed text-lg font-black uppercase text-[#121316]">
                  {item.author}
                </div>
                <div className="text-xs font-mono text-neutral-600">
                  {item.role} · <span className="font-bold text-[#121316]">{item.organization}</span>
                </div>
                <div className="mt-1 text-[10px] font-mono font-bold uppercase text-[#855800]">
                  {item.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
