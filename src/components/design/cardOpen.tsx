import Image from "next/image"
import { IoIosClose } from "react-icons/io"
import { PiBehanceLogo } from "react-icons/pi"

import CircleButton from "../ui/circleButton"
import Link from "next/link"

interface CardOpenProps {
    cardBg: string
    cartName: string
    closeButton: () => void
    designLink: string
}

const CardOpen: React.FC<CardOpenProps> = ({ cardBg, cartName, closeButton, designLink }) => {
  return (
    <div className='w-[100%] h-[100%] absolute z-10'>
        <Image src={cardBg} alt={cartName} fill sizes="100%" className="h-full w-full object-cover" />
        <div className="bgGradientBlackDesign"  />
        <div className="absolute top-[20px] right-[20px] cursor-pointer flex items-center justify-center">
            <CircleButton onClick={closeButton} icon={<IoIosClose className="textYellow text-5xl" />} />
        </div>
        <div className="absolute bottom-[40px] w-full flex justify-between items-center px-16">
            <h2 className="nunitoFont textYellow text-5xl font-bold uppercase">{cartName}</h2>
            <Link href={designLink} target="_black" className="flex items-center gap-5">
                <p className="nunitoFont textYellow text-3xl font-medium underline decoration-2 underline-offset-4">Watch</p>
                <CircleButton icon={<PiBehanceLogo className="textYellow text-3xl" />} />
            </Link>
        </div>
    </div>
  )
}

export default CardOpen