"use client";

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
            slidesToShow: 5,
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
                    <div>
                        <img src="/aws.png" alt="" className="img-fluid" />
                    </div>
                    <div>
                        <img src="/veeam.png" alt="" className="img-fluid" />
                    </div>
                    <div>
                        <img src="/google_cloud.png" alt="" className="img-fluid" />
                    </div>
                    <div>
                        <img src="/alibaba.png" alt="" className="img-fluid" />
                    </div>
                    <div>
                        <img src="/puppet.png" alt="" className="img-fluid" />
                    </div>
                </Slider>
            </div>
        );
    }
}