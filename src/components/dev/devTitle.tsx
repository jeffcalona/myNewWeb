interface DevTitleProps {
    devTitle: string
    title: string
}

const DevTitle: React.FC<DevTitleProps> = ({ devTitle, title }) => {
  return (
    <div className='absolute text-white group/edit group-hover/item:hidden'>
        <h3 className="text-[20px] font-light leading-8 mb-1">{devTitle}</h3>
        <h2 className="text-[40px] font-normal leading-8">{title}</h2>
    </div>
  )
}

export default DevTitle