import express from "express";
import { getTask, postTask, updateTask, deleteTask } from "../controllers/taskControllers.js";
import authMiddleware from "../middleware/auth.js";

const taskRoutes = express.Router();

taskRoutes.get("/fetch", authMiddleware, getTask);
taskRoutes.post("/post", authMiddleware, postTask);
taskRoutes.put("/update/:id", authMiddleware, updateTask);
taskRoutes.delete("/delete/:id", authMiddleware, deleteTask);

export default taskRoutes;