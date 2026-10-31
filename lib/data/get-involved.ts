export interface InvolvementOption {
  id: string;
  role: string;
  headline: string;
  description: string;
  bulletPoints: string[];
  ctaLabel: string;
  anchorId: string;
}

export const GET_INVOLVED_OPTIONS: InvolvementOption[] = [
  {
    id: "students",
    role: "Students & Learners",
    headline: "Launch Your Tech Career With Us",
    description:
      "Are you between 18-29 looking to break into cloud, cybersecurity, or software development? Apply for our funded bootcamps.",
    bulletPoints: [
      "Zero tuition options & full financial sponsorship available",
      "Assigned dedicated industry mentor from day one",
      "Hands-on project experience + certification exam vouchers",
    ],
    ctaLabel: "Apply as Student",
    anchorId: "students",
  },
  {
    id: "mentors",
    role: "Industry Mentors",
    headline: "Share Your Tech Expertise & Guide the Next Generation",
    description:
      "Volunteer 1-2 hours per week to mentor aspiring engineers, review capstone projects, and conduct mock technical interviews.",
    bulletPoints: [
      "Flexible remote mentoring commitments",
      "Direct impact on motivated youth launching their careers",
      "Join an active network of tech leaders & professionals",
    ],
    ctaLabel: "Become a Mentor",
    anchorId: "mentors",
  },
  {
    id: "partners",
    role: "Corporate Partners",
    headline: "Hire Certified Talent & Support Tech Equity",
    description:
      "Partner with AMYC to sponsor student cohorts, offer internships, host tech workshops, or recruit certified graduates.",
    bulletPoints: [
      "Access pre-vetted, certified junior cloud and dev talent",
      "Sponsor targeted training programs tailored to your tech stack",
      "Fulfill corporate social impact & diversity initiatives",
    ],
    ctaLabel: "Partner With Us",
    anchorId: "partners",
  },
  {
    id: "donate",
    role: "Donors & Supporters",
    headline: "Fund Certification Vouchers & Laptops",
    description:
      "Your financial contributions fund exam fees, hardware subsidies, and instructional resources for youth in need.",
    bulletPoints: [
      "$150 funds a certification exam voucher",
      "$500 sponsors a student laptop for hands-on labs",
      "$1,500 fully sponsors a student through a 16-week bootcamp",
    ],
    ctaLabel: "Support Our Mission",
    anchorId: "donate",
  },
];
