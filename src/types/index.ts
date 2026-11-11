// Project data types
export type ProjectCategory = 'photography' | 'software' | 'coding' | 'hardware';

export interface Project {
  id: string;
  title: string;
  // Projects that span disciplines carry more than one category: they show up
  // under every matching filter and label themselves with all of them.
  categories: ProjectCategory[];
  description: string;
  longDescription: string;
  technologies: string[];
  thumbnail: string;
  images: string[];
  screenshots?: string[]; // Project screenshots
  link?: string;
  github?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
}

// Home page "What I use" list
export interface TechItem {
  name: string;
  note: string;
  icon: string;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

// Work history
export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  summary: string;
}
