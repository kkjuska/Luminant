import { Router } from "express";
import { followsController } from "../controllers/followsController";
import { authMiddleware } from "../Middleware/authMiddleware";

const router = Router();

router.get('/follows', followsController.getAll);
router.get('/follows/:id/follower', followsController.getByFollower);
router.get('/follows/:id/following', followsController.getByFollowing);
router.post('/follows', authMiddleware, followsController.create);
router.delete('/follows/:id', authMiddleware, followsController.delete)