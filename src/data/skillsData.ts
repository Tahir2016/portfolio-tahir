export type SkillAccent = "cyan" | "violet" | "blue" | "green";

export type MarqueeDirection = "right-to-left" | "left-to-right";

export interface SkillNestedDetail {
  label: string;
  detail: string;
}

export interface SkillGroupData {
  number: string;
  title: string;
  technologies: string[];
  direction: MarqueeDirection;
  accent: SkillAccent;
  nested?: SkillNestedDetail;
}

export const skillsData: SkillGroupData[] = [
  {
    number: "01",
    title: "Frontend",
    direction: "right-to-left",
    accent: "cyan",
    technologies: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "shadcn/ui",
    ],
  },
  {
    number: "02",
    title: "Backend",
    direction: "left-to-right",
    accent: "violet",
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
    ],
  },
  {
    number: "03",
    title: "Databases & Cloud",
    direction: "right-to-left",
    accent: "blue",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Firebase",
      "Vercel",
      "Render",
      "Neon",
    ],
    nested: {
      label: "AWS",
      detail: "EC2 · S3 · Lambda · API Gateway · CloudWatch",
    },
  },
  {
    number: "04",
    title: "Engineering",
    direction: "left-to-right",
    accent: "green",
    technologies: [
      "JWT Authentication & Authorization",
      "Swagger",
      "Postman",
      "Zod",
      "Microservices",
    ],
  },
];