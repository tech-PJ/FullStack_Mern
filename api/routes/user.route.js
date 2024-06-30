import express from 'express';
import { UserController } from '../controllers/user.controller.js';
const router=express.Router();

router.get('/task',UserController);

export default router;