'use client'

import MainNavbar from './main-navbar'
import BurgerNavbar from './burgerNavbar'

const Navbar = () => {
    return (
        <header className='w-full h-20 md:backdrop-blur-sm flex justify-center items-center fixed z-30 xl:px-20 md:px-5 px-5'>
            <div className='md:ml-0 md:mr-auto md:order-first order-last ml-auto'>
                <BurgerNavbar />
            </div>
            <div className='md:block hidden'>
                <MainNavbar orientation='horizontal' />
            </div>
        </header>
    )
}

export default Navbar