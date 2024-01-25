/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { TRegisterUser } from './user.interface';
// import { TUser, UserModel } from './user.interface';
const userSchema = new Schema<TRegisterUser>(
    {

        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: 0,
        },

    },
    {
        timestamps: true,
    },
);



export const User = model<TRegisterUser>('User', userSchema);