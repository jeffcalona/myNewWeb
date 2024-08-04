import Image from "next/image"

import Avatar from './assets/Avatar.png'
import InputsForm from "./inputsForm"

const Contact = () => {
    const formData = [
        {
            id: 1,
            label: 'name',
            placeholder: 'Your name',
            input: true
        },
        {
            id: 2,
            label: 'email',
            placeholder: 'Your email',
            input: true
        },
        {
            id: 3,
            label: 'message',
            placeholder: 'Your message',
            input: false
        },
    ]

  return (
    <section id="Contact" className="h-screen flex items-center justify-center relative">
        <div className="h-full w-[65%] absolute -left-24">
            <Image src={Avatar} alt='Jefferson' fill sizes="100%" className="h-full w-full object-cover newTransition group-hover:w-[120%] group-hover:h-[120%] opacity-20" />
        </div>
        <div className="w-[90%] h-[90%] flex flex-col justify-center relative">
            <div className="w-full h-[40%] flex justify-end">
                <h1 className="nunitoFont text-white text-[230px] font-extrabold -tracking-[15px]">Contact.</h1>
            </div>
           <div className="w-full h-[60%] flex justify-end">
            <div className="w-[45%] h-full bgNewYellow rounded-[20px] mr-40px flex justify-center items-center">
                <div className="w-[80%] h-[90%] flex flex-col justify-between items-center">
                    {formData.map((data) => (
                        <InputsForm key={data.id} input={data.input} label={data.label} placeholder={data.placeholder} />
                    ))}
                    <button className="w-full bg-black rounded-[15px] text-white py-3 text-[18px] nunitoFont font-bold">Send Message</button>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Contact