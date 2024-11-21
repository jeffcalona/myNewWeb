import Link from "next/link"

interface ButtonsProps {
    hrefCode: string
    hrefWeb: string | null
}

const ButtonsPrincipalHover: React.FC<ButtonsProps> = ({ hrefCode, hrefWeb }) => {
    return (
        <div className="absolute z-40 left-0 top-0 h-full hidden grup/edit group-hover/item:flex group-hover/item:flex-col">
            <div className="flex flex-col gap-y-5 absolute bottom-[45%] z-40 ml-4 [&>a]:w-[55px] [&>a]:h-[55px] [&>a]:rounded-full [&>a]:border-[2px] [&>a]:text-white [&>a]:flex [&>a]:justify-center [&>a]:items-center">
                <Link href={hrefCode} target="_blank" className="borderNewYellow">
                    code
                </Link>
                {hrefWeb && (
                    <Link href={hrefWeb} target="_blank" className="borderNewYellow hover:bg-slate-900">
                        web
                    </Link>
                )}
            </div>
        </div>
    )
}
export default ButtonsPrincipalHover