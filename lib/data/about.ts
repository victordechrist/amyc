export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  roleType: "Leadership" | "Instructor" | "Advisor";
  linkedInUrl?: string;
  githubUrl?: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export const ABOUT_CONTENT = {
  mission:
    "Empower underserved youth with world-class, practical technical skills, industry certifications, and targeted mentorship to launch sustainable tech careers.",
  vision:
    "A world where every ambitious young person, regardless of background, has an accessible path into thriving technology careers.",
  story:
    "Founded in memory of Adaobi Muonago, AMYC was created to bridge the digital skills gap for passionate youth. We combine project-based learning with direct industry mentorship to ensure our graduates possess real job-ready skills.",
  values: [
    {
      title: "Excellence in Practice",
      description:
        "We focus on building real projects, not just passing multiple-choice tests.",
    },
    {
      title: "Radical Accessibility",
      description:
        "We lower economic and technical barriers so all talented youth can participate.",
    },
    {
      title: "Community & Mentorship",
      description:
        "No one learns alone—every student receives dedicated 1-on-1 industry mentorship.",
    },
    {
      title: "Career Outcome Focus",
      description:
        "Our curriculum and success metrics are directly tied to job placement and growth.",
    },
  ] as CoreValue[],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Engr. Obed Muonago",
    title: "Executive Director & Founder",
    bio: "Passionate educator and tech advocate with 15+ years of experience in higher education and non-profit youth development.",
    roleType: "Leadership",
  },
  {
    id: "2",
    name: "Dr. Obed jnr Muonago",
    title: "Head of Technical Curriculum",
    bio: "Former Senior Cloud Solutions Architect committed to designing practical, hands-on learning experiences for students.",
    roleType: "Leadership",
  },
  {
    id: "3",
    name: "Dara Muonago",
    title: "Mentorship Program Lead",
    bio: "Specializes in building industry mentorship pipelines and professional readiness workshops.",
    roleType: "Leadership",
  },
  {
    id: "4",
    name: "Dr.-Ing Chukwuka Victor Obionwu",
    title: "Tech Lead & Curiliculum Developer",
    bio: "Certified Information Systems Security Professional with 8 years of enterprise security experience.",
    roleType: "Instructor",
  },
];
