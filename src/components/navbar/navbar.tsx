'use client'

import MainNavbar from './main-navbar'
import BurgerNavbar from './burgerNavbar'

const Navbar = () => {
    return (
        <header className='w-full bg-black flex justify-center items-center fixed z-30 py-7 sm:px-14 px-5'>
            <div className='sm:ml-0 sm:mr-auto sm:order-first order-last ml-auto'>
                <BurgerNavbar />
            </div>
            <div className=''>
                <MainNavbar />
            </div>
        </header>
    )
}

export default Navbar