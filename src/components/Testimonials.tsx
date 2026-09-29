import React from 'react';
import { Monitor, BookOpen, CheckCircle, Award, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

export const Testimonials: React.FC<{ lang: 'en' | 'hi'; onOpenInquiry: () => void }> = ({ lang, onOpenInquiry }) => {
  const steps = [
    {
      step: '01',
      titleEn: 'Visit Center / Inquire',
      titleHi: 'केंद्र आएं या फोन करें',
      descEn: 'Visit our lab near Delhi Public School in Jankipuram Extension or call +91 8957409508 to understand course syllabus and batch timings.',
      descHi: 'डीपीएस स्कूल, जानकीपुरम विस्तार स्थित हमारे सेंटर पर आएं या फोन करके कोर्स व बैच समय की जानकारी लें।'
    },
    {
      step: '02',
      titleEn: 'Free 2-Day Lab Demo',
      titleHi: '2 दिन का फ्री डेमो क्लास',
      descEn: 'Attend practical classes in the lab, observe the 1:1 computer setup, and experience the step-by-step teaching style.',
      descHi: 'लैब में बैठकर खुद कंप्यूटर चलाएं, शिक्षक की समझाईश देखें और अपनी संतुष्टि के बाद ही आगे बढ़ें।'
    },
    {
      step: '03',
      titleEn: 'One-Time ₹200 Registration',
      titleHi: 'मात्र ₹200 रजिस्ट्रेशन',
      descEn: 'Enroll in your chosen course with a simple flat ₹200 one-time registration fee. Start regular classes with personal lab PC.',
      descHi: 'मात्र ₹200 एकमुश्त रजिस्ट्रेशन शुल्क देकर अपने बैच में शामिल हों। कोई अतिरिक्त छुपा हुआ शुल्क नहीं।'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
            <UserCheck className="w-3.5 h-3.5 text-blue-900" />
            <span>Admission Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            {lang === 'hi' ? 'एडमिशन कैसे लें? आसान 3 चरण' : 'Simple 3-Step Admission Process'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Easy, transparent, and student-friendly admission at A.R. Computer Institute, Jankipuram Extension.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-7 relative transition-all duration-300 hover:shadow-lg hover:border-amber-400 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-300 font-mono font-black text-lg flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                {st.step}
              </div>

              <h3 className="text-xl font-black text-blue-950 mb-2">
                {lang === 'hi' ? st.titleHi : st.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === 'hi' ? st.descHi : st.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
