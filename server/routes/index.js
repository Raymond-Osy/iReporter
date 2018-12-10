import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';
import RedFlagValidator from '../middleware/redFlagValidator';

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
router.post('/redFlags', RedFlagValidator.createRedflagValidator, createRedFlag);
router.delete('/redFlags/:id', deleteRedFlag);
router.patch('/redFlags/:id/location', RedFlagValidator.redFlagLocationValidator, updateRedFlagLocation);
router.patch('/redFlags/:id/comment', RedFlagValidator.redFlagCommentValidator, updateRedFlagComment);

export default router;
