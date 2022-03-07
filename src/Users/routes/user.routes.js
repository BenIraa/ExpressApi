import express from 'express';
import { getAllUsers, Login, updateUser, deleteUser, getUser, addUsers} from '../controller/user.controller.js';
import { protectMiddleware} from '../middleware/signup.middleware.js'
/*import  signup  from '../middleware/signup.middleware.js'*/
const router = express.Router();


router.use(express.json()); //Tell the compile to use json in Body
router.post('/signup', addUsers)
router.post('/login', Login)
router.route('/').get(protectMiddleware, getAllUsers).post(addUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);


export default router;