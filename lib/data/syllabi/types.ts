export interface SyllabusSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface SyllabusData {
  slug: string;
  title: string;
  subtitle: string;
  sections: SyllabusSection[];
}
