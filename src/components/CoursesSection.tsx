import React, { useState } from 'react';
import { BookOpen, Check, ArrowRight, MessageSquare, Sparkles, Monitor, Calculator, Award, Code, Keyboard, Type, Clock } from 'lucide-react';
import { Course } from '../types';
import { COURSES_DATA, INSTITUTE_INFO } from '../data/coursesData';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onOpenInquiry: (courseTitle: string) => void;
  lang: 'en' | 'hi';
}

// Icon mapper for clean modern icons
const getCourseIcon = (id: string) => {
  switch (id) {
    case 'adca':
      return <Monitor className="w-6 h-6 text-blue-900" />;
    case 'tally':
      return <Calculator className="w-6 h-6 text-amber-700" />;
    case 'ccc':
      return <Award className="w-6 h-6 text-emerald-700" />;
    case 'python':
      return <Code className="w-6 h-6 text-indigo-700" />;
    case 'hindi-typing':
      return <Keyboard className="w-6 h-6 text-orange-700" />;
    case 'english-typing':
      return <Type className="w-6 h-6 text-sky-700" />;
    default:
      return <BookOpen className="w-6 h-6 text-blue-900" />;
  }
};

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse, onOpenInquiry, lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', labelEn: 'All Courses (6)', labelHi: 'सभी कोर्स' },
    { id: 'diploma', labelEn: 'Diploma (ADCA)', labelHi: 'ए.डी.सी.ए' },
    { id: 'accounting', labelEn: 'Accounting (Tally)', labelHi: 'टैली' },
    { id: 'typing', labelEn: 'Typing (Hindi / English)', labelHi: 'टाइपिंग' },
    { id: 'govt-exam', labelEn: 'Govt Certification (CCC)', labelHi: 'सी.सी.सी' },
    { id: 'programming', labelEn: 'Coding (Python)', labelHi: 'पायथन' },
  ];

  const displayedCourses = selectedFilter === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === selectedFilter);

  return (
    <section id="courses" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-950 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-900" />
            <span>Certified Computer Courses</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            {lang === 'hi' ? 'हमारे सभी 6 प्रमुख कंप्यूटर कोर्सेज' : 'Explore Our 6 Core Programs'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'प्रत्येक कोर्स में 100% प्रैक्टिकल ट्रेनिंग, व्यक्तिगत मार्गदर्शन और मान्य सर्टिफिकेट शामिल है।'
              : 'Structured for school & college students, job seekers, and government exam aspirants in Lucknow.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-blue-950 text-amber-300 shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                {lang === 'hi' ? tab.labelHi : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Visually Balanced 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedCourses.map((course) => {
            const isHighlight = course.id === 'adca' || course.id === 'tally';

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar on Card with Icon & Badges */}
                  <div className="p-6 pb-4 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getCourseIcon(course.id)}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>{course.duration}</span>
                        </span>
                        {course.popular && (
                          <span className="text-[10px] font-black uppercase text-amber-950 bg-amber-400 px-2 py-0.5 rounded-md shadow-xs">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-blue-950 tracking-tight group-hover:text-blue-800 transition-colors">
                      {course.title.split('(')[0]}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 mt-0.5">
                      {course.hindiTitle}
                    </p>
                  </div>

                  {/* Pricing Box - Highlighted Clearly */}
                  <div className="px-6 py-4 bg-blue-50/50 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Course Fee
                      </span>
                      <span className="text-lg sm:text-xl font-black text-blue-950">
                        {course.feeBadge}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Registration
                      </span>
                      <span className="text-xs font-black text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
                        ₹200 One-Time
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Features */}
                  <div className="p-6 space-y-3.5">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {lang === 'hi' ? course.hindiOverview : course.overview}
                    </p>

                    {/* Coverage Tags */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Key Curriculum:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.softwareCovered.slice(0, 4).map((soft, sidx) => (
                          <span
                            key={sidx}
                            className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200"
                          >
                            {soft}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Eligibility:</strong> {course.eligibility}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Individual computer during each lab session</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white text-blue-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border border-slate-200 group-hover:border-blue-900"
                  >
                    <span>View Full Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/918957409508?text=${encodeURIComponent(`Hello A.R Computer Institute, please share admission details for ${course.title}. (Reg: ₹200)`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onOpenInquiry(course.title)}
                      className="py-2 px-3 rounded-lg bg-blue-900 hover:bg-blue-950 text-amber-300 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Enroll Now</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Batch Timings Callout */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black text-blue-950">
              Need a Customized Batch or Weekend Timings?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Morning (7–10 AM), Day (10 AM–2 PM), Evening (4–8 PM), and Saturday/Sunday batches are available for all 6 courses.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="px-5 py-2.5 bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-blue-950 transition-colors shadow-xs"
            >
              Call: {INSTITUTE_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
