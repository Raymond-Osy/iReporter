import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';

const { getAllRedFlags, getARedFlagById } = RedFlagsController;

const router = express.Router();
router.get('/redFlags', getAllRedFlags);
router.get('/redFlags/:redFlagId', getARedFlagById);

export default router;
