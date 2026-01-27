import { Project, Skill, Education, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 65, category: 'tools' },
  { name: 'Photography', level: 90, category: 'other' },
  { name: 'Hardware Design', level: 75, category: 'other' },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    year: '2020 - 2024',
    description: 'Focused on software engineering, data structures, and web development. Graduated with honors.',
  },
  {
    degree: 'High School Diploma',
    school: 'Central High School',
    year: '2016 - 2020',
    description: 'Participated in robotics club and photography club. Developed early interest in technology.',
  },
];

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    category: 'coding',
    description: 'A modern, responsive portfolio website built with Next.js and TypeScript.',
    longDescription: 'This portfolio website showcases my work and skills as a developer. Built with Next.js for optimal performance and SEO, it features smooth animations with Framer Motion, responsive design, and a clean, modern aesthetic. The site demonstrates my proficiency in React, TypeScript, and modern web development practices.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    ],
    github: 'https://github.com/bradleywong',
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    category: 'software',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing with Stripe, and an admin dashboard for inventory management. Built with a focus on scalability and user experience.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux'],
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    ],
    link: 'https://example.com',
    github: 'https://github.com/bradleywong',
  },
  {
    id: 'urban-landscapes',
    title: 'Urban Landscapes',
    category: 'photography',
    description: 'A collection of urban photography capturing city life and architecture.',
    longDescription: 'This photography series explores the beauty of urban environments, from towering skyscrapers to intimate street scenes. Shot over two years in various cities, these images capture the interplay of light, shadow, and human presence in metropolitan spaces.',
    technologies: ['Sony A7III', 'Lightroom', 'Photoshop'],
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80',
    ],
  },
  {
    id: 'smart-home-controller',
    title: 'Smart Home Controller',
    category: 'hardware',
    description: 'Custom IoT device for home automation with mobile app integration.',
    longDescription: 'A custom-designed smart home controller built on Raspberry Pi that integrates with various IoT devices. Features include temperature monitoring, lighting control, and security system integration. Accompanied by a mobile app for remote control and monitoring.',
    technologies: ['Raspberry Pi', 'Python', 'React Native', 'MQTT', 'Arduino'],
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    ],
    github: 'https://github.com/bradleywong',
  },
  {
    id: 'nature-photography',
    title: 'Nature & Wildlife',
    category: 'photography',
    description: 'Wildlife and nature photography from various national parks.',
    longDescription: 'A curated collection of nature and wildlife photography captured in national parks across the country. From majestic landscapes to intimate wildlife portraits, these images celebrate the beauty of the natural world.',
    technologies: ['Canon EOS R5', 'Lightroom', 'Capture One'],
    thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    ],
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    category: 'coding',
    description: 'A productivity app with drag-and-drop functionality and team collaboration.',
    longDescription: 'A feature-rich task management application designed for teams. Includes drag-and-drop task organization, real-time collaboration, deadline tracking, and progress analytics. Built with modern React patterns and real-time WebSocket updates.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&q=80',
    ],
    link: 'https://example.com',
    github: 'https://github.com/bradleywong',
  },
];

export const socialLinks = {
  github: 'https://github.com/bradleywong',
  linkedin: 'https://linkedin.com/in/bradleywong',
  email: 'bradley.wong@example.com',
};

export const aboutMe = {
  name: 'Bradley Wong',
  title: 'Full-Stack Developer & Photographer',
  bio: `I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless digital experiences. With expertise in React, TypeScript, and Node.js, I build modern web applications that are both beautiful and functional.

Beyond coding, I'm an avid photographer who finds inspiration in urban landscapes and natural beauty. This dual perspective helps me approach software development with a unique creative vision, always considering both the technical and aesthetic aspects of every project.

I believe in writing clean, maintainable code and staying current with the latest technologies. When I'm not coding or behind a camera, you'll find me tinkering with hardware projects or exploring new hiking trails.`,
  location: 'San Francisco, CA',
  availability: 'Open to opportunities',
};
