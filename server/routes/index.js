import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';
import incidentValidator from '../middleware/validator';

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
router.post('/redFlags', incidentValidator.creatRedflagValidator, createRedFlag);
router.delete('/redFlags/:id', deleteRedFlag);
router.patch('/redFlags/:id/location', incidentValidator.redFlagLocationValidator, updateRedFlagLocation);
router.patch('/redFlags/:id/comment', incidentValidator.redFlagCommentValidator, updateRedFlagComment);

export default router;
