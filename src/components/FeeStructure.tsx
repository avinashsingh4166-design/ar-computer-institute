import React, { useState } from 'react';
import { Tag, Check, Phone, MessageSquare, Calculator, CreditCard, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { COURSES_DATA, INSTITUTE_INFO } from '../data/coursesData';

interface FeeStructureProps {
  lang: 'en' | 'hi';
  onOpenInquiry: (courseTitle?: string) => void;
  onOpenPaymentQR: () => void;
}

export const FeeStructure: React.FC<FeeStructureProps> = ({ lang, onOpenInquiry, onOpenPaymentQR }) => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>(['adca']);

  const toggleCourse = (id: string) => {
    if (selectedCourses.includes(id)) {
      if (selectedCourses.length > 1) {
        setSelectedCourses(selectedCourses.filter((c) => c !== id));
      }
    } else {
      setSelectedCourses([...selectedCourses, id]);
    }
  };

  const hasAdca = selectedCourses.includes('adca');
  const hasTally = selectedCourses.includes('tally');
  const otherSelected = selectedCourses.filter((c) => c !== 'adca' && c !== 'tally');

  const selectedCourseNames = selectedCourses
    .map((id) => COURSES_DATA.find((c) => c.id === id)?.title.split('(')[0])
    .filter(Boolean)
    .join(' + ');

  const quoteMessage = encodeURIComponent(
    `Hello A.R. Computer Institute, I checked the fee for [${selectedCourseNames}] (Registration: ₹200). Please share batch timings for Jankipuram Extension center.`
  );

  return (
    <section id="fees" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-amber-700" />
            <span>100% Transparent Fee Structure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            {lang === 'hi' ? 'स्पष्ट एवं किफायती फीस' : 'Transparent Fee Schedule'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'बिना किसी छुपे हुए शुल्क के आसान व किफायती फीस। सभी कोर्स के लिए एक बार रजिस्ट्रेशन मात्र ₹200।'
              : 'Affordable, straightforward fees with no hidden exam or admission surcharges.'}
          </p>
        </div>

        {/* Highlight Requirement: Prominently Highlight "₹200 One-Time Registration" */}
        <div className="mb-12 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 rounded-3xl p-6 sm:p-8 shadow-md border-2 border-amber-300 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-blue-950">
            
            <div className="space-y-1.5 text-center lg:text-left">
              <span className="px-3 py-0.5 bg-blue-950 text-amber-300 text-[11px] font-black uppercase rounded-full tracking-wider">
                Special Admission Offer
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
                ₹200 One-Time Registration
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-950/80 max-w-2xl">
                Pay only ₹200 once at the time of admission for any course. Valid throughout your training with identity card, lab accession, and syllabus kit.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={onOpenPaymentQR}
                className="px-5 py-3 bg-blue-950 hover:bg-blue-900 text-amber-300 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2 active:scale-95"
              >
                <CreditCard className="w-4 h-4 text-amber-400" />
                <span>Pay ₹200 / View QR</span>
              </button>

              <button
                onClick={() => onOpenInquiry()}
                className="px-5 py-3 bg-white hover:bg-slate-100 text-blue-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs"
              >
                Book Your Seat
              </button>
            </div>

          </div>
        </div>

        {/* Separate Course Fees Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {COURSES_DATA.map((course) => {
            const isAdca = course.id === 'adca';
            const isTally = course.id === 'tally';

            return (
              <div
                key={course.id}
                className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isAdca || isTally
                    ? 'border-blue-900/30 bg-gradient-to-b from-blue-50/50 to-white shadow-md hover:shadow-xl'
                    : 'border-slate-200 bg-white shadow-xs hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {course.duration}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                      Reg: ₹200
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-blue-950 mb-1">
                    {course.title.split('(')[0]}
                  </h4>
                  <p className="text-xs font-semibold text-amber-800 mb-4">
                    {course.hindiTitle}
                  </p>

                  {/* Fee Box */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-4">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Fee:
                    </span>
                    <div className="text-2xl font-black text-blue-950">
                      {course.feeBadge}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {course.feeDetail}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Dedicated personal lab PC</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Govt & private recruitment value</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Flexible morning or evening slots</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  {course.feeBadge === 'Contact for Fee' ? (
                    <a
                      href={`https://wa.me/918957409508?text=${encodeURIComponent(`Hello A.R. Computer Institute, what is the fee for ${course.title} at Jankipuram center?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-blue-900 hover:bg-blue-950 text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                      <span>Contact for Fee on WhatsApp</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenInquiry(course.title)}
                      className="w-full py-2.5 bg-blue-900 hover:bg-blue-950 text-amber-300 rounded-xl text-xs font-black transition-all shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <span>Enroll in {course.title.split('(')[0]} (₹200 Reg)</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Fee Estimator */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Course Checkboxes */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>Interactive Fee Estimator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-blue-950">
                Customize Your Course Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Select one or multiple courses below to calculate your estimated tuition and one-time registration fee:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {COURSES_DATA.map((course) => {
                  const isChecked = selectedCourses.includes(course.id);
                  return (
                    <button
                      key={course.id}
                      onClick={() => toggleCourse(course.id)}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-blue-900 text-white border-blue-900 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-xs sm:text-sm">{course.title.split('(')[0]}</p>
                        <p className={`text-[11px] font-semibold ${isChecked ? 'text-amber-300' : 'text-amber-800'}`}>
                          {course.feeBadge}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-amber-400 border-amber-400 text-blue-950' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-4">
              <h4 className="text-base font-black text-blue-950 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Fee Quote Summary</span>
                <span className="text-xs text-amber-700 font-bold">A.R. Computer Institute</span>
              </h4>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Selected ({selectedCourses.length}):</span>
                  <span className="font-bold text-blue-950 text-right truncate max-w-[180px]">
                    {selectedCourseNames}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-600 border-t border-slate-100 pt-2">
                  <span>Registration Fee:</span>
                  <span className="font-black text-amber-700">₹200 (One-Time)</span>
                </div>

                {hasAdca && (
                  <div className="flex items-center justify-between text-slate-600">
                    <span>ADCA Installment:</span>
                    <span className="font-bold text-blue-950">₹500 / month</span>
                  </div>
                )}

                {hasTally && (
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Tally with GST:</span>
                    <span className="font-bold text-blue-950">₹600 for 6 months</span>
                  </div>
                )}

                {otherSelected.length > 0 && (
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Other Course(s):</span>
                    <span className="font-bold text-blue-900">Contact for Fee</span>
                  </div>
                )}
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href={`https://wa.me/918957409508?text=${quoteMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Fee Quote to WhatsApp</span>
                </a>

                <button
                  onClick={onOpenPaymentQR}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200"
                >
                  <CreditCard className="w-3.5 h-3.5 text-amber-600" />
                  <span>View Registration QR / Payment Desk</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
