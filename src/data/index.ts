import { Project, TechGroup, ExperienceEntry, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Photography', href: '/photography' },
];

const ICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

// Grouped the way the home page "What I use" section lists them.
export const techStack: TechGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'Python', note: 'Tooling, CLIs, and test automation', icon: `${ICONS}/python/python-original.svg` },
      { name: 'TypeScript', note: 'Typed backends and web UIs', icon: `${ICONS}/typescript/typescript-original.svg` },
      { name: 'Kotlin', note: 'Native Android with Jetpack Compose', icon: `${ICONS}/kotlin/kotlin-original.svg` },
      { name: 'C / C++', note: 'Embedded systems and desktop clients', icon: `${ICONS}/cplusplus/cplusplus-original.svg` },
    ],
  },
  {
    label: 'Backend & Cloud',
    items: [
      { name: 'Node.js & Express', note: 'REST APIs and backend services', icon: `${ICONS}/nodejs/nodejs-original.svg` },
      { name: 'PostgreSQL', note: 'Schemas, migrations, and transactions', icon: `${ICONS}/postgresql/postgresql-original.svg` },
      { name: 'AWS S3', note: 'Object storage for files and datasets', icon: `${ICONS}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: 'Google Cloud', note: 'VM hosting behind HTTPS', icon: `${ICONS}/googlecloud/googlecloud-original.svg` },
    ],
  },
  {
    label: 'Frontend & Mobile',
    items: [
      { name: 'React', note: 'Component driven web interfaces', icon: `${ICONS}/react/react-original.svg` },
      { name: 'Next.js', note: 'The framework behind this site', icon: `${ICONS}/nextjs/nextjs-original.svg` },
      { name: 'Jetpack Compose', note: 'Declarative Android UI', icon: `${ICONS}/jetpackcompose/jetpackcompose-original.svg` },
      { name: 'Figma', note: 'Designing screens before building them', icon: `${ICONS}/figma/figma-original.svg` },
    ],
  },
  {
    label: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', note: 'Version control and code review', icon: `${ICONS}/github/github-original.svg` },
      { name: 'GitHub Actions', note: 'CI pipelines and automated tests', icon: `${ICONS}/githubactions/githubactions-original.svg` },
      { name: 'Docker', note: 'Reproducible builds and test services', icon: `${ICONS}/docker/docker-original.svg` },
      { name: 'Linux', note: 'Daily driver for development', icon: `${ICONS}/linux/linux-original.svg` },
    ],
  },
];

// Current role first, then by start date.
export const experience: ExperienceEntry[] = [
  {
    role: 'Software Developer',
    org: 'UBC Open Robotics',
    period: 'Sep 2025 – Present',
    summary: 'Kotlin Android app streaming live robot sensor data over TCP at 55 ms median latency.',
  },
  {
    role: 'Software Developer Intern',
    org: 'Micro Engineering Tech Inc',
    period: 'Jun 2026 – Aug 2026',
    summary: 'REST APIs on AWS S3 for geospatial road data serving 1,000+ users.',
  },
  {
    role: 'Software Developer',
    org: 'Atria Community',
    period: 'May 2025 – Aug 2025',
    summary: 'PostgreSQL schemas and Express APIs behind volunteer and event workflows.',
  },
];

export const projects: Project[] = [
  {
    id: 'matchmarket',
    tagline: 'Two sided marketplace',
    title: 'MatchMarket',
    categories: ['software'],
    description: 'Android two sided marketplace that matches buyer requests with seller listings by location.',
    sections: [
      {
        heading: 'The app',
        points: [
          'Two sided Android marketplace: buyers post requests, sellers post listings, and the app matches them',
          'Designed up front with use case and sequence diagrams for the request and listing flows',
          'Built in Kotlin with Jetpack Compose',
        ],
      },
      {
        heading: 'Backend',
        points: [
          'Express and TypeScript REST API with 39 endpoints',
          'Matching feed that pairs buyer requests with seller listings',
          'Location based matching through OpenRouteService',
          'MongoDB for storage',
        ],
      },
      {
        heading: 'Security & deployment',
        points: [
          'Google Sign-In through Android Credential Manager, verified on the backend',
          'JWTs rotated every 15 minutes',
          'Runs in Docker on a Google Cloud VM behind HTTPS',
          'CI fails any deploy whose TLS certificate does not match',
        ],
      },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'TypeScript', 'Express', 'MongoDB', 'Docker', 'GCP', 'OpenRouteService'],
    thumbnail: '/photos/projects/matchmarket/matchmarket_card_v2.svg',
    images: ['/photos/projects/matchmarket/matchmarket_card_v2.svg'],
    screenshots: [],
    github: 'https://github.com/m1lun/m1skeletonProject',
  },
  {
    id: 'headcount',
    tagline: 'Club event platform',
    title: 'Headcount',
    categories: ['software'],
    description: 'Event platform for university clubs handling RSVPs, check-ins, and dues.',
    sections: [
      {
        heading: 'The platform',
        points: [
          'Event platform for university clubs: RSVPs, check-ins, and membership dues',
          'React and TypeScript front end on an Express API and PostgreSQL',
        ],
      },
      {
        heading: 'Data & storage',
        points: [
          'Logos, event banners, and CSV exports stored in and served from AWS S3',
          'Check-ins and RSVPs run in PostgreSQL transactions with row level locking',
          'No double check-ins and no overbooking, even when requests arrive at once',
        ],
      },
      {
        heading: 'Testing',
        points: [
          'GitHub Actions runs the suite in Docker on every push',
          '96 Vitest tests against real PostgreSQL and S3 services',
          '95% code coverage',
        ],
      },
    ],
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'AWS S3', 'Docker', 'Vitest', 'GitHub Actions'],
    thumbnail: '/photos/projects/headcount/headcount_card_v2.svg',
    images: ['/photos/projects/headcount/headcount_card_v2.svg'],
    screenshots: [],
    github: 'https://github.com/Bwong99/Headcount',
  },
  {
    id: 'go2-navigation',
    tagline: 'Quadruped autonomy',
    title: 'go2_navigation Package',
    categories: ['hardware', 'software'],
    description: 'ROS2 navigation package for a Unitree Go2 quadruped with a 3D LiDAR and onboard compute payload.',
    sections: [
      {
        heading: 'The robot',
        points: [
          'ROS2 navigation package for a Unitree Go2 quadruped',
          'Custom payload rig: spinning 3D LiDAR, camera, and onboard compute on a machined aluminum frame',
        ],
      },
      {
        heading: 'Navigation',
        points: [
          'Point clouds and odometry feed online mapping, obstacle avoidance, and goal directed path following',
          'SLAM builds an occupancy grid that the planner traces a path through',
        ],
      },
      {
        heading: 'Simulation',
        points: [
          'Robot and payload modeled in URDF',
          'Tested in Gazebo worlds from an industrial plant to forested terrain before running on hardware',
        ],
      },
      {
        heading: 'Tooling',
        points: [
          'Launch files bring up the sensor drivers, TF tree, and RViz2 together',
          'Parameters split into YAML so the same stack runs in simulation or on the robot',
        ],
      },
    ],
    technologies: ['ROS2', 'Nav2', 'SLAM', 'Gazebo', 'LiDAR', 'URDF', 'Unitree Go2'],
    thumbnail: '/photos/projects/go2-navigation/go2_thumb.png',
    images: [
      '/photos/projects/go2-navigation/go2_1.jpeg',
      '/photos/projects/go2-navigation/go2_3.png',
      '/photos/projects/go2-navigation/go2_4.png',
      '/photos/projects/go2-navigation/go2_5.png',
      '/photos/projects/go2-navigation/go2_sim3.png',
      '/photos/projects/go2-navigation/go2_sim1.png',
      '/photos/projects/go2-navigation/go2_sim2.png',
      '/photos/projects/go2-navigation/go2_sim4.png',
      '/photos/projects/go2-navigation/go2_sim5.png',
    ],
    screenshots: [
      '/photos/projects/go2-navigation/go2_1.jpeg',
      '/photos/projects/go2-navigation/go2_3.png',
      '/photos/projects/go2-navigation/go2_4.png',
      '/photos/projects/go2-navigation/go2_5.png',
      '/photos/projects/go2-navigation/go2_sim3.png',
      '/photos/projects/go2-navigation/go2_sim1.png',
      '/photos/projects/go2-navigation/go2_sim2.png',
      '/photos/projects/go2-navigation/go2_sim4.png',
      '/photos/projects/go2-navigation/go2_sim5.png',
    ],
  },
  {
    id: '6dof-arm',
    tagline: 'Robot barista arm',
    title: '6DoF Arm',
    categories: ['hardware', 'software'],
    description: 'ROS2 based control and vision stack for a 6 degree of freedom robotic arm.',
    context: 'UBC Open Robotics',
    sections: [
      {
        heading: 'The project',
        points: [
          'Six degree of freedom robotic arm built to operate autonomously as a barista',
        ],
      },
      {
        heading: 'Software',
        points: [
          'ROS2 stack for motion planning, simulation, and computer vision',
          'Perception and planning subsystems turn camera input into coordinated arm motion',
          'Written in Python and containerized with Docker',
        ],
      },
      {
        heading: 'Hardware',
        points: [
          'Motor control and kinematics on the arm itself',
        ],
      },
    ],
    technologies: ['ROS2', 'Python', 'Docker', 'Computer Vision', 'Motion Planning', 'Robotics'],
    thumbnail: '/photos/projects/6dof-arm/6dofarm1.png',
    images: [
      '/photos/projects/6dof-arm/6dofarm1.png',
      '/photos/projects/6dof-arm/6dofarm2.png',
      '/photos/projects/6dof-arm/6dofarm3.png',
    ],
    screenshots: [
      '/photos/projects/6dof-arm/6dofarm1.png',
      '/photos/projects/6dof-arm/6dofarm2.png',
      '/photos/projects/6dof-arm/6dofarm3.png',
    ],
    github: 'https://github.com/UBC-OpenRobotics/6DoF-Arm',
  },
  {
    id: 'mobile-arm',
    tagline: 'Mobile manipulator sim',
    title: 'Dynamixel Based Mobile Arm',
    categories: ['hardware', 'software'],
    description: 'ROS2 + Gazebo simulation of a differential drive mobile manipulator with a 5 DOF arm, gripper, camera, lidar, and IMU.',
    sections: [
      {
        heading: 'The robot',
        points: [
          'Differential drive base carrying a 5 DOF arm and a parallel jaw gripper',
          'Forward camera, 2D lidar, and IMU on a sensor mast',
          '22 links and 9 actuated joints',
        ],
      },
      {
        heading: 'Modeling',
        points: [
          'Modular URDF/Xacro, with visual detail built from stacked primitives per link',
          'Physics simulated in Gazebo',
        ],
      },
      {
        heading: 'Control',
        points: [
          'Each arm and gripper joint runs a JointPositionController with tuned PD gains',
          'Joints exposed to ROS2 as /arm/<joint>/cmd_pos through ros_gz_bridge',
          'Base driven by the diff drive plugin over /cmd_vel',
          'Odometry, joint states, camera, lidar, and IMU stream back to ROS2',
        ],
      },
      {
        heading: 'Visualization',
        points: [
          'robot_state_publisher keeps the TF tree from the processed URDF',
          'RViz2 for visualization',
        ],
      },
    ],
    technologies: ['ROS2', 'Gazebo', 'URDF/Xacro', 'RViz2', 'Robotics', 'Simulation'],
    thumbnail: '/photos/projects/mobile-arm/robot_arm_1.png',
    images: [
      '/photos/projects/mobile-arm/robot_arm_1.png',
    ],
    screenshots: [
      '/photos/projects/mobile-arm/robot_arm_1.png',
    ],
    github: 'https://github.com/Bwong99/Dynamixel-Based-Mobile-Arm',
  },
  {
    id: 'tron-light-cycle',
    tagline: 'FPGA game in C',
    title: 'Tron VGA Light Cycle',
    categories: ['hardware'],
    description: 'Tron style light cycle game in C on a DE10-Lite FPGA with VGA output.',
    sections: [
      {
        heading: 'The game',
        points: [
          'Tron style light cycle game written in C',
          'Targets the DE10-Lite FPGA board, portable to the DE1-SoC and CPUlator',
          'Built from scratch with no game engine or libraries',
        ],
      },
      {
        heading: 'Hardware I/O',
        points: [
          'Renders the arena and trails straight to a VGA pixel buffer through memory mapped I/O',
          'Push buttons for player input',
          'LEDs and seven segment HEX displays show the game state',
          'Hardware timer paces the game loop',
        ],
      },
    ],
    technologies: ['C', 'VGA', 'DE10-Lite FPGA', 'Memory Mapped I/O', 'Embedded Systems'],
    thumbnail: '/photos/projects/tron/vgaTron3.png',
    images: [
      '/photos/projects/tron/vgaTron3.png',
    ],
    screenshots: [
      '/photos/projects/tron/vgaTron3.png',
    ],
    github: 'https://github.com/Bwong99/Tron-VGA-Light-Cycle',
  },
  {
    id: 'risc-v-cpu',
    tagline: 'Single cycle processor',
    title: 'RISC-V CPU',
    categories: ['hardware'],
    description: 'Synthesizable RV32I single cycle CPU implemented in SystemVerilog.',
    sections: [
      {
        heading: 'The CPU',
        points: [
          'Synthesizable RV32I single cycle CPU in SystemVerilog',
          'Datapath, control logic, ALU, register file, and memory interface',
        ],
      },
      {
        heading: 'Instruction set',
        points: [
          'ISA compliant control for R, I, S, B, U, and J instructions',
          'Branch and jump handling with PC control',
        ],
      },
      {
        heading: 'Verification',
        points: [
          'Self checking SystemVerilog testbenches',
          'Waveform based debugging in ModelSim',
        ],
      },
    ],
    technologies: ['SystemVerilog', 'ModelSim', 'RISC-V', 'RTL Design', 'FPGA'],
    thumbnail: '/photos/projects/riscvcpu/risc-V%20cpu1.jpg',
    images: [
      '/photos/projects/riscvcpu/risc-V%20cpu1.jpg',
    ],
    screenshots: [],
  },
  {
    id: 'robotics-dashboard',
    tagline: 'Live telemetry client',
    title: 'Real Time Robotics Dashboard',
    categories: ['hardware', 'software'],
    description: 'C++/wxWidgets dashboard with live sensor telemetry streamed over TCP.',
    context: 'UBC Open Robotics',
    sections: [
      {
        heading: 'The dashboard',
        points: [
          'Real time C++/wxWidgets dashboard with live sensor telemetry streamed over TCP',
          'Dynamic sensor control panel, responsive splitter layout, and real time graphs',
        ],
      },
      {
        heading: 'Under the hood',
        points: [
          'Multithreaded TCP client with JSON parsing',
          'Observer pattern for a thread safe pipeline from data to UI',
          'Replaced 10 hardcoded sensors with data driven C++ classes, so new sensor types come in from the TCP JSON',
        ],
      },
      {
        heading: 'Testing',
        points: [
          'Runs against real ESP32 hardware or a Python mock server',
          'ESP32 Wi-Fi telemetry tested across 100+ scenarios and 20+ sensor types',
        ],
      },
    ],
    technologies: ['C++', 'wxWidgets', 'TCP/IP', 'JSON', 'Multithreading', 'Figma'],
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
  title: 'Computer Engineering Student & Software Systems Developer',
  bio: `I'm going into my third year as a Computer Engineering student at the University of British Columbia, specializing in building software systems. I have experience in building software for my internship at METI and my work on the UBC Open Robotics Design Team. Outside of technical experience, I was also a VolunTEEN Team Lead at Fraser Health for two years. In my free time I enjoy capturing the world through the lens of my camera.`,
  location: 'Vancouver, BC',
};

// Each project's own accent (Read more button, project page highlights).
// Light, saturated tones that all read well with dark text; no pinks.
const PROJECT_ACCENTS = [
  '#7db8ff', // blue
  '#6fd3a8', // mint
  '#f7a65b', // orange
  '#b39cff', // lavender
  '#5fd1d6', // teal
  '#e8c45f', // gold
  '#a3d65c', // lime
  '#8ccff0', // sky
];

/** A project's accent colour, fixed by its place in the list so it never changes between visits. */
export const projectAccent = (id: string) => {
  const index = Math.max(0, projects.findIndex((p) => p.id === id));
  return PROJECT_ACCENTS[index % PROJECT_ACCENTS.length];
};
