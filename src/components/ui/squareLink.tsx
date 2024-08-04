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
                <Link href={href} download target="_blank" className="border-2 borderNewYellow py-[15px] text-[20px] text-white w-[170px] text-center">{label}</Link>
                :
                <LinkS to={href} spy={true} smooth={true} duration={800} className="border-2 borderNewYellow py-[15px] text-[20px] text-white w-[170px] text-center cursor-pointer">{label}</LinkS>
            }
        </>
    )
}
export default SquareLink