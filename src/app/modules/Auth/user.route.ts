import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthControllers } from './user.controller';
import { AuthValidation } from './user.validation';

const router = express.Router();

router.post("/register", validateRequest(AuthValidation.registerValidationSchema), AuthControllers.register);
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);



export const UserRoutes = router;
