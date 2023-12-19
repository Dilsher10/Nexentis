import React from 'react'
import CardSlider from '../../../components/CardSlider';
import Carousel from '../../../components/Carousel';
import Android_slider from '../../../components/Android_slider';


const page = () => {

    return (
        <>
            <header className='crossHeader'>
                <div className="container">
                    <h1>Cutting Edge Android <span>App <br /> Development</span> Services</h1>
                    <p>Ideate, Evaluate, and Code Alluring <span>App Solutions</span></p>
                    <div className='headerDiv'>
                        <div>
                            Crafting top-tier and personalized applications with an exceptional touch of perfection is our forte. In our capacity as an esteemed android app development company, we are unswervingly dedicated to delivering unparalleled excellence through our cutting-edge and state-of-the-art android development services, catering to a global clientele.
                        </div>
                        <div className='pt-3'>
                            Our team is composed of professional android app developers who harness the power of the latest and most advanced technology stack to meticulously fashion and bring to life your app's design and development.
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
                    <CardSlider />
                </div>
            </div>


            {/* Business Section */}

            <div className="container businessSec">
                <h1>A Top-Rated Android <span>App Development</span> Company Bringing Your App <span>Vision</span> To Life</h1>
                <p>Ready to explore our amazing android app development services?</p>
            </div>


            {/* Cards Section */}

            <div className="container androidCard">
                <div className="row">
                    <Android_slider />
                </div>
            </div>




            {/* Tablet Slider */}

            <div className="container my-5">
                <Carousel />
            </div>




            {/* Service Section */}

            <section className='tabSec'>
                <div className="container-fluid">
                    <h1>Android <span>App Development</span> Service For <span>Businesses</span> Of All Kinds</h1>
                    <p>Nexentis cater to customers of all industries, giving them quality plus innovation</p>
                    <div className='headerDiv'>
                        Our custom android app development services cover up all the necessities, like from initial planning to the final development and deployment of the application in the real time environment. All of our android app developers are keen to perfection & cover all the industries to build the customer-centric, and close to perfection application. As every brand is unique, we continuously reimagine our strategies to create innovative, custom mobile app development solutions that cater to our clients' specific audience preferences and market requirements.
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
                    <div class="tab-content androidTab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div className="row">
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <h2>Restaurant Management Application</h2>
                                    <p className='tabText'>As a leading cross platform app development company, we offer cross platform app development to restaurant businesses which includes the design and development of the application like, food delivery, order tracking, and restaurant management web and app, cooking assistance application, recipe guide application, nutrition trackers and a lot more. We have professional cross platform app developers and designers who have a track record of designing the most alluring application for both B2B and B2C customers.
                                    </p>
                                    <button className='btn'>BOOK A CONSULTATION NOW!</button>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <img src="/android-mobile.png" className='img-fluid' alt="" />
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
                    <h1>Streamlining The Process To <span>Hire Expert</span> Android <span>App Developers</span></h1>
                    <p>Best Android App Development Agency Picking The Best Of The Talents</p>
                    <div className='headerDiv'>
                        Our android app development services are engineered to provide you a magnitude of benefits that are always in your benefits. We follow a rigorous process to bring you the most professional, and expert android app developers that not only understands your needs, and bring you the most amazing results.
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
                <h1>We’re Offering <span>Custom</span> Android <span>Application Developmen</span> Services Across All Platforms</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p>At our Android app development agency, we extend our expertise beyond just smartphones. Our Android mobile app development portfolio showcases our proficiency across diverse Android devices and platforms. We always think beyond perfection that is why we’ve managed to attain a strong image in the digital market.</p>
                        <p>Our comprehensive approach to custom Android app development embraces various facets of the Android ecosystem. This includes not only smartphones but also Android tablets, Android Wear, and Android TV. Here’s a breakdown of our android apps apart from ordinary application:</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-between">
                        <ul>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Wearable Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> TV Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Automotive Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> (iOT) Applications</li>
                        </ul>
                        <ul>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> AR Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> VR Application</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Blockchain Application</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Gaming Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Social Media Applications</li>
                        </ul>
                    </div>
                </div>
            </div>




            {/* Talk To Section */}


            <section className='talkTo'>
                <div className="container">
                    <p className='talkText'>In our android app development process, we rely on well-established software stacks to craft user-friendly and intuitive applications. Our expert Android app developers possess the know-how to create apps that have achieved more than a million downloads on the Google Play Store. We’re a trusted Android application development company that will design and develop custom applications for all domains and businesses.</p>
                    <a className='btn' href="">Get in Touch Us</a>
                </div>
            </section>




            {/* Why Choose us */}

            <section className='whyChoose'>
                <div className="container">

                    <h1>How Nexentis <span>Android App Development Services</span> Can Escalate Your Business?</h1>

                    <p>We strive to redefine excellence in Android app development with our comprehensive solutions catering to SMEs, Startups, and enterprises, empowering them to explore new dimensions, harness potential, and tap into fresh revenue streams through tailored Android applications. </p>

                    <p>Our professional android developers ensure seamless integration with modern Android technologies, including wearables, TVs, and tablets. Beyond this, our avant-garde approach in the Android app development process sets us apart. </p>

                    <p>Here’s a overview of working with us, a top-rated android app development agency:</p>
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
                <h1>The Technology Stack Our <span>Android App Developers Use</span></h1>
                <p>Our android application developers use cutting-edge technologies, and frameworks to build the most amazing applications. All of our applications are built using recent technologies with easy to integrate APIs for a seamless user experience. </p>
                <div className="row justify-content-between mt-5">
                    <div className="col-1">
                        <img src="/java.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/kotlin.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-15.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/logo-16.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/xml.png" alt="" />
                    </div>
                    <div className="col-1 Img">
                        <img src="/api.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/chrome.png" alt="" />
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
                        <img src="/graph.png" alt="" />
                    </div>
                    <div className="col-1">
                        <img src="/and-version.png" alt="" />
                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-1 Img">

                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>



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