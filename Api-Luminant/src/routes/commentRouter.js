import { Router } from "express";
import { commentController } from "../controllers/commentController";
import { authMiddleware } from "../Middleware/authMiddleware";

const router = Router();

router.get('/comment', commentController.getAll);
router.get('/comment/:id', commentController.getById);
router.post('/comment', authMiddleware, commentController.create);
router.delete('/comment/:id', authMiddleware, commentController.delete)