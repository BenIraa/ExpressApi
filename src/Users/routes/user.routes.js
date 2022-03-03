import express from 'express';
import { homepage, getUsers, addUsers, getUser, updateUser, deleteUser } from '../controller/user.controller.js';
import  signup  from '../middleware/signup.middleware.js'
const router = express.Router();

const users = [];

router.use(express.json()); //Tell the compile to use json in Body
router.get('/', homepage);
router.get('/users', getUsers);

router.post('/users', signup, addUsers);
router.get('/users/:id', getUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export {router as default};