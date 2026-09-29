import React from 'react';
import { Monitor, Clock, ShieldCheck, MapPin, Award, HeartHandshake, Zap, CheckCircle2, Users, FileCheck } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

export const WhyChooseUs: React.FC<{ lang: 'en' | 'hi'; onOpenInquiry: () => void }> = ({ lang, onOpenInquiry }) => {
  const points = [
    {
      icon: Monitor,
      titleEn: '1:1 Personal Computer for Every Student',
      titleHi: 'प्रत्येक छात्र को अलग कंप्यूटर',
      descEn: 'Every student practices on their own dedicated PC during every lab session. Zero sharing, 100% hands-on training.',
      descHi: 'लैब में बिना किसी शेयरिंग के हर छात्र को अलग डेस्कटॉप मिलता है, जिससे व्यावहारिक ज्ञान तेजी से बढ़ता है।'
    },
    {
      icon: MapPin,
      titleEn: 'Prime Jankipuram Extension Location',
      titleHi: 'जानकीपुरम विस्तार (डीपीएस स्कूल के पास)',
      descEn: 'Conveniently situated near Delhi Public School (DPS) in Jankipuram Extension with direct connectivity from Sitapur Road, Tedhi Pulia & Engineering College.',
      descHi: 'डीपीएस स्कूल, जानकीपुरम विस्तार के पास सुरक्षित और सुगम आवागमन वाला केंद्र।'
    },
    {
      icon: Award,
      titleEn: '₹200 One-Time Registration Fee',
      titleHi: 'मात्र ₹200 एकमुश्त रजिस्ट्रेशन',
      descEn: 'Flat ₹200 registration fee across all courses. ADCA at ₹500/month and Tally at ₹600 for 6 months.',
      descHi: 'सभी कोर्स के लिए केवल ₹200 एकमुश्त रजिस्ट्रेशन। ए.डी.सी.ए ₹500 प्रतिमाह और टैली ₹600 (6 माह)।'
    },
    {
      icon: Zap,
      titleEn: 'Dedicated Hindi & English Typing Lab',
      titleHi: 'विशेष हिंदी व इंग्लिश टाइपिंग लैब',
      descEn: 'Specialized lab setups for KrutiDev 010 and Mangal Inscript typing targeting 35+ WPM for UPSSSC, High Court, and SSC exams.',
      descHi: 'सरकारी परीक्षा हॉल जैसे कीबोर्ड पर प्रतिदिन स्पीड और एक्यूरेसी सुधारने हेतु विशेष अभ्यास।'
    },
    {
      icon: Clock,
      titleEn: 'Flexible Batches (7:00 AM – 8:00 PM)',
      titleHi: 'सुविधाजनक बैच समय (सुबह 7 से रात 8)',
      descEn: 'Morning, afternoon, evening, and weekend batches tailored for school students, college learners, and working individuals.',
      descHi: 'स्कूल, कॉलेज व प्रतियोगी छात्रों की सुविधा अनुसार सुबह 7 बजे से रात 8 बजे तक लगातार बैच।'
    },
    {
      icon: FileCheck,
      titleEn: 'Industry & Exam-Aligned Curriculum',
      titleHi: 'मान्य सिलेबस व प्रैक्टिकल प्रोजेक्ट्स',
      descEn: 'Course modules aligned with NIELIT CCC standards, latest TallyPrime with GST, and modern software skills.',
      descHi: 'लेटेस्ट टैली प्राइम, जीएसटी बिलिंग और सीसीसी सिलेबस के अनुसार संपूर्ण थ्योरी व प्रैक्टिकल।'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-blue-900" />
            <span>About The Institute</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            {lang === 'hi' ? 'A.R. Computer Institute की विशेषताएं' : 'Why Choose A.R. Computer Institute?'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'जानकीपुरम विस्तार (डीपीएस स्कूल के पास) में आधुनिक कंप्यूटर व टाइपिंग प्रशिक्षण।'
              : 'Dedicated to quality, practical computer education with transparent fees and personal attention in Lucknow.'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-amber-400 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-amber-300 transition-colors border border-blue-100">
                <pt.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-black text-blue-950 mb-2">
                {lang === 'hi' ? pt.titleHi : pt.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === 'hi' ? pt.descHi : pt.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Friendly Trial Callout */}
        <div className="mt-12 bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-black text-blue-950">
              Visit Center for a Free Demo Class
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Visit our lab near Delhi Public School in Jankipuram Extension to experience the lab environment and teacher guidance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="px-5 py-3 bg-blue-950 hover:bg-blue-900 text-amber-300 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs"
            >
              Book Free Demo Class
            </button>
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-blue-950 font-bold text-xs sm:text-sm rounded-xl transition-all border border-slate-200"
            >
              Call: {INSTITUTE_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
