import { object, string } from "zod";

export const FormSchema = object({
    name: string({ required_error: "Name is required" })
        .min(2, 'Pleace enter a correct name')
        .max(30, 'Exceeds the 30 character limit'),
    email: string({ required_error: "Email is required" })
        .min(2, 'Pleace enter a correct email')
        .email('Pleace enter a correct email'),
    message: string({ required_error: "Message is required" })
        .min(2, 'Pleace enter a correct message')
})