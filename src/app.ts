import express, { Request, Response } from "express";
import router from "./app/routes";
const app = express();

// application routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello full stack developer!");
});

export default app;
