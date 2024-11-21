'use client'

import Image from "next/image"
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import Avatar from './assets/Avatar.png'
import InputsForm from "./inputsForm"
import PrincipalTitle from "../ui/principalTitle"
import { Form, FormMessage } from "../ui/form"
import { FormSchema } from "@/lib/schema"
import { useState, useTransition } from "react"
import { sendToMeAction } from "@/actions/sendAction"
import { useToast } from "@/hooks/use-toast"

interface formInfoData {
    id: number
    label: 'name' | 'email' | 'message'
    placeholder: string
    input: boolean
    inputType: string
}

const formInfo: formInfoData[] = [
    {
        id: 1,
        label: 'name',
        placeholder: 'Your name',
        input: true,
        inputType: 'text'
    },
    {
        id: 2,
        label: 'email',
        placeholder: 'Your email',
        input: true,
        inputType: 'email'
    },
    {
        id: 3,
        label: 'message',
        placeholder: 'Write what do you want to tell me here',
        input: false,
        inputType: 'text'
    },
]

const Contact = () => {

    const [error, setError] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()

    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        setError(null)
        startTransition(async () => {
            const response = await sendToMeAction(values)
            if (!response.success) {
                setError(response.message)
            } else {
                toast({
                    title: 'Form submitted',
                    description: 'Message received! I’ll review it and get back to you soon.'
                })
                form.reset()
            }
        })
    }


    return (
        <section id="Contact" className="h-full flex items-center justify-center relative">
            <div className="md:w-[90%] w-[99%] h-[90%] md:grid md:grid-cols-2 items-center max-md:space-y-4">
                <div className="w-full max-md:h-[30%]">
                    <PrincipalTitle title="Contact." position="md:h-full" />
                </div>
                <div className="h-[70%] max-sm:h-[68%] w-full flex justify-end">
                    <div className="h-full w-[85%] max-md:w-full bgNewYellow rounded-[20px] mr-40px flex justify-center items-center z-20">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%] h-[90%] flex flex-col justify-between items-center">
                                {formInfo.map((data) => (
                                    <InputsForm key={data.id} input={data.input} label={data.label} placeholder={data.placeholder} inputType={data.inputType} form={form} />
                                ))}
                                <button disabled={isPending} className={`w-full bg-black rounded-[15px] py-3 text-[18px] nunitoFont font-bold cursor-pointer flex justify-center items-center ${isPending ? 'text-[#ffb700b7] hover:text-[#ffb700b7]' : 'text-white hover:text-[#FFB800]'}`}>
                                    Send Message
                                    {isPending && (
                                        <div className="spinner ml-2" />
                                    )}
                                </button>
                                {error && (
                                    <FormMessage>
                                        {error}
                                    </FormMessage>
                                )}
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact