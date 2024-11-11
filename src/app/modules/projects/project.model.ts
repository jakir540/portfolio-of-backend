// project.model.ts

import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>({
  id: {
    type: String,
    required: true,
    unique: true, // Ensures the id is unique for each project
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // Array of strings
    required: true,
  },
  liveLink: {
    type: String,
    required: false, // Not all projects might have a live link
  },
  repositoryLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date to the current date
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set the last updated date to the current date
    required: true,
  },
  category: {
    type: String,
    enum: ["Web App", "Mobile App", "Tool", "Other"], // Allowed values
    required: true,
  },
  status: {
    type: String,
    enum: ["Completed", "In Progress", "On Hold"], // Allowed values
    required: true,
  },
  features: {
    type: [String], // Array of strings
    required: true,
  },
  role: {
    type: String,
    enum: ["Frontend", "Backend", "Full Stack", "UI/UX"], // Allowed values
    required: true,
  },
});

// // Export the Mongoose model
// export default model<TProject>("Project", projectSchema);

const Project = model<TProject>("Project", projectSchema);
export default Project;
