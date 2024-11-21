import React from 'react'

interface PrincipalTitleProps {
    title: string,
    position?: string
}

const PrincipalTitle: React.FC<PrincipalTitleProps> = ({ title, position }) => {
    return (
        <h1 className={`break-words nunitoFont text-white lg:text-[290px] md:text-[200px] text-[160px] font-extrabold -tracking-[10px] z-30 leading-[175px] max-lg:leading-[120px] md:ml-[-20px] ml-[-12px] w-full max-md:leading-[100px] max-md:top-[50px] h-28 ${position}`}>
            {title}
        </h1>
    )
}

export default PrincipalTitle