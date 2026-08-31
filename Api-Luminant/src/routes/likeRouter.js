import { Router } from "express";
import { likeController } from "../controllers/likeController";
import { authMiddleware } from "../Middleware/authMiddleware";

const router = Router();

router.get('/like', likeController.getAll);
router.post('/like', authMiddleware, likeController.create);
router.delete('/like/:post_id', authMiddleware, likeController.delete)