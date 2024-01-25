import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
const register = catchAsync(async (req, res) => {
  const result = await UserServices.register(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is registered succesfully!',
    data: result
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.login(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in succesfully!',
    data: result
  });
});



export const UserControllers = {
  register,
  loginUser
};
