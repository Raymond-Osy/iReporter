import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';

const {
  getAllRedFlags,
  getARedFlagById,
  createRedFlag,
  updateRedFlag,
  deleteRedFlag,
  updateRedFlagLocation
} = RedFlagsController;

const router = express.Router();
router.get('/redFlags', getAllRedFlags);
router.get('/redFlags/:redFlagId', getARedFlagById);
router.post('/redFlags', createRedFlag);
router.put('/redFlags/:redFlagId', updateRedFlag);
router.delete('/redFlags/:redFlagId', deleteRedFlag);
router.patch('/redFlags/:redFlagId/location', updateRedFlagLocation);

export default router;
