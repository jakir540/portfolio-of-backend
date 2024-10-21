import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";

import { AuthRoutes } from "../modules/auth/auth.router";

const router = Router();

const modulesRoute = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
