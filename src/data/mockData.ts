/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  client: string;
  handle: string;
  category: string;
  headline: string;
  thumbnail: string;
  views: string;
  leadsGenerated: string;
  revenueGenerated: string;
  followersGained: string;
  hookText: string;
  duration: string;
  retentionRate: string;
  highlightStat: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case_real_estate',
    client: 'Vanguard Luxury Estates',
    handle: '@vanguard.estates',
    category: 'real_estate',
    headline: '$4.2M Penthouse Inbound Deal Closed via Instagram DMs',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=80',
    views: '1.2M Reached',
    leadsGenerated: '48 HNW Enquiries',
    revenueGenerated: '$126K Commission',
    followersGained: '+24,800 Followers',
    hookText: '“Never buy a penthouse in Miami before checking this one HOA clause…”',
    duration: '0:34',
    retentionRate: '84.2%',
    highlightStat: '1.2M Views · 48 Qualified Buyer Inquiries',
  },
  {
    id: 'case_b2b_saas',
    client: 'HyperFlow AI',
    handle: '@hyperflow.ai',
    category: 'b2b_saas',
    headline: 'From 1,200 to 42,000 ICP Followers & $84K MRR Pipeline',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    views: '840K Reached',
    leadsGenerated: '112 Demo Requests',
    revenueGenerated: '$84K Added MRR',
    followersGained: '+40,800 Tech Leads',
    hookText: '“We replaced a 5-person SDR team with this 1 automation workflow.”',
    duration: '0:42',
    retentionRate: '79.6%',
    highlightStat: '112 Booked Demos in 60 Days',
  },
  {
    id: 'case_aesthetic_clinic',
    client: 'Lumina Facial Aesthetics',
    handle: '@lumina.aesthetics',
    category: 'aesthetic_clinic',
    headline: 'Fully Booked Treatment Schedule 3 Months in Advance',
    thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
    views: '620K Reached',
    leadsGenerated: '194 Consultations',
    revenueGenerated: '$180K Pipeline',
    followersGained: '+18,600 Local Clients',
    hookText: '“Why doctors stopped recommending standard filler for smile lines…”',
    duration: '0:28',
    retentionRate: '91.4%',
    highlightStat: '194 Consultation Inquiries',
  },
  {
    id: 'case_coaching',
    client: 'Apex Performance Mentorship',
    handle: '@apex.advisors',
    category: 'coaching_consulting',
    headline: 'Scaling High-Ticket Advisory to $65K Monthly Closes',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    views: '490K Reached',
    leadsGenerated: '86 Direct Inbound Applications',
    revenueGenerated: '$210K Contract Value',
    followersGained: '+14,200 Followers',
    hookText: '“How we structured a $10k retainer without a single pitch deck.”',
    duration: '0:46',
    retentionRate: '82.0%',
    highlightStat: '$210K Contract Value Closed',
  },
];

export interface HookPromptSample {
  niche: string;
  title: string;
  prompt: string;
  scriptHook: string;
  visualAngle: string;
  dmTrigger: string;
}

export const HOOK_SAMPLES: HookPromptSample[] = [
  {
    niche: 'Luxury Real Estate',
    title: 'The Unlisted Off-Market Angle',
    prompt: 'luxury real estate agent targeting high-net-worth investors',
    scriptHook: '“Why multi-millionaires are secretly pulling out of downtown condos this quarter…”',
    visualAngle: 'Fast drone zoom + architect blueprints overlay + kinetic cyan typography',
    dmTrigger: 'Comment "PORTFOLIO" for the confidential 2026 asset allocation guide.',
  },
  {
    niche: 'B2B SaaS & Tech',
    title: 'The Teardown & Efficiency Play',
    prompt: 'B2B software founder looking to book enterprise discovery calls',
    scriptHook: '“If your engineering team is still spending 12 hours on pull request reviews, watch this…”',
    visualAngle: 'Split-screen terminal coding capture + interactive latency graph + punch sound',
    dmTrigger: 'Comment "WORKFLOW" and get our internal CI/CD automation template.',
  },
  {
    niche: 'Medical & Aesthetics',
    title: 'The Mythbuster & Procedure Safety',
    prompt: 'cosmetic dermatologist booking high-ticket treatments',
    scriptHook: '“The one facial treatment I refuse to perform in my clinic (and what we do instead)…”',
    visualAngle: 'Clinical macro lighting + 3D facial layer render + clear warning graphics',
    dmTrigger: 'Comment "SKIN" for our custom clinical skin analysis framework.',
  },
  {
    niche: 'High-Ticket Consulting',
    title: 'The Contrarian Framework',
    prompt: 'executive coach signing $10,000 retained advisory clients',
    scriptHook: '“Stop posting motivational quotes. Here is the exact 4-page SOP we used to close $60K…”',
    visualAngle: 'Document highlighter effect + whiteboard breakdown + confident one-take cut',
    dmTrigger: 'Comment "SOP" to receive the unredacted client acquisition document.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How much of my time does this actually require each month?',
    answer: 'Just 60 to 90 minutes per month. We handle 100% of the heavy lifting: research, scriptwriting, hook engineering, motion graphics, captioning, sound design, safe-zone verification, posting strategy, and DM funnel setup. You simply record batch takes with our guided teleprompter scripts, or let us repurpose your long-form webinars and podcasts.',
  },
  {
    question: 'How does Instagram engagement translate into real paying clients?',
    answer: 'We don’t optimize for empty viral dance trends. Every reel is engineered around high-intent buying psychology. We embed frictionless comment-to-DM triggers (e.g., ManyChat automation) and profile conversion architectures that turn viewers into qualified inquiries booked directly onto your calendar.',
  },
  {
    question: 'Will our content look like cheap AI generated avatars or stock footage?',
    answer: 'Never. DigitalEditz crafts bespoke, high-craft creative assets. We combine custom motion typography, cinematic color grading, sound design hits, bionic captioning, and authentic brand footage. The output is indistinguishable from top-tier luxury agency production.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We focus on high-ticket B2B SaaS, Luxury Real Estate, Aesthetics & Medical Practices, Financial Advisory, and Elite Coaching/Consulting brands where each client closed is worth $2,000 to $50,000+.',
  },
  {
    question: 'How quickly do we see measurable results?',
    answer: 'Our client onboarding takes 14 days, with the first sprint of reels going live by Day 15. Most clients see significant reach lift (+300% to +800%) and their first qualified inbound calendar bookings within 30 to 45 days.',
  },
  {
    question: 'What is required for the initial Strategy Call?',
    answer: 'Zero preparation is needed. We will pull up your Instagram account during the 20-minute Zoom call, conduct a live 8-point tear-down, show you the exact content hooks working in your niche today, and present a custom 90-day growth roadmap.',
  },
];
