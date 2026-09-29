import { AboutInfo } from "@/utils/types";

export const aboutData: AboutInfo = {
  name: "Tahir Pathan",
  role: "Full Stack Developer",
  greeting: "Hi, I'm Tahir Pathan.",
  subheading: "building production-ready web applications.",
  intro:
    "I'm a Full Stack Developer who enjoys turning complex requirements into reliable web applications. I work across the complete stack — from crafting responsive interfaces and building scalable backend services to managing data and deploying applications to the cloud.",
  capabilities: [
    {
      id: "01",
      category: "Full Stack",
      title: "End-to-End Development",
      description:
        "Building complete web applications by connecting the frontend, backend, data, and deployment into one reliable product.",
      tags: ["React.js", "Next.js", "Node.js", "Python"],
    },
    {
      id: "02",
      category: "Backend",
      title: "APIs & Backend Services",
      description:
        "Developing REST APIs and backend services that power real-world applications and connect frontend experiences with reliable business logic.",
      tags: ["Node.js", "NestJS", "Express.js", "FastAPI", "Django"],
    },
    {
      id: "03",
      category: "Frontend",
      title: "Modern Web Interfaces",
      description:
        "Creating responsive, maintainable interfaces with modern React-based technologies and a focus on clean user experiences.",
      tags: ["React.js", "Next.js", "TypeScript"],
    },
    {
      id: "04",
      category: "Data & Deployment",
      title: "Data to Production",
      description:
        "Working with application data and deployment workflows to take applications from development to production.",
      tags: ["PostgreSQL", "MongoDB", "Docker", "AWS"],
    },
  ],
};