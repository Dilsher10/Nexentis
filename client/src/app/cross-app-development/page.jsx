import React from 'react'
import Slider from '../../../components/CardSlider';
import Cross_slider from '../../../components/Cross_slider';


const page = () => {

    return (
        <>
            <header className='crossHeader'>
                <div className="container">
                    <h1>Cross Platform <span>App <br /> Development</span> Company</h1>
                    <p>Tap into the world of <span>innovation</span> with professional <span>cross platform</span> app developers</p>
                    <div className='headerDiv'>
                        <div>
                            Building a success story everytime we craft a digital solution for our clients. We tend to offer the best cross platform application development to customers, that matches their requirements, and give them the exposure they have been wanting for so long. All of our cross platform app development comprises alluring design, seamless integration, and to-the-point development strategies for a smooth user experience. Our target is to deliver a cross platform application that runs seamlessly on all platforms, both iOS and Android platforms.
                        </div>
                        <a href="" className='btn'>CONNECT WITH US TODAY</a>
                    </div>
                </div>
            </header>


            {/* Slider Section */}

            <div className="container SwiperSec">
                <div className="row">
                    <div className="col-2">
                        <p>Awards & Recognition</p>
                    </div>
                    <div className="col-2">
                        <img src="./swiper-line.png" alt="" />
                    </div>
                    <div className="col-7">
                        <h1>Our Awards & Recognition</h1>
                    </div>
                    <p className='swiperText py-3'>As a leading android application development agency, we’ve managed to create numerous applications of different niches for customers worldwide. We always value quality over quantity, that’s why we’ve managed to attain a strong impression in the digital world.</p>
                    <Slider />
                </div>
            </div>


            {/* Business Section */}

            <div className="container businessSec">
                <h1>Our Business Empowering Cross Platform <span>App Development Services</span></h1>
                <p>Our professional cross platform app development experts have enabled us to create a benchmark in the world of app design and development. Customers usually complain about the compatibility issues which they face with their application however, with our cross platform app development service it’s easier for you to have an application running on all platforms, without any bugs.
                </p>
            </div>


            {/* Cards Slider */}

            <div className="container serviceCard">
                <div className="row">
                    <Cross_slider />
                </div>
            </div>



            {/* Talk To */}

            <section className='talkTo'>
                <a className='btn' href="">Get in Touch us</a>
            </section>


            {/* Tabs Section */}

            <section className='serviceSec'>
                <div className="container-fluid">
                    <h1>Cross Platform Mobile <span>App Development Service</span> For Businesses Of All <span>Kinds</span></h1>
                    <p><span>Nexentis</span> cater to customers of all <span>industries</span>, iving them quality plus <span>innovation</span> </p>
                    <div className='headerDiv'>
                        Our cross platform development strives to cover multiple regions, and a spectrum of industries to bring the most alluring results on the tables of the customers. From the initial strategizing of the activities, to the final deployment of the cross platform application based on multiple technologies and platforms, we take care of the app design and development for a memorable user experience. As a leading cross platform app development company, we are covering multiple industries like;
                    </div>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Restaurant Management Application</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Car Rental iOS Application</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Banking Application Development</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="gaming-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Gaming Application Development</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="insurance-tab" data-bs-toggle="tab" data-bs-target="#insurance-tab-pane" type="button" role="tab" aria-controls="insurance-tab-pane" aria-selected="true">Insurance Application Development</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="fleet-tab" data-bs-toggle="tab" data-bs-target="#fleet-tab-pane" type="button" role="tab" aria-controls="fleet-tab-pane" aria-selected="false">Fleet Management Application Development</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="ecommerce-tab" data-bs-toggle="tab" data-bs-target="#ecommerce-tab-pane" type="button" role="tab" aria-controls="ecommerce-tab-pane" aria-selected="false">Ecommerce App Development</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="false">Health Application Development</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="booking-tab" data-bs-toggle="tab" data-bs-target="#booking-tab-pane" type="button" role="tab" aria-controls="booking-tab-pane" aria-selected="false">Booking & Ticketing Application Development </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/mobile-image.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="gaming-tab-pane" role="tabpanel" aria-labelledby="gaming-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="insurance-tab-pane" role="tabpanel" aria-labelledby="insurance-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="fleet-tab-pane" role="tabpanel" aria-labelledby="fleet-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="ecommerce-tab-pane" role="tabpanel" aria-labelledby="ecommerce-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="health-tab-pane" role="tabpanel" aria-labelledby="health-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="booking-tab-pane" role="tabpanel" aria-labelledby="booking-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/cross-mobile.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>




            {/* Book Consultation */}

            <section className='talkTo'>
                <a className='btn' href="">Get in Touch Us</a>
            </section>



            {/* Process Section */}

            <section className='serviceSec'>
                <div className="container">
                    <h1><span>Streamlining</span> The Process To Hire Professional Cross Platform <span>App Developers</span></h1>
                    <p><span>Nexentis</span> cater to customers of all <span>industries</span>, iving them quality plus <span>innovation</span> </p>
                    <div className='headerDiv'>
                        Our cross platform development services are topnotch and we follow a rigorous process to deliver the best to our clients. Our core team of cross app developers are hired by the process we’re going to mention below;
                    </div>
                </div>
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




            {/* Call Now */}

            <section className='talkTo'>
                <a className='btn' href="">Get in Touch Us</a>
            </section>



            {/* Benefits Section */}

            <div className="container benefitSec">
                <h1><span>Benefits</span> Of Working With A Professional Cross Platform <span>Application Development Company</span></h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p>As a leading cross platform app development company, our core expertise lies in the excellent building of web applications, along with seamless user experience that make the customers crave more for the services. We have extended our expertise and level of work beyond just normal devices like smartphones. Our cross platform application development portfolio showcases the level of proficiency, and positive feedback we’ve got from our clients, and how much value we put in every project. Our team of professional cross platform application developers always think beyond perfection that is why we’ve managed to attain a strong image in the digital market.</p>
                        <p>Our comprehensive approach to cross platform application development embraces various facets of the cross platforms ecosystem. This includes not only smartphones but also Android tablets, iOS applications, iOS tablets. Macbooks, Android Wear, and Android TV. Here’s a breakdown of our cross platform app development apart from ordinary application:</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-between">
                        <ul>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                        </ul>
                        <ul>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                        </ul>
                    </div>
                </div>
            </div>




            {/* Talk To Section */}


            <section className='talkTo'>
                <a className='btn' href="">Get in Touch Us</a>
            </section>



            {/* Working Section */}

            <div className="container workingSec">
                <h1>Benefits Of <span>Working</span> With A Professional Cross Platform <span>Application Development</span> Company</h1>
                <p className='text-1'>As a team of professionals, and known in the industry for cross platform  application development, we ensure our clients that the developed application will have all the necessary features that yields success, and utmost satisfaction for them.</p>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card card-1">
                            <h3>Development Process Transparency</h3>
                            <p className='text-2'>We always keep the clients in the loop to let them know about the happenings within the application, and how far we’ve gone from the initial conceptualization to the final delivery of the cross platform application.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card card-2">
                            <h3>Development Process Transparency</h3>
                            <p className='text-2'>We always keep the clients in the loop to let them know about the happenings within the application, and how far we’ve gone from the initial conceptualization to the final delivery of the cross platform application.</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Why Choose us */}

            <section className='whyChoose'>
                <div className="container">

                    <h1>Why Choose Us For Your Cross <span>App Development Services?</span></h1>

                    <p>Nexentis has been ruling the world of app and web application for a decade, and it’s not wrong if we claim ourselves as “Masters in the App and Web Design and Development”. Partnering up with us will not only open the doors of opportunities for you, but will always help you better understand your target market, and align things accordingly. With our feature-rich, customer-centric, and data-driven, businesses can grow 2x their current growth rate, and convert their epic ideas into reality!</p>

                    <p>Our wow-worthy cross platform application development services have made us the market-leading cross platform app development agency, and we are still on the pathway to bring more success to the customers. Our clients are working with us because we’re 100% faster, and innovative than a lot of other cross platform development companies, and have a team of experienced in-house developers who’re responsible for converting your app ideas into reality. We're on a mission of creating a global impact in the digital ecosystem, and help businesses decode their financial and operational success through our cutting-edge applications.</p>

                    <p>Here’s a overview of working with us, a top-rated cross platform application development agency:</p>
                </div>
            </section>


            {/* Hover Section */}

            <div class='container hoverSec'>
                <img src="/dot-3.png" alt="" className='img-fluid' />
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div class='card'>
                            <div class='card__top'>
                                <h1>Building a Strong
                                    Digital Impression</h1>
                            </div>
                            <div class='card__bottom'>
                                <p>Our experienced cross platform app developers take the complete responsibility of building applications that go perfectly on the web and app interface without any responsive issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div class='card'>
                            <div class='card__top'>
                                <h1>Unrivaled Excellence</h1>
                            </div>
                            <div class='card__bottom'>
                                <p>Our experienced cross platform app developers take the complete responsibility of building applications that go perfectly on the web and app interface without any responsive issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div class='card'>
                            <div class='card__top'>
                                <h1>24 Hours Consultation</h1>
                            </div>
                            <div class='card__bottom'>
                                <p>Our experienced cross platform app developers take the complete responsibility of building applications that go perfectly on the web and app interface without any responsive issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div class='card'>
                            <div class='card__top'>
                                <h1>Experienced Team of Experts</h1>
                            </div>
                            <div class='card__bottom'>
                                <p>Our experienced cross platform app developers take the complete responsibility of building applications that go perfectly on the web and app interface without any responsive issues.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Technology Section */}

            <div className="container tecSec">
                <h6>Our Tech-Stack</h6>
                <h1>The <span>Technology</span> Stack Our Cross Platform <span>App Developers</span> Use!</h1>
                <p>Our cross platform development comprises trending technologies, and frameworks that are necessary for building the most alluring application. All of our applications are built keeping clients in mind, and we always try our best to bring the best experience for the end users.</p>
                <div className="row justify-content-between mt-5">
                    <div className="col-1">
                        <img src="/logo-1.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-2.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-3.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-4.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-5.png" alt="" />
                    </div>
                    <div className="col-1 Img">
                        <img src="/logo-6.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-7.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-8.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-9.png" alt="" />
                    </div>
                </div>
                <div className='row justify-content-between mt-5'>
                    <div className="col-1">
                        <img src="/logo-10.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-11.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-12.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-13.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-14.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-15.png" alt="" />
                    </div>
                    <div className="col-1 Img">
                        <img src="/logo-16.png" alt="" />
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>


            {/* Book Consultation */}

            <section className='talkTo'>
                <a className='btn' href="">Get in Touch Us</a>
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
                                    Q: What is cross platform development?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Cross platform development comprises the development techniques that create applications that can run on both ios and android platform. It allows users to get with the target audience easily, regardless of the type of interface their application has, like a macbook, window’s laptop or any web application. All of our professional cross platform application developers are top-notch, and always deliver the most amazing results backed with systematic strategies for a memorable user experience.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Q: How can I hire a professional cross platform app developer?
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
                                    Q: How much does cross platform app development cost?
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
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Q: Do Cross platform applications make money?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Discuss Section */}

            <section className='androidDiscuss'>
                <div className="container">
                    <div className="row">
                        <p>Have a project to discuss?</p>
                        <h1>Come Let’s Discuss</h1>
                        <a href="" className='btn'>Let’s Connect</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page