import React from 'react';
import { X, Check, Clock, Award, BookOpen, Briefcase, Phone, MessageSquare, Tag, FileText } from 'lucide-react';
import { Course } from '../types';
import { INSTITUTE_INFO } from '../data/coursesData';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenInquiry: (courseTitle: string) => void;
  lang: 'en' | 'hi';
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onOpenInquiry, lang }) => {
  if (!course) return null;

  const whatsAppMessage = encodeURIComponent(
    `Hello A.R Computer Institute, I would like complete details and batch timings for the "${course.title}" course. (Reg: ₹200)`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-blue-950">
              {course.duration}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200">
              {course.category.toUpperCase()}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white">
            {course.title}
          </h2>
          <p className="text-sm font-semibold text-amber-300 mt-1">
            {course.hindiTitle}
          </p>

          {/* Pricing Highlight in Modal */}
          <div className="mt-4 p-3.5 rounded-2xl bg-white/10 border border-white/15 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs text-slate-300 block font-medium">Course Fee:</span>
              <span className="text-xl font-extrabold text-amber-300">{course.feeBadge}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-300 block font-medium">One-Time Registration:</span>
              <span className="text-base font-extrabold text-white">₹{course.registrationFee} only</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-slate-800">
          
          {/* Overview */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-blue-950 flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-amber-600" />
              {lang === 'hi' ? 'कोर्स परिचय' : 'Course Overview'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'hi' ? course.hindiOverview : course.overview}
            </p>
          </div>

          {/* Detailed Syllabus Modules */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-blue-950 flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-amber-600" />
              {lang === 'hi' ? 'विस्तृत सिलेबस (Modules & Topics)' : 'Curriculum & Modules'}
            </h3>

            <div className="space-y-3">
              {course.modules.map((mod, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <h4 className="font-bold text-sm text-blue-950 flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    {mod.title}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                    {mod.topics.map((topic, tidx) => (
                      <li key={tidx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Software Covered */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-blue-950 mb-2">
              {lang === 'hi' ? 'सॉफ्टवेयर एवं टूल्स' : 'Software & Tools Covered'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.softwareCovered.map((soft, sidx) => (
                <span
                  key={sidx}
                  className="px-3 py-1.5 bg-blue-50 text-blue-950 text-xs font-bold rounded-lg border border-blue-200"
                >
                  {soft}
                </span>
              ))}
            </div>
          </div>

          {/* Career & Exam Scope */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
            <div>
              <h4 className="text-xs font-extrabold uppercase text-amber-900 flex items-center gap-1.5 mb-2">
                <Briefcase className="w-4 h-4 text-amber-700" />
                {lang === 'hi' ? 'कैरियर एवं नौकरी के अवसर' : 'Job Opportunities'}
              </h4>
              <ul className="space-y-1.5">
                {course.careerProspects.map((job, jidx) => (
                  <li key={jidx} className="text-xs text-slate-700 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{job}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase text-amber-900 flex items-center gap-1.5 mb-2">
                <Award className="w-4 h-4 text-amber-700" />
                {lang === 'hi' ? 'पात्रता एवं सरकारी मान्यता' : 'Eligibility & Scope'}
              </h4>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Eligibility:</strong> {course.eligibility}
              </p>
              {course.examRelevance && (
                <p className="text-xs text-slate-700 bg-white p-2 rounded-lg border border-amber-200">
                  <strong>Exam Value:</strong> {course.examRelevance}
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            <span className="font-bold text-blue-950">A.R Computer Institute</span> • Jankipuram Extension
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/918957409508?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Details</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry(course.title);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-amber-300 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow"
            >
              <span>{lang === 'hi' ? 'एडमिशन / पूछताछ' : 'Enroll / Book Seat'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
