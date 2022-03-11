import express from 'express';
import { getAllUsers, Login, updateUser, deleteUser, getUser, addUsers} from '../controller/user.controller.js';
import { protectMiddleware} from '../middleware/signup.middleware.js'
import {protect, restrictTo} from '../../middleware/protect.middleware.js'
const router = express.Router();


router.use(express.json()); //Tell the compile to use json in Body
router.post('/signup', addUsers)
router.post('/login', Login)
router.route('/').get(protect, restrictTo("admin"),protectMiddleware, getAllUsers).post(protect, restrictTo("admin"),addUsers);
router.route('/:id').get(protect, restrictTo("admin"),getUser).patch(protect, restrictTo("admin"),updateUser).delete(protect, restrictTo("admin"),deleteUser);


export default router;