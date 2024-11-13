import express from "express";
import { createProjectcontrollers } from "./project.controllers";
const router = express.Router();

// for create project route

router.post("/create-project", createProjectcontrollers.createProject);
router.get("/allProject", createProjectcontrollers.getAllProjects);
router.get("/:projectId", createProjectcontrollers.getProjectById);
router.patch("/:projectId", createProjectcontrollers.updateProjectById);

export const ProjectRoutes = router;
