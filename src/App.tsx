/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UrgencyMarquee } from './components/UrgencyMarquee';
import { ProofVideoShowcase } from './components/ProofVideoShowcase';
import { ExecutionPipeline } from './components/ExecutionPipeline';
import { WhatsInTheSprint } from './components/WhatsInTheSprint';
import { ReadinessAudit } from './components/ReadinessAudit';
import { ReceiptOfferSection } from './components/ReceiptOfferSection';
import { CalendarBookingSection } from './components/CalendarBookingSection';
import { FaqSection } from './components/FaqSection';
import { ClosingCtaBanner } from './components/ClosingCtaBanner';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CalendarBookingModal } from './components/CalendarBookingModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div id="top" className="min-h-screen bg-[#F6F3EC] text-[#121316] font-sans selection:bg-[#FFE500] selection:text-[#121316]">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* Hero Section with 5-Phone Fanned Video Showcase (Real DigitalEditz Brand Videos) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Urgency Marquee Ribbon */}
        <UrgencyMarquee />

        {/* Dark Video Proof Showcase */}
        <ProofVideoShowcase onOpenBooking={handleOpenBooking} />

        {/* 60-Minute Execution Workflow & 3-Step Sequence */}
        <ExecutionPipeline onOpenBooking={handleOpenBooking} />

        {/* What's In The Studio Sprint */}
        <WhatsInTheSprint />

        {/* Studio Attention Quality Gate */}
        <ReadinessAudit onOpenBooking={handleOpenBooking} />

        {/* Physical Supermarket Receipt Voucher */}
        <ReceiptOfferSection onOpenBooking={handleOpenBooking} />

        {/* Embedded Calendly 30-Minute Scheduler */}
        <CalendarBookingSection />

        {/* Good Questions / FAQ */}
        <FaqSection onOpenBooking={handleOpenBooking} />

        {/* Closing High-Voltage CTA Banner */}
        <ClosingCtaBanner onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Persistent Floating Bottom Action Bar */}
      <StickyBottomBar onOpenBooking={handleOpenBooking} />

      {/* Popup Calendly Booking Modal */}
      <CalendarBookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
