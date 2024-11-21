'use client'

import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"
import { FaTimes } from 'react-icons/fa'
import MainNavbar from "./main-navbar"
import BurgerMainNavbar from "./burgerMain-navbar"

const BurgerNavbar = () => {
    const [activeBurger, setActiveBurger] = useState(false)

    return (
        <>
            <button className='mr-auto' onClick={() => { setActiveBurger(true) }}>
                <HiMenuAlt1 className='text-white w-10 h-10 md:scale-x-100 scale-x-[-1]' />
            </button>
            <div className={`absolute top-0 bg-black w-screen h-screen py-7 md:px-14 px-5 newTransition ${activeBurger ? 'md:left-0 right-0' : 'md:-left-[110%] -right-[110%]'}`}>
                <button className="w-full flex sm:justify-start justify-end" onClick={() => { setActiveBurger(false) }}>
                    <FaTimes className='text-white w-10 h-10' />
                </button>
                <div className='w-full h-full flex justify-center items-center [&>nav>ul]:flex-col [&>nav>ul]:gap-y-14 [&>nav>ul]:text-center'>
                    <BurgerMainNavbar isSelected={() => setActiveBurger(false)} />
                </div>
            </div>
        </>
    )
}
export default BurgerNavbar