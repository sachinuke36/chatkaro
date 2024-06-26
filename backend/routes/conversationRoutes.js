import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { getMessages, sendMessage } from "../controllers/conversationControllers.js";

const router = express.Router();

router.get("/:id",protectRoutes, getMessages);
router.post("/send/:id",protectRoutes, sendMessage);

export default router