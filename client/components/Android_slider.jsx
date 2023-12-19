"use client";
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Android_slider extends Component {
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
                            <img src="/and-1.png" className="img-fluid" alt="" />
                            <h6>Android App UI and UX</h6>
                            <p>Our top-tier android app designers have hands-on experience working with multiple designing techniques, and tools like Adobe XD, Figma and a lot more to design the most alluring UI/UX for the android application. Our android application development services includes android UI/UX designing as well to give a complete package of services to our clients.</p>
                        </div>
                    </div>
                    <div className="slideDiv">
                        <div className="card">
                            <img src="/and-2.png" className="img-fluid" alt="" />
                            <h6>Android Web Applications</h6>
                            <p>
                                As a leading android app development company we create the most amazing, and feature-rich web applications that help you better connect with your target audience. All of our effective android-web applications are developed keeping the trends in mind so, you always get the most finest quality of application.
                            </p>
                        </div>
                    </div>
                    <div className="slideDiv">
                        <div className="card">
                            <img src="/and-3.png" className="img-fluid" alt="" />
                            <h6>Android App Maintenance</h6>
                            <p>Once any of our designed and developed android applications is deployed, we ensure that no bugs are reported. We do offer android app maintenance service as well, just in case any of our customers require android app maintenance service, we’re there to help you out.</p>
                        </div>
                    </div>
                    <div className="slideDiv">
                        <div className="card">
                            <img src="/and-3.png" className="img-fluid" alt="" />
                            <h6>Android App Maintenance</h6>
                            <p>Once any of our designed and developed android applications is deployed, we ensure that no bugs are reported. We do offer android app maintenance service as well, just in case any of our customers require android app maintenance service, we’re there to help you out.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}