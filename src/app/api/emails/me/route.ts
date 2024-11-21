import EmailToMe from "@/emails/EmailToMe";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { name, email, message } = await req.json()
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Email from JeffWeb',
            react: EmailToMe({ name, email, message })
        })
        return NextResponse.json({ message: '¡Sent successfully!' }, { status: 200 })
    } catch (error) {
        console.log('Error to submit email: ', error)
        return NextResponse.json({ message: 'Error to submit email' }, {
            status: 500
        })
    }
}