'use client'

import Link from "next/link"
import { Link as LinkS } from 'react-scroll'

interface SquareLinkProps {
    label: string
    href: string
    isCv: boolean
}

const SquareLink: React.FC<SquareLinkProps> = ({ label, href, isCv }) => {
    return (
        <>
            {isCv === true ?
                <Link href={href} download target="_blank" className="border-2 borderNewYellow py-[15px] md:text-[21px] text-[18px] text-white md:w-[200px] w-[140px] text-center hover:text-[#FFB800]">{label}</Link>
                :
                <LinkS to={href} spy={true} smooth={true} duration={800} className="border-2 borderNewYellow py-[15px] md:text-[21px] text-[18px] text-white md:w-[200px] w-[140px] text-center cursor-pointer hover:text-[#FFB800]">{label}</LinkS>
            }
        </>
    )
}
export default SquareLink