import { Project, Skill, TimelineEntry, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Photography', href: '/photography' },
  { label: 'Contact', href: '/contact' },
];

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Figma', category: 'frontend' },

  { name: 'Python', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'AWS', category: 'backend' },
  { name: 'DynamoDB', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Docker', category: 'backend' },
  { name: 'JUnit', category: 'backend' },

  { name: 'C', category: 'hardware' },
  { name: 'C++', category: 'hardware' },
  { name: 'SystemVerilog', category: 'hardware' },
  { name: 'Assembly (RISC-V, ARM)', category: 'hardware' },
  { name: 'RTL Design', category: 'hardware' },
  { name: 'FPGA Development', category: 'hardware' },
  { name: 'Quartus', category: 'hardware' },
  { name: 'ModelSim', category: 'hardware' },
  { name: 'GDB', category: 'hardware' },
  { name: 'Linux/Unix', category: 'hardware' },

  { name: 'PyTorch', category: 'ml' },
  { name: 'TensorFlow', category: 'ml' },
  { name: 'OpenCV', category: 'ml' },
];

// Newest first.
export const timeline: TimelineEntry[] = [
  {
    title: 'Software Developer',
    org: 'Micro Engineering Tech Inc · Internship',
    year: 'Jun 2026 - Present',
  },
  {
    title: 'Bachelor of Applied Science, Computer Engineering',
    org: 'University of British Columbia',
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
    thumbnail: '/photos/projects/riscvcpu/risc-V%20cpu1.jpg',
    images: [
      '/photos/projects/riscvcpu/risc-V%20cpu1.jpg',
    ],
    screenshots: [],
  },
  {
    id: 'robotics-dashboard',
    title: 'Real-Time Robotics Dashboard',
    category: 'software',
    description: 'C++/wxWidgets dashboard with live sensor telemetry streamed over TCP.',
    longDescription: 'Designed and built a real-time C++/wxWidgets dashboard for UBC Open Robotics with live sensor telemetry streamed over TCP sockets. Features an interactive UI with dynamic sensor control panel, responsive splitter layout, and real-time graphing. Implemented multi-threaded TCP client with JSON parsing and an observer pattern for thread-safe data-to-UI pipeline. Developed a dual-mode system (ESP32 hardware + Python mock server) enabling production testing and development iteration without hardware dependencies.',
    technologies: ['C++', 'wxWidgets', 'TCP/IP', 'JSON', 'Multi-threading', 'Figma'],
    thumbnail: '/photos/projects/panorama/panorama3.png',
    images: [
      '/photos/projects/panorama/panorama3.png',
    ],
    screenshots: [
      '/photos/projects/panorama/panorama1.png',
      '/photos/projects/panorama/panorama2.png',
      '/photos/projects/panorama/panorama3.png',
    ],
  },
  {
    id: 'esp32-telemetry',
    title: 'ESP32 Sensor Telemetry System',
    category: 'hardware',
    description: 'ESP32 firmware in embedded C for sensor interfacing to local web dashboard.',
    longDescription: 'Implemented ESP32 firmware in embedded C for sensor interfacing to a local web dashboard. Built a Node.js backend to support a lightweight telemetry data pipeline. Deployed using Linux CLI and designed for real-time monitoring of sensor data with minimal latency.',
    technologies: ['ESP32', 'Embedded C', 'Node.js', 'Linux', 'Sensor Integration'],
    thumbnail: '/photos/projects/esp32/esp32.jpg',
    images: [
      '/photos/projects/esp32/esp32.jpg',
    ],
    screenshots: [],
  },
];

export const socialLinks = {
  github: 'https://github.com/Bwong99',
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
};
