import React, { useState, useEffect, useRef } from 'react';
import { Award, CheckCircle2, MessageSquare, Phone, MapPin, Upload, Sparkles } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface FounderSectionProps {
  lang: 'en' | 'hi';
  onOpenInquiry: (courseName?: string) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ lang, onOpenInquiry }) => {
  const [photoSrc, setPhotoSrc] = useState<string>('/src/assets/images/founder_avinash_1790707690743.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('ar_founder_photo');
    if (savedPhoto) {
      setPhotoSrc(savedPhoto);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          try {
            localStorage.setItem('ar_founder_photo', result);
          } catch {
            // local storage quota exceeded fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Avinash Sir, I visited the A.R Computer Institute website and would like admission guidance for your computer batches near DPS School, Jankipuram Extension.'
  );

  return (
    <section id="founder" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/60 to-blue-50/30 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Institute Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Meet the Founder
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'जानकीपुरम विस्तार में छात्र-छात्राओं के उज्जवल भविष्य के लिए समर्पित मार्गदर्शन।'
              : 'Leading the mission for career-ready, practical, and affordable IT education in Lucknow.'}
          </p>
        </div>

        {/* Founder Portrait Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            
            {/* Left Column: Real Photograph */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-100 via-blue-50/50 to-slate-200/60 p-6 sm:p-8 flex flex-col items-center justify-center relative">
              <div className="relative group w-full max-w-[280px] sm:max-w-[300px]">
                {/* Decorative border frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-900 via-amber-400 to-indigo-950 rounded-3xl opacity-80 blur-xs group-hover:opacity-100 transition duration-300" />
                
                <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-white shadow-lg aspect-[3/4]">
                  <img
                    src={photoSrc}
                    alt="Avinash singh - Founder of A.R Computer Institute"
                    className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to /founder.jpg if needed
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/founder.jpg')) {
                        target.src = '/founder.jpg';
                      }
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent p-3 text-white text-center">
                    <p className="font-extrabold text-sm tracking-wide text-white">Avinash singh</p>
                    <p className="text-[11px] font-semibold text-amber-300">Founder & Director</p>
                  </div>
                </div>

                {/* Upload or Update Photo Button */}
                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-blue-900 transition-colors py-1 px-2.5 rounded-lg hover:bg-white/80"
                    title="Change or upload founder photo"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload / Update Photo</span>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Founder Details */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 space-y-5">
              
              <div className="space-y-1">
                <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-black uppercase rounded-full tracking-wider inline-block">
                  Founder Profile
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
                  Avinash singh
                </h3>

                <p className="text-sm font-bold text-blue-900 flex items-center gap-1.5">
                  <span>A.R Computer Institute</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-medium">Jankipuram Extension, Lucknow</span>
                </p>
              </div>

              {/* Exact Required Short Description */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-blue-950">
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  &ldquo;Dedicated to providing practical and affordable computer education.&rdquo;
                </p>
              </div>

              {/* Founder's Key Principles */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Practical Orientation:</strong> Dedicated computer for every student with real-time software practice.
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparent & Affordable:</strong> ₹200 one-time registration for all courses, ADCA at ₹500/month, and Tally at ₹600 for 6 months.
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Prime Convenient Campus:</strong> Located in Jankipuram Extension near Delhi Public School for easy student accessibility.
                  </span>
                </div>
              </div>

              {/* Direct Communication Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/918957409508?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-200" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="px-5 py-3 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: {INSTITUTE_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenInquiry('Discussion with Founder')}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
                >
                  Book Counseling
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
