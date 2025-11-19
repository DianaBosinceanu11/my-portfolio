// lib/ui-design.ts

export type UiDesign = {
  slug: string;
  title: string;
  type: "Desktop" | "Mobile" | "Web App" | "Dashboard" | "Landing Page" | string;
  tools: string[];
  shortDescription: string;
  thumbnail: string; // imaginea folosită în grid
  fullPreview?: string; // imagine mare, opțional
  figmaUrl?: string;
};

export const uiDesigns: UiDesign[] = [
  {
    slug: "angeloptic-landing",
    title: "AngelOptic – Landing Page",
    type: "Landing Page",
    tools: ["Figma", "UI Design", "Design System"],
    shortDescription:
      "Clean and accessible layout for an optician brand, focused on clarity, trust and easy appointment booking.",
    thumbnail: "/ui/angeloptic/thumbnail.png",
    fullPreview: "/ui/angeloptic/full.png",
    figmaUrl: "https://www.figma.com/", // înlocuiești tu când ai linkul
  },
  {
    slug: "crm-dashboard-concept",
    title: "Recruitment CRM – Dashboard Concept",
    type: "Dashboard",
    tools: ["Figma", "UX Flows", "Design System"],
    shortDescription:
      "Dashboard concept for a recruitment CRM with candidate tracking, pipeline overview and clean data tables.",
    thumbnail: "/ui/crm-dashboard/thumbnail.png",
    fullPreview: "/ui/crm-dashboard/full.png",
    figmaUrl: "https://www.figma.com/", // optional
  },
  // adaugi aici ușor alte UI-uri
];
