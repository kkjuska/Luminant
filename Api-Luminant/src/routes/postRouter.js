import { Router } from "express";
import { postController } from "../controllers/postController";
import { authMiddleware } from "../Middleware/authMiddleware"

const router = Router();

router.get('/post', postController.getAll);
router.get('/post/:id', postController.getById);
router.post('/post', authMiddleware ,postController.create);
router.patch('/post/:id', authMiddleware, postController.updatePost);
router.delete('/post/:id', authMiddleware, postController.delete)