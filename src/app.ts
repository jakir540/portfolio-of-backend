import express, { Request, Response } from "express";
import router from "./app/routes";
const app = express();
app.use(express.json());

// application routes
app.use("/api", router);

app.post("/", (req: Request, res: Response) => {
  res.send("Hello full stack developer!");
});

export default app;
