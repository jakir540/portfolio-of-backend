import express from "express";
import { createProjectcontrollers } from "./project.controllers";
const router = express.Router();

// for create project route

router.post("/project", createProjectcontrollers.createProject);
router.get("/allProject", createProjectcontrollers.getAllProjects);
router.get("/project/:projectId", createProjectcontrollers.getProjectById);
router.patch("/project/:projectId", createProjectcontrollers.updateProjectById);

export const ProjectRoutes = router;
