import express from "express";
import { createBlogcontrollers } from "./blog.controllers";

const router = express.Router();

// for create project route

router.post("/blog", createBlogcontrollers.createBlog);
router.get("/AllBlog", createBlogcontrollers.getAllBlogs);

export const BlogsRoutes = router;
