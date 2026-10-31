import { Users, Code, Award, HeartHandshake, LucideIcon } from "lucide-react";

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "students",
    value: "500+",
    label: "Students Trained",
    description:
      "Youth and young adults trained across our 5 specialized technical pathways.",
    icon: Users,
  },
  {
    id: "projects",
    value: "1,200+",
    label: "Projects Built",
    description:
      "Production-grade capstones and hands-on lab deployments published to GitHub.",
    icon: Code,
  },
  {
    id: "certs",
    value: "88%",
    label: "Certifications Prepared For",
    description:
      "Graduates achieving AWS, CompTIA, Cisco, and Terraform industry cert pass rates.",
    icon: Award,
  },
  {
    id: "mentors",
    value: "75+",
    label: "Active Mentors",
    description:
      "Dedicated tech professionals providing 1-on-1 guidance and portfolio reviews.",
    icon: HeartHandshake,
  },
];

export interface OutcomeMetric {
  title: string;
  value: string;
  subtitle: string;
}

export const OUTCOME_METRICS: OutcomeMetric[] = [
  {
    title: "Job Placement Rate",
    value: "82%",
    subtitle: "Employed in tech roles within 6 months of completion",
  },
  {
    title: "Average Salary Boost",
    value: "+140%",
    subtitle: "Income increase relative to pre-enrollment baselines",
  },
  {
    title: "Project Portfolio",
    value: "100%",
    subtitle: "Graduates build at least 3 production-grade capstone projects",
  },
  {
    title: "Partner Employers",
    value: "45+",
    subtitle: "Corporate partners actively hiring AMYC bootcamp graduates",
  },
];
