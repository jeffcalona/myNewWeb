import Image from "next/image"

interface DesignCardProps {
    id: number
    bgImg: string
    name: string
    marginTop: string
    openCard: (id: number) => void
}

const DesignCard: React.FC<DesignCardProps> = ({ id, bgImg, name, marginTop, openCard }) => {
  const handleCardClick = () => {
    openCard(id)
  } 
  return (
    <div onClick={handleCardClick} className={`group ${marginTop} w-[12.6%] h-[70%] overflow-hidden relative flex justify-center items-center cursor-pointer newTransition hover:w-[19%]`}>
        <Image src={bgImg} alt={name} fill sizes="100%" className="h-full w-full object-cover newTransition group-hover:w-[120%] group-hover:h-[120%]" />
        <div className="w-full h-full bg-black absolute opacity-50 newTransition group-hover:opacity-0"/>
        <h1 className="text-[16px] text-white nunitoFont text-center px-4 absolute font-bold">{name}</h1>
    </div>
  )
}

export default DesignCard