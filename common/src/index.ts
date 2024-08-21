import z from "zod";

export const signupInp=z.object({
    email:z.string().email(),
    password:z.string().min(8),
    name:z.string().optional()
})
export type SignupInp=z.infer<typeof signupInp>

export const signinInp=z.object({
    email:z.string().email(),
    password:z.string().min(8)
})
export type SigninInp=z.infer<typeof signinInp>

export const createblogInp=z.object({
    title:z.string(),
    content:z.string(),
    topic:z.string()
})
export type CreateblogInp=z.infer<typeof createblogInp>

export const updateblogInp=z.object({
    title:z.string().optional(),
    content:z.string().optional()
})
export type UpdateblogInp=z.infer<typeof updateblogInp>
