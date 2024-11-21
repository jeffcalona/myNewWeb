import { FormSchema } from "@/lib/schema";
import { sendEmailToMe } from "@/lib/sendEmails";
import { NextResponse } from "next/server";
import { z } from "zod";

export const sendToMeAction = async (values: z.infer<typeof FormSchema>) => {
    try {
        await sendEmailToMe(values.name, values.email, values.message)
        return { success: true, message: 'Form submitted successfully' }
    } catch (error) {
        return { success: false, message: 'Error to submit form' }
    }
}