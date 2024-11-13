import express from "express";
import { createBlogcontrollers } from "./blog.controllers";

const router = express.Router();

// for create project route

router.post("/create-blog", createBlogcontrollers.createBlog);
router.get("/AllBlog", createBlogcontrollers.getAllBlogs);
router.get("/singleBlog/:blogId", createBlogcontrollers.getBlogById);
router.patch("/updateBlog/:blogId", createBlogcontrollers.updateBlogById);

export const BlogsRoutes = router;
