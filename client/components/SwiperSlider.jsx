"use client";

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SwiperSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="card swiperCard">
            <video src="" type="video/mp4" controls></video>
            <div className="card-body">
              <p>"I had the privilege of collaborating with Nexentis on the creation of our fitness application, and I am genuinely amazed by the quality of the support they delivered. Their team exhibited exceptional expertise, professionalism, and a strong commitment to ensuring our app was developed to the utmost quality."</p>
            </div>
          </div>

          <div className="card swiperCard">
            <video src="" type="video/mp4" controls></video>
            <div className="card-body">
              <p>"Working alongside Nexentis for our real estate project has been a remarkable experience. Their level of service exceeded our expectations. Their team demonstrated extensive knowledge, professionalism, and unwavering dedication to ensuring our real estate platform was crafted to perfection."</p>
            </div>
          </div>

          <div className="card swiperCard">
            <video src="" type="video/mp4" controls></video>
            <div className="card-body">
              <p>"I had the opportunity to partner with Nexentis on our e-commerce website, and I'm thoroughly impressed with the support they provided. Their team showcased exceptional expertise, a high degree of professionalism, and a strong commitment to delivering a top-notch e-commerce solution."</p>
            </div>
          </div>

          <div className="card swiperCard">
            <video src="" type="video/mp4" controls></video>
            <div className="card-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente perferendis iusto porro. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, voluptates!. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}