import { Router } from "express";
import { mediaController } from "../controllers/mediaController";
import { authMiddleware } from "../Middleware/authMiddleware";

const router = Router()

router.get('/media', mediaController.getAll);
router.get('/media/:id', mediaController.getById);
router.post('/media', authMiddleware, mediaController.create);
router.delete('/media/:id', authMiddleware, mediaController.delete)