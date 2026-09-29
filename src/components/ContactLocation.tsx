import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, Send, CheckCircle2, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface ContactLocationProps {
  lang: 'en' | 'hi';
  prefilledCourse?: string;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ lang, prefilledCourse }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: prefilledCourse || 'ADCA (1 Year Diploma)',
    timing: 'Morning Batch (7:00 AM - 10:00 AM)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    tokenNumber: string;
    whatsAppUrl: string;
  } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.name.trim()) {
      setFormError('Please enter student name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/\D/g, '').slice(-10))) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setSubmittedData({
        tokenNumber: data.tokenNumber,
        whatsAppUrl: data.whatsAppUrl,
      });
    } catch (err: any) {
      setFormError(err.message || 'Something went wrong. Please call directly at +91 8957409508.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-blue-900" />
            <span>Center Location & Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            {lang === 'hi' ? 'संस्थान का पता एवं संपर्क' : 'Contact & Visit Our Center'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Admissions open for new batches. Visit our Jankipuram center or contact our helpline:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Center Card Matching Exact Specs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Visual Contact Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md space-y-6">
              
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Computer Institute
                </span>
                
                {/* Exactly as requested in prompt: A.R Computer Institute */}
                <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
                  A.R Computer Institute
                </h3>
              </div>

              {/* Exact Address as requested: Jankipuram Extension, A.R Computer Institute, Near DPS School */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Campus Address:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-blue-950 mt-0.5">
                    Jankipuram Extension, A.R Computer Institute, Near DPS School
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Lucknow, Uttar Pradesh 226021 (Near Delhi Public School)
                  </p>
                </div>
              </div>

              {/* Exact Phone as requested: +91 8957409508 */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Phone className="w-5 h-5 text-blue-900 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Official Phone / WhatsApp Helpline:
                  </span>
                  <a
                    href="tel:+918957409508"
                    className="text-lg sm:text-xl font-black text-blue-950 hover:text-blue-800 transition-colors font-mono"
                  >
                    +91 8957409508
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-3.5 px-4 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span><strong>Batch Timings:</strong> 7:00 AM – 8:00 PM (Monday – Saturday)</span>
              </div>

              {/* Three Required Attractive Buttons: Call Now, WhatsApp Us, Get Directions */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* 1. Call Now */}
                <a
                  href="tel:+918957409508"
                  className="py-3 px-4 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>

                {/* 2. WhatsApp Us */}
                <a
                  href={`https://wa.me/918957409508?text=${encodeURIComponent('Hello A.R Computer Institute, I would like admission details for the Jankipuram Extension center.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                {/* 3. Get Directions */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Delhi+Public+School+Jankipuram+Extension+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-blue-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all border border-slate-300 flex items-center justify-center gap-2 active:scale-95 text-center"
                >
                  <Navigation className="w-4 h-4 text-blue-900" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Quick Transport Directions */}
            <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-blue-950 text-sm">
                📍 Location Guide:
              </h4>
              <p>
                The institute is conveniently located near <strong>Delhi Public School (DPS)</strong> in Jankipuram Extension. Easily accessible via e-rickshaw and autos from Tedhi Pulia, Sitapur Road, and Engineering College Chauraha.
              </p>
            </div>

          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md">
            <div className="border-b border-slate-100 pb-4 mb-5">
              <span className="text-[11px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Course Enquiry
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-blue-950 mt-1">
                {lang === 'hi' ? 'एडमिशन / पूछताछ फॉर्म' : 'Online Admission Enquiry'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                One-time registration fee: ₹200 only for all courses. Fill this form for batch details and demo class.
              </p>
            </div>

            {submittedData ? (
              <div className="space-y-4 text-center p-6 bg-blue-50/70 rounded-2xl border border-blue-200 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-base font-black text-blue-950">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Your Reference Token: <span className="font-mono text-blue-950 font-bold bg-white px-2 py-0.5 rounded border border-slate-300">{submittedData.tokenNumber}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our faculty will call you shortly on <strong>{formData.phone}</strong>. You can also connect immediately on WhatsApp:
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <a
                    href={submittedData.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({
                        name: '',
                        phone: '',
                        course: 'ADCA (1 Year Diploma)',
                        timing: 'Morning Batch (7:00 AM - 10:00 AM)',
                        message: '',
                      });
                    }}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter student name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-xs text-slate-600 font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="w-full bg-slate-50 border border-slate-200 rounded-r-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Course Interested In *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white"
                  >
                    <option value="ADCA (1 Year Diploma - ₹500/month)">ADCA (1 Year Diploma - ₹500/month)</option>
                    <option value="TallyPrime with GST (6 Months - ₹600 for 6 mos)">TallyPrime with GST (6 Months - ₹600 for 6 mos)</option>
                    <option value="CCC (NIELIT Exam Syllabus - 3 Months)">CCC (NIELIT Exam Syllabus - 3 Months)</option>
                    <option value="Hindi Typing (KrutiDev 010 & Mangal Inscript)">Hindi Typing (KrutiDev 010 & Mangal Inscript)</option>
                    <option value="English Touch Typing (35+ WPM)">English Touch Typing (35+ WPM)</option>
                    <option value="Python Programming & Logic Building">Python Programming & Logic Building</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Batch Time
                  </label>
                  <select
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white"
                  >
                    <option value="Morning Batch (7:00 AM - 10:00 AM)">Morning Batch (7:00 AM - 10:00 AM)</option>
                    <option value="Day Batch (10:00 AM - 2:00 PM)">Day Batch (10:00 AM - 2:00 PM)</option>
                    <option value="Evening Batch (4:00 PM - 8:00 PM)">Evening Batch (4:00 PM - 8:00 PM)</option>
                    <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Questions / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ask anything about fees, batch dates, or demo class..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>{loading ? 'Submitting...' : 'Submit Enquiry (₹200 Registration)'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
