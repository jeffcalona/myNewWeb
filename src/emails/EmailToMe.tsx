import { Body, Button, Container, Head, Heading, Html, Preview, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";

interface EmailToMeProps {
    name: string
    message: string,
    email: string
}

const EmailToMe: React.FC<EmailToMeProps> = ({ name, message, email }) => {
    return (
        <Html>
            <Head />
            <Preview>Has Recibido un mensaje del fromulario de contacto de tu Web</Preview>
            <Tailwind>
                <Body>
                    <Container className="my-10 mx-auto w-80">
                        <Section className="text-center">
                            <Heading className="text-2xl -mb-3">Mensaje de {name}</Heading>
                            <Text className="text-xs">{email}</Text>
                            <Text className="text-lg">{message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default EmailToMe