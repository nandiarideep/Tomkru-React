import React from 'react'

const AboutUs = () => {
    return (
        <div className='min-w-full'>
            <div className='bg-[#101b4b] h-[69px] flex justify-center items-center font-az'>
                <h1 className='text-white md:text-[25px] text-[20px]'>
                    WELCOME TO OUR <span className='text-[#f4f438]'>INFO CENTRE</span>
                </h1>
            </div>
            <div className='flex justify-center items-center flex-col md:mt-[5rem] mt-[3rem] mx-10'>
                <h1 className='text-[#f4f438] md:text-[3rem] text-[2rem]'>About Us</h1>
                <div className='bg-[#251d41] min-h-full mx-10 container flex justify-center rounded-tl-[2rem] rounded-br-[2rem] m-[5rem] flex-wrap'>
                    <p className='m-[2rem] text-white md:text-[1.5rem] text-[1rem]'>
                        Tomkru World (MCW) is a leading online gaming website, offering sports betting, online casino, and online games. We have been serving the Asia Pacific market since 2015. We are fully licensed and regulated in various jurisdictions as stated in the Terms and Conditions and MCW operates strictly within these regulations.
                        The safe and private environment and the integrity of our products are the fundamental drivers of the MCW online gaming experience. We have the most advanced security measures available and are continually auditing our games and processes to ensure a totally safe and fair internet gambling experience. We keep all your information confidential, and we will never share it or sell it to third parties, except in accordance with our Privacy Policy.
                        We strive to offer tShe best prices whilst covering a wide variety of sporting markets and other worldwide sporting events. We provide a wide variety of live games and slot games in our casino. At MCW we promise you will enjoy the highest class of online gaming entertainment of the world.
                        With 24 hour live customer support available 7 days per week, our highly trained and friendly staff will ensure that any queries are dealt with and resolved quickly, politely, and efficiently.
                        Our mission is to provide the best online gambling experience for responsible players, please feel free to contact us by phone or email with your comments or suggestions.
                        We offer a variety of secure and easy payment methods for your convenience. We adhere to “know your customer (KYC)” and anti-money laundering (AML) policies and cooperate with the third party financial and regulatory authorities to ensure the highest standards of compliance.
                    </p>
                </div>
                <hr className='bg-white min-w-full h-[3px] mb-5 flex justify-center' />
                <div className='flex min-w-full justify-center gap-5 items-center text-white md:text-[1.5rem] text-[.7rem] font-az'>
                    <h2>Tomkru world</h2>
                    <h2><span className='text-[#4b4991]'>©</span> 2023 all rights reserved.</h2>
                </div>
                <hr className='bg-white min-w-full h-[3px] mt-5 mb-20 flex justify-center' />
            </div>
        </div>
    )
}

export default AboutUs
