import React from 'react'
import Marquee from 'react-fast-marquee'

const VerScroll = () => {
    return (
        <div>
            <Marquee pauseOnHover className='m-6 cursor-pointer' speed={100} direction='up'>
                <div className='bg-[#2A3254] text-white p-2 rounded-2xl flex flex-col gap-2'>
                    <h1>Player ****325</h1>
                    <h2>Win <span className='text-[#e9e91e]'>₹45142</span></h2>
                    <button className='bg-[#e9e91e] rounded-2xl p-2 text-black'>Play It</button>
                </div>
                <div className='bg-[#2A3254] text-white p-2 rounded-2xl flex flex-col gap-2'>
                    <h1>Player ****325</h1>
                    <h2>Win <span className='text-[#e9e91e]'>₹45142</span></h2>
                    <button className='bg-[#e9e91e] rounded-2xl p-2 text-black'>Play It</button>
                </div>
            </Marquee>
        </div>
    )
}

export default VerScroll
