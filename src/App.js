import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Routes, Route } from 'react-router-dom'
import DashboardPanel from './components/DashboardPanel'

const App = () => {
  return (
    <div className='bg-[#0a082cee]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUS' element={<AboutUs />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/SignUpPage' element={<SignupPage />} />
      </Routes>
      <Footer />
      {/* <DashboardPanel /> */}
    </div>
  )
}

export default App
