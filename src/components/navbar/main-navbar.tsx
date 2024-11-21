'use client'

import { Link as LinkS } from 'react-scroll'
import { useState } from "react"

interface MenuLink {
    isSelected?: (value: boolean) => void
    orientation: 'horizontal' | 'vertical'
}

const menuLinks = [
    { name: 'About' },
    { name: 'Skills' },
    { name: 'Dev' },
    { name: 'Design' },
    { name: 'Contact' }
]

const MainNavbar: React.FC<MenuLink> = ({ isSelected, orientation = 'horizontal' }) => {

    const [isActive, setIsActive] = useState('About')

    const handleSetActive = (to: string) => {
        isSelected ? isSelected(false) : ''
        setIsActive(to)
    }

    return (
        <nav>
            <ul className="gap-x-10 font-normal sm:text-lg flex">
                {menuLinks.map((menuLink) => {
                    return (
                        <li key={menuLink.name}>
                            <LinkS to={menuLink.name || 'About'} onSetActive={handleSetActive} spy={true} smooth={true} duration={800} className={`cursor-pointer ${isActive === menuLink.name ? 'textYellow' : 'text-white'} ${orientation === 'vertical' && isActive === menuLink.name ? 'opacity-100' : orientation === 'vertical' && isActive !== menuLink.name ? 'opacity-20' : 'opacity-100'}`} >
                                {menuLink.name}
                            </LinkS>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default MainNavbar