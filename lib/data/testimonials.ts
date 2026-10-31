export interface Testimonial {
  id: string;
  name: string;
  role: string;
  track: string;
  quote: string;
  company?: string;
  avatarInitials: string;
  certificationEarned?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Amina Yusuf",
    role: "Junior Cloud Engineer",
    track: "Cloud Computing",
    quote:
      "AMYC gave me hands-on lab experience and AWS certification guidance. My mentor helped me land my first tech role in under 4 months!",
    company: "CloudScale Tech",
    avatarInitials: "AY",
    certificationEarned: "AWS Certified Cloud Practitioner",
  },
  {
    id: "2",
    name: "David Chen",
    role: "SOC Analyst",
    track: "Cybersecurity",
    quote:
      "The cybersecurity track was intense and practical. Learning real SIEM monitoring and threat hunting gave me confidence during technical interviews.",
    company: "SecureDefend Inc.",
    avatarInitials: "DC",
    certificationEarned: "CompTIA Security+",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Frontend Developer",
    track: "Software Development",
    quote:
      "Building real collaborative web apps with Next.js and TypeScript transformed my resume from empty to project-filled.",
    company: "Apex Digital Solutions",
    avatarInitials: "SJ",
    certificationEarned: "Meta Front-End Developer",
  },
  {
    id: "4",
    name: "Tunde Bakare",
    role: "Infrastructure Associate",
    track: "DevOps & Infrastructure",
    quote:
      "Automating multi-cloud deployments with Terraform in the AMYC lab gave me the exact skills local employers were looking for.",
    company: "DataNode Infrastructure",
    avatarInitials: "TB",
    certificationEarned: "Terraform Associate",
  },
];
