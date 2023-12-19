"use client";
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Logo_slider from '../../../components/Logo_slider';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001"



const page = () => {

    useEffect(() => {
        if ($(window).scrollTop() > 10) {
            $('#header-4').addClass('fixed');
        } else {
            $('#header-4').removeClass('fixed');
        }

        $(".tablinks").on("click", function () {
            $(this).addClass("current").siblings().removeClass("current");
            let s = $(this).data("content");
            $(".display-div").hide();
            $.each($(".display-div"), function (e, i) {
                $(this).hasClass(s) ? $(this).show() : console.log("false");
            });
        });

    }, []);



    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [desc, setDesc] = useState();
    const [file, setFile] = useState("");


    const addProduct = async (e) => {
        e.preventDefault();
        console.log(name, email, phone, desc, file);

        const result = await fetch("http://localhost:3001/mobile-app-development", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, desc, file})
        });

        const response = await result.json();

        if (response.success) {
            alert("User Added Successfully");
        } else {
            alert("Something went wrong");
        }
    };



    return (
        <>
            <header className='mobileHeader'>
                <div className="container">
                    <div className='row'>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <nav style={{ '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")' }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Mobile Apps Development</li>
                                </ol>
                            </nav>
                            <h6>Mobile Apps Development</h6>
                            <h1>Mobile Apps Development Company</h1>
                            <p>We rely on our modernized core to assist startups in bringing their app ideas to life. Our extensive knowledge in harnessing the greatest technology enables us to offer a practical and smooth experience on any device. So, if you are a startup wanting to capitalize on new technologies, we can assist you.</p>
                            <button className='btn'>Let's get started</button>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <form action="/mobile-app-development" method="POST" enctype="multipart/form-data">
                                <h4>Get In Touch <span>With Us!</span></h4>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Full Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Phone Number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Description" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <input type="file" id="file" name="file" class="form-control" onChange={(e) => setFile(e.target.files[0])}/>
                                </div>
                                <div class="mb-3">
                                    <button className='formBtn' onClick={addProduct}>Let’s Connect!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <img src="/dots.png" className='img-fluid' id="mobileDot" alt="" />
            </header>


            <section className='main-section'>
                {/* Our Solution Section */}

                <section className='ourSolution'>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <h6>OUR SOLUTIONS</h6>
                                <p className='mobile-line'></p>
                                <h1>Let Professional <span>Developers</span> Amplify Your <span>Digital</span> Presence With Tailored <span>Mobile Apps Development Services</span></h1>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6" id='colTwo'>
                                <p><span>Nexentis</span> is a leading provider of custom mobile app development services in the USA and other regions. They specialize in creating client-centric online solutions for startups and businesses.</p>
                                <p><span>Nexentis</span> takes pride in developing high-quality mobile apps that are ready to launch, using the best UI, coding, hosting, localization, and other techniques.</p>
                                <button className='btn'>BUILD UP YOUR INDUSTRY SPECIFIC MOBILE APP</button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Mobile Services */}

                <div class="container hoverCard">
                    <div class="content" id='content-1'>
                        <div className='content-div'>
                            <h5>01</h5>
                            <h4>Restaurant Mobile App Development Services</h4>
                        </div>
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-bottom">
                            <span className='content-number'>01</span>
                            <h3 class="content-title">Restaurant Mobile App Development Services</h3>
                            <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque non
                                necessitatibus ab id eius beatae consectetur fuga molestiae ea?. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquam eaque non necessitatibus ab id eius beatae consectetur
                                fuga molestiae ea?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque non.</p>
                        </div>
                    </div>
                    <div class="content" id='content-2'>
                        <div className='content-div'>
                            <h5>02</h5>
                            <h4>Ecommerce Mobile App Development Services</h4>
                        </div>
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-bottom">
                            <span className='content-number'>02</span>
                            <h3 class="content-title">Ecommerce Mobile App Development Services</h3>
                            <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque non
                                necessitatibus ab id eius beatae consectetur fuga molestiae ea?. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquam eaque non necessitatibus ab id eius beatae consectetur
                                fuga molestiae ea?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque non.</p>
                        </div>
                    </div>
                    <div class="content" id='content-3'>
                        <div className='content-div'>
                            <h5>03</h5>
                            <h4>Travelling Mobile App Development Services</h4>
                        </div>
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-bottom">
                            <span className='content-number'>03</span>
                            <h3 class="content-title">Travelling Mobile App Development Services</h3>
                            <p class="content-text">Crafting top-tier and personalized applications with an exceptional touch of perfection is our forte. In our capacity as an esteemed android app development company, we are unswervingly dedicated to delivering unparalleled excellence through our cutting-edge and state-of-the-art android development services, catering to a global clientele.</p>
                        </div>
                    </div>
                    <div class="content" id='content-4'>
                        <div className='content-div'>
                            <h5>04</h5>
                            <h4>Medical Mobile App Development Services</h4>
                        </div>
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-bottom">
                            <span className='content-number'>04</span>
                            <h3 class="content-title">Medical Mobile App Development Services</h3>
                            <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque non
                                necessitatibus ab id eius beatae consectetur fuga molestiae ea?. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquam eaque non necessitatibus ab id eius beatae consectetur
                                fuga molestiae ea?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque non.</p>
                        </div>
                    </div>
                </div>




                {/* Mobile Benefits */}

                <section className=' mobileBenefit'>
                    <img src="scroll-dot-1.png" alt="" className='mobile-dot-img' />
                    <div className="container">
                        <h6>Client Benifits</h6>
                        <p className='mobile-line'></p>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <h1><span>Benefits</span> Of Working With A Professional <span>Company</span></h1>
                                <p>Research suggests that 45% of consumers make judgments about a company, based on its Mobile Apps While everyone knows how to develop Mobile App these days, thanks to the dozens of free tools and tutorials out there,</p>
                                <p><span>Nexentis</span> focuses on building Mobile Apps that are Apps Store optimized and able to drive conversions. As experts in custom Mobile Application development services, our end-to-end App solutions ensure your Mobile Apps meets your business objectives.</p>
                                <button className='btn'>BUILD UP YOUR INDUSTRY SPECIFIC MOBILE APP</button>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <ul>
                                    <li><img src="/Vector.png" alt="" className='img-fluid' /> Improved User Experience</li>
                                    <li><img src="/Vector.png" alt="" className='img-fluid' /> Intuitive User Interface</li>
                                </ul>
                                <ul>
                                    <li><img src="/Vector.png" alt="" className='img-fluid' /> Automotive Applications</li>
                                    <li id='listt'><img src="/Vector.png" alt="" className='img-fluid' style={{ marginLeft: '12px' }} /> Conversion Rate Optimization</li>
                                </ul>
                                <ul>
                                    <li><img src="/Vector.png" alt="" className='img-fluid' /> Successful Digital Rebranding & Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Small Slider Section */}

                <div className="container smallSlider">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="card card-1">
                                <h3>Testimonials</h3>
                                <p className='text-2'></p>
                                <h1><span>Customer</span> Reviews</h1>
                                <p>We believe in the power of results. Here are a few of the businesses we've helped succeed.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="card card-2">
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="/qoute.png" class="qoute" alt="..." />
                                            <p>Quick delivery and consistent professionalism made for a smooth design and developmentprocess. The team’s ability to grasp complex requirements set them apart from othervendors. Customers can expect commitment and flexibility when partnering with Nexentis.
                                            </p>
                                            <div className="row pt-3">
                                                <div className="col-2">
                                                    <img src="/user.png" className="user" alt="" />
                                                </div>
                                                <div className="col">
                                                    <h5>Kevin Smith</h5>
                                                    <p>Founder, Metabarc Inc</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/qoute.png" class="qoute" alt="..." />
                                            <p>Quick delivery and consistent professionalism made for a smooth design and developmentprocess. The team’s ability to grasp complex requirements set them apart from othervendors. Customers can expect commitment and flexibility when partnering with Nexentis.
                                            </p>
                                            <div className="row pt-3">
                                                <div className="col-2">
                                                    <img src="/user.png" className="user" alt="" />
                                                </div>
                                                <div className="col">
                                                    <h5>Kevin Smith</h5>
                                                    <p>Founder, Metabarc Inc</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/qoute.png" class="qoute" alt="..." />
                                            <p>Quick delivery and consistent professionalism made for a smooth design and developmentprocess. The team’s ability to grasp complex requirements set them apart from othervendors. Customers can expect commitment and flexibility when partnering with Nexentis.
                                            </p>
                                            <div className="row pt-3">
                                                <div className="col-2">
                                                    <img src="/user.png" className="user" alt="" />
                                                </div>
                                                <div className="col">
                                                    <h5>Kevin Smith</h5>
                                                    <p>Founder, Metabarc Inc</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Testimonials Section */}

                <section className='testiSec'>
                    <div className="container">
                        <div className="row">
                            <div className="col-10 m-auto">
                                <h6>Our Technology Stack</h6>
                                <h1>The <span>Technology</span> Stack Our Cross <br /> Platform <span>App Developers</span> Use!</h1>
                                <p>Our cross platform development comprises trending technologies, and frameworks that are necessary for building the most alluring application. All of our applications are built keeping clients in mind, and we always try our best to bring the best experience for the end users.</p>
                            </div>
                        </div>
                        <Logo_slider />
                    </div>
                    <img src="/dotted-line.png" className='dotted-line' alt="" />
                    <button className='btn'>Let’s get started</button>
                </section>
            </section>



            {/* Scroll Section */}

            <section class="sec-09">
                <img src="/scroll-dot-1.png" alt="" className='scroll-dot-1' />
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="ser-feature">
                                <h2>Benefits Of Working With A Professional Company</h2>
                                <p>Research suggests that 45% of consumers make judgments about a company, based on its Mobile Apps While everyone knows how to develop Mobile App these days, thanks to the dozens of free tools and tutorials out there,</p>
                                <p>Nexentis focuses on building Mobile Apps that are Apps Store optimized and able to drive conversions. As experts in custom Mobile Application development services, our end-to-end App solutions ensure your Mobile Apps meets your business objectives</p>
                                <button className='btn'>BUILD UP YOUR INDUSTRY SPECIFIC MOBILE APP</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-6 offset-lg-2 ser-item">
                            <div class="service-list">
                                <img src="/uil_android.png" class="
                             img-fluid" alt="icon" />
                                <div class="number">01</div>
                                <h5>App Development Consultation</h5>
                                <p>Crafting top-tier and personalized applications with an exceptional touch of perfection is our forte. In our capacity as an esteemed android app development company, we are unswervingly dedicated to delivering unparalleled excellence through our cutting-edge and state-of-the-art android development services, catering to a global clientele.
                                </p>
                            </div>
                            <div class="service-list">
                                <img src="/scroll-icon-2.png" class="img-fluid"
                                    alt="icon" />
                                <div class="number">02</div>
                                <h5>Architecture & UI/UX Design</h5>
                                <p>Crafting top-tier and personalized applications with an exceptional touch of perfection is our forte. In our capacity as an esteemed android app development company, we are unswervingly dedicated to delivering unparalleled excellence through our cutting-edge and state-of-the-art android development services, catering to a global clientele.
                                </p>
                            </div>
                            <div class="service-list">
                                <img src="/mobile-development.png" class="img-fluid "
                                    alt="icon" />
                                <div class="number">03</div>
                                <h5>Android App Development</h5>
                                <p>Our android app development team instills life in the user interface and app screens by
                                    adding functionality and creating fascinating app features. Our agile development
                                    methodology and DevOps culture ensure a breach-free backend and high-quality results within
                                    the deadline. </p>
                            </div>
                            <div class="service-list">
                                <img src="/test.png" class="img-fluid"
                                    alt="icon" />
                                <div class="number">04</div>
                                <h5>Testing & Deployment</h5>
                                <p>Our testing and deployment services ensure your android app goes through a series of
                                    automated tests where we double-check the app for any loopholes and limitations in
                                    functionality before submitting and deploying the app on the Google Play Store. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/scroll-dot-2.png" alt="" className='scroll-dot-2' />
            </section>





            {/* Case Studies Section */}

            <section class="sec-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-10">
                            <h2><span className='spanText'>Streamlining</span> The Process To Hire Professional Mobile <span className='spanText'>App Developers</span></h2>
                            <h3>Best Mobile <span className='spanText'>App Development Agency</span> Picking The Best Of The Talents</h3>
                            <p className='desc'>Our Mobile App development services are topnotch and we follow a rigorous process to deliver the best to our clients. Our core team of cross app developers are hired by the process we’re going to mention below;
                            </p>
                        </div>
                        <div class="col-12 col-md-12 mt-lg-5 d-md-flex">
                            <div style={{ display: 'block' }} class=" display-div solution-content one">
                                <div class="subtitle">01</div>
                                <h4>Requirements Gathering</h4>
                                <p class="text">
                                    The first step to hire an iOS app developer is to get the requirements that we’re looking for in our ideal candidate. To speed up the process, we list down all the qualifications, experience, and requirements before we actually start the hunt for the iOS app developer.
                                </p>
                            </div>
                            <div class="display-div solution-content two ">
                                <div class="subtitle">02</div>
                                <h4>Initial Screening</h4>
                                <p class="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam aliquid ullam, dicta consequuntur saepe quam id animi neque nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil incidunt? Perferendis iure fugit mollitia ab! Delectus dicta earum nostrum.
                                </p>
                            </div>
                            <div class=" display-div solution-content three">
                                <div class="subtitle">03</div>
                                <h4>Interview & Test</h4>
                                <p class="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam aliquid ullam, dicta consequuntur saepe quam id animi neque nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil incidunt? Perferendis iure fugit mollitia ab! Delectus dicta earum.
                                </p>
                            </div>
                            <div class=" display-div solution-content four">
                                <div class="subtitle">04</div>
                                <h4>Seamless Onboarding</h4>
                                <p class="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam aliquid ullam, dicta consequuntur saepe quam id animi neque nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil incidunt? Perferendis iure fugit mollitia ab! Delectus dicta.
                                </p>
                            </div>
                            <div class="solution-menu">
                                <ul>
                                    <li data-content="one" class="tablinks current"><span>Requirements Gathering</span></li>
                                    <li data-content="two" class="tablinks"><span>Initial Screening</span></li>
                                    <li data-content="three" class="tablinks"><span>Interview & Test</span></li>
                                    <li data-content="four" class="tablinks"><span>Seamless Onboarding</span></li>
                                </ul>
                            </div>
                            <div style={{ display: 'block' }} class=" display-div solution-img one">
                                <img src="/case-1.png" alt="" />
                            </div>
                            <div class=" display-div solution-img two">
                                <img src="/case-1.png" alt="" />
                            </div>
                            <div class=" display-div solution-img three">
                                <img src="/case-1.png" alt="" />
                            </div>
                            <div class=" display-div solution-img four">
                                <img src="/case-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* FAQ'S Section */}

            <section className='faqsSec'>
                <div className="container">
                    <h1>Frequently <span>Asked Questions?</span></h1>
                    <hr />
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Q: What is mobile App Development?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Mobile App development comprises the development techniques that create applications that can run on both ios and android platform. It allows users to get with the target audience easily, regardless of the type of interface their application has, like a macbook, window’s laptop or any web application. All of our professional cross platform application developers are top-notch, and always deliver the most amazing results backed with systematic strategies for a memorable user experience.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Q: How can I hire a professional mobile app developer?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Q: How much does Mobile app development cost?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Q: Do  Mobile applications make money?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Discuss Section */}

            <section className='mobileDiscuss'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p>Ready to Get Started? Hire Experienced <b>Talent Now!</b></p>
                            <a href="" className='btn'>Let’s Connect</a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="/laptop-design-2.png" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default page