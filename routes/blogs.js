import express from 'express';

import { getBlogs, createBlog, updateBlog, deleteBlog, likeBlog } from '../controllers/blogs.js';
import { get } from 'mongoose';

const router = express.Router();

router.get('/' , getBlogs);
router.post('/' , createBlog);
router.patch('/:id' , updateBlog);
router.delete('/:id' , deleteBlog);
router.patch('/:id/likeBlog' , likeBlog);

export default router;