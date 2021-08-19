import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import mainRoutes from "../routes/main.route";
import tasksRoutes from "../routes/tasks.route";

export class ConfigServer {
  app: Application;
  port: number = 4000;

  constructor() {
    this.app = express();
    this.config();
  }

  private config() {
    this.app.set("port", process.env.PORT || this.port);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors({ origin: "*" }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes() {
    this.app.use(mainRoutes);
    this.app.use("/tasks", tasksRoutes);
  }

  public start() {
    this.middlewares();
    this.routes();
    this.app.listen(this.app.get("port"));
  }
}
