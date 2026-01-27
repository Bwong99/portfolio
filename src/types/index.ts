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
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

// Education types
export interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
}
