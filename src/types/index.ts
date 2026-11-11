// Project data types
export type ProjectCategory = 'photography' | 'software' | 'coding' | 'hardware';

export interface ProjectSection {
  heading: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  // Short line shown above the title on the project card.
  tagline?: string;
  // Projects that span disciplines carry more than one category: they show up
  // under every matching filter and label themselves with all of them.
  categories: ProjectCategory[];
  description: string;
  // Where it was built (team, company, course), shown on the project page.
  context?: string;
  // The project page body: short labelled groups of bullet points.
  sections: ProjectSection[];
  technologies: string[];
  thumbnail: string;
  images: string[];
  screenshots?: string[]; // Project screenshots
  link?: string;
  github?: string;
  // Short demo clip (e.g. /videos/projects/<id>.mp4). When set, it plays
  // muted on a loop in place of the card photo.
  video?: string;
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
