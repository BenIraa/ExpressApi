import express from "express";
import { addEducation, getAllEducation,getEducation, updateEductaion, deleteEducation} from '../contoller/education.controller.js';
import { protect, restrictTo} from '../../middleware/protect.middleware.js'

const router = express.Router();

router.use(express.json());
router.route('/').get(protect, restrictTo("admin"),getAllEducation).post(protect, restrictTo("admin"),addEducation);
router.route('/:id').get(protect, restrictTo("admin"),getEducation).patch(protect, restrictTo("admin"),updateEductaion).delete(protect, restrictTo("admin"),deleteEducation);


export default router;