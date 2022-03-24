import express from 'express';
import {protect, restrictTo} from '../middleware/protect.middleware.js'
import { getSubscriber, addSubscriber, getAllSubscriber, updateSubscriber, deleteSubscriber } from '../subscribe/subscribe.controller.js';

const router = express.Router();

router.use(express.json());
router.route('/').get(protect, restrictTo("admin"),getAllSubscriber).post(addSubscriber);
router.route('/:id').get(protect, restrictTo("admin"),getSubscriber).patch(protect, restrictTo("admin"),updateSubscriber).delete(protect, restrictTo("admin"), deleteSubscriber)

export { router as default}
