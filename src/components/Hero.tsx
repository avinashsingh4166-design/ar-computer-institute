import React from 'react';
import { Phone, MessageSquare, ArrowRight, CheckCircle2, MapPin, Monitor, Sparkles, BookOpen, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface HeroProps {
  lang: 'en' | 'hi';
  onOpenInquiry: (courseName?: string) => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenInquiry, onExploreCourses }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/80">
      
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-slate-900">
            
            {/* Institute & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900 text-white text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-bold text-amber-300">A.R. Computer Institute</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-200">Near Delhi Public School, Jankipuram Ext.</span>
            </div>

            {/* Main Headline Exactly as requested */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-blue-950 tracking-tight leading-[1.15]">
                Learn Computer Skills.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-800 to-amber-600">
                  Build Your Future.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                {lang === 'hi'
                  ? 'जानकीपुरम विस्तार, लखनऊ में गुणवत्तापूर्ण कंप्यूटर शिक्षा। एडीसीएस, सीसीसी, पायथन, टैली जीएसटी, हिंदी व इंग्लिश टाइपिंग की संपूर्ण प्रैक्टिकल ट्रेनिंग।'
                  : 'Empowering students and job aspirants in Jankipuram Extension with job-oriented computer training. Master ADCA, Tally with GST, Python, CCC, and Hindi/English touch typing.'}
              </p>
            </div>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                  ₹
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Registration</span>
                  <span className="text-xs font-black text-blue-950">₹200 One-Time</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs shrink-0">
                  <Monitor className="w-4 h-4 text-blue-900" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">ADCA Diploma</span>
                  <span className="text-xs font-black text-blue-950">₹500 / month</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  ⌨️
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Tally (6 Mos)</span>
                  <span className="text-xs font-black text-blue-950">₹600 Total</span>
                </div>
              </div>
            </div>

            {/* Requested Attractive CTA Buttons: "View Courses" and "Contact Us" */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExploreCourses}
                className="px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-black text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 border border-blue-950"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>View Courses</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={() => onOpenInquiry()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-blue-950 font-black text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-blue-950" />
                <span>Contact Us</span>
              </button>

              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="px-4 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-950 font-bold text-sm sm:text-base border border-slate-300 transition-all flex items-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>{INSTITUTE_INFO.phone}</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1:1 Lab Computer for Every Student</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Flexible Batches: 7 AM – 8 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Hindi & English Medium Training</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visually Impressive Computer-Learning Illustration */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Desktop Mockup Card */}
              <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
                
                {/* Computer Window Bar */}
                <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 px-4 py-3 flex items-center justify-between border-b border-blue-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-amber-300">
                    A.R. Computer Institute • Live Lab
                  </span>
                  <span className="text-[10px] text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded">
                    Jankipuram
                  </span>
                </div>

                {/* Computer Screen Content */}
                <div className="p-5 sm:p-6 bg-slate-900 text-white font-sans space-y-4">
                  
                  {/* Course Status Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-amber-400 font-bold">ADCA (1 Year)</span>
                        <span className="text-slate-300 font-mono">₹500/mo</span>
                      </div>
                      <p className="text-[11px] text-slate-300">MS Office, Tally & Hardware</p>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-amber-400 h-full w-[85%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-emerald-400 font-bold">TallyPrime GST</span>
                        <span className="text-slate-300 font-mono">₹600 (6 mos)</span>
                      </div>
                      <p className="text-[11px] text-slate-300">Vouchers, Balance Sheet & GST</p>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[100%]" />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Code & Typing Terminal Graphic */}
                  <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-xs space-y-1.5 text-slate-300">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1 border-b border-slate-800">
                      <span># Computer Practice Terminal</span>
                      <span className="text-emerald-400">● Live Speed: 38 WPM</span>
                    </div>
                    <div className="text-sky-300">
                      <span className="text-amber-400">&gt;</span> python -m computer_institute.learn
                    </div>
                    <div className="text-emerald-400 text-[11px]">
                      [✓] CCC (NIELIT) Prep: 100% Mock Test Ready
                    </div>
                    <div className="text-amber-300 text-[11px]">
                      [✓] Hindi Typing: KrutiDev 010 &amp; Mangal Layout
                    </div>
                    <div className="text-slate-400 text-[10px]">
                      &gt; Registration: ₹200 (One-Time for all courses)
                    </div>
                  </div>

                  {/* Center Address & Batch Notice */}
                  <div className="bg-blue-950/90 p-3 rounded-2xl border border-amber-400/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                        Campus Location:
                      </span>
                      <p className="text-xs font-semibold text-white">
                        Near Delhi Public School, Jankipuram Ext.
                      </p>
                    </div>
                    <a
                      href={`tel:${INSTITUTE_INFO.phone}`}
                      className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-xs rounded-xl shadow-xs shrink-0"
                    >
                      Call Now
                    </a>
                  </div>

                </div>

                {/* Bottom Footer Bar on illustration */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
                      AR
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-blue-950">A.R. Computer Institute</p>
                      <p className="text-[10px] text-slate-500">+91 8957409508</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenInquiry()}
                    className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>Book Demo Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Floating Accent Badge: ₹200 Registration */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-gradient-to-r from-amber-500 to-orange-500 text-blue-950 p-3.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-300 flex items-center justify-center font-black text-base">
                  ₹
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black tracking-wider text-blue-950 block">
                    One-Time Offer
                  </span>
                  <span className="text-sm font-black text-blue-950 leading-none">
                    ₹200 Registration Fee
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
