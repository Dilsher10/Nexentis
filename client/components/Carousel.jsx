"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Carousel = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="container laptopSlider">
                    <img src="/tablet-slider.png" className='img-fluid' alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container laptopSlider">
                    <img src="/tablet-slider.png" className='img-fluid' alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container laptopSlider">
                    <img src="/tablet-slider.png" className='img-fluid' alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel;