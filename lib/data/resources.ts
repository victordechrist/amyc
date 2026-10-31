export interface ResourceItem {
  id: string;
  title: string;
  category:
    | "Starter Projects"
    | "Toolkits & Setup"
    | "External Guides"
    | "Certification Prep";
  description: string;
  tags: string[];
  linkUrl: string;
  isExternal?: boolean;
}

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: "aws-starter-kit",
    title: "AWS Serverless Web App Starter Kit",
    category: "Starter Projects",
    description:
      "Sample project deploying React frontend on S3/CloudFront with Lambda and DynamoDB backend.",
    tags: ["AWS", "Serverless", "React", "Terraform"],
    linkUrl: "https://github.com/aws-samples/aws-serverless-shopping-cart",
    isExternal: true,
  },
  {
    id: "dev-environment-setup",
    title: "Developer Workstation & Terminal Setup Guide",
    category: "Toolkits & Setup",
    description:
      "Step-by-step setup guide for VS Code, Git, zsh, Docker, and Node.js environment configuration.",
    tags: ["Git", "VSCode", "Docker", "CLI"],
    linkUrl:
      "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Setting_up_a_local_development_environment",
    isExternal: true,
  },
  {
    id: "security-plus-cheat-sheet",
    title: "CompTIA Security+ SY0-701 Study Guide & Port Sheet",
    category: "Certification Prep",
    description:
      "Essential networking ports, cryptography acronyms, and risk management concepts for Security+.",
    tags: ["Security+", "CompTIA", "Cybersecurity"],
    linkUrl:
      "https://www.professormesser.com/security-plus/sy0-701/sy0-701-community-study-group/",
    isExternal: true,
  },
  {
    id: "fullstack-nextjs-template",
    title: "Full-Stack Next.js & Tailwind Starter Repository",
    category: "Starter Projects",
    description:
      "Production-ready template with TypeScript, Next-Auth, Prisma, and Tailwind CSS components.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    linkUrl:
      "https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss",
    isExternal: true,
  },
  {
    id: "networking-subnetting-guide",
    title: "Interactive Subnetting & IPv4 Practice Toolkit",
    category: "External Guides",
    description:
      "Calculators and practical worksheets for mastering CIDR notation, subnet masks, and network boundaries.",
    tags: ["Networking", "Subnetting", "CCNA"],
    linkUrl: "https://www.subnetrouter.com",
    isExternal: true,
  },
];
