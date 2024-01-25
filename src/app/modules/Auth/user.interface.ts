import { Model } from "mongoose";

/* eslint-disable no-unused-vars */
export type TLoginUser = {
  username: string;
  password: string;
};

export type TUser = {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByUsername(username: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
