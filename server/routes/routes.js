import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';

const {
  getAllRedFlags, getARedFlagById, createRedFlag, updateRedFlag
} = RedFlagsController;

const router = express.Router();
router.get('/redFlags', getAllRedFlags);
router.get('/redFlags/:redFlagId', getARedFlagById);
router.post('/redFlags', createRedFlag);
router.put('/redFlags/:redFlagId', updateRedFlag);

export default router;
