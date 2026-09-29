import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, RotateCcw, Award, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

const SAMPLE_TEXTS_ENGLISH = [
  "Computer literacy is essential for modern government and corporate examinations. Touch typing with all ten fingers ensures high speed and accuracy.",
  "Practice makes a typist perfect. The key to cracking the UPSSSC Junior Assistant exam is consistent daily typing test sessions without looking at keyboard.",
  "A.R. Computer Institute provides practical training on Microsoft Office, TallyPrime with GST, Python programming and professional typing certification."
];

const HINDI_CHEAT_SHEET = [
  { code: 'Alt + 0161', char: 'द्ग', name: 'Dga conjunct' },
  { code: 'Alt + 0170', char: 'द्य', name: 'Dya conjunct' },
  { code: 'Alt + 0216', char: 'क्र', name: 'Kra conjunct' },
  { code: 'Alt + 0217', char: 'ट्र', name: 'Tra conjunct' },
  { code: 'Alt + 0204', char: 'क्त', name: 'Kta conjunct' },
  { code: 'Alt + 0197', char: 'हृ', name: 'Hri conjunct' },
  { code: 'Alt + 0228', char: 'द्ध', name: 'Ddha conjunct' },
  { code: 'Alt + 0230', char: 'द्व', name: 'Dva conjunct' },
];

export const TypingTester: React.FC<{ lang: 'en' | 'hi'; onOpenInquiry: (course: string) => void }> = ({
  lang,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'english-test' | 'hindi-guide'>('english-test');
  
  // English Test State
  const [selectedTextIdx, setSelectedTextIdx] = useState(0);
  const targetText = SAMPLE_TEXTS_ENGLISH[selectedTextIdx];
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [testDuration, setTestDuration] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Timer effect
  useEffect(() => {
    let timer: any = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsFinished(true);
      calculateStats(userInput, testDuration);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, testDuration, userInput]);

  const calculateStats = (input: string, totalSeconds: number) => {
    const elapsedMinutes = (totalSeconds - timeLeft) / 60 || (totalSeconds / 60);
    const words = input.trim().split(/\s+/).filter(Boolean).length;
    const calculatedWpm = Math.round(words / (elapsedMinutes || 0.1));
    setWpm(calculatedWpm);

    let correctChars = 0;
    const minLen = Math.min(input.length, targetText.length);
    for (let i = 0; i < minLen; i++) {
      if (input[i] === targetText[i]) correctChars++;
    }
    const acc = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 100;
    setAccuracy(Math.min(100, Math.max(0, acc)));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setUserInput(val);

    if (!isRunning && !isFinished) {
      setIsRunning(true);
    }

    if (val.length >= targetText.length) {
      setIsRunning(false);
      setIsFinished(true);
      calculateStats(val, testDuration);
    } else {
      calculateStats(val, testDuration);
    }
  };

  const resetTest = () => {
    setUserInput('');
    setTimeLeft(testDuration);
    setIsRunning(false);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <section id="typing-lab" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
            <Keyboard className="w-3.5 h-3.5 text-blue-900" />
            <span>Interactive Typing Practice Lab</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            {lang === 'hi' ? 'हिंदी व इंग्लिश टाइपिंग स्पीड टेस्ट' : 'Live Typing Speed & Accuracy Tester'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Practice for UPSSSC Junior Assistant, Allahabad High Court RO/ARO, and SSC CGL typing tests right here.
          </p>

          {/* Mode Switcher */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('english-test')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'english-test'
                  ? 'bg-blue-950 text-amber-300 shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ⌨️ English Typing Speed Test
            </button>
            <button
              onClick={() => setActiveTab('hindi-guide')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'hindi-guide'
                  ? 'bg-blue-950 text-amber-300 shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              🇮🇳 Hindi Typing (KrutiDev / Mangal) Guide
            </button>
          </div>
        </div>

        {/* Tab 1: English Typing Speed Test */}
        {activeTab === 'english-test' ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 max-w-4xl mx-auto shadow-md space-y-6">
            
            {/* Top Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Test Duration:</span>
                {[30, 60, 120].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => {
                      setTestDuration(sec);
                      setTimeLeft(sec);
                      resetTest();
                    }}
                    disabled={isRunning}
                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-colors ${
                      testDuration === sec
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {sec}s
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Time Left</span>
                  <span className={`text-xl font-black ${timeLeft <= 10 ? 'text-rose-600 animate-pulse' : 'text-blue-950'}`}>
                    {timeLeft}s
                  </span>
                </div>

                <div className="text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Speed</span>
                  <span className="text-xl font-black text-emerald-600">{wpm} <span className="text-xs">WPM</span></span>
                </div>

                <div className="text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Accuracy</span>
                  <span className="text-xl font-black text-blue-900">{accuracy}%</span>
                </div>

                <button
                  onClick={resetTest}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                  title="Reset Test"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Target Passage */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-sm sm:text-base leading-relaxed select-none">
              {targetText.split('').map((char, index) => {
                let colorClass = 'text-slate-500';
                if (index < userInput.length) {
                  colorClass = userInput[index] === char ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-rose-700 bg-rose-100 font-bold';
                } else if (index === userInput.length) {
                  colorClass = 'text-blue-950 underline font-bold bg-amber-200';
                }
                return (
                  <span key={index} className={colorClass}>
                    {char}
                  </span>
                );
              })}
            </div>

            {/* Typing Input Box */}
            <div>
              <textarea
                ref={inputRef}
                value={userInput}
                onChange={handleInputChange}
                disabled={isFinished}
                placeholder={isRunning ? 'Type the passage here...' : 'Click here and start typing to automatically start the timer...'}
                rows={3}
                className="w-full p-4 rounded-2xl bg-white border-2 border-slate-300 focus:border-blue-900 text-slate-900 font-mono text-sm sm:text-base focus:outline-none transition-all resize-none shadow-xs"
              />
            </div>

            {/* Result Box */}
            {isFinished && (
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-base font-black text-blue-950 flex items-center gap-2 justify-center sm:justify-start">
                    <Award className="w-5 h-5 text-amber-600" />
                    Test Finished! Speed: {wpm} WPM ({accuracy}% Accuracy)
                  </h4>
                  <p className="text-xs text-slate-600">
                    {wpm >= 35
                      ? 'Excellent typing pace! You meet the speed criteria for SSC and High Court typing skill exams.'
                      : 'Good effort! Join A.R. Computer Institute’s typing batch to build 35+ WPM with touch-typing techniques.'}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={resetTest}
                    className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl"
                  >
                    Retry
                  </button>
                  <button
                    onClick={() => onOpenInquiry('English Typing')}
                    className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-xl shadow-xs"
                  >
                    Join Typing Lab
                  </button>
                </div>
              </div>
            )}

            <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
              <span>Exam Benchmarks: UPSSSC requires 25 WPM (Hindi) &amp; 30 WPM (English). High Court requires 25-30 WPM.</span>
              <button
                onClick={() => setSelectedTextIdx((prev) => (prev + 1) % SAMPLE_TEXTS_ENGLISH.length)}
                className="text-blue-900 hover:underline font-bold"
              >
                Change Text →
              </button>
            </div>

          </div>
        ) : (
          /* Tab 2: Hindi Typing Guide */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 max-w-4xl mx-auto shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <h3 className="text-lg font-black text-blue-950 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-600" />
                  KrutiDev 010 vs Mangal Layout
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Different government recruitment exams require specific Hindi typing layouts. At A.R. Computer Institute, we train you in both layouts on mechanical exam-grade keyboards:
                </p>

                <div className="space-y-2.5">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-black text-amber-800 uppercase">1. KrutiDev 010 (Legacy)</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Required for UP Police Computer Operator, District Courts, Stenographer jobs, and typing centers. Uses Remington typewriter keys with special Alt numeric codes.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-black text-blue-900 uppercase">2. Mangal Font (Inscript & Remington GAIL)</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mandatory for UPSSSC (Junior Assistant, Lekhpal, VDO), Allahabad High Court RO/ARO, and Central Govt recruitment.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenInquiry('Hindi Typing')}
                    className="w-full py-3 bg-blue-900 hover:bg-blue-950 text-amber-300 font-extrabold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enroll in Hindi Typing Batch at Jankipuram</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Alt Codes Table */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-blue-950 flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-blue-900" />
                  Essential KrutiDev Alt Codes
                </h3>
                <p className="text-xs text-slate-500">
                  These conjunct characters cannot be typed with single keys and require numeric keypad codes in exam halls:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {HINDI_CHEAT_SHEET.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-950">{item.char}</span>
                      <span className="text-xs font-mono font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {item.code}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950">
                  💡 <strong>Institute Lab Practice:</strong> Daily timed tests on specialized typing test software simulate actual exam hall conditions.
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
