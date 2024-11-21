interface DevTitleCardsProps {
    devTitle: string
    title: string
}

const DevTitleCards: React.FC<DevTitleCardsProps> = ({ devTitle, title }) => {
    return (
        <div className='absolute text-white group/edit group-hover/item:hidden max-w-[75%]'>
            <h3 className="md:text-[20px] font-light md:leading-8 md:mb-1 mb-0 text-[12px] leading-6">{devTitle}</h3>
            <h2 className="md:text-[40px] font-normal md:leading-8 text-[19px] leading-5">{title}</h2>
        </div>
    )
}

export default DevTitleCards