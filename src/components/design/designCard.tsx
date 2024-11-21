'use client'

import Image from "next/image"
import { DialogTrigger } from "../ui/dialog"
import { useEffect, useRef, useState } from "react"

interface DesignCardProps {
  id: number
  bgImg: string
  name: string
  marginTop: string
  selected: () => void
}

const DesignCard: React.FC<DesignCardProps> = ({ bgImg, name, marginTop, selected }) => {

  const [isInCenter, setIsInCenter] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentRef = cardRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsInCenter(entry.isIntersecting && entry.intersectionRatio > 0.8)
      },
      {
        threshold: [0.8]
      }
    )
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div ref={cardRef} className={`group ${marginTop} min-w-[160px] md:h-[600px] h-[450px] overflow-hidden relative newTransition sm:hover:min-w-[230px] ${isInCenter ? 'max-md:min-w-[230px]' : 'max-md:min-w-[160px]'}`}>
      <DialogTrigger onClick={selected} className='w-full h-full flex justify-center items-center'>
        <Image src={bgImg} alt={name} fill sizes="100%" className='h-full w-full object-cover object-top newTransition' />
        <div className={`w-full h-full bg-black absolute opacity-50 newTransition sm:group-hover:opacity-0 top-0 ${isInCenter ? 'max-md:opacity-0' : 'max-md:opacity-50'}`} />
        <div className="bgGradientBlackDesignCard bgGradientBlackDesignCard-hover" />
        <h3 className="text-[16px] text-white nunitoFont text-center px-4 absolute font-bold w-[160px]">{name}</h3>
      </DialogTrigger>
    </div>
  )
}

export default DesignCard

{/* <DialogTrigger onClick={selected} className={`group ${marginTop} w-[12.6%] h-[80%] overflow-hidden relative flex justify-center items-center newTransition hover:w-[19%]`}>
      <Image src={bgImg} alt={name} fill sizes="100%" className="h-full w-full object-cover newTransition group-hover:w-[120%] group-hover:h-[120%]" />
      <div className="w-full h-full bg-black absolute opacity-50 newTransition group-hover:opacity-0" />
      <div className="bgGradientBlackDesignCard bgGradientBlackDesignCard-hover" />
      <h1 className="text-[16px] text-white nunitoFont text-center px-4 absolute font-bold">{name}</h1>
    </DialogTrigger> */}