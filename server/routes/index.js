import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';

const {
  getAllRedFlags,
  getARedFlagById,
  createRedFlag,
  deleteRedFlag,
  updateRedFlagLocation,
  updateRedFlagComment
} = RedFlagsController;

const router = express.Router();
router.get('/redFlags', getAllRedFlags);
router.get('/redFlags/:id', getARedFlagById);
router.post('/redFlags', createRedFlag);
router.delete('/redFlags/:id', deleteRedFlag);
router.patch('/redFlags/:id/location', updateRedFlagLocation);
router.patch('/redFlags/:id/comment', updateRedFlagComment);

export default router;
