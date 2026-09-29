export interface Course {
  id: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  duration: string;
  feeBadge: string;
  feeDetail: string;
  monthlyFee?: number;
  totalFee?: string;
  registrationFee: number; // ₹200
  popular?: boolean;
  category: 'diploma' | 'govt-exam' | 'programming' | 'accounting' | 'typing';
  badgeColor: string;
  iconName: string;
  overview: string;
  hindiOverview: string;
  modules: {
    title: string;
    topics: string[];
  }[];
  careerProspects: string[];
  eligibility: string;
  softwareCovered: string[];
  examRelevance?: string;
}

export interface Testimonial {
  name: string;
  course: string;
  role: string;
  quote: string;
  rating: number;
  batchYear: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  course: string;
  timing: string;
  message: string;
}
