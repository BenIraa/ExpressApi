import express from "express";
import { addEducation, getAllEducation,getEducation, updateEductaion, deleteEducation} from '../contoller/education.controller.js';


const router = express.Router();

router.use(express.json());
router.route('/').get(getAllEducation).post(addEducation);
router.route('/:id').get(getEducation).patch(updateEductaion).delete(deleteEducation);


export default router;