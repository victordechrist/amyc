import {
  Cloud,
  ShieldCheck,
  Code,
  Network,
  Cpu,
  LucideIcon,
} from "lucide-react";

export interface ExamDomain {
  name: string;
  weight: string; // e.g. "24%" or "N/A"
  description?: string;
}

export interface CertificationAlignment {
  certName: string;
  examCode?: string;
  isPaidCert: boolean;
  description: string;
  domains: ExamDomain[];
}

export interface CurriculumModule {
  moduleNumber: number;
  title: string;
  duration: string;
  description: string;
  keyTopics: string[];
}

export interface TrackProject {
  title: string;
  description: string;
  deliverables: string[];
  skillsLearned: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface CareerOutcome {
  role: string;
  description: string;
  avgSalaryRange?: string;
}

export interface RelatedResource {
  title: string;
  type: "Official Exam Guide" | "Free Material" | "Documentation" | "Lab";
  url: string;
  description: string;
}

export interface TrackData {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  iconName: string;
  icon: LucideIcon;
  duration: string;
  prerequisites: string;
  certifications: string[];
  skills: string[];
  certificationAlignment: CertificationAlignment;
  modules: CurriculumModule[];
  projects: TrackProject[];
  outcomes: CareerOutcome[];
  resources: RelatedResource[];
}

export const SKILL_TRACKS: TrackData[] = [
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    badge: "AWS Certified",
    tagline:
      "Build, scale, and secure modern cloud infrastructure on Amazon Web Services.",
    description:
      "Master modern cloud infrastructure, serverless deployments, multi-cloud architectures, and scalable web solutions aligned with industry standards.",
    whyItMatters:
      "Modern enterprises rely on cloud infrastructure for agility, reliability, and cost-efficiency. Learning AWS cloud engineering equips youth with high-demand competencies for modern IT, DevOps, and cloud architecture positions.",
    iconName: "Cloud",
    icon: Cloud,
    duration: "16 Weeks",
    prerequisites: "Basic computer networking and command-line (CLI) knowledge",
    certifications: [
      "AWS Certified Cloud Practitioner (CLF-C02)",
      "AWS Solutions Architect Associate (Path)",
    ],
    skills: [
      "AWS Core Services",
      "IAM & Cloud Security",
      "EC2 & VPC Networking",
      "S3 & Cloud Storage",
      "Cloud Billing & Cost Mgmt",
      "Serverless Architecture",
    ],
    certificationAlignment: {
      certName: "AWS Certified Cloud Practitioner",
      examCode: "CLF-C02",
      isPaidCert: true,
      description:
        "The AWS Certified Cloud Practitioner exam validates overall understanding of the AWS Cloud platform, covering foundational cloud architecture, security, billing, and core services.",
      domains: [
        {
          name: "Cloud Concepts",
          weight: "24%",
          description:
            "AWS Cloud value proposition, cloud economics, and cloud architecture design principles.",
        },
        {
          name: "Security & Compliance",
          weight: "30%",
          description:
            "AWS Shared Responsibility Model, AWS IAM, cloud compliance, and security tools.",
        },
        {
          name: "Cloud Technology & Services",
          weight: "34%",
          description:
            "Compute (EC2, Lambda), Storage (S3, EBS), Database (RDS, DynamoDB), and Networking (VPC).",
        },
        {
          name: "Billing, Pricing & Support",
          weight: "12%",
          description:
            "AWS Pricing models, Billing Dashboard, AWS Budgets, and AWS Support Tiers.",
        },
      ],
    },
    modules: [
      {
        moduleNumber: 1,
        title: "Foundations of Cloud Computing & AWS Shared Responsibility",
        duration: "Weeks 1–4",
        description:
          "Introduce core cloud models (IaaS, PaaS, SaaS), cloud global infrastructure (Regions & Availability Zones), and the AWS Shared Responsibility Model.",
        keyTopics: [
          "IaaS vs PaaS vs SaaS",
          "AWS Global Infrastructure (Regions, AZs, Edge Locations)",
          "AWS Shared Responsibility Model",
          "AWS Management Console & AWS CLI Setup",
        ],
      },
      {
        moduleNumber: 2,
        title: "Core AWS Cloud Services: Compute, Storage & Networking",
        duration: "Weeks 5–8",
        description:
          "Deep dive into fundamental cloud services including Amazon EC2 instance provision, S3 bucket storage classes, EBS volumes, and Virtual Private Cloud (VPC) isolation.",
        keyTopics: [
          "Amazon EC2 Instance Types, Security Groups, and Key Pairs",
          "Amazon S3 Buckets, Lifecycle Policies & Access Controls",
          "VPC Basics: Subnets, Route Tables & Internet Gateways",
          "Amazon RDS & DynamoDB Managed Database Services",
        ],
      },
      {
        moduleNumber: 3,
        title: "Cloud Security, Compliance & Identity (IAM)",
        duration: "Weeks 9–12",
        description:
          "Master AWS Identity and Access Management (IAM), multi-factor authentication, principle of least privilege, CloudTrail audit logging, and GuardDuty threat detection.",
        keyTopics: [
          "IAM Users, Groups, Roles, and JSON Policy Authoring",
          "AWS KMS Encryption & Secrets Management",
          "AWS CloudTrail, CloudWatch & GuardDuty",
          "Compliance Frameworks & AWS Artifact",
        ],
      },
      {
        moduleNumber: 4,
        title: "Billing, Pricing Models & Free-Tier Hands-On Labs",
        duration: "Weeks 13–16",
        description:
          "Understand cloud cost optimization, AWS Pricing Calculator, AWS Budgets alerts, Cost Explorer, and complete comprehensive free-tier hands-on lab challenges.",
        keyTopics: [
          "On-Demand, Reserved, Spot, and Savings Plans",
          "AWS Cost Explorer & Budget Alerting",
          "AWS Free-Tier Limits & Usage Monitoring",
          "Capstone Preparation & Exam Practice Drills",
        ],
      },
    ],
    projects: [
      {
        title: "Multi-Tier Web Application Hosting on AWS EC2 & S3",
        description:
          "Deploy a high-availability multi-tier web site with dynamic backend integration on Amazon EC2 and static asset hosting on S3 with CloudFront CDN distribution.",
        deliverables: [
          "S3 Bucket configured for static website hosting with CloudFront",
          "EC2 Linux web server with security groups and elastic IP",
          "Architecture diagram and deployment documentation",
        ],
        skillsLearned: [
          "AWS EC2",
          "AWS S3",
          "CloudFront CDN",
          "DNS & Route 53",
        ],
      },
      {
        title: "AWS IAM & Security Compliance Audit",
        description:
          "Enforce enterprise identity policies by configuring granular IAM roles, multi-factor authentication requirements, and automated CloudWatch alarms for security events.",
        deliverables: [
          "Configured IAM roles with least-privilege JSON policies",
          "Automated CloudWatch alarm sending SNS notification on root login",
          "Security audit report generated via AWS Trusted Advisor",
        ],
        skillsLearned: [
          "AWS IAM",
          "JSON Security Policies",
          "CloudWatch",
          "SNS",
        ],
      },
      {
        title: "Serverless Event-Driven Microservice Lab",
        description:
          "Construct a cost-effective serverless backend using AWS Lambda, API Gateway, and DynamoDB triggered by automated file uploads in S3.",
        deliverables: [
          "Lambda function written in Node.js/Python",
          "API Gateway REST endpoint triggering Lambda executions",
          "DynamoDB table storing processed transaction metadata",
        ],
        skillsLearned: [
          "AWS Lambda",
          "API Gateway",
          "DynamoDB",
          "Serverless Architecture",
        ],
      },
    ],
    outcomes: [
      {
        role: "Cloud Associate / Junior AWS Engineer",
        description:
          "Deploys, monitors, and maintains fundamental AWS cloud resources for organizations.",
        avgSalaryRange: "$65,000 - $85,000",
      },
      {
        role: "Cloud Support Specialist",
        description:
          "Provides tier-1/2 technical troubleshooting for enterprise cloud deployments and service accounts.",
        avgSalaryRange: "$55,000 - $75,000",
      },
      {
        role: "Junior Systems Administrator",
        description:
          "Manages server instances, user credentials, cloud security policies, and routine backup tasks.",
        avgSalaryRange: "$60,000 - $80,000",
      },
    ],
    resources: [
      {
        title: "AWS Certified Cloud Practitioner Official Exam Guide",
        type: "Official Exam Guide",
        url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        description:
          "Official AWS exam content outline, domain weightings, and sample questions.",
      },
      {
        title: "AWS Skill Builder Free Learning Plan",
        type: "Free Material",
        url: "https://explore.skillbuilder.aws/",
        description:
          "Interactive digital courses and official AWS foundational learning modules.",
      },
      {
        title: "AWS Free Tier Hands-On Workshops",
        type: "Lab",
        url: "https://aws.amazon.com/free/",
        description:
          "Guided step-by-step hands-on tutorials for hosting web apps within Free Tier limits.",
      },
    ],
  },

  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    badge: "CompTIA Security+",
    tagline:
      "Defend networks, analyze security threats, and implement enterprise security controls.",
    description:
      "Learn threat intelligence, network defense strategies, ethical hacking fundamentals, and enterprise risk mitigation tailored for real-world cyber defense.",
    whyItMatters:
      "With rising cyber threats globally, entry-level cybersecurity talent with practical threat recognition skills and Security+ cert readiness is crucial across both public and private sectors.",
    iconName: "ShieldCheck",
    icon: ShieldCheck,
    duration: "16 Weeks",
    prerequisites:
      "Understanding of operating system concepts and basic network protocols",
    certifications: [
      "CompTIA Security+ (SY0-701)",
      "CompTIA Network+ (Recommended Path)",
    ],
    skills: [
      "Threat Recognition & Analysis",
      "Vulnerability Scanning",
      "Network Security Architecture",
      "Incident Response & Forensics",
      "SIEM & Log Monitoring",
      "Security Governance & Compliance",
    ],
    certificationAlignment: {
      certName: "CompTIA Security+",
      examCode: "SY0-701",
      isPaidCert: true,
      description:
        "CompTIA Security+ is the global benchmark for baseline cybersecurity skills. Exam SY0-701 emphasizes practical performance-based threat mitigation, secure architecture, and operational security.",
      domains: [
        {
          name: "General Security Concepts",
          weight: "12%",
          description:
            "Fundamental security controls, CIA triad, security posture, and terminology.",
        },
        {
          name: "Threats, Vulnerabilities & Mitigations",
          weight: "22%",
          description:
            "Malware types, social engineering, vulnerability scanning, and threat intelligence sources.",
        },
        {
          name: "Security Architecture",
          weight: "18%",
          description:
            "Secure network design, zero trust, identity management, and cloud security controls.",
        },
        {
          name: "Security Operations",
          weight: "28%",
          description:
            "Incident response, threat hunting, SIEM log analysis, digital forensics, and hardening.",
        },
        {
          name: "Security Program Management & Oversight",
          weight: "20%",
          description:
            "Governance, risk management, privacy compliance, regulations, and security awareness.",
        },
      ],
    },
    modules: [
      {
        moduleNumber: 1,
        title: "General Security Concepts & Threat Landscape",
        duration: "Weeks 1–4",
        description:
          "Build core security foundational principles: CIA Triad (Confidentiality, Integrity, Availability), threat actors, attack vectors, and social engineering taxonomy.",
        keyTopics: [
          "CIA Triad & Non-repudiation",
          "Social Engineering (Phishing, Vishing, Baiting, Impersonation)",
          "Malware Types (Ransomware, Trojans, Keyloggers, Rootkits)",
          "Threat Intelligence Sources & Indicators of Compromise (IoCs)",
        ],
      },
      {
        moduleNumber: 2,
        title: "Threat Recognition, Vulnerabilities & Practical Scenarios",
        duration: "Weeks 5–8",
        description:
          "Conduct vulnerability assessments, parse CVE database entries, operate vulnerability scanners (Nmap, OpenVAS), and execute risk mitigation strategies.",
        keyTopics: [
          "Network & Host Vulnerability Assessment Tools",
          "Understanding CVEs, CVSS Scoring, and Zero-Day Exploits",
          "Web Application Threats (OWASP Top 10, SQLi, XSS)",
          "Remediation, Patch Management & System Hardening",
        ],
      },
      {
        moduleNumber: 3,
        title: "Secure Architecture, Cryptography & Network Defense",
        duration: "Weeks 9–12",
        description:
          "Design defense-in-depth network architectures, deploy firewall policies, configure VPNs, PKI certificates, and enforce Zero Trust principles.",
        keyTopics: [
          "Network Segmentation, DMZs, and VLAN Isolation",
          "Firewalls, IDS/IPS, and WAF Deployments",
          "Symmetric vs Asymmetric Encryption & PKI Certificate Lifecycle",
          "Zero Trust Architecture & Identity Management (MFA, SSO, PAM)",
        ],
      },
      {
        moduleNumber: 4,
        title: "Security Operations, SIEM Monitoring & Incident Response",
        duration: "Weeks 13–16",
        description:
          "Operate Security Information and Event Management (SIEM) tools, analyze log feeds, conduct incident response playbooks, and perform security audits.",
        keyTopics: [
          "Incident Response Lifecycle (Preparation to Lessons Learned)",
          "SIEM Log Analysis (Splunk / Elastic Security / Wazuh)",
          "Digital Forensics Basics & Chain of Custody",
          "CompTIA Security+ (SY0-701) Performance-Based Question (PBQ) Practice",
        ],
      },
    ],
    projects: [
      {
        title: "Enterprise Network Vulnerability Assessment & Hardening",
        description:
          "Perform automated and manual vulnerability scans against a sandboxed enterprise target network, document security weaknesses, and apply hardening scripts.",
        deliverables: [
          "Nmap network discovery and port audit report",
          "Vulnerability scan findings matrix mapped to CVSS scores",
          "Hardening checklist and mitigation verification logs",
        ],
        skillsLearned: [
          "Nmap",
          "OpenVAS / Nessus",
          "OS Hardening",
          "CVSS Risk Scoring",
        ],
      },
      {
        title: "SIEM Log Analysis & Threat Detection Lab",
        description:
          "Deploy an open-source SIEM dashboard to aggregate syslog events, create detection rules for brute-force SSH attacks, and trigger incident alerts.",
        deliverables: [
          "SIEM agent ingestion configuration",
          "Custom alert rule detecting 5+ failed login attempts within 1 minute",
          "Incident Response report summarizing attack reconstruction",
        ],
        skillsLearned: [
          "Wazuh / Splunk",
          "Syslog Analysis",
          "Threat Detection Rules",
          "Incident Playbooks",
        ],
      },
      {
        title: "Secure Network Architecture & DMZ Design Project",
        description:
          "Architect a multi-tier secure corporate network diagram incorporating web DMZs, internal database subnets, firewalls, and remote WFH VPN gateways.",
        deliverables: [
          "Network topology diagram illustrating firewall rules and zone boundaries",
          "PKI certificate deployment plan for internal web applications",
          "Zero Trust policy specification document",
        ],
        skillsLearned: [
          "Network Architecture",
          "Firewall Rules",
          "PKI & TLS",
          "Zero Trust Controls",
        ],
      },
    ],
    outcomes: [
      {
        role: "SOC Analyst Tier 1",
        description:
          "Monitors security logs, investigates triage alerts, and responds to potential security incidents.",
        avgSalaryRange: "$60,000 - $80,000",
      },
      {
        role: "Junior Cybersecurity Specialist",
        description:
          "Assists with vulnerability assessments, compliance reviews, and security control testing.",
        avgSalaryRange: "$65,000 - $85,000",
      },
      {
        role: "Information Security Technician",
        description:
          "Maintains firewalls, endpoint protection systems, and identity permissions across IT networks.",
        avgSalaryRange: "$58,000 - $78,000",
      },
    ],
    resources: [
      {
        title: "CompTIA Security+ (SY0-701) Official Exam Objectives",
        type: "Official Exam Guide",
        url: "https://www.comptia.org/certifications/security",
        description:
          "Official CompTIA topic domain breakdown and recommended exam preparation materials.",
      },
      {
        title: "Professor Messer Free Security+ Video Course",
        type: "Free Material",
        url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video-training/",
        description:
          "Full free video course aligned domain-by-domain with SY0-701 exam objectives.",
      },
      {
        title: "TryHackMe & PortSwigger Academy Hands-On Labs",
        type: "Lab",
        url: "https://tryhackme.com/",
        description:
          "Interactive online cybersecurity labs for threat analysis, networking, and web security.",
      },
    ],
  },

  {
    slug: "software-development",
    title: "Software Development",
    badge: "Portfolio & Projects",
    tagline:
      "Build production-grade web applications and build a public developer portfolio.",
    description:
      "Master modern web engineering using Git, JavaScript, TypeScript, React, and Next.js. Gain practical software engineering skill without requiring expensive certification fees.",
    whyItMatters:
      "In software development, proof of work outweighs paper credentials. Employers value a public GitHub portfolio with dynamic web applications, API integrations, and clean open-source contributions above all else.",
    iconName: "Code",
    icon: Code,
    duration: "20 Weeks",
    prerequisites:
      "Basic programming concepts, HTML/CSS familiarity, and problem-solving interest",
    certifications: [
      "Public Developer Portfolio (GitHub)",
      "Foundational Project Certifications (AMYC Verified)",
    ],
    skills: [
      "Git & GitHub Workflows",
      "Modern JavaScript (ES6+)",
      "TypeScript",
      "React & Next.js",
      "RESTful APIs & Node.js",
      "Tailwind CSS & Responsive Design",
      "CI/CD & Cloud Deployment",
    ],
    certificationAlignment: {
      certName: "Public GitHub Portfolio & Verified Capstone Projects",
      isPaidCert: false,
      description:
        "Rather than relying on a costly standard exam, this track focuses on building a verified public GitHub portfolio showcasing 5 production-quality software projects.",
      domains: [
        {
          name: "Version Control & Collaboration",
          weight: "20%",
          description:
            "Git branching models, Pull Requests, code reviews, and open-source contribution practices.",
        },
        {
          name: "Modern Frontend Engineering",
          weight: "30%",
          description:
            "React functional components, custom hooks, state management, Next.js App Router, and Tailwind CSS.",
        },
        {
          name: "TypeScript & Data Typing",
          weight: "20%",
          description:
            "Interfaces, generics, type safety, API payload typing, and error handling.",
        },
        {
          name: "Backend Integration & APIs",
          weight: "15%",
          description:
            "RESTful API consumption, asynchronous JavaScript (async/await), authentication, and server routes.",
        },
        {
          name: "Testing, CI/CD & Deployment",
          weight: "15%",
          description:
            "Automated linting, unit testing basics, GitHub Actions workflows, and Vercel/Netlify hosting.",
        },
      ],
    },
    modules: [
      {
        moduleNumber: 1,
        title: "Developer Workstation Setup, Git & GitHub Fundamentals",
        duration: "Weeks 1–4",
        description:
          "Master command-line proficiency, VS Code environment setup, Git version control, branch workflows, and public GitHub repository setup.",
        keyTopics: [
          "CLI Essentials & Package Managers (npm, pnpm)",
          "Git Repositories, Commits, Branches, and Merging",
          "GitHub Pull Requests & Code Review Workflows",
          "Markdown Documentation & Clean README Authoring",
        ],
      },
      {
        moduleNumber: 2,
        title: "Modern JavaScript (ES6+) & TypeScript Foundations",
        duration: "Weeks 5–8",
        description:
          "Transition from foundational JS syntax to modern ES6 features, asynchronous programming, DOM manipulation, and strong TypeScript type definitions.",
        keyTopics: [
          "Arrow Functions, Array Methods (map, filter, reduce), and Destructuring",
          "Promises, Async/Await, and Fetch API",
          "TypeScript Interfaces, Types, and Strict Type Checking",
          "Object-Oriented & Functional Programming Concepts",
        ],
      },
      {
        moduleNumber: 3,
        title: "React & Next.js Basics: Modern Web Applications",
        duration: "Weeks 9–14",
        description:
          "Build modern single-page and server-rendered web applications using React hooks, Next.js App Router, dynamic routing, and Tailwind CSS layout.",
        keyTopics: [
          "React Component Lifecycle, useState, useEffect, and custom hooks",
          "Next.js App Router (Pages, Layouts, Server vs Client Components)",
          "Tailwind CSS Utility Styling & Responsive Layouts",
          "Form Handling & Client Validation Techniques",
        ],
      },
      {
        moduleNumber: 4,
        title: "API Integration, State Management & Production Deployment",
        duration: "Weeks 15–20",
        description:
          "Integrate third-party RESTful APIs, implement state management, configure CI/CD deployment pipelines, and publish 5 capstone portfolio projects.",
        keyTopics: [
          "REST & GraphQL API Consumption",
          "Client-Side Caching & Error Boundary Resilience",
          "Automated Deployment on Vercel with GitHub Actions",
          "Portfolio Presentation, Resume Prep & Technical Interview Practice",
        ],
      },
    ],
    projects: [
      {
        title: "Personal Developer Portfolio Site",
        description:
          "Build and deploy a responsive personal portfolio website showcasing your technical skill set, background, project case studies, and contact form.",
        deliverables: [
          "Next.js & Tailwind CSS responsive website",
          "Dark mode toggle support",
          "Deployed on Vercel with custom domain setup",
        ],
        skillsLearned: [
          "Next.js",
          "Tailwind CSS",
          "Vercel",
          "Responsive Web Design",
        ],
      },
      {
        title: "Interactive Web Application (Task & Analytics Dashboard)",
        description:
          "Create a feature-complete productivity web app with interactive drag-and-drop boards, filtering capabilities, local storage persistence, and dynamic state.",
        deliverables: [
          "React/Next.js dashboard with interactive state",
          "Local storage or IndexedDB persistence layer",
          "Accessible UI controls and clean component architecture",
        ],
        skillsLearned: ["React State", "Hooks", "TypeScript", "Accessibility"],
      },
      {
        title: "Third-Party API Integration Project (Weather & Geo App)",
        description:
          "Develop a dynamic data visualization application fetching live telemetry from public APIs with robust error handling, search debouncing, and skeleton loaders.",
        deliverables: [
          "API fetching module with TypeScript interface definitions",
          "Debounced search inputs and error state fallbacks",
          "Clean visual data presentation using Tailwind CSS",
        ],
        skillsLearned: [
          "Async/Await",
          "TypeScript Interfaces",
          "API Integration",
          "Error Handling",
        ],
      },
      {
        title: "Open-Source Contribution Project",
        description:
          "Identify an open-source project or community repository, submit a peer-reviewed Pull Request resolving an issue or adding a useful feature, and adhere to contribution guidelines.",
        deliverables: [
          "Merged or peer-reviewed GitHub Pull Request",
          "Issue discussion and clear documentation notes",
          "Automated test coverage verification",
        ],
        skillsLearned: [
          "Git Fork Workflow",
          "Open-Source Etiquette",
          "Code Review",
          "Collaboration",
        ],
      },
      {
        title: "Cloud Deployment & Continuous Integration Pipeline",
        description:
          "Set up a GitHub Actions CI pipeline for a full-stack Next.js app to automatically run linter checks, TypeScript compilation, and static build exports on every commit.",
        deliverables: [
          "Automated GitHub Actions workflow YAML file",
          "Zero-downtime deployment setup on Vercel",
          "Linter & build badge indicators on GitHub README",
        ],
        skillsLearned: [
          "GitHub Actions",
          "CI/CD",
          "Next.js Build Process",
          "Automated Testing",
        ],
      },
    ],
    outcomes: [
      {
        role: "Junior Web Developer / Frontend Engineer",
        description:
          "Creates responsive user interfaces and web applications using modern React, TypeScript, and CSS frameworks.",
        avgSalaryRange: "$65,000 - $85,000",
      },
      {
        role: "Full-Stack Software Engineer (Entry Level)",
        description:
          "Develops client components, server routes, API integrations, and database schemas for web platforms.",
        avgSalaryRange: "$70,000 - $90,000",
      },
      {
        role: "Junior Software Quality & Test Specialist",
        description:
          "Writes automated test scripts, reviews code quality, and verifies web application functionality.",
        avgSalaryRange: "$60,000 - $78,000",
      },
    ],
    resources: [
      {
        title: "MDN Web Docs (JavaScript & Web Technologies)",
        type: "Documentation",
        url: "https://developer.mozilla.org/",
        description:
          "The authoritative standard documentation for JavaScript, HTML, CSS, and Web APIs.",
      },
      {
        title: "FreeCodeCamp Web Development Path",
        type: "Free Material",
        url: "https://www.freecodecamp.org/",
        description:
          "Free interactive coding exercises and project certifications in JavaScript and React.",
      },
      {
        title: "Official Next.js Documentation & Learn Course",
        type: "Documentation",
        url: "https://nextjs.org/learn",
        description:
          "Official interactive tutorial for learning Next.js App Router, Server Components, and deployment.",
      },
    ],
  },

  {
    slug: "networking",
    title: "Networking",
    badge: "Cisco CCST",
    tagline:
      "Configure, diagnose, and secure modern enterprise network infrastructure.",
    description:
      "Understand OSI and TCP/IP protocol layers, IP addressing and subnetting, switching, routing, wireless endpoints, and basic troubleshooting techniques.",
    whyItMatters:
      "Networking is the backbone of all cloud services, cyber defenses, and enterprise communication. Cisco CCST Networking certification establishes foundational networking competency valued globally.",
    iconName: "Network",
    icon: Network,
    duration: "12 Weeks",
    prerequisites:
      "General digital literacy and interest in computer hardware / infrastructure",
    certifications: [
      "Cisco Certified Support Technician (CCST) Networking (100-150)",
      "CompTIA Network+ (Path)",
    ],
    skills: [
      "OSI & TCP/IP Models",
      "IPv4 & IPv6 Subnetting",
      "Cisco Packet Tracer",
      "Switching & Routing Basics",
      "Wireless & Endpoint Media",
      "Diagnostic Tools & Troubleshooting",
      "Network Security Controls",
    ],
    certificationAlignment: {
      certName: "Cisco Certified Support Technician (CCST) Networking",
      examCode: "100-150",
      isPaidCert: true,
      description:
        "The Cisco CCST Networking exam (100-150) verifies entry-level knowledge of networking standards, IP addressing, media, infrastructure, network diagnosis, and fundamental security.",
      domains: [
        {
          name: "Standards & Concepts",
          weight: "22%",
          description:
            "OSI 7-layer model, TCP/IP protocol suite, bandwidth, latency, and network topologies.",
        },
        {
          name: "Addressing & Subnet Formats",
          weight: "22%",
          description:
            "IPv4 & IPv6 addressing structures, CIDR notation, subnet mask calculation, and static vs dynamic IP allocation.",
        },
        {
          name: "Endpoints & Media",
          weight: "18%",
          description:
            "Copper/fiber cabling types, Wi-Fi wireless standards (802.11), network interface cards, and device connectivity.",
        },
        {
          name: "Infrastructure",
          weight: "16%",
          description:
            "Routers, switches, access points, gateways, VLAN basics, and Cisco device operational concepts.",
        },
        {
          name: "Diagnosing Problems",
          weight: "12%",
          description:
            "Ping, traceroute, nslookup, netstat, ipconfig/ifconfig, link state LEDs, and systematic troubleshooting methodology.",
        },
        {
          name: "Security",
          weight: "10%",
          description:
            "Wireless security (WPA3), firewalls, access control lists (ACLs), passwords, and port security.",
        },
      ],
    },
    modules: [
      {
        moduleNumber: 1,
        title: "Networking Standards, OSI & TCP/IP Protocol Frameworks",
        duration: "Weeks 1–3",
        description:
          "Demystify how data travels across local and global networks by examining the OSI 7-Layer reference model and TCP/IP protocol stack.",
        keyTopics: [
          "OSI 7-Layer Model vs TCP/IP 4-Layer Model",
          "Encapsulation, Decapsulation, and Data Packets",
          "Common Network Protocols (HTTP/S, DNS, DHCP, FTP, SSH)",
          "Network Topologies (Star, Mesh, Bus) & Bandwidth vs Latency",
        ],
      },
      {
        moduleNumber: 2,
        title: "IP Addressing, Subnet Formats & VLSM Calculation",
        duration: "Weeks 4–6",
        description:
          "Master binary conversions, IPv4 address classes, CIDR notation, subnetting calculation math, and IPv6 address formats.",
        keyTopics: [
          "IPv4 Binary to Decimal Conversion & Address Classes",
          "CIDR Notation (/24, /26, /28) & Subnet Masks",
          "Calculating Network ID, Broadcast Address, and Host Ranges",
          "IPv6 Address Structure & Auto-configuration (SLAAC / DHCPv6)",
        ],
      },
      {
        moduleNumber: 3,
        title: "Endpoints, Physical Media & Switching Infrastructure",
        duration: "Weeks 7–9",
        description:
          "Explore Ethernet copper cabling (Cat5e/Cat6), fiber optics, Wi-Fi standards (802.11ax), Ethernet switches, VLAN segmentation, and routing devices.",
        keyTopics: [
          "Twisted Pair, Fiber Optic, and Wireless Media Capabilities",
          "MAC Addressing & ARP Protocol Operations",
          "Ethernet Switching & VLAN Configuration Concepts",
          "Default Gateways, Static Routing, and Dynamic Routing Fundamentals",
        ],
      },
      {
        moduleNumber: 4,
        title:
          "Diagnosing Problems, Network Security & Cisco Packet Tracer Labs",
        duration: "Weeks 10–12",
        description:
          "Hands-on network troubleshooting using command-line diagnostic utilities, basic device hardening, and Cisco Packet Tracer network simulation drills.",
        keyTopics: [
          "CLI Utilities: ping, traceroute, nslookup, netstat, arp",
          "Troubleshooting Methodology (Physical Layer up to Application)",
          "Wireless WPA2/WPA3 Encryption & Switch Port Security",
          "Cisco CCST (100-150) Practice Exam Review",
        ],
      },
    ],
    projects: [
      {
        title: "Enterprise Subnetting & IP Scheme Design",
        description:
          "Design a corporate IP address allocation scheme for a multi-department company using Variable Length Subnet Masking (VLSM) to minimize IP waste.",
        deliverables: [
          "Subnet matrix spreadsheet detailing Network ID, Subnet Mask, Host Range, and Broadcast for 5 subnets",
          "Documentation explaining DHCP scope configuration recommendations",
          "Verification calculations sheet",
        ],
        skillsLearned: [
          "IPv4 Subnetting",
          "VLSM",
          "CIDR Notation",
          "DHCP Planning",
        ],
      },
      {
        title: "Cisco Packet Tracer Multi-Branch Topology Setup",
        description:
          "Simulate a small enterprise network in Cisco Packet Tracer containing routers, managed switches, VLANs, Wi-Fi Access Points, and server endpoints.",
        deliverables: [
          "Packet Tracer (.pkt) network topology file",
          "VLAN configuration script segmenting Office Staff and Guest Wi-Fi",
          "Ping connectivity matrix demonstrating inter-VLAN routing",
        ],
        skillsLearned: [
          "Cisco Packet Tracer",
          "VLANs",
          "Inter-VLAN Routing",
          "WAP Configuration",
        ],
      },
      {
        title: "Network Diagnostic & Troubleshooting Hands-On Lab",
        description:
          "Troubleshoot 5 intentionally misconfigured network scenarios (IP mismatch, cable fault simulation, bad default gateway, broken DNS) and document the root cause.",
        deliverables: [
          "Troubleshooting ticket log specifying diagnostic steps taken",
          "Command output captures (ping / traceroute / nslookup)",
          "Resolution summary report",
        ],
        skillsLearned: [
          "CLI Diagnostics",
          "Ping & Traceroute Analysis",
          "DNS Resolution Debugging",
          "OSI Troubleshooting",
        ],
      },
    ],
    outcomes: [
      {
        role: "Network Support Technician",
        description:
          "Assists with network cable installation, router/switch connectivity troubleshooting, and user endpoint onboarding.",
        avgSalaryRange: "$52,000 - $70,000",
      },
      {
        role: "Helpdesk & Field Service Specialist",
        description:
          "Provides tier-1 technical diagnostics for local area networks, Wi-Fi access points, and hardware interfaces.",
        avgSalaryRange: "$48,000 - $65,000",
      },
      {
        role: "Junior Network Administrator",
        description:
          "Monitors network performance, configures baseline VLANs, and maintains IP address registries.",
        avgSalaryRange: "$58,000 - $78,000",
      },
    ],
    resources: [
      {
        title: "Cisco CCST Networking (100-150) Exam Topics Guide",
        type: "Official Exam Guide",
        url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/support-technician/ccst-networking.html",
        description:
          "Official Cisco exam overview and topic blueprint breakdown.",
      },
      {
        title: "Cisco Networking Academy Free Introduction to Networks",
        type: "Free Material",
        url: "https://www.netacad.com/",
        description:
          "Free official Cisco interactive course for learning core networking concepts.",
      },
      {
        title: "Cisco Packet Tracer Free Download & Tutorials",
        type: "Lab",
        url: "https://www.netacad.com/courses/packet-tracer",
        description:
          "Official Cisco network simulation software for building and testing network topology setups.",
      },
    ],
  },

  {
    slug: "devops-infra",
    title: "DevOps & Infrastructure",
    badge: "Terraform Associate",
    tagline:
      "Automate infrastructure, manage state, and build cloud deployment pipelines with IaC.",
    description:
      "Automate Cloud Infrastructure as Code (IaC) using HashiCorp Terraform, containerization with Docker, CI/CD pipelines, and cloud state management.",
    whyItMatters:
      "Modern IT infrastructure is defined in code rather than configured manually. Terraform skills enable rapid, repeatable, and error-free infrastructure automation required across cloud native organizations.",
    iconName: "Cpu",
    icon: Cpu,
    duration: "16 Weeks",
    prerequisites:
      "Linux fundamentals, command line proficiency, and basic cloud concepts",
    certifications: [
      "HashiCorp Certified: Terraform Associate (004)",
      "Docker Certified Associate (Recommended Path)",
    ],
    skills: [
      "Infrastructure as Code (IaC)",
      "HashiCorp Terraform CLI",
      "HCL (HashiCorp Configuration Language)",
      "Terraform State Management",
      "Reusable Terraform Modules",
      "HCP Terraform (Cloud)",
      "Docker & CI/CD Pipelines",
    ],
    certificationAlignment: {
      certName: "HashiCorp Certified: Terraform Associate",
      examCode: "004",
      isPaidCert: true,
      description:
        "The HashiCorp Certified: Terraform Associate (004) exam validates understanding of Infrastructure as Code concepts, Terraform CLI commands, state locking, module creation, and HCP Terraform.",
      domains: [
        {
          name: "IaC Concepts",
          weight: "12%",
          description:
            "Understanding Infrastructure as Code benefits, declarative vs imperative paradigms, and state tracking.",
        },
        {
          name: "Terraform Fundamentals",
          weight: "14%",
          description:
            "Terraform architecture, provider plugins, resource blocks, and dependencies.",
        },
        {
          name: "Core Terraform Workflow",
          weight: "22%",
          description:
            "Mastering init, plan, apply, destroy cycle, plan output files, and execution flags.",
        },
        {
          name: "Terraform Configuration & HCL",
          weight: "18%",
          description:
            "HCL syntax, input variables, output values, local values, expressions, and dynamic blocks.",
        },
        {
          name: "Modules & State Management",
          weight: "20%",
          description:
            "Creating/using modules, public registry, remote state backends (S3), state locking (DynamoDB), and inspect state.",
        },
        {
          name: "Maintenance & HCP Terraform",
          weight: "14%",
          description:
            "Terraform Cloud/HCP Terraform workspaces, VCS integration, variables, and state drift management.",
        },
      ],
    },
    modules: [
      {
        moduleNumber: 1,
        title: "Infrastructure as Code (IaC) Concepts & Terraform Setup",
        duration: "Weeks 1–4",
        description:
          "Introduce IaC principles, declarative infrastructure configuration, HCL syntax, Terraform installation, and provider plugin integration.",
        keyTopics: [
          "IaC Benefits: Reproducibility, Auditing, Version Control",
          "Terraform CLI Installation & VS Code Extension Setup",
          "HCL Syntax (Providers, Resources, Data Sources)",
          "Authenticating Terraform with AWS / Cloud Providers",
        ],
      },
      {
        moduleNumber: 2,
        title: "Core Terraform Workflow & Configuration Authoring",
        duration: "Weeks 5–8",
        description:
          "Master the standard Terraform execution loop: terraform init, terraform plan, terraform apply, and terraform destroy with variable parameterized templates.",
        keyTopics: [
          "Terraform Execution Cycle (init, plan, apply, destroy)",
          "Input Variables, Output Values, and Local Values",
          "Terraform Formatting & Validation (fmt, validate)",
          "Resource Dependencies (Implicit vs Explicit depends_on)",
        ],
      },
      {
        moduleNumber: 3,
        title: "Terraform Modules, Remote State Management & Locking",
        duration: "Weeks 9–12",
        description:
          "Build reusable Terraform modules, store remote state safely in cloud backends (Amazon S3), and enforce state concurrency locking with DynamoDB.",
        keyTopics: [
          "Terraform State file anatomy & state security",
          "Remote State Storage (AWS S3 Backend Configuration)",
          "State Locking with DynamoDB to prevent concurrent writes",
          "Authoring Reusable Modules & TerraForm Registry Usage",
        ],
      },
      {
        moduleNumber: 4,
        title: "HCP Terraform (Cloud), CI/CD Integration & Exam Preparation",
        duration: "Weeks 13–16",
        description:
          "Connect Terraform workflows to GitHub VCS triggers via HCP Terraform, automate state drift monitoring, and complete practice drills for exam 004.",
        keyTopics: [
          "HCP Terraform Workspaces & VCS Triggered Runs",
          "Managing Variables and Secrets in Terraform Cloud",
          "State Refresh, Import, and Drift Detection",
          "HashiCorp Terraform Associate (004) Practice Exam Review",
        ],
      },
    ],
    projects: [
      {
        title: "Multi-Resource AWS VPC & Web Server via Terraform",
        description:
          "Write declarative HCL code to provision a complete isolated AWS Virtual Private Cloud (VPC), public subnet, Internet Gateway, security groups, and an EC2 web server instance.",
        deliverables: [
          "Structured HCL files (main.tf, variables.tf, outputs.tf)",
          "Terraform plan output file verifying dry-run provisioning",
          "Working web server instance deployed via automated terraform apply",
        ],
        skillsLearned: [
          "Terraform HCL",
          "AWS Provider",
          "Resource Provisioning",
          "Variables & Outputs",
        ],
        codeSnippet: {
          language: "hcl",
          filename: "main.tf",
          code: `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "amyc_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name        = "amyc-youth-center-vpc"
    Environment = "Production"
  }
}

resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.amyc_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true

  tags = {
    Name = "amyc-public-subnet"
  }
}`,
        },
      },
      {
        title: "Reusable Terraform Module for Cloud Database Clusters",
        description:
          "Author a custom reusable Terraform module that abstracts cloud database creation with configurable engine versions, storage limits, and backup retention periods.",
        deliverables: [
          "Module directory structure with explicit variable validation rules",
          "Documentation explaining module parameters and outputs",
          "Example root module consuming the local module",
        ],
        skillsLearned: [
          "Terraform Modules",
          "Variable Validation",
          "DRY Infrastructure Design",
        ],
      },
      {
        title: "Remote S3 Backend & DynamoDB State Locking Lab",
        description:
          "Migrate local terraform.tfstate file to an encrypted Amazon S3 remote backend with DynamoDB state locking to enable secure multi-engineer team collaboration.",
        deliverables: [
          "Backend configuration block targeting S3 and DynamoDB",
          "Successful execution log demonstrating state migration and lock acquisition",
          "State lock verification test report",
        ],
        skillsLearned: [
          "Remote State",
          "DynamoDB State Locking",
          "S3 Encrypted Backends",
          "Concurrency Control",
        ],
      },
    ],
    outcomes: [
      {
        role: "Junior DevOps / IaC Engineer",
        description:
          "Automates cloud infrastructure provisioning and maintains infrastructure code repositories.",
        avgSalaryRange: "$70,000 - $92,000",
      },
      {
        role: "Cloud Infrastructure Associate",
        description:
          "Manages cloud resource templates, remote state files, and basic CI/CD deployment jobs.",
        avgSalaryRange: "$65,000 - $85,000",
      },
      {
        role: "Site Reliability / Automation Technician",
        description:
          "Monitors infrastructure state drift, runs deployment automation scripts, and assists with outage recovery.",
        avgSalaryRange: "$68,000 - $88,000",
      },
    ],
    resources: [
      {
        title: "HashiCorp Terraform Associate (004) Exam Objectives",
        type: "Official Exam Guide",
        url: "https://developer.hashicorp.com/terraform/tutorials/certification/associate-review-004",
        description:
          "Official HashiCorp exam review guide and target competencies list.",
      },
      {
        title: "HashiCorp Developer Learn Tutorials",
        type: "Free Material",
        url: "https://developer.hashicorp.com/terraform/tutorials",
        description:
          "Step-by-step official hands-on tutorials for Terraform CLI and HCP Terraform.",
      },
      {
        title: "Terraform Registry & Provider Documentation",
        type: "Documentation",
        url: "https://registry.terraform.io/",
        description:
          "Official registry for community and official providers, modules, and configuration examples.",
      },
    ],
  },
];
