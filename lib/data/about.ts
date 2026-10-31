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
