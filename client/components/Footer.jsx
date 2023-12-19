import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="/logo.png" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus architecto libero officiis vitae laboriosam. Provident.</p>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <h6>What We Do</h6>
                        <ul>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>Custom Solution</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <h6>Resources</h6>
                        <ul>
                            <li>Services</li>
                            <li>Case Studies</li>
                            <li>E-book</li>
                            <li>Blogs</li>
                            <li>Refernces</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <h6>Company</h6>
                        <ul>
                            <li>About</li>
                            <li>Case Studies</li>
                            <li>E-book</li>
                            <li>Blogs</li>
                            <li>Refernces</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <h6>Information</h6>
                        <ul>
                            <li>Parmotion</li>
                            <li>Information Center</li>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col">
                        <ul className='footerList'>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className='footerText'>Copyright 2023-2024 Nexentis</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer