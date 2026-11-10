import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface ClosingCtaBannerProps {
  onOpenBooking: () => void;
}

export const ClosingCtaBanner: React.FC<ClosingCtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#FFE500] border-b-[2.5px] border-[#121316] py-20 lg:py-28 text-[#121316] relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#121316] text-[#FFE500] px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-[3px_3px_0px_#121316]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Limited Monthly UK Practice Cohort</span>
        </div>

        <h2 className="font-condensed text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#121316] leading-[0.92]">
          STOP GUESSING WHAT WORKS.{' '}
          <span className="block mt-1">DOMINATE YOUR UK TERRITORY.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-neutral-900 max-w-2xl mx-auto font-medium leading-relaxed">
          Book your 30-minute content marketing strategy session with Archit Sehgal. We will review your current footprint, evaluate top hooks winning instructions and borrowers in your area, and design your complete client acquisition system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#121316] hover:bg-neutral-800 text-[#FFE500] border-[2.5px] border-[#121316] shadow-[6px_6px_0px_#121316] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#121316] active:translate-x-[2px] active:translate-y-[2px] transition-all rounded-lg px-8 py-4 text-base font-black uppercase tracking-wider inline-flex items-center justify-center gap-3 cursor-pointer"
          >
            <Calendar className="h-4 w-4 stroke-[2.5]" />
            <span>Book 30-Min Strategy Call</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>

        <p className="mt-4 font-mono text-xs text-neutral-800">
          Duration: 30 minutes · 100% Free · Zero Obligation (UK Hours)
        </p>
      </div>
    </section>
  );
};

