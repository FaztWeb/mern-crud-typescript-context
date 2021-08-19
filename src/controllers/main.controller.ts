import { Request, Response } from "express";

export class MainController {
  constructor() {}

  init(req: Request, res: Response) {
    res.json({
      message: "Welcome to my API",
    });
  }
}
