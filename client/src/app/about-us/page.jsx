import React from 'react'
import Slider from '../../../components/CardSlider';


const page = () => {

  return (
    <>
      <header className='contactHeader'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1>About <span>Nexentis</span></h1>
              <p>Nexentis is an enterprise software development company helping startups and organizations build and implement digital transformation solutions tailored to their demand and needs.</p>
              <div className="d-flex">
                <ul>
                  <li>Tech Integrated Solutions</li>
                  <li>Client Focused Approach</li>
                </ul>
                <ul>
                  <li>Client Focused Approach</li>
                  <li>Digital Transformation Partner</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/map.png" className='img-fluid' alt="" />
            </div>
          </div>
        </div>
        <img src="/dots.png" className='img-fluid' id="dotImg" alt="" />
      </header>


      <section className='teamSec'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/team-2.png" alt="" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1>Who Are <span>We</span>?</h1>
              <p>Nexentis came into existence after two tech enthusiasts from different backgrounds joined forces to create something bound to become a difference-maker in the digital world.</p>
              <p> The company started in 2021 as a mobile app development company but has since grown into a full-stack digital transformation organization offering enterprise software development and technical consultancy services for businesses worldwide.</p>
            </div>
          </div>
        </div>
      </section>


      <section className='visionSec'>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Our <span>Mission</span></h1>
            </div>
            <div className="col">
              <h1>Our <span>Vision</span></h1>
            </div>
            <div className="col">
              <h1>Our <span>Values</span></h1>
            </div>
          </div>
        </div>
      </section>



      {/* Cards Section */}

      <section className="aboutCard">
        <div className="container">
          <div className="row">
            <div className="card col-sm-12 col-md-4 col-lg-4 card-1">
              <img src="/about-1.png" className="img-fluid" alt="" />
              <p>We aspire to create and deliver the best digital solutions for businesses wanting to acquire a competitive edge in the industry and serve their customers through robust digital channels.
                Nexentis aims to help startups and organizations recognize their potential and leverage optimum, highly customized solutions for business growth and ROI.</p>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4 card-2">
              <img src="/about-2.png" className="img-fluid" alt="" />
              <p>We aim to extend the scope of current technologies into societal issues and deliver back to the community for the greater good.
                Our vision is to help 20 million lives with better education and employment opportunities, acquire ten active ventures, scale five businesses to exit, get listed to Nasdaq, become the most preferred workplace in Pakistan, and enter the Fortune 500 club in the next five years.</p>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4 card-3">
              <img src="/about-3.png" className="img-fluid" alt="" />
              <p><span>Nexentis</span> is a leading provider of custom mobile app development services in the USA and other regions. They specialize in creating client-centric online solutions for startups and businesses. Nexentis takes pride in developing high-quality mobile apps that are ready to launch, using the best UI, coding, hosting, localization, and other techniques.</p>
            </div>
          </div>
        </div>
      </section>



      <div className="container proSec">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1>When We <span>Started</span>?</h1>
            <p>The company started in 2021 as a mobile app development company but has since grown into a full-stack digital transformation organization offering enterprise software development and technical consultancy services for businesses worldwide.</p>
            <button className='btn'>Let’s Connect</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>80+ Professionals</h2>
            <p>The company started in 2021 as a mobile app development company but has since grown into a full-stack digital transformation organization offering enterprise software development and technical consultancy services for businesses worldwide.</p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>80+ Professionals</h2>
            <p>The company started in 2021 as a mobile app development company but has since grown into a full-stack digital transformation organization offering enterprise software development and technical consultancy services for businesses worldwide.</p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>80+ Professionals</h2>
            <p>The company started in 2021 as a mobile app development company but has since grown into a full-stack digital transformation organization offering enterprise software development and technical consultancy services for businesses worldwide.</p>
          </div>
        </div>
      </div>



      {/* News Section */}

      <div className="container newsSec">
        <h1>Press & <span>News</span></h1>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <img src="/news-1.png" className='img-fluid' alt="" />
              <h6>06 Jan, 2021</h6>
              <h2>Introduction Our Company</h2>
              <p>The company started in 2021 as a mobile app development company but has since grown into a full-stack digital transformation.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <img src="/news-2.png" className='img-fluid' alt="" />
              <h6>06 Jan, 2021</h6>
              <h2>Mobile App Development</h2>
              <p>The company started in 2021 as a mobile app development company but has since grown into a full-stack digital transformation.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-5">
                  <img src="/news-2.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <p class="card-text">06 Jan, 2021</p>
                    <h5 class="card-title">Mobile App Development</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-5">
                  <img src="/news-1.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <p class="card-text">06 Jan, 2021</p>
                    <h5 class="card-title">Mobile App Development</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-5">
                  <img src="/news-2.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <p class="card-text">06 Jan, 2021</p>
                    <h5 class="card-title">Mobile App Development</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-5">
                  <img src="/news-1.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <p class="card-text">06 Jan, 2021</p>
                    <h5 class="card-title">Mobile App Development</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Portfolio Section */}

      <div className="container aboutPort">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1>In Pursuit Of Scaling The Digital Ecosystem Through Top-Tier Product Teams</h1>
            <p>Nexentis came into existence after two tech enthusiasts from different backgrounds joined forces to create something bound to become a difference-maker in the digital world.
              The company started in 2018 as a mobile app development company but has since grown into a full-stack digital transformation organization offering enterprise software development and technical consultancy services for businesses worldwide.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className='spanDiv'>
              <span>100+</span>
              <span>150+</span>
            </div>
            <div className='spanDiv'>
              <span>15+</span>
              <span>70+</span>
            </div>
            <button className='btn'>Let’s get started</button>
          </div>
        </div>
      </div>


      {/* Slider Section */}

      <div className="container SwiperSec mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <p>Awards & Recognition</p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <img src="./swiper-line.png" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1>Our Awards & Recognition</h1>
          </div>
          <p className='swiperText py-3'>As a leading android application development agency, we’ve managed to create numerous applications of different niches for customers worldwide. We always value quality over quantity, that’s why we’ve managed to attain a strong impression in the digital world.</p>
          <Slider />
        </div>
      </div>



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