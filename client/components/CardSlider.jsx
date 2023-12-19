"use client";
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
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
          <div className="slideDiv">
            <div className="card sliderCard">
              <img src="/inc.png" className='img-fluid' alt="" />
              <div className="card-body">
                <h5>INC. 5000</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="slideDiv">
            <div className="card sliderCard">
              <img src="/inc.png" className='img-fluid' alt="" />
              <div className="card-body">
                <h5>INC. 5000</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="slideDiv">
            <div className="card sliderCard">
              <img src="/inc.png" className='img-fluid' alt="" />
              <div className="card-body">
                <h5>INC. 5000</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="slideDiv">
            <div className="card sliderCard">
              <img src="/inc.png" className='img-fluid' alt="" />
              <div className="card-body">
                <h5>INC. 5000</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}