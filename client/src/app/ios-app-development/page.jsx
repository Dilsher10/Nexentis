import React from 'react'
import Slider from '../../../components/CardSlider';
import Carousel from '../../../components/Carousel';
import Ios_slider from '../../../components/Ios_slider';


const page = () => {

    return (
        <>
            <header className='crossHeader'>
                <div className="container">
                    <h1>Next- Gen <span>iOS App <br /> Development Company</span></h1>
                    <p>Building <span>igneous</span> app experiences for customers <span>worldwide</span></p>
                    <div className='headerDiv'>
                        <div>
                            Nexentis is a leading iOS app development agency that has a team of professional iOS app developers that not only use high-end tech frameworks, and technologies but also bring the most intuitive designs, seamless navigation, and experiences for the clients worldwide.
                        </div>
                        <div>
                            With our future-forward iphone app development services, you can scale your business to the full potential, 4x better than your competitors. Ready to venture into this journey of innovation with a data-driven team of tech experts?
                        </div>
                        <a href="" className='btn'>CONNECT WITH US TODAY</a>
                    </div>
                </div>
            </header>


            {/* Slider Section */}

            <div className="container SwiperSec mt-5">
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

            <div className="container busiSec">
                <h1>Business Empowering <span>iOS App Development Services</span></h1>
                <p>Best in class, iphone app development company for app enthusiasts</p>
                <p>Nexentis is well known when it comes to deliver the data-driven iphone app development, and maintenance services to the clients worldwide. With our tech-savvy team of iphone app developers, our key focus is on the satisfaction of our customers. Our services are engineered to make you feel proud of your decision. As a preeminent iOS application development company, we offer a wide range of services which includes;</p>
            </div>



            {/* Cards Slider */}

            <div className="container serviceCard">
                <div className="row">
                    <Ios_slider />
                </div>
            </div>




            {/* Tablet Slider */}

            <div className="container my-5">
                <Carousel />
            </div>





            {/* Service Section */}

            <section className='tabSec'>
                <div className="container-fluid">
                    <h1>iOS <span>App Development Service</span> For Businesses <br /> Of All <span>Kinds</span></h1>
                    <p><span>Nexentis</span> cater to customers of all <span>industries</span>, iving them quality plus <span>innovation</span> </p>
                    <div className='headerDiv'>
                        Our custom iphone app development services comprises all the necessities like the initial brainstorming to the final deployment of the application. Our high-end, and experienced android app developers, and iphone app developers will build customer-centric, state of the art applications that go with all niches. As every brand is unique, we continuously reimagine our strategies to create innovative, custom mobile iOS app development solutions that cater to our clients' specific audience preferences and market requirements.
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




            {/* Process Section */}

            <section className='busiSec'>
                <div className="container">
                    <h1>The <span>High-Tech</span> Process To Hire Professional<span> iPhone App Developers</span></h1>
                    <p>Building a team of iOS developer experts to deliver exceptional app experiences</p>
                    <p>
                        We follow a rigorous process to get the most dedicated, and expert iphone app developers for our clients project. As a leading iOS app development agency, we always give importance to the satisfaction of our clients, that is, seamless user experience, responsive UI/UX, easy to use application, and a bunch of features that set their business app apart from the competition. Here’s the process followed by us for hiring the most potential iphone developer:
                    </p>
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



            {/* Benefits Section */}

            <div className="container benefitSec">
                <h1>Pre-Eminent <span>iOS App Development</span> Company, Delivering Success Across <span>Various Platforms</span></h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p>We are a known iPhone application development agency that yields innovative, and future-forward strategies to escalate businesses at an unprecedented rate. We’re the best for turning your epic app ideas into reality, building customer success stories everytime we work! </p>
                        <p>Our team of iPhone app experts know the importance of iOS platforms and technologies for a personalized app experience. Hence, being a dominant iPhone app development player in the industry, we have crafted alluring, and breathtaking business applications that have performed exceptionally based on the App Store.</p>
                        <p>To ensure high standards in the digital realm, our iOS app development team leverages XCode, and other platforms to build feature rich business applications. Here’s a breakdown of our iOS apps apart from ordinary iphone applications:</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-between">
                        <ul>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> Tablet Applications</li>
                            <li><img src="/Vector.png" alt="" className='img-fluid' /> TWearable Applications</li>
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
                    <p className='talkText'>We always say that our “clients” are our assets, and we always try our best to give them the best quality work in terms of creativity, usability, and stability. All of our business applications are high-tech, based on tech-savvy iphone app development platforms, and framework for a memorable user experience.</p>
                    <a className='btn' href="">Get in Touch Us</a>
                </div>
            </section>



            {/* Mobile Section */}

            <section className='mobSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <h1>Why Choose Us For Your <span>iOS Application Development Services?</span></h1>
                            <p>If you're still thinking “why you should choose us” as your iPhone application development agency then, no worry we’ve got you covered. We employ only the top 1% talent of iOS app developers in our team, so the work quality is remarkable and matches the expectations of our clients. </p>
                            <p>All of our iPhone app developers use the right technology stack for the development of iOS applications, and implement agile methodologies for a smooth deployment of the project. We always start working on the design and development of the business application once we get the complete information from the client. We never work on incomplete information, because we don’t want to waste your, and our time. Our iOS application developers understand the conventional and emerging technologies with their relative use cases to draft exceptional mobile experience. Our prime focus is on maintaining the robust performance and scalability of the application, and our expert iPhone developers are making it possible for us.</p>
                            <button className='btn'>Read More</button>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <img src="/iphone.png" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </section>





            {/* Why Choose us */}

            <section className='whyChoose'>
                <div className="container">

                    <h1>Why Choose Us For Your Cross <span>App Development Services?</span></h1>

                    <p>Nexentis has been ruling the world of app and web application for a decade, and it’s not wrong if we claim ourselves as “Masters in the App and Web Design and Development”. Partnering up with us will not only open the doors of opportunities for you, but will always help you better understand your target market, and align things accordingly. With our feature-rich, customer-centric, and data-driven, businesses can grow 2x their current growth rate, and convert their epic ideas into reality!</p>

                    <p>Our wow-worthy cross platform application development services have made us the market-leading cross platform app development agency, and we are still on the pathway to bring more success to the customers. Our clients are working with us because we’re 100% faster, and innovative than a lot of other cross platform development companies, and have a team of experienced in-house developers who’re responsible for converting your app ideas into reality. We're on a mission of creating a global impact in the digital ecosystem, and help businesses decode their financial and operational success through our cutting-edge applications.</p>

                    <p>Here’s a overview of working with us, a top-rated cross platform application development agency:</p>
                    <hr className='line' />
                </div>



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
            </section>





            {/* Technology Section */}

            <div className="container tecSec">
                <h6>Our Tech-Stack</h6>
                <h1>Emerging<span>Technologies</span> Used By Tech-Savvy <span>iPhone App Development Company</span></h1>
                <p>Our android application developers use cutting-edge technologies, and frameworks to build the most amazing applications. All of our applications are built using recent technologies with easy to integrate APIs for a seamless user experience.</p>
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
                <div className="container-fluid">
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