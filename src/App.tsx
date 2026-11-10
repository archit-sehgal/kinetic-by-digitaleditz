/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { HowItWorks } from './components/HowItWorks';
import { WhoWeWorkWith } from './components/WhoWeWorkWith';
import { ContentApproach } from './components/ContentApproach';
import { PackagesPricing } from './components/PackagesPricing';
import { WhyUs } from './components/WhyUs';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { CalendarBookingSection } from './components/CalendarBookingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CalendarBookingModal } from './components/CalendarBookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const handleOpenBooking = (packageTier?: string) => {
    setSelectedPackage(packageTier);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedPackage(undefined);
  };

  return (
    <div id="top" className="min-h-screen bg-[#F6F3EC] text-[#121316] font-sans selection:bg-[#FFE500] selection:text-[#121316]">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. What We Do - Six Core Categories */}
        <WhatWeDo onOpenBooking={() => handleOpenBooking()} />

        {/* 3. How It Works - 5 Simple Steps ("You Just Record. We Do The Rest.") */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Who We Work With - UK Mortgage, Insurance & Real Estate Professionals */}
        <WhoWeWorkWith onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Our Content Approach - 9 Content Types & Instagram Previews */}
        <ContentApproach onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Packages & Pricing - Starter £500, Growth £750, Authority £1,200 */}
        <PackagesPricing onOpenBooking={handleOpenBooking} />

        {/* 7. Why SocialXGrowth - Real Business Focus */}
        <WhyUs onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Our Experience & Case Studies - 4 Historical Projects with Honest Attribution */}
        <CaseStudies onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Testimonials - Authentic Partner Feedback */}
        <Testimonials />

        {/* 10. Direct Calendar Booking */}
        <CalendarBookingSection />

        {/* 11. FAQ Section - 9 Exact Q&As */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Final High-Conversion CTA Banner */}
        <FinalCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Persistent Floating Bottom Action Bar */}
      <StickyBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Popup Calendly Booking Modal */}
      <CalendarBookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        selectedPackage={selectedPackage}
      />
    </div>
  );
}
