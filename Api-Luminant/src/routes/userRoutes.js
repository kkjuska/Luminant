import { Router } from "express";
import { userController } from "../controllers/userController.js"

const router = Router();

router.get('/user/username/:username', userController.getByUsername);
router.get('/user/email/:email', userController.getByEmail);
router.get('/user/id/:id', userController.getById);
router.get('/user/public/:id', userController.getByPublicId);
router.post('/user', userController.create);
router.post('/user/login', userController.login)
router.patch('/user/:id', userController.updateProfile);
router.patch('/user/:id/password', userController.updatePassword);
router.delete('/user/:id', userController.deactivate);

export default router