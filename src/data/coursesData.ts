import { Course, Testimonial } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'adca',
    title: 'ADCA (Advanced Diploma in Computer Applications)',
    hindiTitle: 'ए.डी.सी.ए (एडवांस्ड डिप्लोमा इन कंप्यूटर एप्लीकेशन्स)',
    tagline: 'Complete 1-year career diploma covering Office, Accounting, Designing & Basics',
    duration: '12 Months (1 Year)',
    feeBadge: '₹500 / month',
    feeDetail: '₹500 monthly installment + ₹200 one-time registration',
    monthlyFee: 500,
    totalFee: '₹500 per month',
    registrationFee: 200,
    popular: true,
    category: 'diploma',
    badgeColor: 'bg-blue-900 text-white',
    iconName: 'GraduationCap',
    overview: 'ADCA is the most popular comprehensive 1-year diploma course designed for 10th/12th pass students and graduates. It makes you 100% job-ready for private offices, banks, MNCs, schools, and government departments.',
    hindiOverview: 'ए.डी.सी.ए 1 साल का संपूर्ण डिप्लोमा है जो आपको कंप्यूटर फंडामेंटल्स, एमएस ऑफिस, टैली जीएसटी, इंटरनेट, बेसिक डिजाइनिंग और हार्डवेयर की पूरी प्रैक्टिकल ट्रेनिंग देता है।',
    modules: [
      {
        title: 'Semester 1: Fundamentals, Operating Systems & Office Suite',
        topics: [
          'Computer Hardware Fundamentals & Architecture',
          'Windows 10/11 & Linux Operating Systems',
          'Microsoft Word (Advanced documents, mail merge, formatting)',
          'Microsoft Excel (Formulas, VLOOKUP, Pivot Tables, Data analysis)',
          'Microsoft PowerPoint (Professional presentations & animations)',
          'Microsoft Access (Database management basics)',
          'Internet, Emailing, Cloud Storage & Cyber Security'
        ]
      },
      {
        title: 'Semester 2: Professional Accounting & Web/Design Basics',
        topics: [
          'Accounting Concepts & Golden Rules of Accounting',
          'TallyPrime with GST, E-way bill generation & Balance Sheet',
          'Inventory & Payroll management in Tally',
          'Photoshop Basics (Photo editing, banner design, passport photos)',
          'HTML5 & Web page development fundamentals',
          'Computer Hardware Troubleshooting & Software Installation',
          'Practical Live Project & Mock Interview Prep'
        ]
      }
    ],
    careerProspects: [
      'Computer Operator / Office Assistant',
      'Data Entry Specialist (Private & Govt Projects)',
      'Account Assistant / Junior Accountant',
      'School / College Lab Incharge',
      'Front Desk / Reception Coordinator',
      'Own CSC / Cyber Cafe / Digital Seva Kendra Entrepreneur'
    ],
    eligibility: '10th / 12th Pass or Any Graduate',
    softwareCovered: ['MS Office 2021', 'TallyPrime GST', 'Windows 11', 'Adobe Photoshop', 'HTML', 'Google Workspace'],
    examRelevance: 'Valid for State Govt jobs, Private Office recruitment & Autonomous bodies'
  },
  {
    id: 'tally',
    title: 'TallyPrime with GST & Financial Accounting',
    hindiTitle: 'टैली प्राइम विथ जी.एस.टी एवं एकाउंटिंग',
    tagline: 'Professional computerized accounting, GST billing, inventory & taxation',
    duration: '6 Months',
    feeBadge: '₹600 for 6 months',
    feeDetail: '₹600 for entire 6 months course + ₹200 one-time registration',
    totalFee: '₹600 for 6 months (Special Offer)',
    registrationFee: 200,
    popular: true,
    category: 'accounting',
    badgeColor: 'bg-amber-600 text-white',
    iconName: 'Calculator',
    overview: 'High-demand accounting course on the latest TallyPrime software. Covers fundamental accounting concepts, ledger creation, day-book, voucher entries, GST billing, e-invoicing, TDS, and final balance sheet finalization.',
    hindiOverview: 'यह कोर्स आपको टैली प्राइम पर लाइव एकाउंटिंग, जीएसटी बिलिंग, लेजर, वाउचर एंट्री और बैलेंस शीट बनाना सिखाता है। लखनऊ के व्यापारियों और फर्मों में भारी मांग।',
    modules: [
      {
        title: 'Module 1: Accounting Foundations & Company Creation',
        topics: [
          'Principles of Accounting, Debit-Credit Rules',
          'Company Setup, Chart of Accounts & Groups',
          'Ledger Creation & Sub-ledgers'
        ]
      },
      {
        title: 'Module 2: Voucher Entries & Inventory Management',
        topics: [
          'Payment, Receipt, Contra & Journal Vouchers',
          'Sales & Purchase Vouchers with Cash/Credit',
          'Stock Items, Godowns, Units of Measure & Batch tracking'
        ]
      },
      {
        title: 'Module 3: Goods & Services Tax (GST) & Taxation',
        topics: [
          'CGST, SGST, IGST Calculation & Configuration',
          'Tax Invoicing & HSN/SAC Code mapping',
          'GSTR-1, GSTR-3B return summary generation',
          'E-way bill concept & Credit/Debit notes',
          'Bank Reconciliation Statement (BRS) & Financial Reports'
        ]
      }
    ],
    careerProspects: [
      'Accountant in Trading & Manufacturing Firms',
      'GST Billing Operator in Showrooms & Retail',
      'Assistant to CA (Chartered Accountant)',
      'Inventory & Store Accountant',
      'Freelance GST & Accounting Consultant'
    ],
    eligibility: '10th / 12th / B.Com / M.Com or Anyone interested in Accounting',
    softwareCovered: ['TallyPrime', 'MS Excel for Accounts', 'GST Portal overview'],
    examRelevance: 'Direct corporate hiring & SME accounting jobs across Lucknow'
  },
  {
    id: 'ccc',
    title: 'CCC (Course on Computer Concepts)',
    hindiTitle: 'सी.सी.सी (कोर्स ऑन कंप्यूटर कॉन्सेप्ट्स - NIELIT)',
    tagline: 'Government-mandated certification for UP State exams, Lekhpal & VDO',
    duration: '3 Months',
    feeBadge: 'Contact for Fee',
    feeDetail: 'Affordable fee structure + ₹200 one-time registration',
    registrationFee: 200,
    category: 'govt-exam',
    badgeColor: 'bg-emerald-700 text-white',
    iconName: 'Award',
    overview: 'Official syllabus recognized by NIELIT (National Institute of Electronics & Information Technology). Essential eligibility requirement for UPSSSC, UP Lekhpal, VDO, Junior Assistant, UP Police, and High Court exams.',
    hindiOverview: 'यूपी सरकारी नौकरियों (लेखपाल, वी.डी.ओ, कनिष्ठ सहायक, पुलिस आदि) के लिए अनिवार्य सी.सी.सी कोर्स की पूरी थ्योरी और 100% ऑनलाइन मॉक टेस्ट तैयारी।',
    modules: [
      {
        title: 'Module 1: Introduction to Computer & GUI Operating Systems',
        topics: [
          'Hardware, Memory, Storage devices & Peripherals',
          'Operating System concepts, Desktop settings, File Management'
        ]
      },
      {
        title: 'Module 2: Word Processing & Spreadsheets (LibreOffice / MS Office)',
        topics: [
          'LibreOffice Writer / MS Word basics, formatting, tables',
          'LibreOffice Calc / MS Excel formulas, functions & charting',
          'LibreOffice Impress / MS PowerPoint slide shows'
        ]
      },
      {
        title: 'Module 3: Internet, Digital Financial Services & Cyber Ethics',
        topics: [
          'LAN, WAN, Internet protocols, Search engines & Email',
          'Digital Payments (UPI, AEPS, USSD, Cards, Net Banking)',
          'Social Networking, e-Governance services & Cyber security tips',
          'Online 100-Question Mock Test Practice under exam conditions'
        ]
      }
    ],
    careerProspects: [
      'Mandatory qualification for UPSSSC Lekhpal, VDO, ASO',
      'Junior Assistant in UP Govt Secretariat and Collectorates',
      'UP Police Computer Operator & Clerical posts',
      'Banking & Postal Department examinations'
    ],
    eligibility: 'No minimum qualification required (Open to all students)',
    softwareCovered: ['LibreOffice Suite (Writer, Calc, Impress)', 'Windows OS', 'BHIM UPI & Digital Services'],
    examRelevance: 'Mandatory certificate for UPSSSC, RO/ARO, and Group C State Government jobs'
  },
  {
    id: 'python',
    title: 'Python Programming & Logic Building',
    hindiTitle: 'पायथन प्रोग्रामिंग एवं कोडिंग',
    tagline: 'Modern coding course for students, automation, web logic & project development',
    duration: '3 - 6 Months',
    feeBadge: 'Contact for Fee',
    feeDetail: 'Pocket-friendly student rates + ₹200 one-time registration',
    registrationFee: 200,
    category: 'programming',
    badgeColor: 'bg-indigo-700 text-white',
    iconName: 'Code',
    overview: 'The world’s most popular, beginner-friendly programming language. Perfect for school/college students (CBSE/ICSE/BCA/BTech) and beginners aiming for careers in software engineering, data, and web development.',
    hindiOverview: 'आसान हिंदी और इंग्लिश में पायथन कोडिंग सीखें। वेरिएबल, लूप, फंक्शन, ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOPs) और लाइव मिनी प्रोजेक्ट्स के साथ।',
    modules: [
      {
        title: 'Phase 1: Programming Fundamentals & Control Flow',
        topics: [
          'Setting up Python, VS Code & IDLE',
          'Variables, Data Types (int, float, string, bool), Typecasting',
          'Operators, Conditionals (if, elif, else) & Decision making',
          'Loops (for, while), nested loops & loop control statements'
        ]
      },
      {
        title: 'Phase 2: Data Structures & Modular Code',
        topics: [
          'Lists, Tuples, Dictionaries and Sets in depth',
          'String manipulation & built-in string methods',
          'Functions, parameter passing, return values & lambda expressions',
          'Modules, packages and file handling (Read/Write text & CSV)'
        ]
      },
      {
        title: 'Phase 3: OOPs & Capstone Project',
        topics: [
          'Object-Oriented Programming (Classes, Objects, Inheritance)',
          'Exception Handling (try-except-finally)',
          'Building real-world mini projects (Student Management System, Calculator, Automation script)',
          'GitHub basics & code portfolio creation'
        ]
      }
    ],
    careerProspects: [
      'Junior Python Developer / Programmer',
      'Automation Script Writer',
      'Foundation for Data Science, AI & Web Development',
      'Academic project excellence for BCA, B.Sc (IT), B.Tech students'
    ],
    eligibility: '10th, 12th, College students or anyone eager to learn coding',
    softwareCovered: ['Python 3.x', 'Visual Studio Code', 'Git basics'],
    examRelevance: 'CBSE/ICSE Board Computer Science syllabus & University curriculum'
  },
  {
    id: 'hindi-typing',
    title: 'Hindi Typing (KrutiDev 010 & Mangal Inscript)',
    hindiTitle: 'हिंदी टाइपिंग (कृतिदेव 010 एवं मंगल फॉन्ट)',
    tagline: 'Target 30+ WPM speed with 95%+ accuracy for UPSSSC, High Court & State exams',
    duration: '3 Months',
    feeBadge: 'Contact for Fee',
    feeDetail: 'Affordable fee structure + ₹200 one-time registration',
    registrationFee: 200,
    popular: true,
    category: 'typing',
    badgeColor: 'bg-orange-600 text-white',
    iconName: 'Keyboard',
    overview: 'Specialized typing lab with dedicated Hindi keyboards and professional test software. Learn both KrutiDev 010 and Mangal (Inscript and Remington GAIL layout) required for UP government recruitment.',
    hindiOverview: 'यूपीएसएसएससी, इलाहाबाद हाईकोर्ट, पुलिस और कोर्ट स्टेनो/टाइपिस्ट परीक्षा के लिए कृतिदेव 010 और मंगल फॉन्ट में 30+ WPM स्पीड और 95% एक्यूरेसी की गारंटीड तैयारी।',
    modules: [
      {
        title: 'Phase 1: Keyboard Mapping & Finger Positioning',
        topics: [
          'Home row, Top row, Bottom row finger placement for Hindi keys',
          'Matras (मात्राएं), Half letters (आधे अक्षर) and conjuncts',
          'KrutiDev 010 special Alt codes (जैसे: क्र, प्र, द्ध, ष्ट, फ, रु)'
        ]
      },
      {
        title: 'Phase 2: Mangal Font Layouts (Inscript & Remington GAIL)',
        topics: [
          'Mangal Inscript standard government keyboard layout',
          'Remington GAIL typing practice for High Court and UPSSSC',
          'Common typing errors elimination & finger dexterity exercises'
        ]
      },
      {
        title: 'Phase 3: Live Speed Test Series & Exam Simulation',
        topics: [
          'Daily 5-minute and 10-minute paragraph typing on test software',
          'Speed tracking from 15 WPM to 35+ WPM',
          'Back-space reduction & exam hall psychology prep',
          'Previous years government exam passages practice'
        ]
      }
    ],
    careerProspects: [
      'UPSSSC Junior Assistant (कनिष्ठ सहायक)',
      'Allahabad High Court RO/ARO & Clerk Exam',
      'UP Police Computer Operator & Assistant Sub-Inspector (Clerk)',
      'District Courts & Tehsil Typist Jobs',
      'Typing work at Advocate chambers & DTP Centers'
    ],
    eligibility: 'No prerequisites required',
    softwareCovered: ['KrutiDev 010', 'Mangal Font (Inscript & Remington GAIL)', 'Typing Tutor Pro'],
    examRelevance: 'Mandatory typing test requirement for UPSSSC, High Court, and Police clerk exams'
  },
  {
    id: 'english-typing',
    title: 'English Touch Typing (35+ WPM)',
    hindiTitle: 'इंग्लिश टच टाइपिंग (35+ WPM स्पीड)',
    tagline: 'Scientific 10-finger touch typing method for SSC CGL, CHSL, Banking & Private Jobs',
    duration: '3 Months',
    feeBadge: 'Contact for Fee',
    feeDetail: 'Affordable fee structure + ₹200 one-time registration',
    registrationFee: 200,
    category: 'typing',
    badgeColor: 'bg-sky-700 text-white',
    iconName: 'Type',
    overview: 'Master the art of touch-typing without looking at the keyboard. Build lightning speed (35 to 50+ WPM) with near 100% accuracy required for SSC CGL, CHSL, Railway NTPC, Banking, and Corporate back-office roles.',
    hindiOverview: 'बिना कीबोर्ड देखे दोनों हाथों की 10 उंगलियों से तेज और सटीक इंग्लिश टाइपिंग सीखें। एसएससी सीजीएल, सीएचएसएल और बैंक परीक्षाओं में सफलता के लिए।',
    modules: [
      {
        title: 'Phase 1: Touch Typing Fundamentals',
        topics: [
          'Home Row mastery (A S D F - J K L ;)',
          'Top Row (Q W E R T - Y U I O P) and Bottom Row keys',
          'Number Row and Special Symbol key reach without looking'
        ]
      },
      {
        title: 'Phase 2: Speed & Rhythm Conditioning',
        topics: [
          'Rhythm drills, most common English n-grams & words',
          'Eliminating looking down at the keyboard',
          'Capitalization, Shift keys coordination, punctuation drills'
        ]
      },
      {
        title: 'Phase 3: SSC & Corporate Exam Mock Tests',
        topics: [
          'Timed tests (5, 10, 15 minutes) under strict exam rules',
          'Gross WPM, Net WPM, and Error calculation analysis',
          'Legal, financial and editorial paragraph transcription'
        ]
      }
    ],
    careerProspects: [
      'SSC CGL / CHSL / MTS Qualified Posts',
      'RRB Railway NTPC Typing Skill Test',
      'Bank Clerical & Data Entry Executive',
      'MNC Back Office & Transcriptionist Jobs',
      'Content Writer & Virtual Assistant'
    ],
    eligibility: 'Open to all students and exam aspirants',
    softwareCovered: ['Typing Master', 'Sonma Typing Expert', 'Custom Speed Evaluator'],
    examRelevance: 'Required for SSC CGL Tier-II, CHSL, High Court, and RRB tests'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Rohan Verma',
    course: 'ADCA (1 Year)',
    role: 'Placed as Office Assistant, Gomti Nagar',
    quote: 'A.R Computer Institute is the best institute in Jankipuram Extension. The ₹500 monthly fee made it very easy for my family to afford. The teachers gave personal time to clear my Excel and Tally doubts.',
    rating: 5,
    batchYear: '2025'
  },
  {
    name: 'Priya Sharma',
    course: 'Hindi Typing & CCC',
    role: 'Cleared UPSSSC Junior Assistant Typing Test',
    quote: 'I practiced KrutiDev 010 and Mangal Remington here. The keyboard lab and exam passages helped me achieve 34 WPM speed with 97% accuracy in my first attempt! Sir guided me every day.',
    rating: 5,
    batchYear: '2025'
  },
  {
    name: 'Amit Kumar Singh',
    course: 'Tally with GST (6 Months)',
    role: 'Accountant at Automobile Firm, Sitapur Road',
    quote: 'Only ₹600 for 6 months course was unbelievable at first, but the practical training on TallyPrime and GST billing was truly top-notch. I got a job within 2 weeks of finishing my course!',
    rating: 5,
    batchYear: '2024'
  },
  {
    name: 'Anjali Srivastava',
    course: 'Python Programming',
    role: 'BCA 2nd Year Student, Lucknow',
    quote: 'I had zero coding background. The faculty explained Python concepts in simple Hindi and English. We made real mini projects which helped me top my college practical exam.',
    rating: 5,
    batchYear: '2025'
  }
];

export const INSTITUTE_INFO = {
  name: 'A.R. Computer Institute',
  shortName: 'A.R Computer Institute',
  hindiName: 'ए.आर. कंप्यूटर इंस्टिट्यूट',
  tagline: 'Learn Computer Skills. Build Your Future.',
  fullAddress: 'Jankipuram Extension, A.R Computer Institute, Near Delhi Public School, Lucknow',
  displayAddress: 'Jankipuram Extension, A.R Computer Institute, Near DPS School',
  city: 'Lucknow, Uttar Pradesh 226021',
  phone: '+91 8957409508',
  phoneRaw: '8957409508',
  email: 'arcomputerinstitute.lko@gmail.com',
  workingHours: '7:00 AM - 8:00 PM (Monday - Saturday)',
  registrationFee: '₹200 One-Time for all courses',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Delhi+Public+School+Jankipuram+Extension+Lucknow',
  highlights: [
    'One-Time Registration: Just ₹200 for all courses',
    'ADCA @ ₹500/Month | Tally @ ₹600 for 6 Months',
    'Dedicated Hindi & English Typing Speed Lab',
    '1:1 Personal Computer for every student in lab',
    'Flexible Morning, Afternoon & Evening Batches',
    'Located near Delhi Public School (DPS), Jankipuram Extension'
  ]
};
