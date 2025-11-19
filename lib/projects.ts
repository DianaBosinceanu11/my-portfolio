// lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  role: string;
  stack: string[];
  shortDescription: string;
  coverImage: string;
  listImage: string;
  overview: string;
  features: string[];
  gallery: { src: string; alt: string }[];
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "hirespark-smart-crm",
    title: "HireSpark – Smart Recruitment CRM",
    role: "Full Stack Developer",
    stack: ["Python", "FastAPI", "Vite", "React", "Tailwind", "CSS"],
    shortDescription:
      "A recruitment tool that automates hiring, uploads CVs & JDs with GDPR compliance, extracts data using AI, and manages candidates.",
    coverImage: "/projects/hirespark/cover.png",
    listImage: "/projects/hirespark/list.png",
    overview:
      "A full-stack recruitment tool to automate hiring. Upload CVs, extract data using AI, and manage candidates with GDPR compliance. Built with React (frontend) and FastAPI (backend). Includes smart summaries, SendGrid emails, and optional Gmail API support.",
    features: [
      "Responsive Design",
      "Store CV & JD",
      "Vector Embedding",
      "Auto-fill form with NLP & AI",
      "Smart Match suitable candidates",
      "Bulk email",
      "Send emails with Gmail API",
      "Manage Candidates, Clients, and Jobs",
      "Manage & Assign Roles to Recruiters",
    ],
    gallery: [
      { src: "/projects/hirespark/screen-1.png", alt: "Candidate matching screen" },
      { src: "/projects/hirespark/screen-2.png", alt: "Candidate profile screen" },
      { src: "/projects/hirespark/screen-3.png", alt: "Dashboard and stats" },
    ],
    liveUrl: "https://hirespark-demo-url.com",
    codeUrl: "https://github.com/DianaBosinceanu11/hirespark",
  },
  {
    slug: "angeloptic-optician",
    title: "AngelOptic – Optician Website",
    role: "UI/UX & Frontend",
    stack: ["React", "Tailwind", "CSS"],
    shortDescription:
      "A clean, accessible website layout tailored for optometry services, with a contact and booking page featuring a large interactive calendar.",
    coverImage: "/projects/angeloptic/cover.png",
    listImage: "/projects/angeloptic/cover-details.png",
    overview:
      "AngelOptic is a modern, accessible website concept for an optician brand. The layout focuses on clarity, accessibility and easy appointment booking.",
    features: [
      "Accessible layout",
      "Clear information architecture",
      "Homepage focused on services",
      "Booking page with calendar",
      "Responsive design",
    ],
    gallery: [
      { src: "/projects/angeloptic/screen-1.png", alt: "Homepage layout" },
      { src: "/projects/angeloptic/screen-2.png", alt: "Services page" },
      { src: "/projects/angeloptic/screen-3.png", alt: "Booking calendar" },
    ],
    liveUrl: "https://angeloptic-demo-url.com",
  },
];
