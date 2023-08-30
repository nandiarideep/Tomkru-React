import React from "react"
import gr1 from '../assets/images/gr1.png'
import gr2 from '../assets/images/gr2.png'
import gr3 from '../assets/images/gr3.png'

const DashboardPage = () => {

  return (
    <div className='flex mx-5 my-5 justify-center'>
      <div className="gap-3 flex flex-col items-center flex-wrap justify-center">
        <img src={gr1} alt="" height={200} width={700} />
        <img src={gr2} alt="" height={200} width={700} />
        <img src={gr3} alt="" height={320} width={320} />
      </div>
    </div>
  )
}

export default DashboardPage
