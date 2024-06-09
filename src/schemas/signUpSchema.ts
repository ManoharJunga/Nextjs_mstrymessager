import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 Characters")
    .max(20, "Username must be no more than 20 Characters") 
    .regex( /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/, "Uername must not contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be atleast 8 Characters"})
})