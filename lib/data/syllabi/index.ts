import type { SyllabusData } from "./types";
import { syllabus as cloudComputing } from "./cloud-computing";
import { syllabus as cybersecurity } from "./cybersecurity";
import { syllabus as devopsInfra } from "./devops-infra";
import { syllabus as networking } from "./networking";
import { syllabus as softwareDevelopment } from "./software-development";

const SYLLABI: Record<string, SyllabusData> = {
  "cloud-computing": cloudComputing,
  cybersecurity,
  "devops-infra": devopsInfra,
  networking,
  "software-development": softwareDevelopment,
};

export function getSyllabus(slug: string): SyllabusData | undefined {
  return SYLLABI[slug];
}

export type { SyllabusData, SyllabusSection } from "./types";
