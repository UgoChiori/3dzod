import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, {message: "Name must be at least 2 characters long"}).max(255),
    email: z.string().email({message: "Invalid email format"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
    confirmPassword: z.string().min(6, {message: "Confirm Password must be at least 6 characters long"}),
    username: z.string().min(2,{message:"Username must be at lest 2 characters long"}).max(255),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  export type RegisterFormInput = z.infer<typeof registerSchema>;
