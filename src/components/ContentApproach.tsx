/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Play, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

interface ContentApproachProps {
  onOpenBooking: () => void;
}

export const ContentApproach: React.FC<ContentApproachProps> = ({ onOpenBooking }) => {
  const [selectedFormat, setSelectedFormat] = useState(0);

  const formats = [
    {
      id: 'educational',
      title: 'Educational Videos',
      tag: 'Bite-sized Advice',
      hook: '“The 3 hidden fees on your mortgage illustration you should ask your lender to waive…”',
      handle: 'uk.mortgage.advisory',
      caption: 'Breaking down standard UK lending terms into plain English so first-time buyers never overpay.',
      duration: '0:38',
      type: 'Reel',
    },
    {
      id: 'insights',
      title: 'Industry Insights',
      tag: 'Market Analysis',
      hook: '“What the latest Bank of England base rate decision actually means for fixed vs tracker mortgages…”',
      handle: 'city.property.insights',
      caption: 'Straightforward breakdown without jargon or sensationalism. Just clear, actionable guidance.',
      duration: '0:45',
      type: 'Reel',
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      tag: 'Direct Answers',
      hook: '“‘Can I buy a house while still in my probation period at work?’ Here is the real answer…”',
      handle: 'london.broker.answers',
      caption: 'Answering the exact questions clients ask on phone calls every single week.',
      duration: '0:29',
      type: 'Reel',
    },
    {
      id: 'mistakes_myths',
      title: 'Common Mistakes & Myths',
      tag: 'Mythbusters',
      hook: '“The biggest mistake self-employed directors make when applying for income protection…”',
      handle: 'uk.protection.partner',
      caption: 'Why generic online comparison engines leave UK company directors under-covered.',
      duration: '0:35',
      type: 'Reel',
    },
    {
      id: 'personal_brand',
      title: 'Personal Brand Content',
      tag: 'Behind The Scenes',
      hook: '“Why I left a corporate high street bank to launch an independent advisory practice…”',
      handle: 'sarah.jenkins.advisory',
      caption: 'Building genuine human trust so clients choose you over faceless corporate aggregators.',
      duration: '0:50',
      type: 'Reel',
    },
    {
      id: 'service_focused',
      title: 'Service-Focused Videos',
      tag: 'Clear Offerings',
      hook: '“How our remortgage review takes 20 minutes and saves UK families £240/month on average…”',
      handle: 'apex.mortgage.uk',
      caption: 'Transparent walkthrough of what happens when someone books an appointment with your firm.',
      duration: '0:33',
      type: 'Reel',
    },
    {
      id: 'updates',
      title: 'Industry Updates',
      tag: 'Timely News',
      hook: '“New stamp duty thresholds starting next month: who wins and who pays more…”',
      handle: 'mayfair.property.group',
      caption: 'Keeping local buyers and sellers informed ahead of key UK property policy shifts.',
      duration: '0:40',
      type: 'Reel',
    },
    {
      id: 'trust_stories',
      title: 'Trust-Building Stories',
      tag: 'Client Experience',
      hook: '“How we helped a London buyer secure their dream home after 2 high street rejections…”',
      handle: 'kensington.prime.homes',
      caption: 'Real problem-solving stories that demonstrate competence, patience, and bespoke care.',
      duration: '0:42',
      type: 'Reel',
    },
    {
      id: 'client_journey',
      title: 'Client Journey & Experience',
      tag: 'Step-by-Step',
      hook: '“From decision-in-principle to collecting the keys: the 5 stages of buying in the UK…”',
      handle: 'uk.homebuyer.guide',
      caption: 'Empowering first-time buyers with a roadmap that removes anxiety from the process.',
      duration: '0:48',
      type: 'Reel',
    },
  ];

  const current = formats[selectedFormat];

  return (
    <section className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#855800]">
            Creative Content Formats
          </div>
          <h2 className="mt-3 font-condensed text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#121316] leading-[0.98]">
            YOUR EXPERTISE IS THE CONTENT.{' '}
            <span className="bg-[#FFE500] px-2 py-0.5 border-[2px] border-[#121316] shadow-[3px_3px_0px_#121316]">
              OUR JOB IS TO MAKE PEOPLE NOTICE IT.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            You already have years of experience, valuable knowledge and stories worth sharing. The challenge is turning that expertise into content that people actually want to watch.
          </p>
        </div>

        {/* Content Format Explorer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Format Selection List (9 Formats) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {formats.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedFormat(idx)}
                className={`text-left p-4 rounded-xl border-[2px] border-[#121316] transition-all cursor-pointer flex flex-col justify-between ${
                  selectedFormat === idx
                    ? 'bg-[#FFE500] shadow-[4px_4px_0px_#121316] scale-[1.01]'
                    : 'bg-white hover:bg-neutral-50 shadow-[2px_2px_0px_#121316]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-neutral-600 mb-1">
                    <span>{item.tag}</span>
                    <span>{item.duration}</span>
                  </div>
                  <h4 className="font-condensed text-lg font-black uppercase text-[#121316] leading-tight">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-2 text-xs text-neutral-700 line-clamp-2 italic font-serif">
                  {item.hook}
                </div>
              </button>
            ))}
          </div>

          {/* Live Mockup Preview Card (Instagram Post/Reel Simulator) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-[3px] border-[#121316] bg-white p-4 shadow-[8px_8px_0px_#121316]">
              {/* Instagram App Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-400 to-[#FFE500] p-[2px] border border-[#121316]">
                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center font-bold text-xs">
                      SX
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#121316]">{current.handle}</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Original Audio · Professional Content</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold bg-[#FAF8F5] border border-[#121316] px-2 py-0.5 rounded">
                  {current.type}
                </div>
              </div>

              {/* Simulated Reel Display */}
              <div className="mt-3 relative aspect-[9/12] rounded-xl border-[2px] border-[#121316] bg-[#121316] overflow-hidden flex flex-col justify-between p-5 text-white">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="bg-[#FFE500] text-[#121316] px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                    {current.tag}
                  </span>
                  <span>{current.duration}</span>
                </div>

                {/* Hook Text on screen */}
                <div className="my-auto py-4">
                  <div className="bg-[#121316]/90 border border-white/20 p-4 rounded-xl backdrop-blur-sm shadow-xl">
                    <p className="font-condensed text-2xl font-black uppercase tracking-tight text-white leading-tight">
                      {current.hook}
                    </p>
                  </div>
                </div>

                {/* Interactive bar */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <Heart className="h-5 w-5 hover:text-red-500 transition-colors" />
                    <MessageCircle className="h-5 w-5 hover:text-amber-400 transition-colors" />
                    <Send className="h-5 w-5 hover:text-sky-400 transition-colors" />
                  </div>
                  <Bookmark className="h-5 w-5" />
                </div>
              </div>

              {/* Caption Preview */}
              <div className="mt-3 text-xs text-[#121316] leading-relaxed">
                <span className="font-bold mr-1.5">{current.handle}</span>
                <span className="text-neutral-700">{current.caption}</span>
              </div>

              {/* Action trigger */}
              <button
                onClick={onOpenBooking}
                className="mt-4 w-full py-3 rounded-xl border-[2px] border-[#121316] bg-[#FFE500] hover:bg-yellow-400 text-xs font-black uppercase tracking-wider text-[#121316] shadow-[2px_2px_0px_#121316] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Script Videos Like This For My Practice</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
