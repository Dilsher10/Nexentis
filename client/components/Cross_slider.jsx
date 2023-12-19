"use client";
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Cross_slider extends Component {
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
                            <h6>iOS App Development Services</h6>
                            <p>Our cross platform app development services include, ios app development as well which comprises the optimal use of ios based technologies, and frameworks like, Flutter, Swift, React Native, XCode, and Objective-C for a feature-rich application. Our professional cross platform app developers always give you the edge to explore an application’s core features, and escalate your app growth by 2x.</p>
                        </div>
                    </div>
                    <div className="slideDiv">
                        <div className="card">
                            <img src="/android.png" className="img-fluid" alt="" />
                            <h6>Android Application Development</h6>
                            <p>
                                You can turn your epic app ideas into reality with our cross platform app development services which includes android app development as well. All of our clients who are seeking for android app development can come to us, and we will do the development for them. Our business analysts will connect with them to get the information regarding the application and deliver a feature-rich application.
                            </p>
                        </div>
                    </div>
                    <div className="slideDiv">
                        <div className="card">
                            <img src="/web.png" className="img-fluid" alt="" />
                            <h6>Web Application Development</h6>
                            <p>Our web app development services are also a core competency of our services, which includes the optimal selection of web hosting, frameworks, and technologies to create the most alluring, and state of the art web applications.</p>
                        </div>
                    </div>
                    <div className="slideDiv">
                        <div className="card">
                            <img src="/web.png" className="img-fluid" alt="" />
                            <h6>Web Application Development</h6>
                            <p>Our web app development services are also a core competency of our services, which includes the optimal selection of web hosting, frameworks, and technologies to create the most alluring, and state of the art web applications.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}