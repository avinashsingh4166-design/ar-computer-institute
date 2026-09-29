import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ArrowUp, Navigation } from 'lucide-react';
import { INSTITUTE_INFO, COURSES_DATA } from '../data/coursesData';

export const Footer: React.FC<{
  lang: 'en' | 'hi';
  onOpenInquiry: (course?: string) => void;
  onOpenPaymentQR: () => void;
}> = ({ lang, onOpenInquiry, onOpenPaymentQR }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Institute Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center text-white font-extrabold text-xl shadow-md border-2 border-amber-400">
                <span className="text-amber-300">AR</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  A.R. Computer Institute
                </h3>
                <p className="text-xs text-amber-400 font-semibold">
                  Jankipuram Extension, Near DPS School, Lucknow
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              A premier computer training institute in Lucknow offering hands-on training in ADCA, CCC, Python, TallyPrime with GST, and Hindi/English Typing for government exams and private careers.
            </p>

            <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 text-xs space-y-1">
              <div className="text-amber-400 font-bold">🎯 Transparent Fees:</div>
              <div className="text-slate-300">• Registration Fee: ₹200 one-time for all courses</div>
              <div className="text-slate-300">• ADCA: ₹500/month | Tally: ₹600 for 6 months</div>
            </div>
          </div>

          {/* Col 2: Course Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              {lang === 'hi' ? 'प्रमुख कोर्सेज' : 'Our 6 Courses'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {COURSES_DATA.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onOpenInquiry(course.title)}
                    className="hover:text-amber-400 transition-colors text-left text-slate-300"
                  >
                    • {course.title.split('(')[0]}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800/80">
                <a
                  href="#founder"
                  className="text-amber-300 hover:text-amber-200 font-semibold text-xs flex items-center gap-1 transition-colors"
                >
                  <span>• Meet the Founder (Avinash singh)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              {lang === 'hi' ? 'संपर्क व केंद्र पता' : 'Campus Location'}
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Jankipuram Extension, A.R Computer Institute, Near DPS School, Lucknow, UP 226021</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+918957409508" className="hover:text-amber-300 font-bold font-mono">
                  +91 8957409508
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sat: 7:00 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href="tel:+918957409508"
                className="px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk</span>
              </a>

              <a
                href="https://wa.me/918957409508"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Delhi+Public+School+Jankipuram+Extension+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} A.R. Computer Institute. Jankipuram Extension, Near DPS School, Lucknow.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
