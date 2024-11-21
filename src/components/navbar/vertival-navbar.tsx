import React from 'react'
import MainNavbar from './main-navbar'

const VerticalNavbar = () => {
  return (
    <div className='fixed w-full h-screen flex md:justify-start justify-end items-center z-20'>
      <div className='h-10 absolute flex items-center md:-rotate-90 xl:-ml-28 md:-ml-40 -mr-[155px] rotate-90 -mb-60'>
        <MainNavbar orientation='vertical' />
      </div>
    </div>
  )
}

export default VerticalNavbar