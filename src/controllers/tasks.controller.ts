import { Request, Response } from "express";
import { Task } from "../models/task.model";

export class TasksController {
  constructor() {}

  async create(req: Request, res: Response) {
    try {
      const newTask = await Task.create(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async edit(req: Request, res: Response) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.json(task)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const task = await Task.findById(req.params.id)
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const tasks = await Task.find()
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
