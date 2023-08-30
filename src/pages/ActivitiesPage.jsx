import React from 'react'
import diamond from '../images/diamond.png'

const ActivitiesPage = () => {
  return (
    <div className='flex m-10 justify-center h-[70vh] flex-col'>
      <div className='bg-[#2A3254] md:flex items-center justify-center gap-5 rounded-tl-3xl rounded-br-3xl'>
        <div className='m-5'>
          <img src={diamond} alt="dia" height={250} width={250} className='rounded-[50%]'/>
        </div>
        <div className='font-az md:text-2xl text-lg text-white m-5'>
          <h1>Diamond Party</h1>
          <h1 className='text-[#edf763]'>Win ₹7500/-</h1>
          <h1>THU, 27 July</h1>
        </div>
      </div>
    </div>
  )
}

export default ActivitiesPage
