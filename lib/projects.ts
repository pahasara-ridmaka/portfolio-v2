export interface Project {
  slug: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string[];
  images: string[];
  techStack: string[];
  features: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  category: "DATA" | "WEB" | "SW";
}

export const projects: Project[] = [
  {
    slug: "visit-panama-srilanka",
    title: "visit PANAMA SRILANKA",
    date: "April - May 2026",
    shortDescription:
      "A full-stack tourism web app for Panama, Sri Lanka. Features interactive destination guides, secure user authentication, and tour booking workflows.",
    longDescription: [
      "visit PANAMA SRILANKA is a full-stack tourism web application built to showcase the coastal village of Panama in Sri Lanka's Eastern Province. The platform connects travelers with local destinations, experiences, and tour operators through an intuitive, modern interface.",
      "The application features interactive destination guides with rich media, a secure user authentication system, and a complete tour booking workflow. Users can browse destinations, view detailed information, and book tours directly through the platform.",
      "Built with a focus on both user experience and developer experience, the project demonstrates a clean separation of concerns between the frontend, backend, and data layers.",
    ],
    images: ["/images/projects/visit-panama-srilanka.png"],
    techStack: ["Next.js", "React", "PostgreSQL", "Authentication", "Tailwind CSS"],
    features: [
      "Interactive destination guides with rich media",
      "Secure user authentication and session management",
      "Complete tour booking workflow",
      "Responsive, mobile-first design",
      "Search and filter destinations",
    ],
    links: {
      github: "https://github.com/pahasara-ridmaka",
    },
    category: "WEB",
  },
  {
    slug: "london-airbnb-listings-analytics",
    title: "LONDON AIRBNB LISTINGS ANALYTICS",
    date: "March - April 2026",
    shortDescription:
      "A Python-based KDD pipeline analyzing 28,480 London Airbnb listings for ICT 333 1.5 (USJ). Features custom data extraction and cleansing scripts to ensure reproducibility and statistical integrity.",
    longDescription: [
      "This project implements a complete Knowledge Discovery in Databases (KDD) pipeline to analyze 28,480 London Airbnb listings. Built as part of the ICT 333 1.5 module at the University of Sri Jayewardenepura, the project demonstrates a rigorous, reproducible approach to data engineering.",
      "The pipeline includes custom data extraction scripts that pull raw listing data, followed by comprehensive data cleansing routines that handle missing values, outliers, and inconsistent records. Every step is documented and scripted to ensure full reproducibility.",
      "The analysis phase applies statistical methods to uncover patterns in pricing, availability, and listing characteristics across London's neighborhoods. Results are presented through clear visualizations and summary statistics that support data-driven conclusions.",
    ],
    images: ["/images/projects/london-airbnb-listings-analytics.png"],
    techStack: ["Python", "Pandas", "NumPy", "Jupyter", "Matplotlib", "Seaborn"],
    features: [
      "Custom data extraction scripts for reproducibility",
      "Comprehensive data cleansing and preprocessing",
      "Statistical analysis of 28,480 listings",
      "Visualizations of pricing and availability patterns",
      "Documented KDD pipeline methodology",
    ],
    links: {
      github: "https://github.com/pahasara-ridmaka",
    },
    category: "DATA",
  },
  {
    slug: "file-organizer",
    title: "File Organizer Utility",
    date: "March - April 2026",
    shortDescription:
      "An application that automatically sorts and organizes cluttered download folders into category-specific subfolders.",
    longDescription: [
      "The File Organizer Utility is a practical desktop application that tackles the common problem of cluttered download folders. It automatically scans a target directory and sorts files into category-specific subfolders based on their file type.",
      "The application intelligently categorizes files into groups such as documents, images, videos, audio, archives, and executables. Users can configure custom rules and categories to match their personal organization preferences.",
      "Built with a focus on simplicity and reliability, the utility includes safety features such as duplicate detection and dry-run mode, allowing users to preview changes before they are applied.",
    ],
    images: ["/images/projects/file-organizer.png"],
    techStack: ["Python", "Tkinter", "File System", "Automation"],
    features: [
      "Automatic file categorization by type",
      "Custom rules and category configuration",
      "Dry-run mode to preview changes",
      "Duplicate file detection",
      "Cross-platform support",
    ],
    links: {
      github: "https://github.com/pahasara-ridmaka",
    },
    category: "SW",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    date: "June - July 2026",
    shortDescription:
      "A minimal personal portfolio website built with Next.js, showcasing projects, certifications, and professional information.",
    longDescription: [
      "This personal portfolio website is a minimal, fast, and accessible showcase of my work, built with Next.js and Tailwind CSS. The site presents projects, certifications, and professional information in a clean, distraction-free layout.",
      "The design emphasizes typography and whitespace, with subtle animations powered by Framer Motion to create a polished, modern feel. The site is fully responsive and optimized for performance.",
      "This project also serves as a living example of my frontend development skills, demonstrating best practices in React, component architecture, and modern CSS.",
    ],
    images: ["/images/projects/personal-portfolio.png"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Minimal, typography-focused design",
      "Smooth page transitions with Framer Motion",
      "Fully responsive layout",
      "Project showcase with image galleries",
      "Optimized for performance and accessibility",
    ],
    links: {
      github: "https://github.com/pahasara-ridmaka/portfolio-v2",
      demo: "/",
    },
    category: "WEB",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}