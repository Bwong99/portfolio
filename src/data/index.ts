import { Project, Skill, Education, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Photography', href: '/photography' },
  { label: 'Contact', href: '/contact' },
];

export const skills: Skill[] = [
  { name: 'C', level: 85, category: 'frontend' },
  { name: 'C++', level: 85, category: 'frontend' },
  { name: 'Java', level: 80, category: 'frontend' },
  { name: 'System Verilog', level: 75, category: 'frontend' },
  { name: 'Assembly (RISC-V, ARM)', level: 70, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Linux/CLI', level: 85, category: 'tools' },
  { name: 'GDB', level: 75, category: 'tools' },
  { name: 'Quartus', level: 80, category: 'tools' },
  { name: 'ModelSim', level: 75, category: 'tools' },
  { name: 'Figma', level: 70, category: 'other' },
  { name: 'RTL Design', level: 80, category: 'other' },
  { name: 'FPGA Development', level: 75, category: 'other' },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Applied Science, Computer Engineering',
    school: 'University of British Columbia',
    year: '2024 - 2028 (Expected)',
    description: 'Focused on digital design, embedded systems, and computer architecture. Active member of UBC Open Robotics.',
  },
];

export const projects: Project[] = [
  {
    id: 'risc-v-cpu',
    title: 'RISC-V CPU',
    category: 'hardware',
    description: 'Synthesizable RV32I single-cycle CPU implemented in SystemVerilog.',
    longDescription: 'Implemented a fully synthesizable RV32I single-cycle CPU in SystemVerilog. Designed comprehensive datapath, control logic, ALU, register file, and memory interface. Built ISA-compliant control and datapath logic for R/I/S/B/U/J instructions, including branch/jump handling and PC control. Verified correctness using self-checking SystemVerilog testbenches and waveform-based debugging in ModelSim.',
    technologies: ['SystemVerilog', 'ModelSim', 'RISC-V', 'RTL Design', 'FPGA'],
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1200&q=80',
    ],
  },
  {
    id: 'robotics-dashboard',
    title: 'Real-Time Robotics Dashboard',
    category: 'software',
    description: 'C++/wxWidgets dashboard with live sensor telemetry streamed over TCP.',
    longDescription: 'Designed and built a real-time C++/wxWidgets dashboard for UBC Open Robotics with live sensor telemetry streamed over TCP sockets. Features an interactive UI with dynamic sensor control panel, responsive splitter layout, and real-time graphing. Implemented multi-threaded TCP client with JSON parsing and an observer pattern for thread-safe data-to-UI pipeline. Developed a dual-mode system (ESP32 hardware + Python mock server) enabling production testing and development iteration without hardware dependencies.',
    technologies: ['C++', 'wxWidgets', 'TCP/IP', 'JSON', 'Multi-threading', 'Figma'],
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ],
  },
  {
    id: 'esp32-telemetry',
    title: 'ESP32 Sensor Telemetry System',
    category: 'hardware',
    description: 'ESP32 firmware in embedded C for sensor interfacing to local web dashboard.',
    longDescription: 'Implemented ESP32 firmware in embedded C for sensor interfacing to a local web dashboard. Built a Node.js backend to support a lightweight telemetry data pipeline. Deployed using Linux CLI and designed for real-time monitoring of sensor data with minimal latency.',
    technologies: ['ESP32', 'Embedded C', 'Node.js', 'Linux', 'Sensor Integration'],
    thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    ],
  },
];

export const socialLinks = {
  github: 'https://github.com/bradleywong',
  linkedin: 'https://linkedin.com/in/bradleywong99/',
  email: 'bradleywong99@gmail.com',
};

export const aboutMe = {
  name: 'Bradley Wong',
  title: 'Computer Engineering Student & Embedded Systems Developer',
  bio: `I'm a passionate Computer Engineering student at the University of British Columbia, specializing in embedded systems and digital design. With hands-on experience in RTL design, FPGA development, and low-level programming, I build efficient hardware-software systems.

Currently, I'm part of the UBC Open Robotics software team, where I design real-time dashboards and telemetry systems. My projects span from implementing RISC-V CPUs in SystemVerilog to building multi-threaded C++ applications with live sensor data streaming.

Beyond engineering, I'm an avid photographer who finds inspiration in urban landscapes and natural beauty. This creative perspective helps me approach technical challenges with a unique mindset, always considering both functionality and elegance in my designs.`,
  location: 'Vancouver, BC',
  availability: 'Open to co-op opportunities',
};
