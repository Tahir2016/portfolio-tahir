import { AboutInfo } from "@/utils/types";

export const aboutData: AboutInfo = {
  name: "Tahir Pathan",
  role: "Full Stack Developer",
  greeting: "Hi, I'm Tahir Pathan",
  subheading: "building AI-powered applications.",
  intro:
    "I'm a Full Stack Developer who enjoys turning complex requirements into reliable, production-ready web applications. I work across the complete stack — from crafting responsive interfaces and building scalable backend services to integrating Generative AI, wiring up LLM-powered features and RAG pipelines, and designing agentic workflows that connect models to real tools and data.",
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
      category: "Generative AI",
      title: "Generative AI & LLM Integration",
      description:
        "Developing hands-on skills in LLM integrations, RAG pipelines, and agent workflows that connect models to tools.",
      tags: [
        "LLM Integrations",
        "RAG Pipelines",
        "AI Agents & Tool Calling",
        "LangChain",
        "LangGraph",
        "AI Workflow Orchestration",
      ],
    },
    {
      id: "04",
      category: "Frontend",
      title: "Modern Web Interfaces",
      description:
        "Creating responsive, maintainable interfaces with modern React-based technologies and a focus on clean user experiences.",
      tags: ["React.js", "Next.js", "TypeScript"],
    },
    {
      id: "05",
      category: "Data & Deployment",
      title: "Data to Production",
      description:
        "Working with application data and deployment workflows to take applications from development to production.",
      tags: ["PostgreSQL", "MongoDB", "Docker", "AWS"],
    },
  ],
};