import { Project } from "./types";

export const DATA = {
  profiles: {
    recruiter: {
      categories: ["Latest Work", "Telco", "Tech", "FMCG"],
      role: "brandmarketing",
    },
    developer: {
      categories: ["Latest Work", "Tech", "Education"],
      role: "creative",
    },
    stalker: {
      categories: ["Latest Work", "Beauty", "Education"],
      role: "creative",
    },
    adventure: {
      categories: ["Latest Work", "Telco", "Tech", "Education"],
      role: "brandmarketing",
    },
  },
  projects: [
    {
      id: "p1",
      title: "Telco App Redesign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      techUsed: "React, Figma",
      image: { url: "https://picsum.photos/seed/telco/400/300" },
      category: "Telco",
      roles: ["brandmarketing", "creative"],
      details: {
        year: "2023",
        duration: "3 months",
        rating: "9.5",
        starring: "User Experience Team",
        createdBy: "Design Lead",
        genre: "Mobile App",
        gallery: [
          "https://picsum.photos/seed/telco1/800/600",
          "https://picsum.photos/seed/telco2/800/600",
        ],
        videos: [],
      },
    },
    {
      id: "p2",
      title: "Beauty Brand Campaign",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      techUsed: "Adobe Suite, Social Media",
      image: { url: "https://picsum.photos/seed/beauty/400/300" },
      category: "Beauty",
      roles: ["creative"],
      details: {
        year: "2022",
        duration: "1 month",
        rating: "9.0",
        starring: "Creative Team",
        createdBy: "Creative Director",
        genre: "Marketing",
        gallery: ["https://picsum.photos/seed/beauty1/800/600"],
        videos: [],
      },
    },
    {
      id: "p3",
      title: "Cloud Infrastructure Tech",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      techUsed: "AWS, Terraform",
      image: { url: "https://picsum.photos/seed/tech/400/300" },
      category: "Tech",
      roles: ["brandmarketing"],
      details: {
        year: "2023",
        duration: "6 months",
        rating: "9.8",
        starring: "DevOps Team",
        createdBy: "CTO",
        genre: "Infrastructure",
        gallery: [],
        videos: [],
      },
    },
    {
      id: "p4",
      title: "FMCG E-commerce Strategy",
      description:
        "Implementing a new e-commerce strategy for a global FMCG brand.",
      techUsed: "Shopify, Google Analytics",
      image: { url: "https://picsum.photos/seed/fmcg/400/300" },
      category: "FMCG",
      roles: ["brandmarketing"],
      details: {
        year: "2023",
        duration: "4 months",
        rating: "9.2",
        starring: "E-commerce Team",
        createdBy: "Marketing Manager",
        genre: "Strategy",
        gallery: [],
        videos: [],
      },
    },
    {
      id: "p5",
      title: "Education Platform",
      description: "Building a new learning management system for schools.",
      techUsed: "Next.js, Tailwind, PostgreSQL",
      image: { url: "https://picsum.photos/seed/edu/400/300" },
      category: "Education",
      roles: ["creative", "brandmarketing"],
      details: {
        year: "2024",
        duration: "8 months",
        rating: "9.7",
        starring: "Engineering Team",
        createdBy: "Product Owner",
        genre: "Platform",
        gallery: [],
        videos: [],
      },
    },
  ],
};
