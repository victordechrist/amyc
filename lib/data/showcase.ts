export interface ShowcaseProject {
  id: string;
  title: string;
  studentName: string;
  trackSlug: string;
  trackName: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "1",
    title: "Multi-Region AWS Cloud Infrastructure with Terraform",
    studentName: "Chidi Nnamdi",
    trackSlug: "cloud-computing",
    trackName: "Cloud Computing",
    description:
      "Automated infrastructure provisioning using Terraform HCL featuring high-availability VPC subnets, S3 static bucket hosting, and CloudFront CDN distribution.",
    tags: ["AWS", "Terraform", "S3", "CloudFront"],
    featured: true,
  },
  {
    id: "2",
    title: "Enterprise SIEM Threat Detection & Incident Response Playbook",
    studentName: "Fatima Al-Hassan",
    trackSlug: "cybersecurity",
    trackName: "Cybersecurity",
    description:
      "Configured Wazuh SIEM rules to detect automated SSH brute-force attacks and constructed an automated incident response playbook mapped to NIST guidelines.",
    tags: ["Wazuh SIEM", "NIST", "Log Analysis", "Incident Response"],
    featured: true,
  },
  {
    id: "3",
    title: "Youth Tech Mentorship Portal & Student Analytics Dashboard",
    studentName: "Kwame Osei",
    trackSlug: "software-development",
    trackName: "Software Development",
    description:
      "Full-stack Next.js 14 web application built with TypeScript, Tailwind CSS, and Server Actions for tracking youth learning progress and mentor scheduling.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    featured: true,
  },
  {
    id: "4",
    title: "Automated Microservice CI/CD Pipeline on GitHub Actions",
    studentName: "Zainab Bello",
    trackSlug: "devops-infra",
    trackName: "DevOps & Infrastructure",
    description:
      "Designed a zero-downtime automated build and deployment pipeline with linting, unit testing, Docker image building, and automated Vercel staging releases.",
    tags: ["GitHub Actions", "Docker", "CI/CD", "DevOps"],
    featured: true,
  },
  {
    id: "5",
    title: "Multi-VLAN Enterprise Campus Network Simulation",
    studentName: "Emmanuel Okafor",
    trackSlug: "networking",
    trackName: "Networking",
    description:
      "Simulated a secure enterprise campus network in Cisco Packet Tracer featuring inter-VLAN routing, WPA3 enterprise wireless isolation, and firewalls.",
    tags: ["Cisco Packet Tracer", "VLANs", "Subnetting", "Routing"],
    featured: false,
  },
  {
    id: "6",
    title: "Serverless Image Processing Pipeline on AWS Lambda",
    studentName: "Aisha Mohammed",
    trackSlug: "cloud-computing",
    trackName: "Cloud Computing",
    description:
      "Event-driven cloud architecture using AWS Lambda and S3 triggers to automatically optimize, resize, and store user-uploaded images.",
    tags: ["AWS Lambda", "S3", "Serverless", "Python"],
    featured: false,
  },
  {
    id: "7",
    title: "Web Vulnerability Scanner & Automated CVE Report Generator",
    studentName: "David Mensah",
    trackSlug: "cybersecurity",
    trackName: "Cybersecurity",
    description:
      "Python-based security scanner targeting OWASP Top 10 vulnerabilities with automated PDF report generation and CVSS scoring.",
    tags: ["Python", "OWASP", "Vulnerability Audit", "CVSS"],
    featured: false,
  },
  {
    id: "8",
    title: "Community Youth Resource Hub & Interactive Map",
    studentName: "Blessing Adebayo",
    trackSlug: "software-development",
    trackName: "Software Development",
    description:
      "Interactive directory platform connecting underserved youth with local tech hubs, free Wi-Fi spots, and mentorship centers.",
    tags: ["React", "TypeScript", "Leaflet Maps", "Tailwind CSS"],
    featured: false,
  },
];
