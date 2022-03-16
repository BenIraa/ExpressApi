import express from 'express';
import { getAllBlogs, addblog, getBlog,updateBlog,deleteBlog } from '../controller/blog.controller.js';
import { protect, restrictTo} from './../../middleware/protect.middleware.js'
const router = express.Router();

router.use(express.json());
router.route('/').get(getAllBlogs).post(protect, restrictTo("admin"),addblog);
router.route('/:id').get(protect, restrictTo("admin"),getBlog).patch(protect, restrictTo("admin"),updateBlog).delete(protect, restrictTo("admin"),deleteBlog);

export { router as default}