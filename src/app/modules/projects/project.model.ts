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
  },
  technologies: {
    type: [String], // Array of strings
  },
  liveLink: {
    type: String,
    required: false, // Not all projects might have a live link
  },
  repositoryLink: {
    type: String,
  },
  image: {
    type: String,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now, // Automatically set the creation date to the current date
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now, // Automatically set the last updated date to the current date
  // },
  category: {
    type: String,
    enum: ["Web App", "Mobile App", "Tool", "Other"], // Allowed values
  },
  status: {
    type: String,
    enum: ["Completed", "In Progress", "On Hold"], // Allowed values
  },
  features: {
    type: [String], // Array of strings
  },
  role: {
    type: String,
    enum: ["Frontend", "Backend", "Full Stack", "UI/UX"], // Allowed values
  },
});

const Project = model<TProject>("Project", projectSchema);
export default Project;
