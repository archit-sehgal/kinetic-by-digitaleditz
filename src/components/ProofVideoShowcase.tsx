import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SafariSafeVideo } from './SafariSafeVideo';

interface ProofVideoShowcaseProps {
  onOpenBooking: () => void;
}

export const ProofVideoShowcase: React.FC<ProofVideoShowcaseProps> = ({ onOpenBooking }) => {
  const proofCards = [
    {
      num: '£14.2M',
      unit: 'MORTGAGE PIPELINE GENERATED',
      nicheBadge: 'UK Mortgage Brokers',
      title: 'Mortgage Advice & Rate Strategy',
      subtitle: 'FCA-Safe Education & DIP Inquiries',
      description: 'Educational rate breakdowns and remortgage calculators that route borrowers directly to Decision in Principle bookings.',
      videoUrl: '/videos/talking-head-reel-2.mp4',
    },
    {
      num: '18',
      unit: 'SOLE AGENCY INSTRUCTIONS WON',
      nicheBadge: 'UK Estate Agents',
      title: 'Prime Property & Vendor Authority',
      subtitle: 'Local High-Street & Prime Agency Tours',
      description: 'Architectural video tours and local market updates that convince high-net-worth homeowners to instruct your agency.',
      videoUrl: 'https://www.digitaleditz.com/realestatevideo.mp4',
    },
    {
      num: '420+',
      unit: 'QUALIFIED PROTECTION INQUIRIES',
      nicheBadge: 'UK Insurance Brokers',
      title: 'Life Cover & Income Protection',
      subtitle: 'Personal & Business Protection',
      description: 'High-empathy problem-solution video breakdowns that turn passive scrollers into booked insurance consultations.',
      videoUrl: '/videos/talking-head-reel-1.mp4',
    },
  ];

  return (
    <section id="proof" className="border-b-[2.5px] border-[#121316] bg-[#121316] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-[#FFE500] font-mono text-xs font-bold text-[#FFE500]">
              01
            </span>
            <span className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-wider line-through decoration-[#FFE500] decoration-2">
              “Video content is just for influencers, not licensed professionals.”
            </span>
          </div>

          <h2 className="mt-4 font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            CONTENT THAT CONVERTS BROWSERS INTO{' '}
            <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-0.5 border-[2px] border-black my-1">
              BOOKED CLIENT CONSULTATIONS.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl font-normal leading-relaxed">
            Every short-form video produced by our studio follows our strict 8-point UK attention and compliance gate. Nobody guesses what works—every asset is engineered for algorithmic retention and inbox qualification.
          </p>
        </div>

        {/* 3 Live Video Proof Cards with SafariSafeVideo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {proofCards.map((card, idx) => (
            <div
              key={idx}
              onClick={onOpenBooking}
              className="rounded-2xl border-[2.5px] border-neutral-700 bg-[#FAF8F5] p-5 sm:p-6 text-[#121316] shadow-[6px_6px_0px_#FFE500] flex flex-col justify-between cursor-pointer hover:border-[#FFE500] hover:-translate-y-1.5 transition-all duration-200 group"
            >
              <div>
                {/* Niche Tag */}
                <div className="inline-block bg-[#121316] text-[#FFE500] px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
                  {card.nicheBadge}
                </div>

                <div className="flex items-start gap-4">
                  {/* Phone mockup with looping SafariSafeVideo */}
                  <div className="w-24 sm:w-28 shrink-0 rounded-xl border-[2px] border-[#121316] bg-[#121316] overflow-hidden aspect-[9/16] shadow-[2px_2px_0px_#121316]">
                    <SafariSafeVideo
                      src={card.videoUrl}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Right side stats */}
                  <div className="flex-1">
                    <div className="font-condensed text-3xl sm:text-4xl font-black text-[#121316] leading-none">
                      {card.num}
                    </div>
                    <div className="font-mono text-[10px] font-black uppercase text-neutral-500 tracking-wider mt-1">
                      {card.unit}
                    </div>
                    <h3 className="mt-3 font-condensed text-lg sm:text-xl font-bold uppercase text-[#121316] leading-tight group-hover:text-amber-800 transition-colors">
                      {card.title}
                    </h3>
                    <div className="font-mono text-[11px] text-neutral-600 font-medium mt-0.5">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t-[1.5px] border-[#121316]/10 flex items-center justify-between text-[11px] font-mono font-bold text-[#121316]">
                <span className="leading-snug pr-2">{card.description}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#121316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Proof Tagline */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-6">
          <span>Engineered by SocialXGrowth Studio · Directed by Archit Sehgal · UK Practice Delivery</span>
          <button
            onClick={onOpenBooking}
            className="text-[#FFE500] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Book 30-Min Strategy Call with Archit</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

