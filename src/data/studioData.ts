/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServicePillar {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  tagline: string;
  deliverables: string[];
  framework: {
    name: string;
    description: string;
    steps: { label: string; detail: string }[];
  };
  visualAsset: string;
  bestFor: string[];
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'content',
    num: '01',
    title: 'Content Creation & Direction',
    shortDesc: 'Strategy, creative direction, reels, and visual storytelling built to stop the scroll.',
    tagline: 'Engineered for retention, not algorithmic luck.',
    deliverables: [
      'Narrative & Audience Positioning Strategy',
      'End-to-End Creative Direction & Visual Storyboards',
      'High-Retention Vertical Video (Reels) Scripting',
      'Bionic Typography, Motion Graphics & Sound Design',
      'Monthly Content Production Planning & Asset Packaging',
    ],
    framework: {
      name: 'The 3-Second Retention Architecture',
      description: 'Every reel follows a four-part kinetic framework designed around human attention patterns.',
      steps: [
        { label: '0.0s – 1.2s: Visual Pattern Interrupt', detail: 'Immediate curiosity gap or motion contrast that stops the thumb before instinct takes over.' },
        { label: '1.2s – 12.0s: The Context Shift', detail: 'Subverting a common assumption or demonstrating a tangible problem with bionic subtitles.' },
        { label: '12.0s – 28.0s: Dense Value Delivery', detail: 'Tight editorial pacing with cuts every 1.5s to maintain 75%+ average percentage viewed.' },
        { label: '28.0s – 35.0s: Actionable Conclusion', detail: 'Clear, low-friction next step directly tied to our inbound DM funnel.' },
      ],
    },
    visualAsset: '/src/assets/images/reels_content_planning_1793913004946.jpg',
    bestFor: ['Founders & CEOs', 'High-Ticket Services', 'Modern DTC Brands', 'Industry Leaders'],
  },
  {
    id: 'paid-media',
    num: '02',
    title: 'Paid Media & Meta Campaigns',
    shortDesc: 'Targeted Instagram advertising campaigns designed to reach ideal customers at scale.',
    tagline: 'Scientific creative testing combined with outcome-focused budget allocation.',
    deliverables: [
      'Multi-Angle Creative Testing Matrices (3–5 Hook Variations per Concept)',
      'Custom & Lookalike Audience Modeling across Meta Ads Manager',
      'Full-Funnel Retargeting Architecture (Engagement to Lead)',
      'Granular Conversion API & Pixel Setup for Accurate Attribution',
      'Weekly Spend Pacing, Ad Fatigue Monitoring & Creative Refreshing',
    ],
    framework: {
      name: 'The Modular Creative Testing Matrix',
      description: 'We never guess which ad works. We systematically test hooks, angles, and calls to action against segmented buyer profiles.',
      steps: [
        { label: 'Phase 1: Hook Isolation Testing', detail: 'Test 4 distinct 3-second openers against a baseline message to identify the lowest cost-per-view hook.' },
        { label: 'Phase 2: Angle Diversification', detail: 'Deploy winning hooks across emotional, analytical, and social-proof narrative angles.' },
        { label: 'Phase 3: Retargeting Sequences', detail: 'Serve warm prospects authority assets and customer transformation stories to eliminate friction.' },
        { label: 'Phase 4: Scale Allocation', detail: 'Concentrate media spend strictly into validated creative with documented lead acquisition efficiency.' },
      ],
    },
    visualAsset: '/src/assets/images/paid_media_strategy_1793913004277.jpg',
    bestFor: ['Brands Scaling Paid Spend', 'B2B Client Acquisition', 'High-LTV Products', 'Established Practices'],
  },
  {
    id: 'lead-generation',
    num: '03',
    title: 'Inbound Lead Generation',
    shortDesc: 'Generating qualified enquiries and prospective clients through automated funnel pathways.',
    tagline: 'Turn passive video engagement into booked discovery conversations.',
    deliverables: [
      'Automated Comment-to-DM Growth Triggers & Intelligent Conversation Flows',
      'High-Converting Link-in-Bio Routing Architecture',
      'Lead Magnet Conceptualization & Frictionless Asset Delivery',
      'Inbound Prospect Qualification & Calendar Booking Integration',
      'Direct Pipeline Hand-off into Your CRM or Sales Workflow',
    ],
    framework: {
      name: 'The Frictionless Inbound Funnel',
      description: 'Prospects rarely leave Instagram to fill out 10-field web forms. We capture and qualify intent right inside their inbox.',
      steps: [
        { label: '1. Curiosity Trigger in Caption', detail: 'Reel delivers actionable insight and prompts a 1-word keyword comment (e.g. "BLUEPRINT").' },
        { label: '2. Instant Conversational DM', detail: 'Automated workflow delivers the requested asset immediately into the prospect’s inbox.' },
        { label: '3. Two-Step Qualification', detail: 'Qualifying questions filter serious decision-makers based on timeline and budget.' },
        { label: '4. Direct Calendar Booking', detail: 'Qualified prospects receive a direct, frictionless link to schedule a strategy call on your calendar.' },
      ],
    },
    visualAsset: '/src/assets/images/creative_direction_studio_1793913003251.jpg',
    bestFor: ['Consultancies & Agencies', 'Clinics & Practices', 'B2B Tech', 'Advisory Services'],
  },
  {
    id: 'growth-strategy',
    num: '04',
    title: 'Instagram Growth Strategy',
    shortDesc: 'Building a stronger brand presence, audience engagement, visibility, and business growth.',
    tagline: 'Positioning your business as the category benchmark.',
    deliverables: [
      'Complete Profile Conversion Architecture (Bio, Highlighting, Grid Curation)',
      'Category Authority & Thought Leadership Content Pillars',
      'Competitive Whitespace Analysis & Content Gap Auditing',
      'Strategic Publishing Schedule Aligned with Platform Discovery Algorithms',
      'Monthly Strategic Growth Reviews & Iterative Campaign Roadmapping',
    ],
    framework: {
      name: 'The Category Anchor Methodology',
      description: 'We transform your profile from a neglected feed into a trusted digital storefront that commands premium pricing.',
      steps: [
        { label: 'Step 1: Offer & Bio Clarity', detail: 'Replace ambiguous taglines with clear, value-focused statements: Who you help, the outcome, and proof.' },
        { label: 'Step 2: Pinned Highlights Funnel', detail: 'Organize highlights into a structured journey: About, Methodology, Client Results, and Next Steps.' },
        { label: 'Step 3: Signature Content Pillars', detail: 'Establish 3 distinct content formats that make your brand instantly recognizable in the Explore feed.' },
        { label: 'Step 4: Compounding Authority', detail: 'Build a durable archive of foundational content that continually attracts organic discovery for months.' },
      ],
    },
    visualAsset: '/src/assets/images/reels_content_planning_1793913004946.jpg',
    bestFor: ['Category Leaders', 'Rebranding Companies', 'Emerging Ventures', 'Executive Personal Brands'],
  },
];

export interface ObjectionItem {
  id: string;
  num: string;
  concern: string;
  reality: string;
  mechanism: string;
  anchor: string;
}

export const OBJECTIONS: ObjectionItem[] = [
  {
    id: 'organic-reach',
    num: '01',
    concern: '“Organic reach is dead or completely luck-based.”',
    reality: 'The algorithm does not play favorites—it optimizes strictly for audience watch time and shares.',
    mechanism: 'By structuring every reel with proven pattern interrupts and zero filler frames, content is distributed to target viewers based on topic graph indexing rather than random chance.',
    anchor: '#pillars',
  },
  {
    id: 'time-commitment',
    num: '02',
    concern: '“Our team doesn’t have the bandwidth to produce content weekly.”',
    reality: 'You should never be bogged down writing scripts or learning video editing software.',
    mechanism: 'Our studio operates a 90-minute monthly sprint: you record guided takes with our creative director, and our team handles all editing, motion graphics, sound design, and scheduling.',
    anchor: '#pipeline',
  },
  {
    id: 'business-outcomes',
    num: '03',
    concern: '“Likes and views don’t translate into actual paying clients.”',
    reality: 'Vanity metrics don’t drive revenue unless there is a conversion mechanism behind every asset.',
    mechanism: 'We pair every creative piece with comment-to-DM automation and profile conversion architecture, turning casual attention directly into booked consultations and qualified sales enquiries.',
    anchor: '#booking',
  },
];

export interface StudioFaq {
  question: string;
  answer: string;
}

export const STUDIO_FAQS: StudioFaq[] = [
  {
    question: 'How do you ensure our content reflects our brand voice and standards?',
    answer: 'Before producing a single line of script or video asset, we conduct a deep discovery into your brand positioning, existing visual identity, target customer vocabulary, and industry constraints. All creative concepts and scripts are submitted for your review and sign-off before production.',
  },
  {
    question: 'What is required from our team on an ongoing basis?',
    answer: 'Our workflow is intentionally designed for busy founders, marketing directors, and business owners. Your primary commitment is a single 60 to 90 minute guided recording session per month. Our studio manages strategy, scripting, post-production, copywriting, publishing, and paid media campaign management.',
  },
  {
    question: 'How do you balance organic content with paid advertising?',
    answer: 'We view organic content and paid media as complementary halves of the same growth engine. Organic reels allow us to test creative angles and build authentic audience trust with zero ad spend. Winning concepts with high organic retention are then adapted into paid Meta advertising campaigns to scale qualified reach predictably.',
  },
  {
    question: 'What types of businesses see the highest return from Instagram Growth Marketing?',
    answer: 'We work primarily with service businesses, B2B companies, modern clinics, consultancies, high-ticket brands, and visionary founders where each customer acquired represents meaningful lifetime value ($1,500 to $50,000+). In these categories, turning Instagram into an authority channel generates compounding enterprise value.',
  },
  {
    question: 'How is lead qualification handled through Instagram?',
    answer: 'We avoid forcing prospective clients off Instagram into lengthy, low-converting website forms. Instead, we implement automated comment-to-DM triggers and direct messaging workflows that deliver requested resources, ask qualifying questions, and seamlessly invite ideal prospects to schedule a consultation directly on your calendar.',
  },
  {
    question: 'What occurs during the initial Discovery & Strategy Call?',
    answer: 'The strategy call is a focused 20-minute discussion over Google Meet. We review your current Instagram presence, analyze competitors in your market, assess your growth objectives across organic content, paid media, and lead generation, and outline a tailored roadmap. Zero sales pressure or generic templates.',
  },
];
