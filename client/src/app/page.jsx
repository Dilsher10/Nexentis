import React from 'react';
import Logo from '../../components/Logo';
import Clients_Slider from '../../components/Clients_Slider';
import Testimonials from '../../components/Testimonials';
import SwiperSlider from '../../components/SwiperSlider';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Header */}

      <header className='homeHeader'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1>Brand that excels <br />in crafting <span>fully functional</span> <br /> mobile <span>apps</span></h1>
              <p>Nexentis is on a mission of empowering organizations with cutting-edge digital solutions. We are transforming firms that are dedicated to driving growth and innovation. With a proven track record of success, we help businesses thrive in the ever-evolving digital ecosystem with state of the art solutions.</p>
              <button className="btn">Schedule a Call now!</button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/header.png" alt="" className="img-fluid" />
            </div>
            <h2>We continuously adapt and develop digital solutions <br /> that enable <span>businesses</span> to push the boundaries of  <br /><span>innovation</span>,delivering exceptional value and results.</h2>
          </div>
        </div>
      </header>


      <section className="combineSec">

        {/* Logo Section */}

        <div className="container logoSection">
          <Logo />
        </div>



        {/* Slider Section */}

        <div className="container SwiperSec">
          <div className="row">
            <div className="col-2">
              <p>Client's Feedback</p>
            </div>
            <div className="col-2">
              <img src="./swiper-line.png" alt="" />
            </div>
            <div className="col-6">
              <h1>Hear It From Our Clients</h1>
            </div>
          </div>
          <SwiperSlider />
        </div>
      </section>


      {/* Solutions Section */}

      <section className="solutionSection">
        <div className="container">
          <button className="btn btn-1">How we do</button>
          <h3>Our Digital Transformation Services</h3>
          <div className="row">
            <div className="card col-sm-12 col-md-4 col-lg-4">
              <img src="/mobile.png" className="img-fluid" alt="" />
              <h6>Mobile Application Development Services</h6>
              <p>Nexentis is offering the best mobile app development services to clients worldwide, making a digital change in the ecosystem.</p>
              <hr />
              <a href="" className="learnMore">Learn more</a>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4">
              <img src="/meeting.png" className="img-fluid" alt="" />
              <h6>Ecommerce Web Development Services</h6>
              <p>Give your online stores a brand new look and feel with our data-driven, customer-centric ecommerce web development services, all custom-made for your ease.</p>
              <hr />
              <a href="" className="learnMore">Learn more</a>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4">
              <img src="/cyber.png" className="img-fluid" alt="" />
              <h6>Website Development Services</h6>
              <p>Avail the most intuitive website development services by Nexentis, adding both value and innovation to your web experience.</p>
              <hr />
              <a href="" className="learnMore">Learn more</a>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4">
              <img src="/coding.png" className="img-fluid" alt="" />
              <h6>UI/UX Design Services</h6>
              <p>Get hands on the most alluring layouts, appealing visuals, and seamless user experience for a never-forgettable online experience.</p>
              <hr />
              <a href="" className="learnMore">Learn more</a>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4">
              <img src="/puzzle.png" className="img-fluid" alt="" />
              <h6>Digital Branding Services</h6>
              <p>With our experience branding services, give your existing brand an instant change in look and feel – all tailor-made as per your desires.</p>
              <hr />
              <a href="" className="learnMore">Learn more</a>
            </div>
            <div className="card col-sm-12 col-md-4 col-lg-4">
              <img src="/cloud.png" className="img-fluid" alt="" />
              <h6>Logo Design Services</h6>
              <p>Hire us for your alluring logo designing, from conceptualization to the final designing, we’re PRO in making your dreams come to life!</p>
              <hr />
              <a href="" className="learnMore">Learn more</a>
            </div>
          </div>
          <button className="btn btn-2">View All Solutions</button>
        </div>
      </section>



      <section className="multiSec">

        <div className="container logosSec" id="what-we-do">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <button className="btn">What we do</button>
              <h2>Making A Digital Difference – Transforming The Way People Perceive Digitization</h2>
              <p>Our goal is not to only deliver the most suitable digital solution to our clients, but keep them involved in the entire process – because your success is our shared journey. We’re joining all the boxes together to build the most reliable, and intuitive digital experience for you.</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/logos.png" alt="" />
            </div>
          </div>
        </div>



        {/* Products Section */}

        <div className="container productSec" id='our-projects'>
          <h6>Our Projects</h6>
          <h4>Digital Success Stories Which We’ve <br /> Created For Customers</h4>
          <div className="row productSecRow">
            <div className="col-sm-12 col-md-7 col-lg-7 card-1">
              <div className="row">
                <div className="col-6">
                  <span>01.</span>
                  <p>Convience, savings and <br />rewards at your fingertips</p>
                  <span>Lounge Project</span>
                </div>
                <div className="col-6">
                  <span className="pText">Showcase</span>
                  <img src="/fingers.png" className="img-fluid" alt="" />
                  <div>
                    <img src="/arrow.png" className="arrowIcon" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 card-2">
              <div className="row">
                <div className="col-6">
                  <span>02.</span>
                  <p>Private trust<br />management and trading platform</p>
                  <span>Lounge Project</span>
                </div>
                <div className="col-6">
                  <span className="pText">Showcase</span>
                  <img src="/line.png" className="img-fluid" alt="" />
                  <div>
                    <img src="/arrow.png" className="arrowIcon" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 card-3">
              <div className="row">
                <div className="col-6">
                  <span>03.</span>
                  <p>Online platform for<br />distance learning by <br />NEXENTIS</p>
                  <span>Lounge Project</span>
                </div>
                <div className="col-6">
                  <span className="pText">Showcase</span>
                  <img src="/mobiles.png" className="img-fluid cardImg" alt="" />
                  <div>
                    <img src="/arrow.png" className="arrowIcon" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Testimonals Section */}

        <div className="container TestiSec py-5">
          <div className="row">
            <div className="col-10">
              <button className='btn'>Industries We’ve Excelled In</button>
              <Testimonials />
            </div>
          </div>
        </div>



        <div className="container portfolioSec" id='why-choose-us'>
          <div className="row">
            <h2>Our Historic Journey <br /> Since Our Inception</h2>
            <hr />
            <div className="col-2">
              <div className="card">
                <p><span>10</span> <b>Years</b> <br />in business</p>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <p><span>7+</span> <b>Years</b> <br /> in app development</p>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <p><span>10+</span> Startups unicorns built</p>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <p><span>#1</span> Development company in USA</p>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <button className="btn">Let's Connect Today</button>
              </div>
            </div>
          </div>
        </div>


        <div className="container blogSec">
          <div className="row">
            <h3>Latest Insights</h3>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <img src="/glassess.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Product Engineering</p>
                  <h5 className="card-title">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                  <a href="#" className="btn">Learn more</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <img src="/glass-2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Product Engineering</p>
                  <h5 className="card-title">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                  <a href="#" className="btn">Learn more</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <img src="/glass-3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Product Engineering</p>
                  <h5 className="card-title">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                  <a href="#" className="btn">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* Form Section */}

        <div className="container formSec">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h4>We’re Eager To Hear From You! <br />Let's Talk</h4>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <form className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email address" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Phone number" />
                </div>
                <div className="col-md-6">
                  <select class="form-select form-control" aria-label="Default select example">
                    <option selected>What is your budget?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea class="form-control" placeholder="Message" rows="4"></textarea>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      I want an NDA to protect my idea
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn">Send a request</button>
                </div>
              </form>
            </div>
          </div>
        </div>



        {/* Our Clients */}

        <div className="container clientSec">
          <img src="/clients.png" alt="" className="img-fluid" />
          <div className="row">
            <Clients_Slider />
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
                    How much does app development cost?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    The cost of a casual application starts from $1000 to $15000 depending on the complexity of the application, and the experience that specific mobile app development company has, however, the pricing will increase if the application has complex functionalities.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What is logo designing?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Logo designing is a process of designing a logo for businesses of different types. Nexentis has the team of best logo designers to create the most alluring, yet visually appealing logos for the brands worldwide.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Do you offer Ecommerce website development?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Yes, we do offer Ecommerce website design and development services for the clients, and take complete responsibility of the entire development, and smooth deployment activity.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Why should we hire you as our app development agency?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Nexentis is has more 4+ years of experience in app design and development, therefore, it’s not incorrect to claim them as the best and most experience app development agency in the United States. All the app developers are keen to their work, and know the process to develop the most alluring mobile application.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How much time do you take to deliver a project?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    It depends on the complexity, and type of application our client wants us to develop for them. A simple application/website is completed in 2-3 weeks whereas a complex one takes time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Contact Section */}

        <div className="container contactSec">
          <h4>We Are Happy to Assist You.</h4>
          <button className="btn">Contact us</button>
          <hr className="line" />
        </div>

      </section>


    </main>
  )
}


export default Home;