import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:h-[150px] min-h-full min-w-full bg-[#0a082cee] text-white flex flex-col font-az'>
      <hr className='bg-[#FAFF00] p-[1px] min-w-full'/>
      <div className='md:flex md:justify-between md:items-center m-3'>
        <h1 className='md:text-[3.5rem] text-[2rem] font-extrabold flex justify-center'>Tomkru</h1>
        <div className='flex flex-col items-center md:text-[1rem] text-[.7rem]'>
          <Link to='/AboutUs'>
            <h2 className='text-[#f4f438] cursor-pointer'>responsible gaming | about us |</h2>
          </Link>
          <h3>© 2023 MCW Copyrights. All Rights Reserved </h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
