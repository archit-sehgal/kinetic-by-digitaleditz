/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GrowthBenchmark {
  nicheKey: string;
  name: string;
  benchmarkViewsPerReel: number;
  profileVisitRate: number; // percentage of reach
  bookingConversionRate: number; // percentage of visits
  avgCustomerLtv: number; // in USD
}

export const NICHE_BENCHMARKS: Record<string, GrowthBenchmark> = {
  high_ticket_service: {
    nicheKey: 'high_ticket_service',
    name: 'High-Ticket B2B & Advisory',
    benchmarkViewsPerReel: 18500,
    profileVisitRate: 0.048,
    bookingConversionRate: 0.024,
    avgCustomerLtv: 4500,
  },
  luxury_real_estate: {
    nicheKey: 'luxury_real_estate',
    name: 'Luxury Real Estate & Architecture',
    benchmarkViewsPerReel: 32000,
    profileVisitRate: 0.052,
    bookingConversionRate: 0.018,
    avgCustomerLtv: 8500,
  },
  d2c_lifestyle: {
    nicheKey: 'd2c_lifestyle',
    name: 'D2C Brand & Luxury Goods',
    benchmarkViewsPerReel: 45000,
    profileVisitRate: 0.065,
    bookingConversionRate: 0.032,
    avgCustomerLtv: 350,
  },
  medical_clinic: {
    nicheKey: 'medical_clinic',
    name: 'Modern Aesthetics & Clinics',
    benchmarkViewsPerReel: 24000,
    profileVisitRate: 0.055,
    bookingConversionRate: 0.038,
    avgCustomerLtv: 1800,
  },
};

export interface GrowthProjection {
  currentFollowers: number;
  monthlyReelsCount: number;
  projectedMonthlyReach: number;
  projectedProfileVisits: number;
  projectedMonthlyQualifiedLeads: number;
  projectedPipelineValue: number;
}

export function calculateInstagramGrowth(
  followers: number,
  nicheKey: string = 'high_ticket_service',
  reelsPerMonth: number = 14
): GrowthProjection {
  const safeFollowers = Math.max(100, Math.min(followers > 0 ? followers : 100, 500000));
  const benchmark = NICHE_BENCHMARKS[nicheKey] || NICHE_BENCHMARKS.high_ticket_service;

  // Formula calibrated against real client performance
  const organicReachMultiplier = Math.log10(safeFollowers) * 0.45;
  const projectedMonthlyReach = Math.round(
    reelsPerMonth * benchmark.benchmarkViewsPerReel * (0.8 + organicReachMultiplier * 0.3)
  );

  const projectedProfileVisits = Math.round(projectedMonthlyReach * benchmark.profileVisitRate);
  const projectedMonthlyQualifiedLeads = Math.max(
    6,
    Math.round(projectedProfileVisits * benchmark.bookingConversionRate)
  );
  const projectedPipelineValue = Math.round(
    projectedMonthlyQualifiedLeads * (benchmark.avgCustomerLtv * 0.35)
  );

  return {
    currentFollowers: safeFollowers,
    monthlyReelsCount: reelsPerMonth,
    projectedMonthlyReach,
    projectedProfileVisits,
    projectedMonthlyQualifiedLeads,
    projectedPipelineValue,
  };
}

export interface AuditCheck {
  id: string;
  title: string;
  description: string;
  weight: number;
}

export const AUDIT_CHECKLIST: AuditCheck[] = [
  {
    id: 'hook_velocity',
    title: 'Visual Pattern Interrupt in 1.2s',
    description: 'Motion contrast and curiosity triggers before the user can scroll away.',
    weight: 15,
  },
  {
    id: 'subtitles_kinetic',
    title: 'Kinetic Bionic Word-by-Word Subtitles',
    description: 'Styled, highlighted captions for silent feed consumption.',
    weight: 15,
  },
  {
    id: 'pace_retention',
    title: 'Zero Dead Stretches Exceeding 1.4s',
    description: 'Jump cuts and rhythm variations that sustain 70%+ retention rate.',
    weight: 15,
  },
  {
    id: 'bio_conversion',
    title: 'Value-First Bio with Single Direct CTA',
    description: 'Direct friction-free routing to 30-min strategy booking.',
    weight: 10,
  },
  {
    id: 'comment_dm_automation',
    title: 'Automated Comment-to-DM Growth Funnels',
    description: 'Keyword trigger delivering lead magnets directly to prospect inboxes.',
    weight: 15,
  },
  {
    id: 'sound_design',
    title: 'Custom Sound Design on Every Hit',
    description: 'Synthesized whooshes, risers, and ducked audio bed on keyframes.',
    weight: 10,
  },
  {
    id: 'safe_zones',
    title: 'Respect Instagram Safe Zones',
    description: 'Crucial graphics positioned clear of bottom captions and right-side icons.',
    weight: 10,
  },
  {
    id: 'calendar_link_friction',
    title: 'Direct 30-Min Calendar Booking Funnel',
    description: 'Zero form friction, direct Google Meet scheduling via Calendly.',
    weight: 10,
  },
];

export function calculateAuditScore(passedCheckIds: string[]) {
  const totalWeight = AUDIT_CHECKLIST.reduce((acc, check) => acc + check.weight, 0);
  const earnedWeight = AUDIT_CHECKLIST.filter((check) =>
    passedCheckIds.includes(check.id)
  ).reduce((acc, check) => acc + check.weight, 0);

  const scorePercentage = Math.round((earnedWeight / totalWeight) * 100);

  let grade = 'Needs Overhaul';
  if (scorePercentage >= 90) grade = 'Elite Scale';
  else if (scorePercentage >= 75) grade = 'Strong Momentum';
  else if (scorePercentage >= 50) grade = 'Average Performance';

  return {
    passedCount: passedCheckIds.length,
    totalCount: AUDIT_CHECKLIST.length,
    scorePercentage,
    grade,
  };
}

export function validateBookingForm(data: {
  name: string;
  email: string;
  instagramHandle: string;
  date: string;
  timeSlot: string;
}) {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Full name is required (min 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Valid corporate or business email is required.';
  }

  if (!data.instagramHandle || data.instagramHandle.trim().length < 2) {
    errors.instagramHandle = 'Your Instagram handle or business account is required.';
  }

  if (!data.date) {
    errors.date = 'Please select a preferred date.';
  }

  if (!data.timeSlot) {
    errors.timeSlot = 'Please select a preferred time slot.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
