import express from "express";
import { createProjectcontrollers } from "./project.controllers";
const router = express.Router();

// for create project route

router.post("/project", createProjectcontrollers.createProject);

export const ProjectRoutes = router;
