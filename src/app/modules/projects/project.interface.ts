// project.interface.ts

export interface IProject {
  id: string; // Unique identifier for each project
  title: string; // Title of the project
  description: string; // Brief description of the project
  technologies: string[]; // List of technologies used (e.g., React, Node.js, MongoDB, etc.)
  liveLink: string; // Link to the live project (if available)
  repositoryLink: string; // GitHub or GitLab repository link for the project
  image: string; // URL or path to a project image or screenshot
  createdAt: Date; // Date the project was created
  updatedAt: Date; // Date the project was last updated (if applicable)
  category: "Web App" | "Mobile App" | "Tool" | "Other"; // Category of the project
  status: "Completed" | "In Progress" | "On Hold"; // Status of the project
  features: string[]; // List of key features or highlights of the project
  role: "Frontend" | "Backend" | "Full Stack" | "UI/UX"; // Your role in the project
}
