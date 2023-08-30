import React from 'react'
import { BsSearch } from 'react-icons/bs'
import feng from '../assets/images/feng.png'

const ServicesPage = () => {
  return (
    <div className='flex mx-10 my-5 justify-center h-[70vh] flex-col gap-3'>
      <div className='relative'>
        <input type="text-white" className='rounded-xl w-full p-2 bg-[#2A3254]' placeholder='Search Anything....' />
        <div className='absolute text-white text-xl top-3 right-2 cursor-pointer'>
          <BsSearch />
        </div>
      </div>
      <div>
        <img src={feng} alt="feng" className='rounded-2xl' />
      </div>
      <div className='flex justify-end md:text-xl text-md'>
        <button className='bg-indigo-900 text-white font-az md:px-2 md:py-1 px-1 py-0 rounded-xl hover:bg-indigo-700'>Create</button>
      </div>
    </div>
  )
}

export default ServicesPage
