'use client'

import React, { useState } from "react"
import DesignCard from "./designCard"
import CardOpen from "./cardOpen"
import PrincipalTitle from "../ui/principalTitle"
import { Dialog } from "../ui/dialog"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

const Design = () => {

    interface Design {
        id: number
        name: string
        principalImg: string
        openCardImg: string
        link: string
        marginTop: string
    }

    const [selectedDesign, setSelectedDesign] = useState<Design | null>(null)

    const designsData: Design[] = [
        {
            id: 1,
            name: 'Wellezy Web',
            principalImg: '/images/design/wellezy-web-small-image.webp',
            openCardImg: '/images/design/wellezy-web-large-image.webp',
            link: '#',
            marginTop: 'mb-[60px]'
        },
        {
            id: 2,
            name: 'Maria Camila Boutique Web',
            principalImg: '/images/design/mcboutique-web-small-image.webp',
            openCardImg: '/images/design/mcboutique-web-large-image.webp',
            link: '#',
            marginTop: 'mt-[-30px]'
        },
        {
            id: 3,
            name: 'Blindaje Quirúrgico App',
            principalImg: '/images/design/blindaje-quirurgico-web-small-image.webp',
            openCardImg: '/images/design/blindaje-quirurgico-web-large-image.webp',
            link: '#',
            marginTop: ''
        },
        {
            id: 4,
            name: 'Mistica Love Web',
            principalImg: '/images/design/mistica-love-web-small-image.webp',
            openCardImg: '/images/design/mistica-love-web-large-image.webp',
            link: "#",
            marginTop: 'mt-[-30px]'
        },
        {
            id: 5,
            name: 'Credit App',
            principalImg: '/images/design/credit-app-small-image.webp',
            openCardImg: '/images/design/credit-app-large-image.webp',
            link: "#",
            marginTop: 'mb-[60px]'
        },
        {
            id: 6,
            name: "Agency Web",
            principalImg: '/images/design/agency-web-small-image.webp',
            openCardImg: '/images/design/agency-web-large-image.webp',
            link: "#",
            marginTop: ''
        },
        {
            id: 7,
            name: "Portfolio Web",
            principalImg: '/images/design/my-web-small-image.webp',
            openCardImg: '/images/design/my-web-large-image.webp',
            link: "https://www.behance.net/gallery/205883807/Personal-Portafolio-Software-Engineer-and-Designer",
            marginTop: 'mb-[-30px]'
        },
    ]

    const handleSelectedDeign = (design: Design) => {
        setSelectedDesign(design)
    }

    return (
        <section id="Design" className="h-full w-full flex md:items-center justify-center max-md:flex-col max-md:justify-between max-md:py-12 relative z-20">
            <PrincipalTitle title="Design." position="md:absolute md:bottom-36 md:left-[5.5%] left-0 bottom-0" />
            <Dialog>
                <ScrollArea className="md:w-[90%] w-[99%] md:h-[80%]">
                    <div className="w-max flex justify-center items-center gap-x-4">
                        {designsData.map((design) => (
                            <React.Fragment key={design.id}>
                                <DesignCard id={design.id} bgImg={design.principalImg} marginTop={design.marginTop} name={design.name} selected={() => handleSelectedDeign(design)} />
                                {selectedDesign && selectedDesign.id === design.id && (
                                    <CardOpen cardBg={selectedDesign.openCardImg !== '' ? selectedDesign.openCardImg : selectedDesign.principalImg} cartName={selectedDesign.name} designLink={selectedDesign.link} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </Dialog>
        </section>
    )
}

export default Design