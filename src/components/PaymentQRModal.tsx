import React, { useState, useEffect, useRef } from 'react';
import { X, Phone, MessageSquare, Upload, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface PaymentQRModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'hi';
}

export const PaymentQRModal: React.FC<PaymentQRModalProps> = ({ isOpen, onClose }) => {
  const [qrImageSrc, setQrImageSrc] = useState<string>('/phonepe-qr.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('ar_institute_phonepe_qr');
    if (saved) {
      setQrImageSrc(saved);
    }
  }, []);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setQrImageSrc(result);
          try {
            localStorage.setItem('ar_institute_phonepe_qr', result);
          } catch {
            // local storage quota exceeded fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const whatsappConfirmMessage = encodeURIComponent(
    `Hello A.R. Computer Institute, I have completed the course fee payment via PhonePe. Sharing my payment confirmation.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div 
        className="relative bg-white text-slate-900 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-400 text-blue-950 text-[10px] font-black uppercase rounded-md tracking-wider mb-2">
            <span>A.R. Computer Institute</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Pay Course Fees Online
          </h3>

          <p className="text-xs text-slate-300 mt-1">
            Jankipuram Extension, Near DPS School, Lucknow
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 text-center space-y-4">
          
          {/* Fee Schedule Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2.5 shadow-xs">
            <div className="flex items-center justify-between py-1 border-b border-slate-200/70">
              <span className="text-xs sm:text-sm font-bold text-slate-700">Registration Fee:</span>
              <span className="text-xs sm:text-sm font-black text-blue-950">₹200 one time for all courses</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-200/70">
              <span className="text-xs sm:text-sm font-bold text-slate-700">ADCA:</span>
              <span className="text-xs sm:text-sm font-black text-blue-950">₹500/month</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-xs sm:text-sm font-bold text-slate-700">Tally:</span>
              <span className="text-xs sm:text-sm font-black text-blue-950">₹600 for 6 months</span>
            </div>
          </div>

          {/* Payment Method Callout */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl py-2 px-3 inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5f259f] shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold text-[#5f259f]">
              Scan the QR code to pay using PhonePe
            </span>
          </div>

          {/* Responsive, Centered PhonePe QR Code Container */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-3 shadow-md inline-block max-w-[280px] sm:max-w-[300px] w-full">
              {/* PhonePe Header Brand Badge */}
              <div className="bg-[#5f259f] text-white py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 mb-2 shadow-xs">
                <span className="font-black text-xs sm:text-sm tracking-wide">PhonePe</span>
                <span className="text-[10px] text-purple-200 font-semibold">• Accepted Here</span>
              </div>

              {/* Scannable QR Image */}
              <div className="bg-white p-2 rounded-xl flex items-center justify-center">
                <img
                  src={qrImageSrc}
                  alt="PhonePe Payment QR Code - A.R. Computer Institute"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto block rounded-lg select-none"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

              {/* Institute PhonePe Footer */}
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1 font-medium">
                <span>A.R Computer Institute</span>
                <span className="text-[#5f259f] font-bold">UPI / PhonePe</span>
              </div>
            </div>

            {/* Hidden File Input for Custom Upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Small Note as instructed */}
          <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3 text-left flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-amber-950">
              After payment, please contact us on WhatsApp and share your payment confirmation.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-1 flex flex-col gap-2">
            <a
              href={`https://wa.me/918957409508?text=${whatsappConfirmMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>Share Confirmation on WhatsApp</span>
            </a>

            <div className="flex gap-2">
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="flex-1 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Desk</span>
              </a>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-[11px] rounded-xl transition-colors flex items-center gap-1"
                title="Upload or replace QR image"
              >
                <Upload className="w-3 h-3 text-slate-500" />
                <span>Replace QR</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
