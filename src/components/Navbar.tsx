import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, MapPin, Globe, CreditCard, ChevronRight } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface NavbarProps {
  lang: 'en' | 'hi';
  onToggleLang: () => void;
  onOpenInquiry: (courseName?: string) => void;
  onOpenPaymentQR: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenInquiry,
  onOpenPaymentQR,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#courses', labelEn: 'Courses', labelHi: 'कोर्सेज' },
    { href: '#fees', labelEn: 'Fees', labelHi: 'फीस' },
    { href: '#why-us', labelEn: 'About Us', labelHi: 'हमारे बारे में' },
    { href: '#typing-lab', labelEn: 'Typing Lab', labelHi: 'टाइपिंग लैब' },
    { href: '#founder', labelEn: 'Founder', labelHi: 'डायरेक्टर' },
    { href: '#faq', labelEn: 'FAQ', labelHi: 'सवाल-जवाब' },
    { href: '#contact', labelEn: 'Contact Us', labelHi: 'संपर्क करें' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-amber-400 text-blue-950 font-black px-2 py-0.5 rounded text-[10px] sm:text-xs uppercase tracking-wider">
              {lang === 'hi' ? 'विशेष ऑफर' : 'Admission Open'}
            </span>
            <span className="font-medium text-slate-100 text-xs truncate">
              {lang === 'hi'
                ? 'सभी कोर्स के लिए रजिस्ट्रेशन फीस मात्र ₹200 (एक बार) • जानकीपुरम विस्तार'
                : 'Registration: ₹200 One-Time for all courses • ADCA ₹500/mo • Tally ₹600 (6 mos)'}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-xs">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{INSTITUTE_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenPaymentQR}
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              title="Fee Payment Desk QR"
            >
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              <span>Reg ₹200 QR</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded border border-white/20 transition-all font-semibold"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Institute Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md border-2 border-amber-400/80 group-hover:scale-105 transition-transform">
              <span className="text-amber-300">AR</span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-blue-950 tracking-tight leading-none">
                  A.R Computer Institute
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1 truncate max-w-[260px] sm:max-w-none">
                <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                <span>Jankipuram Extension, Near DPS School, Lucknow</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50/70 rounded-lg transition-all"
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Stand-out Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-blue-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-300"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 hover:from-blue-950 hover:to-indigo-900 rounded-xl shadow-md hover:shadow-lg transition-all border border-amber-400/50 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenInquiry()}
              className="sm:hidden px-3 py-2 text-xs font-bold text-white bg-blue-900 rounded-lg shadow-xs"
            >
              Contact Us
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 mb-2 text-xs text-amber-950 flex items-center justify-between">
            <span className="font-bold">Registration: Flat ₹200 (One-Time)</span>
            <span className="font-extrabold text-blue-950">ADCA ₹500/mo</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-950 hover:bg-blue-50 rounded-xl transition-colors"
            >
              <span>{lang === 'hi' ? link.labelHi : link.labelEn}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPaymentQR();
              }}
              className="w-full py-2.5 bg-slate-100 font-bold text-slate-800 rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-200"
            >
              <CreditCard className="w-4 h-4 text-amber-600" />
              <span>Registration Fee ₹200 Payment QR</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="py-2.5 bg-blue-50 font-bold text-blue-950 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-blue-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-900" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="py-2.5 bg-blue-900 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
