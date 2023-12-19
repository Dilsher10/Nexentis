import React from 'react'


const page = () => {

    return (
        <>
            <header className='contactHeader'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1>Contact with <span>us</span></h1>
                            <button className='btn'>Let’s get started</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="/map.png" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <img src="/dots.png" className='img-fluid' id="dotImg" alt="" />
            </header>


            <section className='formSection'>
                <div className="container">
                    <h1>Let’s talk about your <span>project</span></h1>
                    <form action="">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Full Name" aria-label="First name" />
                            </div>
                            <div class="col-6">
                                <input type="email" class="form-control" placeholder="Email" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select Service</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Phone Number" aria-label="Last name" />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="3" placeholder='Describe your project needs'></textarea>
                        </div>
                    </form>
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