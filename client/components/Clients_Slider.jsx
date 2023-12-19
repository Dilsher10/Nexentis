"use client";
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Clients_Slider extends Component {
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
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}