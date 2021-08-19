import { Router } from "express";
import { TasksController } from "../controllers/tasks.controller";

const router = Router();
const controller = new TasksController();

router.get("/", controller.getAll);
router.post("/", controller.create);

router.get("/:id", controller.getOne);
router.delete("/:id", controller.delete);
router.put("/:id", controller.edit);

export default router;
