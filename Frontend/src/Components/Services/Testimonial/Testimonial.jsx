import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiStar } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/pagination';
import * as Pagination from 'swiper/core';
// Initialize Swiper core with the required modules

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px] '>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* Your SwiperSlides go here */}
        <SwiperSlide>
          {/* ... */}
        </SwiperSlide>
        <SwiperSlide>
          {/* ... */}
        </SwiperSlide>
        <SwiperSlide>
          {/* ... */}
        </SwiperSlide>
        <SwiperSlide>
          {/* ... */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
