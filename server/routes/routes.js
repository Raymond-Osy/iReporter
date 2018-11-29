import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';

const { getAllRedFlags, getARedFlagById, createRedFlag } = RedFlagsController;

const router = express.Router();
router.get('/redFlags', getAllRedFlags);
router.get('/redFlags/:redFlagId', getARedFlagById);
router.post('/redFlags', createRedFlag);

export default router;
