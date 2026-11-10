import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AUDIT_CHECKLIST, calculateAuditScore } from '../utils/calculator';

interface ReadinessAuditProps {
  onOpenBooking: () => void;
}

export const ReadinessAudit: React.FC<ReadinessAuditProps> = ({ onOpenBooking }) => {
  const [passedCheckIds, setPassedCheckIds] = useState<string[]>([
    'hook_velocity',
    'subtitles_kinetic',
    'pace_retention',
    'bio_conversion',
    'comment_dm_automation',
    'sound_design',
    'safe_zones',
    'calendar_link_friction',
  ]);

  const toggleCheck = (id: string) => {
    if (passedCheckIds.includes(id)) {
      setPassedCheckIds(passedCheckIds.filter((item) => item !== id));
    } else {
      setPassedCheckIds([...passedCheckIds, id]);
    }
  };

  const scoreResult = calculateAuditScore(passedCheckIds);

  return (
    <section id="audit" className="border-b-[2.5px] border-[#121316] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Attention & Compliance Story */}
          <div className="lg:col-span-6">
            <div className="inline-block bg-[#FFE500] text-[#121316] font-script text-xl font-bold px-3.5 py-1 border-[2px] border-[#121316] shadow-[2.5px_2.5px_0px_#121316] -rotate-1 mb-3">
              UK Compliance & Attention Architecture
            </div>

            <h2 className="font-condensed text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#121316] leading-[0.95]">
              IT PLANS FIRST, THEN{' '}
              <span className="inline-block bg-[#FFE500] text-[#121316] px-3 py-0.5 border-[2.5px] border-[#121316] shadow-[4px_4px_0px_#121316] my-1 rotate-[-0.5deg]">
                CHECKS ITS OWN REEL.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
              Most video content in the UK property and finance sectors fails because it is either dull corporate lecturing, non-compliant, or lacks an acquisition bridge. Every asset produced by our studio must pass all 8 conversion gates before public release.
            </p>

            <div className="mt-8 space-y-4 text-xs font-semibold text-neutral-800 font-mono">
              <div className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-[#FFE500] border border-[#121316] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <strong>FCA-Safe Educational Framing:</strong> Clear, informative breakdown that positions your practice as the trusted local expert without misleading claims.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-[#FFE500] border border-[#121316] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <strong>Visual Pattern Interrupt in 1.2s:</strong> Contrasting visual hook and market curiosity triggers that stop busy UK homeowners from scrolling past.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-[#FFE500] border border-[#121316] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <strong>Automated Comment-to-DM Inbound Funnel:</strong> Specific keyword triggers (e.g., “RATES”, “VALUATION”) that deliver lead magnets directly into client inboxes.
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="btn-neo-yellow inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-xs font-black uppercase tracking-wider cursor-pointer"
              >
                <span>Audit Your Content on a 30-Min Call</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 8-Point Gate Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border-[2.5px] border-[#121316] bg-[#FAF8F5] p-6 sm:p-8 shadow-[6px_6px_0px_#121316] relative">
              {/* Tape Badge at top */}
              <div className="absolute -top-3.5 right-6 bg-[#121316] text-[#FFE500] px-3.5 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_#FFE500]">
                uk_advisory_check · draft.mp4 [PASSED]
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-[#121316]/15">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE500] text-[#121316] border-[2px] border-[#121316] font-condensed text-xl font-black">
                    {scoreResult.passedCount}/8
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-[#121316] uppercase">
                      Quality Gates Passed
                    </div>
                    <div className="text-[11px] font-mono text-emerald-700 font-bold">
                      FCA compliant ✓ retention ✓ booking ready
                    </div>
                  </div>
                </div>
                <div className="font-condensed text-3xl font-black text-[#121316]">
                  {scoreResult.scorePercentage}%
                </div>
              </div>

              {/* 8 Checks List */}
              <div className="mt-6 space-y-2.5 font-mono text-xs">
                {AUDIT_CHECKLIST.map((item) => {
                  const isChecked = passedCheckIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-3 rounded-lg border-[1.5px] flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#121316] bg-white shadow-[2px_2px_0px_#121316]'
                          : 'border-neutral-300 bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      <span className={isChecked ? 'font-bold text-[#121316]' : 'line-through text-neutral-400'}>
                        {item.title}
                      </span>
                      <span className={`text-[11px] font-black ${isChecked ? 'text-emerald-700' : 'text-neutral-400'}`}>
                        {isChecked ? 'PASS ✓' : 'FAILED'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 text-center text-[11px] font-mono text-neutral-500">
                Tap any gate above to test the verification pipeline
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

