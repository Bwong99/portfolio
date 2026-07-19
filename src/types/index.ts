// Project data types
export interface Project {
  id: string;
  title: string;
  category: 'photography' | 'software' | 'coding' | 'hardware';
  description: string;
  longDescription: string;
  technologies: string[];
  thumbnail: string;
  images: string[];
  screenshots?: string[]; // Project screenshots
  link?: string;
  github?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
}

// Skills types
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'hardware' | 'ml';
}

// Timeline types — schooling and work history share one track
export interface TimelineEntry {
  title: string;
  org: string;
  year: string;
  description?: string;
}
