import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLoginUser, TUser } from "./user.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "./user.model";
import config from "../../config";
import { createToken } from "./auth.utils";

const register = async (payload: TUser) => {
    const result = await User.create(payload);
    return result;
}
const login = async (payload: TLoginUser) => {
    const user = await User.isUserExistsByUsername(payload.username);

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
    const jwtPayload = {
        username: user.username,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );



    return {
        accessToken
    };
}
export const UserServices = {
    register,
    login
}