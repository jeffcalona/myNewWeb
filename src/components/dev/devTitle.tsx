interface DevTitleProps {
  devTitle: string
  title: string
}

const DevTitle: React.FC<DevTitleProps> = ({ devTitle, title }) => {
  return (
    <div className='absolute text-white group/edit group-hover/item:hidden max-w-[75%]'>
      <h3 className="md:text-[20px] font-light md:leading-8 mb-1 text-[15px] leading-6">{devTitle}</h3>
      <h2 className="md:text-[40px] font-normal md:leading-8 text-[30px] leading-7">{title}</h2>
    </div>
  )
}

export default DevTitle