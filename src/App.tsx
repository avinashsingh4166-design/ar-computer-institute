/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RegistrationBanner } from './components/RegistrationBanner';
import { CoursesSection } from './components/CoursesSection';
import { CourseModal } from './components/CourseModal';
import { FeeStructure } from './components/FeeStructure';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TypingTester } from './components/TypingTester';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactLocation } from './components/ContactLocation';
import { FounderSection } from './components/FounderSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AdmissionModal } from './components/AdmissionModal';
import { PaymentQRModal } from './components/PaymentQRModal';
import { Course } from './types';

export default function App() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isPaymentQROpen, setIsPaymentQROpen] = useState(false);
  const [admissionDefaultCourse, setAdmissionDefaultCourse] = useState<string>('');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const handleOpenInquiry = (courseTitle?: string) => {
    setAdmissionDefaultCourse(courseTitle || 'ADCA (1 Year Diploma - ₹500/month)');
    setIsAdmissionModalOpen(true);
  };

  const handleOpenPaymentQR = () => {
    setIsPaymentQROpen(true);
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-blue-950">
      {/* Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenInquiry={handleOpenInquiry}
        onOpenPaymentQR={handleOpenPaymentQR}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenInquiry={handleOpenInquiry}
        onExploreCourses={handleExploreCourses}
      />

      {/* Prominent ₹200 Registration Offer Banner */}
      <RegistrationBanner
        lang={lang}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenPaymentQR={handleOpenPaymentQR}
      />

      {/* Main Course Offerings */}
      <CoursesSection
        onSelectCourse={(course) => setSelectedCourse(course)}
        onOpenInquiry={handleOpenInquiry}
        lang={lang}
      />

      {/* Transparent Fee Table & Calculator */}
      <FeeStructure
        lang={lang}
        onOpenInquiry={handleOpenInquiry}
        onOpenPaymentQR={handleOpenPaymentQR}
      />

      {/* About Us & Why Choose Us */}
      <WhyChooseUs
        lang={lang}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Live Typing Test Lab */}
      <TypingTester
        lang={lang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 3-Step Admission Guide */}
      <Testimonials
        lang={lang}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Frequently Asked Questions */}
      <FAQ
        lang={lang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Contact & Center Location */}
      <ContactLocation
        lang={lang}
        prefilledCourse={admissionDefaultCourse}
      />

      {/* Meet the Founder Section */}
      <FounderSection
        lang={lang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenInquiry={handleOpenInquiry}
        onOpenPaymentQR={handleOpenPaymentQR}
      />

      {/* Mobile Sticky Bar for Android & Small Screens */}
      <MobileBottomBar
        onOpenInquiry={() => handleOpenInquiry()}
        lang={lang}
      />

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenInquiry={handleOpenInquiry}
        lang={lang}
      />

      {/* Admission / Inquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
        defaultCourse={admissionDefaultCourse}
        lang={lang}
      />

      {/* Payment / QR Code Placeholder Modal */}
      <PaymentQRModal
        isOpen={isPaymentQROpen}
        onClose={() => setIsPaymentQROpen(false)}
        lang={lang}
      />
    </div>
  );
}
