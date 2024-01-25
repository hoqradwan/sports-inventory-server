import { z } from 'zod';
const registerValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    username: z.string({ required_error: "Username is required" }),
    email: z.string({ required_error: "Email is required" }),
    password: z.string({ required_error: "Password is required" })
  })
})
const loginValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Id is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});



export const UserValidations = {
  registerValidationSchema,
  loginValidationSchema
};