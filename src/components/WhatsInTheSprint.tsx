import React from 'react';

export const WhatsInTheSprint: React.FC = () => {
  const sprintDeliverables = [
    {
      num: '01',
      title: 'Three High-Converting Formats',
      description: 'Authority talking head, walkthrough tours, and kinetic typography tailored to UK property and advisory buyers.',
    },
    {
      num: '02',
      title: 'UK Market Hook Bank',
      description: '50+ tested pattern interrupts reverse-engineered from top UK mortgage, insurance, and real estate performers.',
    },
    {
      num: '03',
      title: 'FCA Compliance-Safe Scripts',
      description: '12–16 complete word-by-word scripts with clear disclaimers, educational framing, and zero regulatory headache.',
    },
    {
      num: '04',
      title: 'Directed 60-Min Recording',
      description: 'Single 60-minute directed monthly shoot with studio director Archit Sehgal. We feed teleprompter lines live.',
    },
    {
      num: '05',
      title: 'Bionic Subtitles & Sound FX',
      description: 'Yellow highlight captions for silent feed viewing, property callouts, and subtle synthesized audio hits.',
    },
    {
      num: '06',
      title: 'UK Attention & Quality Gates',
      description: 'Every reel verified against our 8-point attention gate before public distribution on your brand accounts.',
    },
    {
      num: '07',
      title: 'Regional UK Paid Ad Sets',
      description: 'Geo-targeted distribution across Meta, TikTok, and YouTube Shorts focused on your local postcode territories.',
    },
    {
      num: '08',
      title: 'Inbound Comment-to-DM Funnels',
      description: 'Automated comment triggers (e.g. "RATE", "VALUATION") that deliver guides and book 30-min discovery calls.',
    },
  ];

  return (
    <section id="sprint" className="border-b-[2.5px] border-[#121316] bg-[#F6F3EC] py-20 lg:py-28 paper-grid-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="inline-block bg-[#FFE500] text-[#121316] font-script text-xl font-bold px-3.5 py-1 border-[2px] border-[#121316] shadow-[2.5px_2.5px_0px_#121316] -rotate-1 mb-3">
            Everything Handled For Your Practice
          </div>
          <h2 className="font-condensed text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#121316] leading-none">
            WHAT'S IN{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-4 py-0.5 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316]">
              THE UK CONTENT SPRINT
            </span>
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-700 max-w-2xl">
            Full-service monthly execution · Zero fluff · 100% focused on UK mortgage, insurance, and vendor inquiries.
          </p>
        </div>

        {/* 2-Column Numbered Dotted List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {sprintDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="pb-7 border-b border-dashed border-[#121316]/30 flex items-start gap-4 group"
            >
              <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded bg-[#FFE500] border-[1.5px] border-[#121316] font-mono text-xs font-black shadow-[2px_2px_0px_#121316]">
                {item.num}
              </div>
              <div>
                <h3 className="font-condensed text-2xl font-bold uppercase text-[#121316] tracking-tight group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

