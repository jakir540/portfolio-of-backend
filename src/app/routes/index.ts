import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";

import { AuthRoutes } from "../modules/auth/auth.router";
import { ProjectRoutes } from "../modules/projects/project.route";
import { BlogsRoutes } from "../modules/blogs/blog.route";

const router = Router();

const modulesRoute = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/create",
    route: ProjectRoutes,
  },
  {
    path: "/create",
    route: BlogsRoutes,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
