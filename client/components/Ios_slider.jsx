"use client";
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Ios_slider extends Component {
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
                    <div className="card">
                    <img src="/apple.png" className="img-fluid" alt="" />
                    <h6>iOS App UI and UX Designing</h6>
                    <p>We have a team of professional iOS app UI and UX designers who not only understand the requirements of the clients, but also design interfaces that are top-notch, and alluring. All of our designed iOS screens are easy to use, and share a seamless user experience. Our iphone app developers then ignite the designs into exceptional iOS applications – packed with amazing visuals, and seamless user interface for a smooth use.</p>
                </div>
                    </div>
                    <div className="slideDiv">
                    <div className="card">
                    <img src="/app-store.png" className="img-fluid" alt="" />
                    <h6>iOS Application Development</h6>
                    <p>
                        Nexentis, a top iOS application development company offers the best and professional iOS app developers who not only have the thirst to learn new technologies, but also deliver exceptional user experience. All of our designed, and developed iOS applications are top-notch, and never leave a loophole behind. With the optimal use of technology frameworks for native iOS applications, like Flutter, React Native, and a lot more to bring the vision of our customers to life.
                    </p>
                </div>
                    </div>
                    <div className="slideDiv">
                    <div className="card">
                    <img src="/web.png" className="img-fluid" alt="" />
                    <h6>iOS Web Application Development</h6>
                    <p>Our top-tier iOS app developers have the proficiency to develop web applications of all niches with alluring visuals, and seamless user experience. We always give prior importance to our customers, and that is why, we’ve managed to create a breathtaking impression in the digital realm.</p>
                </div>
                    </div>
                    <div className="slideDiv">
                    <div className="card">
                    <img src="/web.png" className="img-fluid" alt="" />
                    <h6>iOS Web Application Development</h6>
                    <p>Our top-tier iOS app developers have the proficiency to develop web applications of all niches with alluring visuals, and seamless user experience. We always give prior importance to our customers, and that is why, we’ve managed to create a breathtaking impression in the digital realm.</p>
                </div>
                    </div>
                </Slider>
            </div>
        );
    }
}