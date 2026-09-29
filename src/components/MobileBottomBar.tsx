import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

export const MobileBottomBar: React.FC<{
  onOpenInquiry: () => void;
  lang: 'en' | 'hi';
}> = ({ onOpenInquiry, lang }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden flex items-center justify-between gap-2.5">
      {/* Call Button */}
      <a
        href={`tel:${INSTITUTE_INFO.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-2 bg-slate-100 active:bg-slate-200 text-blue-950 rounded-xl font-bold text-xs transition-colors border border-slate-300"
      >
        <Phone className="w-4 h-4 text-amber-600 mb-0.5" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/918957409508?text=${encodeURIComponent('Hello A.R. Computer Institute, I would like admission details for the Jankipuram Extension center.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl font-bold text-xs transition-colors shadow-xs"
      >
        <MessageSquare className="w-4 h-4 text-white mb-0.5" />
        <span>WhatsApp</span>
      </a>

      {/* Apply / Book Seat */}
      <button
        onClick={onOpenInquiry}
        className="flex-[1.4] flex flex-col items-center justify-center py-2 bg-blue-900 active:bg-blue-950 text-white rounded-xl font-black text-xs transition-all shadow-md border border-amber-400/50"
      >
        <span className="flex items-center gap-1 text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Apply (₹200)</span>
        </span>
        <span className="text-[10px] text-slate-300 font-normal">All Courses</span>
      </button>
    </div>
  );
};
