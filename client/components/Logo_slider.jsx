import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Logo_slider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, 
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="logo-1">
  
          </div>
          <div className="logo-2">
            
          </div>
          <div className="logo-3">
            
          </div>
          <div className="logo-4">
            
          </div>
          <div className="logo-5">
            
          </div>
          <div className="logo-6">
            
          </div>
          <div className="logo-7">
            
          </div>
          <div className="logo-8">
  
          </div>
          <div className="logo-9">
            
          </div>
          <div className="logo-10">
            
          </div>
          <div className="logo-11">
            
          </div>
          <div className="logo-12">
            
          </div>
          <div className="logo-13">
            
          </div>
          <div className="logo-14">
            
          </div>
          <div className="logo-15">
            
          </div>
          <div className="logo-16">
            
          </div>
        </Slider>
      </div>
    );
  }
}