import express from 'express';
import RedFlagsController from '../controllers/redFlagsController';
import RedFlagValidator from '../middleware/redFlagValidator';
import UsersController from '../controllers/usersController';
import UserValidator from '../middleware/userValidator';

const {
  getAllRedFlags,
  getARedFlagById,
  createRedFlag,
  deleteRedFlag,
  updateRedFlagLocation,
  updateRedFlagComment
} = RedFlagsController;

const router = express.Router();
router.post('/auth/signup', UserValidator.signupValidator, UsersController.signup);
router.post('/auth/login', UserValidator.loginValidator, UsersController.login);
router.get('/redFlags', getAllRedFlags);
router.get('/redFlags/:id', getARedFlagById);
router.post('/redFlags', RedFlagValidator.createRedflagValidator, createRedFlag);
router.delete('/redFlags/:id', deleteRedFlag);
router.patch('/redFlags/:id/location', RedFlagValidator.redFlagLocationValidator, updateRedFlagLocation);
router.patch('/redFlags/:id/comment', RedFlagValidator.redFlagCommentValidator, updateRedFlagComment);

export default router;
