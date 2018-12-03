import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';

const { getAllRedFlags } = RedFlagsController;

const router = express.Router();
router.get('/redFlags', getAllRedFlags);

export default router;
