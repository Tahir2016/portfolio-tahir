import type {
  ArchitectureLayer,
  CapabilityHighlight,
  CurrentRole,
  ExperienceSummaryItem,
  ProfessionalProject,
  Responsibility,
} from "@/utils/types";

export const currentRole: CurrentRole = {
  label: "Current Role",
  role: "Software Developer",
  company: "Broadstairs IT Solutions",
  location: "Pune, India",
  tenure: "3+ Years",
  description:
    "Working as a Full Stack Developer, contributing to the development of web applications from concept to deployment. Focused on building scalable, maintainable, and high-performance solutions for real-world users.",
};

export const capabilityHighlights: CapabilityHighlight[] = [
  { id: "01", label: "Full Stack Development", icon: "layers" },
  { id: "02", label: "Scalable Systems", icon: "gauge" },
  { id: "03", label: "Real World Products", icon: "rocket" },
  { id: "04", label: "Clean & Maintainable Architecture", icon: "sparkles" },
];

export const primaryTechnologies: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "NestJS",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "JWT",
  "CI/CD",
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    label: "Frontend",
    accent: "cyan",
    lines: ["React.js / Next.js"],
  },
  {
    label: "Backend",
    accent: "violet",
    lines: ["Node.js / Express.js", "NestJS / Python / Django / FastAPI"],
  },
  {
    label: "Database",
    accent: "blue",
    lines: ["PostgreSQL / MongoDB / Redis"],
  },
  {
    label: "Deployment",
    accent: "green",
    lines: ["Docker / AWS / CI/CD"],
  },
];

export const responsibilities: Responsibility[] = [
  {
    number: "01",
    title: "Full Stack Development",
    icon: "layers",
    description:
      "Building and maintaining modern web applications using React, Next.js, Node.js, Express.js, NestJS, Python and Django.",
  },
  {
    number: "02",
    title: "Backend & APIs",
    icon: "server",
    description:
      "Designing and developing scalable backend services, authentication systems and robust APIs using Express.js, NestJS, Django and FastAPI.",
  },
  {
    number: "03",
    title: "Data & Infrastructure",
    icon: "database",
    description:
      "Working with PostgreSQL, MongoDB and Redis, writing efficient queries and deploying applications using Docker and cloud platforms.",
  },
  {
    number: "04",
    title: "Collaboration & Delivery",
    icon: "users",
    description:
      "Working with cross-functional teams to deliver features from planning to production, with a focus on maintainable code and real-world impact.",
  },
];

export const professionalProjects: ProfessionalProject[] = [
  {
    number: "01",
    title: "Community Collaborative Application – Ummah Book",
    purpose:
      "A community-focused application that helps members stay connected with important announcements, event updates, prayer timings, and nearby Masjids, with location-based discovery to help users find relevant Masjid information around them.",
    features: [
      "Announcements",
      "Event updates",
      "Prayer timings",
      "Nearby Masjid discovery",
      "Search & filtering",
      "Location-based updates",
    ],
    stack: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    accent: "blue",
    icon: "users",
  },
  {
    number: "02",
    title: "Turf Management Application",
    purpose:
      "A platform designed for turf owners and players to manage bookings, users, scheduling, and availability. It helps organize turf reservations through availability checks and time-slot management while reducing scheduling conflicts and double-bookings.",
    features: [
      "User management",
      "Turf management",
      "Booking management",
      "Scheduling",
      "Availability checks",
      "Time-slot management",
      "Double-booking prevention",
    ],
    stack: ["Next.js", "TypeScript", "Python (FastAPI)", "PostgreSQL"],
    accent: "green",
    icon: "calendar-clock",
  },
  {
    number: "03",
    title: "Coaching Management System",
    purpose:
      "A platform designed for coaching centres to manage students, teachers, courses, enrollment, syllabus tracking, attendance, scheduling, and communication in one place.",
    features: [
      "Student management",
      "Teacher management",
      "Enrollment",
      "Syllabus tracking",
      "Attendance",
      "Course management",
      "Scheduling",
      "Communication",
    ],
    stack: [
      "React.js",
      "Material UI",
      "Redux",
      "Node.js",
      "NestJS",
      "MongoDB",
      "Postman",
    ],
    accent: "yellow",
    icon: "graduation-cap",
  },
  {
    number: "04",
    title: "Memon ID – Social Community Portal",
    purpose:
      "A social community platform designed to help members manage their community profiles and stay organized around events, reminders, and important dates through an integrated calendar experience.",
    features: [
      "Community profiles",
      "Events",
      "Reminders",
      "Date management",
      "Custom calendar",
      "Member management",
    ],
    stack: ["React.js", "Node.js (Express.js)", "MongoDB"],
    accent: "violet",
    icon: "calendar-days",
  },
];

export const experienceSummary: ExperienceSummaryItem[] = [
  {
    label: "Production Experience",
    text: "3+ years of professional software development",
  },
  {
    label: "Real World Products",
    text: "Worked on production applications used by real users",
  },
  {
    label: "Modern Tech Stack",
    text: "Frontend, backend, databases, APIs and deployment",
  },
  {
    label: "Continuous Growth",
    text: "Always learning and adapting to new technologies",
  },
];
