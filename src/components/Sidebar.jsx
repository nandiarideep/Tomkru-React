import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { FaCog, FaUserAlt } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import ell from '../assets/images/ell.png'

const Sidebar = () => {

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <BiSolidDashboard />
        },
        {
            path: "/ServicesPage",
            name: "Services",
            icon: <FaCog />
        },
        {
            path: "/ActivitiesPage",
            name: "Activities",
            icon: <BsFillBookmarkFill />
        },
        {
            path: "/ProfilePage",
            name: "Profile",
            icon: <FaUserAlt />
        }
    ]

    return (
        <div className='min-h-full md:w-[300px] w-[240px] bg-[#2A3254] font-az text-white'>
            <div>
                <img src={ell} alt="user" />
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index}>
                        <div className='flex md:justify-around justify-center items-center p-2 md:text-2xl text-xl my-6 hover:bg-[#0a082cee] hover:rounded-tl-[30px] hover:rounded-bl-[30px]'>
                            <div>{item.icon}</div>
                            <div className='md:block hidden'>{item.name}</div>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Sidebar
