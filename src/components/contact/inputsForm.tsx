interface InputsFormProps {
    input: boolean
    label: string
    placeholder: string
}

const InputsForm: React.FC<InputsFormProps> = ({ input, label, placeholder }) => {
  return (
    <div className="w-full flex flex-col">
        <label className="capitalize ml-3 nunitoFont font-black">{label}</label>
        {input === true ?
            <input placeholder={placeholder} className="h-12 bgNewYellow rounded-[15px] inputsShadow px-[15px] nunitoFont text-black placeholder-black focus:outline-none"></input>
            :
            <textarea placeholder={placeholder} className="h-32 resize-none bgNewYellow border-none rounded-[15px] inputsShadow p-[15px] nunitoFont text-black placeholder-black focus:outline-none"></textarea>

        }
    </div>
  )
}

export default InputsForm