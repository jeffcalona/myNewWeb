import { Control, FieldErrors, UseFormRegister, UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { z } from "zod"
import { FormSchema } from "@/lib/schema"

interface InputsFormProps {
  input: boolean
  label: 'name' | 'email' | 'message'
  placeholder: string
  inputType: string
  form: UseFormReturn<z.infer<typeof FormSchema>>
}

const InputsForm: React.FC<InputsFormProps> = ({ inputType, input, label, placeholder, form }) => {
  return (
    <FormField
      control={form.control}
      name={label}
      render={({ field }) => (
        <FormItem className="w-full flex flex-col">
          <FormLabel className="capitalize ml-3 nunitoFont font-black">{label}</FormLabel>
          {input === true ?
            <>
              <FormControl>
                <Input autoComplete="off" className={`h-12 bgNewYellow border-none rounded-[15px] inputsShadow text-[16px] px-[15px] nunitoFont text-black placeholder-black focus:outline-none ${label === 'name' ? 'capitalize' : 'lowercase'}`} placeholder={placeholder} {...field} type="text" />
              </FormControl>
              <FormMessage className="font-normal ml-2" />
            </>
            :
            <>
              <FormControl>
                <Textarea className="h-32 resize-none bgNewYellow border-none rounded-[15px] inputsShadow text-[16px] p-[15px] nunitoFont text-black placeholder-black focus:outline-none" placeholder={placeholder} {...field} />
              </FormControl>
              <FormMessage className="font-normal ml-2" />
            </>
          }
        </FormItem>
      )}
    >
    </FormField>
  )
}

export default InputsForm