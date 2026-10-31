export interface ProgramFeature {
  title: string;
  description: string;
}

export interface CohortInfo {
  name: string;
  status: "Open for Applications" | "In Progress" | "Upcoming";
  startDate: string;
  duration: string;
  tracksAvailable: string[];
}

export const PROGRAM_OVERVIEW = {
  headline: "How Our Youth Tech Bootcamps Work",
  description:
    "AMYC programs are structured around 3 pillars: hands-on cohort bootcamps, industry certification vouchers, and 1-on-1 career mentorship.",
  pillars: [
    {
      title: "1. Hands-on Cohort Bootcamps",
      description:
        "Rigorous 12-to-20 week pathways centered on building real-world projects in cloud, security, web dev, and networking.",
    },
    {
      title: "2. Industry Certification Prep",
      description:
        "Targeted exam preparation, practice tests, and subsidized exam vouchers for recognized credentials like AWS, Security+, and CCNA.",
    },
    {
      title: "3. 1-on-1 Mentorship & Career Readiness",
      description:
        "Pairing with active industry professionals for resume reviews, mock interviews, technical portfolio coaching, and job search strategy.",
    },
  ] as ProgramFeature[],
};

export const UPCOMING_COHORTS: CohortInfo[] = [
  {
    name: "Spring 2027 Cohort",
    status: "Open for Applications",
    startDate: "March 15, 2027",
    duration: "16–20 Weeks",
    tracksAvailable: [
      "Cloud Computing",
      "Software Development",
      "Cybersecurity",
    ],
  },
  {
    name: "Summer 2027 Cohort",
    status: "Upcoming",
    startDate: "June 1, 2027",
    duration: "12–16 Weeks",
    tracksAvailable: ["Networking", "DevOps & Infra", "Cloud Computing"],
  },
  {
    name: "Fall 2027 Cohort",
    status: "Upcoming",
    startDate: "September 10, 2027",
    duration: "12–20 Weeks",
    tracksAvailable: ["All Skill Tracks"],
  },
];
