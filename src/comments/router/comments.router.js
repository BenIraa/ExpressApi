import express from 'express'

const router = express.Router();
router.use(express.json());

export { router as default}