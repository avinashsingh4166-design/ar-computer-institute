import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  lang: 'en' | 'hi';
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultCourse,
  lang,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: defaultCourse || 'ADCA (1 Year Diploma - ₹500/month)',
    timing: 'Morning Batch (7:00 AM - 10:00 AM)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    tokenNumber: string;
    whatsAppUrl: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) {
      setError('Please enter student name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/\D/g, '').slice(-10))) {
      setError('Please enter a valid 10-digit mobile number.');
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
      setError(err.message || 'Network error. Please call +91 8957409508 directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-slate-950 text-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="px-3 py-1 bg-amber-400 text-blue-950 font-black text-xs uppercase rounded-md tracking-wider">
            One-Time Registration: ₹200
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
            {lang === 'hi' ? 'एडमिशन / पूछताछ फॉर्म' : 'Course Admission & Demo Booking'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            A.R Computer Institute • Jankipuram Extension, Near DPS School
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submittedData ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-white">Application Received!</h4>
              <p className="text-xs text-slate-300">
                Your Admission Token: <span className="font-mono text-amber-300 font-bold text-sm bg-slate-900 px-2 py-0.5 rounded border border-slate-700">{submittedData.tokenNumber}</span>
              </p>
              <p className="text-xs text-slate-400">
                Our faculty will call you shortly on {formData.phone}. You can also connect immediately on WhatsApp:
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={submittedData.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details to WhatsApp Now</span>
                </a>

                <button
                  onClick={onClose}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {error && (
                <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-300 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-slate-800 border border-r-0 border-slate-700 rounded-l-xl text-xs text-slate-300 font-mono">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    maxLength={10}
                    className="w-full bg-slate-900 border border-slate-700 rounded-r-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Course Selected *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                >
                  <option value="ADCA (1 Year Diploma - ₹500/month)">ADCA (1 Year Diploma - ₹500/month)</option>
                  <option value="TallyPrime with GST (6 Months - ₹600 for 6 mos)">TallyPrime with GST (6 Months - ₹600 for 6 mos)</option>
                  <option value="CCC (NIELIT Govt Exam - 3 Months)">CCC (NIELIT Govt Exam - 3 Months)</option>
                  <option value="Hindi Typing (KrutiDev & Mangal Font)">Hindi Typing (KrutiDev & Mangal Font)</option>
                  <option value="English Touch Typing (35+ WPM)">English Touch Typing (35+ WPM)</option>
                  <option value="Python Programming & Logic Building">Python Programming & Logic Building</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Preferred Batch Timing
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                >
                  <option value="Morning Batch (7:00 AM - 10:00 AM)">Morning Batch (7:00 AM - 10:00 AM)</option>
                  <option value="Day Batch (10:00 AM - 2:00 PM)">Day Batch (10:00 AM - 2:00 PM)</option>
                  <option value="Evening Batch (4:00 PM - 8:00 PM)">Evening Batch (4:00 PM - 8:00 PM)</option>
                  <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-blue-950 font-black text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting...' : 'Submit & Book Demo Class'}</span>
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400">
                Or call us directly at <a href={`tel:${INSTITUTE_INFO.phone}`} className="text-amber-400 font-bold hover:underline">{INSTITUTE_INFO.phone}</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
