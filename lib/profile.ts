export interface EducationEntry {
  institute: string;
  qualification: string;
  dates: string;
  logo: string | null;
}

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "HTML", "CSS", "C", "Java"],
  },
  {
    category: "Core Concepts",
    items: ["Data Structures & Algorithms (DSA)", "OOP", "Distributed Systems", "SDLC", "Agile/Scrum"],
  },
  {
    category: "Data Engineering",
    items: ["Hadoop", "PySpark", "Apache Airflow", "Pandas", "NumPy", "Power BI", "Streamlit"],
  },
  {
    category: "Databases & Formats",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Snowflake", "JSON", "XML"],
  },
  {
    category: "Backend & Frontend",
    items: ["FastAPI", "Django", "Django Rest Framework", "Next.js", "React", "RESTful APIs", "Bootstrap"],
  },
  {
    category: "Cloud, DevOps & Tools",
    items: ["Docker", "AWS", "Linux", "Git", "GitHub Actions", "CI/CD", "Bash", "Vim"],
  },
];

export const education: EducationEntry[] = [
  {
    institute: "University of Sri Jayewardenepura - Faculty of Applied Sciences",
    qualification: "BSc. Information and Communication Technology",
    dates: "2023-2026",
    logo: "/images/institutes/usjp-logo.png",
  },
  {
    institute: "B/Dharmadutha College, Badulla",
    qualification: "Physical Science Stream (Combined Maths, ICT, Physics)",
    dates: "2017-2020",
    logo: "/images/institutes/dharmadutha-college.png",
  },
  {
    institute: "Am/Panama Maha Vidyalaya, Panama",
    qualification: "Primary and Secondary Education",
    dates: "2006-2016",
    logo: "/images/institutes/panama-mv-logo.png",
  },
];
