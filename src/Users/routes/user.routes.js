import express from 'express';
import { getAllUsers, updateUser, deleteUser, getUser, addUsers} from '../controller/user.controller.js';
/*import  signup  from '../middleware/signup.middleware.js'*/
const router = express.Router();


router.use(express.json()); //Tell the compile to use json in Body
router.route('/').get(getAllUsers).post(addUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);


export default router;