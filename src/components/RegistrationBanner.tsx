import React from 'react';
import { Tag, Clock, Phone, Sparkles, Check, ArrowRight, CreditCard } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface RegistrationBannerProps {
  lang: 'en' | 'hi';
  onOpenInquiry: () => void;
  onOpenPaymentQR: () => void;
}

export const RegistrationBanner: React.FC<RegistrationBannerProps> = ({
  lang,
  onOpenInquiry,
  onOpenPaymentQR,
}) => {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 py-5 px-4 sm:px-6 lg:px-8 shadow-xs border-y border-amber-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-blue-950">
        
        {/* Left Information */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-blue-950 text-amber-300 items-center justify-center shrink-0 shadow-xs font-black text-xl">
            ₹
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 bg-blue-950/10 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-blue-950">
              <Sparkles className="w-3 h-3 text-blue-950" />
              <span>Affordable Computer Education</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-blue-950 leading-tight">
              {lang === 'hi'
                ? 'सभी कोर्स के लिए रजिस्ट्रेशन शुल्क: मात्र ₹200 (One-Time)'
                : 'Registration Fee: ₹200 One-Time for All Courses'}
            </h2>
            <div className="text-xs font-bold text-blue-950/90 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 mt-0.5">
              <span>• ADCA: ₹500/Month</span>
              <span>• Tally: ₹600 for 6 Months</span>
              <span>• CCC & Typing: Contact for Fee</span>
            </div>
          </div>
        </div>

        {/* Right CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0 w-full md:w-auto">
          <button
            onClick={onOpenPaymentQR}
            className="px-4 py-2.5 bg-white hover:bg-slate-100 text-blue-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <CreditCard className="w-3.5 h-3.5 text-amber-600" />
            <span>Pay ₹200 / View QR</span>
          </button>

          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-amber-300 font-black text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>{lang === 'hi' ? 'सीट सुरक्षित करें' : 'Enroll with ₹200 Reg'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
