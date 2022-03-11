import express from "express";
import { addmessage, getAllMessage,getMessage,updateMessage,deleteMessage} from '../controller/message.controller.js'
import { protect, restrictTo} from '../../middleware/protect.middleware.js'

const router = express.Router();

router.use(express.json());
router.route('/').get(protect, restrictTo("admin"),getAllMessage).post(protect, restrictTo("admin"),addmessage);
router.route('/:id').get(protect, restrictTo("admin"),getMessage).patch(protect, restrictTo("admin"),updateMessage).delete(protect, restrictTo("admin"),deleteMessage);


export default router;