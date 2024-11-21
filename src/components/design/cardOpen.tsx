'use client'

import Image from "next/image"
import { IoIosClose } from "react-icons/io"
import { PiBehanceLogo } from "react-icons/pi"

import CircleButton from "../ui/circleButton"
import Link from "next/link"
import { DialogClose, DialogContent } from "../ui/dialog"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"

interface CardOpenProps {
    cardBg: string
    cartName: string
    designLink: string
}

const CardOpen: React.FC<CardOpenProps> = ({ cardBg, cartName, designLink }) => {

    const [imageIsReady, setImageIsReady] = useState(true)

    return (
        <DialogContent className='md:h-[80%] h-[45%] !max-w-7xl w-[100%] !border-none'>
            <div className="bgGradientBlackDesignCartOpen z-10" />
            {imageIsReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
                    <Skeleton className="w-full h-full rounded-xl" />
                </div>
            )}
            <Image src={cardBg} alt={cartName} fill sizes="100%" className="h-full w-full object-cover" onLoadingComplete={() => setImageIsReady(false)} />
            <DialogClose asChild>
                <div className="absolute top-[20px] right-[20px] cursor-pointer flex items-center justify-center">
                    <CircleButton icon={<IoIosClose className="text-white text-7xl z-20" />} />
                </div>
            </DialogClose>
            <div className="absolute bottom-[40px] w-full flex justify-between items-center md:px-16 px-5 z-20">
                <h2 className="nunitoFont text-white leading-9 md:text-5xl text-3xl max-sm:leading-7 font-bold capitalize max-md:w-48">{cartName}</h2>
                <Link href={designLink} target="_black" className="flex items-center md:gap-5 gap-3">
                    <p className="nunitoFont text-white md:text-2xl text-xl font-medium underline decoration-2 underline-offset-4 hover:text-[#FFB800]">Watch</p>
                    <CircleButton icon={<PiBehanceLogo className="text-white text-4xl" />} />
                </Link>
            </div>
        </DialogContent>
    )
}

export default CardOpen