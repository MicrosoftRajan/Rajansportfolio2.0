import { Icons } from "@/components/icons";
import { Archivement, Certification, Experience, NavLink, Project, Skill } from "./types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Certification",
    href: "#certification",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    title: "Aviora",
    description:
      "By providing instant, dynamic answers, AI agents are now reportedly 20% more accurate than traditional websites in resolving user doubts.",
    technologies: ["Next.js", "TypeScript", "Supabase", "VapiAi", "schdnUi"],
    links: {
      video:"https://res.cloudinary.com/dp4mpfafe/video/upload/v1758819710/aviora_rjczgh.mp4",
      preview: "https://aviora-dl1q.vercel.app/",
      github: "https://github.com/MicrosoftRajan/Aviora",
      githubApi: "#",
    },
  },
  {
    title: "HaloTalk",
    description:
      "Our Application help people to connect to their loved ones and also learn new languages and design an algorithm that can suggest the friend who has similar native language and learning language",
    technologies: ["React.js", "JavaScript", "Node.js", "MongoDb", "Postman"],
    links: {
      video: "https://res.cloudinary.com/dp4mpfafe/video/upload/v1758821398/HaloTalk_z6p9ze.mp4",
      preview: "#",
      github: "#",
      githubApi: "#",
    },
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Java Trainee",
    company: "Techvanto Academy, remote",
    description:
      "Currently developing scalable cloud-based applications and microservices. Responsible for architecting solutions, code reviews, and mentoring junior developers in best practices.",
    period: "2024 June - 2024 Aug",
    technologies: ["Java", "SpringBoot", "AWS", "Kafka"],
  },
];

export const certificationData: Certification[] = [
  {
    ctitle: "AWS – Solutions Architecture Job Simulation",
    ccompany: "Forage",
    cdescription:
      "This NPTEL certification equipped me with a strong understanding of cloud fundamentals. I learned to apply core principles like virtualization, load balancing, and distributed systems to design scalable and elastic applications. My knowledge covers IaaS, PaaS, and SaaS models, along with cloud security, storage, and deployment strategies for building resilient cloud infrastructure.",
    cperiod: "Jan 2025 - May 2025",
    ctechnologies: [
      "AWS Cloud",
      "Solution Architecture",
      "Cloud Infrastructure",
      "S3",
      "EC2",
    ],
  },

    {
    ctitle: "NPTEL – Cloud Computing",
    ccompany: "NPTEL",
    cdescription:
      "Currently developing scalable cloud-based applications and microservices. Responsible for architecting solutions, code reviews, and mentoring junior developers in best practices.",
    cperiod: "July 2025",
    ctechnologies: [
      "Cloud Models (IaaS, PaaS, SaaS)",
      "Distributed System",
      "Load Balancing",
      "Deployment Model",
    ],
  },

      {
    ctitle: "C/C++ Data Structure",
    ccompany: "Udemy",
    cdescription:
      "I have learn C and C++ core concept and implement Data Structure from scratch",
    cperiod: "July 2025",
    ctechnologies: [
      "C++",
      "C",
      "Data Structure and Algorithm",
    ],
  },
];


export const ArchivementData: Archivement[] = [
  {
    atitle: "Smart India Hackathon - Runner-Up",
    adescription:
      "Secured the Runner-Up position at the Smart India Hackathon 2024, a national-level 36-hour coding competition. In a high-pressure environment, our team developed a scalable prototype to solve a real-world problem statement. I contributed to the backend logic and API integration, helping deliver a user-friendly and viable solution that earned praise from industry experts and government officials for its innovation and technical accuracy. ",
    aperiod: "2024 Sep",
    aexp:["Team Management", "Front-end Developer", "Problem Solving","Critical Thinking"]
  },

    {
    atitle: "Ranked Top 20 on InterviewBit in University",
    adescription:
      "Solved More than 200+ question of Data Structure and Algorithm in InterviewBit",
    aperiod: "Sep 2024 - Present",
    aexp:["Problem Solving", "Data Structure"]
  },

      {
    atitle: "Goldstar Badge in C++ on HackerRank",
    adescription:
      "solved more than 100+ C++ question on HackerRank Platform",
    aperiod: "Jan 2023 - Present",
    aexp:["C++", "Complex Problem Solving"]
  },
];

export const skillsData: Skill[] = [
  { name: "Sass", icon: <Icons.sass className="size-12" /> },
  { name: "Tailwind", icon: <Icons.tailwind className="size-12" /> },
  { name: "JavaScript", icon: <Icons.javascript className="size-12" /> },
  { name: "TypeScript", icon: <Icons.typescript className="size-12" /> },
  { name: "React", icon: <Icons.react className="size-12" /> },
  { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  { name: "Prisma", icon: <Icons.prisma className="size-12" /> },
  { name: "Docker", icon: <Icons.docker className="size-12" /> },
];
