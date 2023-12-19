"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="TestiDiv">
                    <p className='TestiText'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil tempore ducimus officiis distinctio. Itaque eius deserunt error amet obcaecati vel, quod architecto fugiat voluptatibus? Totam tenetur aperiam veniam non."</p>
                    <div className="row mt-5">
                        <div className="col-2">
                            <img src="./profile.jpg" alt="" className='img-fluid' />
                        </div>
                        <div className="col">
                            <h5>Client Name</h5>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="TestiDiv">
                    <p className='TestiText'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil tempore ducimus officiis distinctio. Itaque eius deserunt error amet obcaecati vel, quod architecto fugiat voluptatibus? Totam tenetur aperiam veniam non."</p>
                    <div className="row mt-5">
                        <div className="col-2">
                            <img src="./profile.jpg" alt="" className='img-fluid' />
                        </div>
                        <div className="col">
                            <h5>Client Name</h5>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="TestiDiv">
                    <p className='TestiText'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil tempore ducimus officiis distinctio. Itaque eius deserunt error amet obcaecati vel, quod architecto fugiat voluptatibus? Totam tenetur aperiam veniam non."</p>
                    <div className="row mt-5">
                        <div className="col-2">
                            <img src="./profile.jpg" alt="" className='img-fluid' />
                        </div>
                        <div className="col">
                            <h5>Client Name</h5>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Testimonial;