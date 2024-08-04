'use client'

import { Link as LinkS } from 'react-scroll'
import { useState } from "react"

interface MenuLink {
    isSelected?: (value: boolean) => void
}

const menuLinks = [
    {name: 'About'},
    {name: 'Skills'},
    {name: 'Dev'},
    {name: 'Design'},
    {name: 'Contact'}
]

const MainNavbar: React.FC<MenuLink> = ({ isSelected }) => {

    const [isActive, setIsActive] = useState('')

    const handleSetActive = (to: string) => {
        isSelected ? isSelected(false) : ''
        setIsActive(to)
    }

    return (
        <nav>
            <ul className="sm:gap-x-10 gap-x-5 font-normal sm:text-lg text-sm flex">
                {menuLinks.map((menuLink) => {
                    return (
                        <li key={menuLink.name}>
                            <LinkS to={menuLink.name} onSetActive={handleSetActive} spy={true} smooth={true} duration={800} className={`cursor-pointer ${isActive === menuLink.name ? 'textYellow' : 'text-white'}`} >
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