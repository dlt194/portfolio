export type AccreditationType =
  | "Certification"
  | "Diploma"
  | "Course"
  | "Badge";

export type Accreditation = {
  id: string;
  title: string;
  issuer: string;
  type: AccreditationType;
  dateIssued?: string; // YYYY-MM
  expires?: string;
  credentialId?: string;
  url?: string;
  skills?: string[];
  featured?: boolean;
};

export const accreditations: Accreditation[] = [
  {
    id: "aws-certified-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Certification",
    dateIssued: "2026-01",
    url: "http://link.dlt.me.uk/ULnN2",
    skills: ["AWS", "Cloud Fundamentals", "IAM", "Billing"],
    featured: true,
  },
  {
    id: "azure-fundamentals-az900",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    type: "Certification",
    dateIssued: "2026-01",
    url: "http://link.dlt.me.uk/evqJN",
    skills: ["Azure", "Cloud Fundamentals", "Identity", "Networking"],
    featured: true,
  },
  {
    id: "diploma-coding-career-program",
    title: "Diploma – Coding Career Program",
    issuer: "IT Online Learning Academy",
    type: "Diploma",
    dateIssued: "2025-01",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Python",
      "PHP",
    ],
    featured: true,
    url: "/diploma",
  },
  {
    id: "python-essentials",
    title: "Python Essentials",
    issuer: "IT Online Learning Academy",
    type: "Course",
    dateIssued: "2025-11",
    url: "http://link.dlt.me.uk/xweGZ",
    skills: ["Python", "Data Structures", "Scripting"],
  },
  {
    id: "sql-essentials",
    title: "Structured Query Language (SQL) Essentials",
    issuer: "IT Online Learning Academy",
    type: "Course",
    dateIssued: "2025-10",
    url: "https://link.dlt.me.uk/z4BiI",
    skills: ["SQL", "Relational Databases", "Queries"],
  },
  {
    id: "database-essentials",
    title: "Database Essentials",
    issuer: "IT Online Learning Academy",
    type: "Course",
    dateIssued: "2025-09",
    url: "https://link.dlt.me.uk/lV8Y3",
    skills: ["Databases", "Data Modelling", "Relational Design"],
  },
  {
    id: "react-essentials",
    title: "React Essentials",
    issuer: "IT Online Learning Academy",
    type: "Course",
    dateIssued: "2025-09",
    url: "https://link.dlt.me.uk/eN2jY",
    skills: ["React", "Hooks", "Component Architecture"],
  },
  {
    id: "javascript-essentials",
    title: "JavaScript Essentials",
    issuer: "IT Online Learning Academy",
    type: "Course",
    dateIssued: "2025-08",
    url: "https://link.dlt.me.uk/CTg7c",
    skills: ["JavaScript", "ES6+", "Async Programming"],
  },
  {
    id: "fcc-frontend-libraries",
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    type: "Certification",
    dateIssued: "2024-11",
    url: "https://link.dlt.me.uk/xg1op",
    skills: ["React", "Redux", "Frontend Architecture"],
  },
  {
    id: "fcc-backend-apis",
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    type: "Certification",
    dateIssued: "2024-10",
    url: "https://link.dlt.me.uk/EtCsf",
    skills: ["Node.js", "APIs", "Authentication"],
  },
];
