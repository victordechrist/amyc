export { SKILL_TRACKS } from "./data/tracks";
export { IMPACT_STATS } from "./data/metrics";
export type { TrackData } from "./data/tracks";
export type { ImpactStat } from "./data/metrics";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAV_LINKS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Tracks", href: "/tracks" },
  { label: "Showcase", href: "/showcase" },
  { label: "Impact", href: "/impact" },
  { label: "Resources", href: "/resources" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV_LINKS = {
  programs: [
    { label: "Youth Tech Bootcamps", href: "/programs" },
    { label: "Skill Tracks", href: "/tracks" },
    { label: "Project Showcase", href: "/showcase" },
    { label: "Certifications Prep", href: "/programs" },
    { label: "Learning Resources", href: "/resources" },
  ],
  organization: [
    { label: "About AMYC", href: "/about" },
    { label: "Impact & Metrics", href: "/impact" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const SOCIAL_LINKS = [
  { name: "Twitter", href: "https://twitter.com", label: "X (Twitter)" },
  { name: "GitHub", href: "https://github.com", label: "GitHub" },
  { name: "LinkedIn", href: "https://linkedin.com", label: "LinkedIn" },
  { name: "YouTube", href: "https://youtube.com", label: "YouTube" },
];
