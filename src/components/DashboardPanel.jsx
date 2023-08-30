import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import ServicesPage from '../pages/ServicesPage'
import ActivitiesPage from '../pages/ActivitiesPage'
import ProfilePage from '../pages/ProfilePage'

const DashboardPanel = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-full w-full flex'>
        <Sidebar />
        <div className='min-h-full w-full bg-[#0a082cee]'>
          <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/ServicesPage' element={<ServicesPage />} />
            <Route path='/ActivitiesPage' element={<ActivitiesPage />} />
            <Route path='/ProfilePage' element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default DashboardPanel
