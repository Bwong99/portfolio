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
    id: '6dof-arm',
    title: '6DoF Arm',
    category: 'hardware',
    description: 'ROS2-based control and vision stack for a 6-degree-of-freedom robotic arm.',
    longDescription: 'Contributed to the 6DoF Arm project with UBC Open Robotics — a six-degree-of-freedom robotic arm built to operate autonomously as a barista. The system spans both hardware and software: motor control and kinematics on the arm, paired with a ROS2-based software stack for motion planning, simulation, and computer vision. Built in Python and containerized with Docker for reproducible development and deployment, the project integrates perception and planning subsystems to translate camera input into coordinated arm motion.',
    technologies: ['ROS2', 'Python', 'Docker', 'Computer Vision', 'Motion Planning', 'Robotics'],
    thumbnail: '/photos/projects/6dof-arm/6dofarm1.png',
    images: [
      '/photos/projects/6dof-arm/6dofarm1.png',
      '/photos/projects/6dof-arm/6dofarm2.png',
    ],
    screenshots: [
      '/photos/projects/6dof-arm/6dofarm1.png',
      '/photos/projects/6dof-arm/6dofarm2.png',
    ],
    github: 'https://github.com/UBC-OpenRobotics/6DoF-Arm',
  },
  {
    id: 'mobile-arm',
    title: 'Dynamixel-Based Mobile Arm',
    category: 'hardware',
    description: 'ROS2 + Gazebo simulation of a mobile base with a 2-DOF Dynamixel arm and camera.',
    longDescription: 'Built a full ROS2 simulation stack for a mobile robot combining a driveable base with an articulated 2-DOF Dynamixel arm and an onboard camera. Modeled the robot in URDF/Xacro and simulated its physics in Gazebo, bridging simulation and ROS2 through ros_gz_bridge for bidirectional message passing. Joint commands, base velocity (/cmd_vel), joint feedback, and camera streams flow over ROS2 topics, with robot_state_publisher maintaining the TF transform tree and RViz2 for visualization. The controllers are simulation-agnostic, so the same ROS2 stack can drive real Dynamixel hardware or the simulated model.',
    technologies: ['ROS2', 'Gazebo', 'URDF/Xacro', 'RViz2', 'Dynamixel', 'Robotics'],
    thumbnail: '/photos/projects/mobile-arm/mobile-arm3.png',
    images: [
      '/photos/projects/mobile-arm/mobile-arm1.png',
      '/photos/projects/mobile-arm/mobile-arm2.png',
      '/photos/projects/mobile-arm/mobile-arm3.png',
      '/photos/projects/mobile-arm/mobile-arm4.png',
      '/photos/projects/mobile-arm/mobile-arm5.png',
    ],
    screenshots: [
      '/photos/projects/mobile-arm/mobile-arm1.png',
      '/photos/projects/mobile-arm/mobile-arm2.png',
      '/photos/projects/mobile-arm/mobile-arm3.png',
      '/photos/projects/mobile-arm/mobile-arm4.png',
      '/photos/projects/mobile-arm/mobile-arm5.png',
    ],
    github: 'https://github.com/Bwong99/Dynamixel-Based-Mobile-Arm',
  },
  {
    id: 'tron-light-cycle',
    title: 'Tron VGA Light Cycle',
    category: 'hardware',
    description: 'Tron-style light cycle game in C on a DE10-Lite FPGA with VGA output.',
    longDescription: 'Built a Tron-style light cycle game in C targeting the DE10-Lite FPGA board (portable to the DE1-SoC and CPUlator). Renders the arena and trailing light cycles directly to a VGA pixel buffer through memory-mapped I/O, and reads player input from the on-board push buttons. Drives the LEDs and seven-segment HEX displays for game state, and uses the hardware timer to pace the game loop — a from-scratch embedded implementation with no game engine or libraries.',
    technologies: ['C', 'VGA', 'DE10-Lite FPGA', 'Memory-Mapped I/O', 'Embedded Systems'],
    thumbnail: '/photos/projects/tron/vgaTron.png',
    images: [
      '/photos/projects/tron/vgaTron.png',
    ],
    screenshots: [
      '/photos/projects/tron/vgaTron.png',
    ],
    github: 'https://github.com/Bwong99/Tron-VGA-Light-Cycle',
  },
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
