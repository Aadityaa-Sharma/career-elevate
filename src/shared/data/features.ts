import { 
  FileText, 
  Users, 
  Building2, 
  BookOpen, 
  Briefcase,
  Settings,
  LucideIcon
} from 'lucide-react';

export interface Feature {
  id: string; // Unique identifier for each feature
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  iconColor: string;
  action?: 'modal' | 'redirect' | 'coming-soon' | 'learn-more' | 'more-tools';
  redirectUrl?: string;
  details?: {
    longDescription: string;
    features: string[];
    benefits: string[];
    status: 'available' | 'coming-soon' | 'beta';
  };
}

export interface MoreTool {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  status: 'available' | 'coming-soon' | 'beta';
  action?: 'redirect' | 'coming-soon';
  redirectUrl?: string;
}

export const features: Feature[] = [
  { 
    id: "ats-analyzer",
    title: "ATS Score & Resume Analyzer", 
    desc: "Check how well your resume passes Applicant Tracking Systems with detailed analysis and scoring.", 
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    action: "learn-more",
    details: {
      longDescription: "Our ATS Score & Resume Analyzer uses advanced algorithms to evaluate your resume against Applicant Tracking System requirements. Get detailed insights on formatting, keywords, and structure to maximize your chances of passing initial screening.",
      features: [
        "ATS compatibility scoring (0-100)",
        "Keyword optimization suggestions",
        "Format and structure analysis",
        "Industry-specific recommendations",
        "Real-time feedback and improvements"
      ],
      benefits: [
        "Increase your resume's visibility to recruiters",
        "Optimize for specific job descriptions",
        "Get instant feedback on resume quality",
        "Save time with automated analysis"
      ],
      status: "available"
    }
  },
  { 
    id: "ai-interview-prep",
    title: "AI Interview Preparation", 
    desc: "Master your interviews with AI-powered mock sessions, question banks, and personalized feedback.", 
    icon: Users,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    action: "learn-more",
    redirectUrl: "/ai-interview-prep",
    details: {
      longDescription: "Comprehensive interview preparation platform that simulates real interview scenarios. Practice with AI-powered mock interviews, get instant feedback, and access curated question banks for different industries and roles.",
      features: [
        "AI-powered mock interview sessions",
        "Industry-specific question databases",
        "Real-time feedback and scoring",
        "Voice recognition and practice",
        "Behavioral and technical question preparation"
      ],
      benefits: [
        "Build confidence through realistic practice",
        "Identify and improve weak areas",
        "Learn industry-specific interview patterns",
        "Get personalized improvement suggestions"
      ],
      status: "available"
    }
  },
  { 
    id: "company-prep",
    title: "Company-Wise Career Prep", 
    desc: "Get targeted preparation strategies and insights for specific companies and their hiring processes.", 
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    action: "learn-more",
    redirectUrl: "/company-prep",
    details: {
      longDescription: "Deep-dive into company-specific preparation with insider insights, culture analysis, and tailored strategies. Access curated information about interview processes, company values, and success tips from industry professionals.",
      features: [
        "Company culture and values analysis",
        "Interview process breakdowns",
        "Salary negotiation insights",
        "Employee testimonials and experiences",
        "Customized application strategies"
      ],
      benefits: [
        "Stand out with company-specific knowledge",
        "Understand what each company values",
        "Prepare targeted responses and questions",
        "Increase offer acceptance rates"
      ],
      status: "available"
    }
  },
  { 
    id: "resources",
    title: "Learning Resources Library", 
    desc: "Access comprehensive guides, templates, and educational content to accelerate your career growth.", 
    icon: BookOpen,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-700",
    action: "learn-more",
    redirectUrl: "/learning-resources",
    details: {
      longDescription: "Curated collection of career development resources including resume templates, cover letter guides, salary negotiation scripts, and industry insights. All resources are regularly updated and vetted by career experts.",
      features: [
        "Professional resume and cover letter templates",
        "Industry-specific career guides",
        "Salary negotiation frameworks",
        "Networking and LinkedIn optimization",
        "Career transition roadmaps"
      ],
      benefits: [
        "Save time with proven templates",
        "Learn from expert career advice",
        "Stay updated with industry trends",
        "Build professional documents quickly"
      ],
      status: "available"
    }
  },
  { 
    id: "market-intelligence",
    title: "Job Finder", 
    desc: "Stay ahead with real-time job market trends, salary insights, and hiring demand analytics.", 
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    action: "learn-more",
    details: {
      longDescription: "Comprehensive job market analysis powered by real-time data from thousands of job postings. Get insights into salary trends, in-demand skills, hiring patterns, and market opportunities across different industries and locations.",
      features: [
        "Real-time salary benchmarking",
        "Skills demand analytics",
        "Geographic job market insights",
        "Industry growth predictions",
        "Company hiring trend analysis"
      ],
      benefits: [
        "Make informed career decisions",
        "Negotiate salaries with confidence",
        "Identify emerging opportunities",
        "Plan strategic career moves"
      ],
      status: "coming-soon"
    }
  },
  { 
    id: "more-tools",
    title: "More Tools", 
    desc: "Explore additional career development tools and utilities to enhance your professional journey.", 
    icon: Settings,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    action: "more-tools"
  },
];

export const moreTools: MoreTool[] = [
  {
    title: "LinkedIn Profile Optimizer",
    desc: "Enhance your LinkedIn presence with AI-powered profile optimization and content suggestions.",
    icon: Users,
    color: "from-blue-600 to-indigo-600",
    status: "coming-soon"
  },
  {
    title: "Skill Gap Analyzer",
    desc: "Identify missing skills for your target roles and get personalized learning recommendations.",
    icon: BookOpen,
    color: "from-purple-600 to-violet-600",
    status: "coming-soon"
  },
  {
    title: "Cover Letter Generator",
    desc: "Create compelling, personalized cover letters tailored to specific job applications.",
    icon: FileText,
    color: "from-green-600 to-emerald-600",
    status: "beta"
  },
  {
    title: "Salary Negotiation Coach",
    desc: "Practice salary negotiations with AI scenarios and get expert negotiation strategies.",
    icon: Briefcase,
    color: "from-amber-600 to-orange-600",
    status: "coming-soon"
  },
  {
    title: "Career Path Planner",
    desc: "Visualize and plan your career progression with personalized roadmaps and milestones.",
    icon: Building2,
    color: "from-cyan-600 to-blue-600",
    status: "coming-soon"
  }
];

export const featuresConfig = {
  sectionTitle: "Powerful Features to Boost Your Career",
  sectionSubtitle: "Comprehensive tools designed to give you the competitive edge in today's job market"
};