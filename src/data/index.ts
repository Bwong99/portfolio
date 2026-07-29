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
    year: '2024 - 2028',
    description: 'Focused on digital design, embedded systems, and computer architecture. Active member of UBC Open Robotics.',
  },
];

export const projects: Project[] = [
  {
    id: 'go2-navigation',
    title: 'go2_navigation Package',
    category: 'hardware',
    description: 'ROS2 navigation package for a Unitree Go2 quadruped with a 3D LiDAR and onboard compute payload.',
    longDescription: 'Built go2_navigation, a ROS2 package that brings autonomous navigation to a Unitree Go2 quadruped. The robot carries a custom payload rig (a spinning 3D LiDAR, a camera, and an onboard compute box on a machined aluminum frame) feeding point clouds and odometry into the navigation stack for online mapping, obstacle avoidance, and goal directed path following. The robot and its payload are modeled in URDF and tested against Gazebo worlds ranging from an industrial plant to forested terrain, where SLAM builds an occupancy grid and the planner traces a path through it before anything runs on hardware. The package ships launch files that bring up the sensor drivers, TF tree, and RViz2 visualization together, with parameters split into YAML config so the same stack runs in simulation or on the physical robot.',
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
    title: '6DoF Arm',
    category: 'hardware',
    description: 'ROS2 based control and vision stack for a 6 degree of freedom robotic arm.',
    longDescription: 'Contributed to the 6DoF Arm project with UBC Open Robotics, a six degree of freedom robotic arm built to operate autonomously as a barista. The system spans both hardware and software: motor control and kinematics on the arm, paired with a ROS2 based software stack for motion planning, simulation, and computer vision. Built in Python and containerized with Docker for reproducible development and deployment, the project integrates perception and planning subsystems to translate camera input into coordinated arm motion.',
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
    title: 'Dynamixel Based Mobile Arm',
    category: 'hardware',
    description: 'ROS2 + Gazebo simulation of a differential drive mobile manipulator with a 5 DOF arm, gripper, camera, lidar, and IMU.',
    longDescription: 'Built a full ROS2 simulation stack for a mobile manipulator: a differential drive base carrying a 5 DOF arm (shoulder pan, shoulder lift, elbow, wrist pitch, wrist roll) and a parallel jaw gripper, with a forward camera, 2D lidar, and IMU on a sensor mast, totalling 22 links and 9 actuated joints. Modeled the robot in modular URDF/Xacro, building visual detail by stacking primitives per link rather than adding links, and simulated its physics in Gazebo. Each arm and gripper joint runs a Gazebo JointPositionController with tuned PD gains, exposed to ROS2 as /arm/<joint>/cmd_pos through ros_gz_bridge; the base is driven by the diff drive plugin over /cmd_vel, with odometry, joint states, camera, lidar, and IMU streaming back. robot_state_publisher maintains the TF transform tree from the processed URDF and RViz2 handles visualization.',
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
    title: 'Tron VGA Light Cycle',
    category: 'hardware',
    description: 'Tron style light cycle game in C on a DE10-Lite FPGA with VGA output.',
    longDescription: 'Built a Tron style light cycle game in C targeting the DE10-Lite FPGA board (portable to the DE1-SoC and CPUlator). Renders the arena and trailing light cycles directly to a VGA pixel buffer through memory mapped I/O, and reads player input from the onboard push buttons. Drives the LEDs and seven segment HEX displays for game state, and uses the hardware timer to pace the game loop. The result is a from scratch embedded implementation with no game engine or libraries.',
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
    title: 'RISC-V CPU',
    category: 'hardware',
    description: 'Synthesizable RV32I single cycle CPU implemented in SystemVerilog.',
    longDescription: 'Implemented a fully synthesizable RV32I single cycle CPU in SystemVerilog. Designed comprehensive datapath, control logic, ALU, register file, and memory interface. Built ISA compliant control and datapath logic for R/I/S/B/U/J instructions, including branch/jump handling and PC control. Verified correctness using self checking SystemVerilog testbenches and waveform based debugging in ModelSim.',
    technologies: ['SystemVerilog', 'ModelSim', 'RISC-V', 'RTL Design', 'FPGA'],
    thumbnail: '/photos/projects/riscvcpu/risc-V%20cpu1.jpg',
    images: [
      '/photos/projects/riscvcpu/risc-V%20cpu1.jpg',
    ],
    screenshots: [],
  },
  {
    id: 'robotics-dashboard',
    title: 'Real Time Robotics Dashboard',
    category: 'software',
    description: 'C++/wxWidgets dashboard with live sensor telemetry streamed over TCP.',
    longDescription: 'Designed and built a real time C++/wxWidgets dashboard for UBC Open Robotics with live sensor telemetry streamed over TCP sockets. Features an interactive UI with dynamic sensor control panel, responsive splitter layout, and real time graphing. Implemented a multithreaded TCP client with JSON parsing and an observer pattern for a thread safe pipeline from data to UI. Developed a dual mode system (ESP32 hardware + Python mock server) enabling production testing and development iteration without hardware dependencies.',
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
  title: 'Computer Engineering Student & Embedded Systems Developer',
  bio: `I'm going into my third year as a Computer Engineering student at the University of British Columbia, specializing in building software systems. I have experience in building software for my internship at METI and my work on the UBC Open Robotics Design Team. Outside of technical experience, I was also a VolunTEEN Team Lead at Fraser Health for two years. In my free time I enjoy capturing the world through the lens of my camera.`,
  location: 'Vancouver, BC',
};
