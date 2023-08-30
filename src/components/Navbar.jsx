import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  // Time State
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(updateTime, 1000);

  // Hamburger State
  const [active, setActive] = useState(false)

  return (
    <>
      <div className='md:bg-black md:h-[48px] md:flex text-white justify-between items-center font-az hidden'>
        <div className='mx-[3rem]'>{currentTime}</div>
        <div className='flex gap-5 mx-[3rem]'>
          <h3 className='cursor-pointer'>24*7 Support</h3>
          <h3 className='cursor-pointer'>Facebook</h3>
          <h3 className='cursor-pointer'>Email</h3>
        </div>
      </div>
      <div className='h-[77px] min-w-full bg-[#191E32] text-white flex justify-between items-center font-az'>
        <Link to='/'>
          <h1 className='mx-10 text-3xl cursor-pointer font-extrabold'>TOMKRU</h1>
        </Link>
        <Link to="/LoginPage">
          <h1 className='md:text-2xl mx-10 cursor-pointer md:block hidden'>LOGIN</h1>
        </Link>
        <div className='block md:hidden cursor-pointer text-3xl duration-500' onClick={() => setActive(!active)}>
          <div className='mx-10'>{active ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
