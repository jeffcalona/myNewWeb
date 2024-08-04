'use client'

import React, { useState } from "react"
import DesignCard from "./designCard"
import CardOpen from "./cardOpen"

const Design = () => {
    const designsData = [
        {
            id: 1,
            name: 'Name desing1',
            principalImg: '/images/design/Design1.png',
            link: '#',
            marginTop: 'mt-[-60px]'
        },
        {
            id: 2,
            name: 'Name desing2',
            principalImg: '/images/design/Design1.png',
            link: '#',
            marginTop: 'mt-[-30px]'
        },
        {
            id: 3,
            name: 'Name desing3',
            principalImg: '/images/design/Design1.png',
            link: '#',
            marginTop: ''
        },
        {
            id: 4,
            name: "Name desing4",
            principalImg: '/images/design/Design1.png',
            link: "#",
            marginTop: 'mt-[-30px]'
        },
        {
            id: 5,
            name: "Name desing5",
            principalImg: '/images/design/Design1.png',
            link: "#",
            marginTop: 'mt-[-60px]'
        },
        {
            id: 6,
            name: "Name desing6",
            principalImg: '/images/design/Design1.png',
            link: "#",
            marginTop: ''
        },
        {
            id: 7,
            name: "Name desing7",
            principalImg: '/images/design/Design1.png',
            link: "#",
            marginTop: 'mt-[-30px]'
        },
    ]

    const [openCard, setOpenCard] = useState<number | null>(null)

    const openCardFunct = (id: number) => {
        setOpenCard(id)
    }

  return (
    <section id="Design" className="h-screen flex items-center justify-center relative z-20">
        <div className="w-[90%] h-[75%] flex justify-center items-center gap-x-4 mt-16 relative">
            {designsData.map((design) => (
                <React.Fragment key={design.id}>
                    <DesignCard id={design.id} bgImg={design.principalImg} marginTop={design.marginTop} name={design.name} openCard={openCardFunct} />
                    {openCard === design.id &&
                        <CardOpen cardBg={design.principalImg} cartName={design.name} closeButton={() => setOpenCard(null)} designLink={design.link}/>
                    }
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

export default Design