export async function sendEmailToMe(name: string, email: string, message: string) {
    await fetch('http://localhost:3000/api/emails/me', {
        method: 'POST',
        body: JSON.stringify({
            name, email, message
        })
    })
}