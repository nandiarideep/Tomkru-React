import React from 'react'
import gam from '../assets/images/gam.png'
import { AiFillHome, AiFillClockCircle } from 'react-icons/ai'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import SliderCarousel from '../components/SliderCarousel'
import VerScroll from '../components/VerScroll'

const HomePage = () => {
  return (
    <div className='min-h-full min w-full bg-[#070e2b]'>
      <div className='bg-[#2A3254] lg:h-[75px] min-h-full min-w-full justify-center flex items-center flex-wrap'>
        <ul className='lg:flex hidden text-white uppercase text-xl items-center gap-12 m-1'>         
          <li className='cursor-pointer hover:text-gray-300 duration-200'><AiFillHome /></li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>sports</li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>casino</li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>slot</li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>table</li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>lottery</li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>arcade</li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>promotions</li>
          <li className='cursor-pointer hover:text-gray-300 duration-200'>vip</li>
        </ul>
      </div>
      <div>
        <SliderCarousel />
      </div>
      <div className='min-h-full flex flex-col justify-center'>
        <div className='md:h-[78px] h-[50px] rounded-3xl rounded-br-none bg-[#2A3254] flex items-center justify-between mt-10 mx-10 '>
          <p className='text-[#e9e91e] text-xl mx-3'>Slot</p>
          <div className='flex mx-3 gap-2 text-xl text-white'>
            <p className='text-[#e9e91e]'>JILI</p>
            <p>NetEnt</p>
            <p>PG</p>
            <p>CQ9</p>
          </div>
        </div>
        <div className='mt-10 mx-10 min-h-full flex'>
          <img src={gam} className='rounded-3xl' alt="" />
          {/* <div className=''>
            <VerScroll />
          </div> */}
        </div>
        <div className='mt-10 m-10 min-h-full bg-[#251d41] rounded-tr-3xl rounded-bl-3xl'>
          <div className='m-10 md:text-xl'>
            <div className='h-full w-full my-5 md:flex items-center md:justify-center text-white text-[15px] cursor-pointer'>
              <div className='flex gap-3 items-center'>
                <div className='text-[5rem]'>
                  <AiFillClockCircle />
                </div>
                <div>
                  <h1>Customer Support 24/7</h1>
                  <p>Have a Question? Speak To Our Agent Online</p>
                  <h2 className='text-[#e9e91e]'>Contact Us</h2>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='text-[5rem]'>
                  <AiFillClockCircle />
                </div>
                <div>
                  <h1>Customer Support 24/7</h1>
                  <p>Have a Question? Speak To Our Agent Online</p>
                  <h2 className='text-[#e9e91e]'>Contact Us</h2>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='text-[5rem]'>
                  <BsFillJournalBookmarkFill />
                </div>
                <div>
                  <h1>New Member Guide</h1>
                  <p>Check Out FAQ And Guides</p>
                  <h2 className='text-[#e9e91e]'>Check Now</h2>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='text-[5rem]'>
                  <AiFillClockCircle />
                </div>
                <div>
                  <h1>Customer Support 24/7</h1>
                  <p>Have a Question? Speak To Our Agent Online</p>
                  <h2 className='text-[#e9e91e]'>Contact Us</h2>
                </div>
              </div>
            </div>
            <hr className='w-full p-[1px] bg-[#e9e91e]' />
            <h1 className='text-[#e9e91e] mt-10 font-bold'>TomKru World: Cricket Exchange & Casino Sites in India 2022</h1>
            <div className='mt-5 text-white gap-5 flex flex-col'>
              <h1>The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
                but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling
                website will suit your needs most effectively.</h1>
              <h1>The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
                but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling
                website will suit your needs most effectively.</h1>
              <h1>The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
                but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling
                website will suit your needs most effectively.</h1>
              <h1>The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
                but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling
                website will suit your needs most effectively.</h1>
            </div>
          </div>
        </div>
        <hr className='p-[2px] mx-10 my-10 bg-[#e9e91e] ' />
      </div>
    </div>
  )
}

export default HomePage
