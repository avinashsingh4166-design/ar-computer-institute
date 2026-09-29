import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface FAQProps {
  lang: 'en' | 'hi';
  onOpenInquiry: (courseTitle?: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ lang, onOpenInquiry }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'What is the registration fee for admission?',
      qHi: 'एडमिशन के लिए रजिस्ट्रेशन शुल्क कितना है?',
      aEn: 'The registration fee is flat ₹200 one-time only for all courses. You only pay once at the time of admission, valid throughout your course duration.',
      aHi: 'सभी कोर्सेज के लिए रजिस्ट्रेशन शुल्क मात्र ₹200 (एक बार) है। एडमिशन के समय केवल एक बार देना होता है।'
    },
    {
      qEn: 'What are the course fees for ADCA and Tally?',
      qHi: 'ए.डी.सी.ए (ADCA) और टैली (Tally) की फीस कितनी है?',
      aEn: 'ADCA (1-Year Diploma) is ₹500 per month. TallyPrime with GST is ₹600 for the entire 6 months course under our special batch pricing.',
      aHi: 'ए.डी.सी.ए (1 वर्षीय डिप्लोमा) ₹500 प्रतिमाह है। टैली प्राइम विथ जीएसटी पूरे 6 महीने के कोर्स के लिए मात्र ₹600 है।'
    },
    {
      qEn: 'How can I know fees for CCC, Python, Hindi Typing, and English Typing?',
      qHi: 'सी.सी.सी, पायथन, हिंदी व इंग्लिश टाइपिंग की फीस कैसे पता करें?',
      aEn: 'For CCC, Python, Hindi Typing, and English Typing, please click "Contact for Fee", call +91 8957409508, or send a WhatsApp message to get immediate fee and batch details.',
      aHi: 'सी.सी.सी, पायथन और टाइपिंग कोर्सेज की फीस जानने के लिए "Contact for Fee" बटन पर क्लिक करें, +91 8957409508 पर कॉल करें या व्हाट्सएप पर मैसेज करें।'
    },
    {
      qEn: 'Where is the institute located in Jankipuram?',
      qHi: 'संस्थान जानकीपुरम में कहां स्थित है?',
      aEn: 'The institute is located at: Jankipuram Extension, A.R Computer Institute, Near DPS School (Delhi Public School), Lucknow. Direct e-rickshaws and autos are available from Tedhi Pulia and Sitapur Road.',
      aHi: 'संस्थान का पता: जानकीपुरम विस्तार, ए.आर. कंप्यूटर इंस्टिट्यूट, डीपीएस स्कूल (दिल्ली पब्लिक स्कूल) के पास, लखनऊ।'
    },
    {
      qEn: 'Which Hindi typing font is taught for government recruitment exams?',
      qHi: 'सरकारी भर्तियों के लिए कौन सा हिंदी टाइपिंग फॉन्ट सिखाया जाता है?',
      aEn: 'We provide specialized training in both KrutiDev 010 and Mangal Font (Inscript and Remington GAIL layout), which are officially required for UPSSSC, Allahabad High Court RO/ARO, and Police examinations.',
      aHi: 'हम कृतिदेव 010 (KrutiDev 010) और मंगल फॉन्ट (Mangal Inscript व Remington GAIL) दोनों में परीक्षा पैटर्न पर विशेष तैयारी कराते हैं।'
    },
    {
      qEn: 'Will I get an individual computer during lab practice?',
      qHi: 'क्या लैब में मुझे अलग कंप्यूटर मिलेगा?',
      aEn: 'Yes, absolutely. We maintain a strict 1:1 computer ratio. Every student practices on their own individual desktop computer during every class without sharing.',
      aHi: 'जी हां, बिल्कुल। हमारे यहां प्रत्येक छात्र के लिए अलग कंप्यूटर (1:1 रेशियो) की व्यवस्था है, कोई शेयरिंग नहीं होती।'
    },
    {
      qEn: 'What are the batch timings?',
      qHi: 'बैच की टाइमिंग क्या है?',
      aEn: 'Batches run from 7:00 AM to 8:00 PM (Monday to Saturday). Morning, afternoon, evening, and weekend batches are available for school, college, and working students.',
      aHi: 'सुबह 7:00 बजे से रात 8:00 बजे तक लगातार बैच उपलब्ध हैं। आप अपनी सुविधा अनुसार सुबह, दोपहर या शाम का बैच चुन सकते हैं।'
    },
    {
      qEn: 'Can I take a demo class before paying the fees?',
      qHi: 'क्या एडमिशन से पहले डेमो क्लास ले सकते हैं?',
      aEn: 'Yes, students are welcome to attend a free 2-day demo class to experience our lab, teaching methodology, and syllabus before completing admission.',
      aHi: 'जी हां, आप 2 दिन का फ्री डेमो क्लास लेकर कंप्यूटर लैब व पढ़ाने के तरीके को देख सकते हैं, फिर दाखिला ले सकते हैं।'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-blue-900" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल (FAQ)' : 'Frequently Asked Questions'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'एडमिशन, फीस, कोर्स और बैच टाइमिंग से जुड़े सभी महत्वपूर्ण सवालों के जवाब।'
              : 'Clear answers to common questions about admissions, fees, batch timings, and typing lab.'}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-blue-950 hover:bg-slate-50 transition-colors"
                >
                  <span>{lang === 'hi' ? faq.qHi : faq.qEn}</span>
                  <div className={`p-1.5 rounded-lg transition-transform ${isOpen ? 'bg-blue-100 text-blue-950 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{lang === 'hi' ? faq.aHi : faq.aEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-10 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-blue-950 text-sm sm:text-base">
              Have another question not listed here?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Call our admission desk at +91 8957409508 or chat on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-blue-950 font-bold text-xs rounded-xl transition-all border border-slate-300 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>Call Us</span>
            </a>

            <a
              href={`https://wa.me/918957409508?text=${encodeURIComponent('Hello A.R Computer Institute, I have a question regarding courses and admission.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
