import express from 'express';
import { getAllBlogs, addblog, getBlog,updateBlog,deleteBlog } from '../controller/blog.controller.js';
const router = express.Router();

router.use(express.json());
router.route('/').get(getAllBlogs).post(addblog);
router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog);

export { router as default}