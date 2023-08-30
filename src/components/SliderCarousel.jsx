import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import swi from '../assets/images/swi.png'

const SliderCarousel = () => {
  return (
    <Swiper 
      modules={[ Pagination, Autoplay ]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(Swiper) => console.log(Swiper)}
    >
      <SwiperSlide> 
        <img src={swi} alt="tevez" />
      </SwiperSlide>
      <SwiperSlide> 
        <img src={swi} alt="tevez" />
      </SwiperSlide>
      <SwiperSlide> 
        <img src={swi} alt="tevez" />
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderCarousel
