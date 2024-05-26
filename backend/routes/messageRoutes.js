import express from "express";
import { sendMessage, getMessage, clearMessages } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.get("/clear/:id", protectRoute, clearMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;