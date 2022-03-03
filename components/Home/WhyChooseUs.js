import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>You won't find any better team in the Coachella Valley</h2>
                        <p>Our group of IT Professionals and Software Devs, will work with you on a level that you are comfortable with to accomplish any of your Technology needs in a timely manner, at which you are satisfied with.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>01 <i className="flaticon-technical-support"></i></span>
                                        <h3>We Make Sure You Are Secured</h3>
                                        <p>Our team provides all of the resources to make sure that all of your tech is safe from outside incursions!</p>
                                    </li>
                                    <li className="ml">
                                        <span>02 <i className="flaticon-shield"></i></span>
                                        <h3>Support When you Need it, How you Need it</h3>
                                        <p>We are dedicated to making sure that your issues get taken care of! We travel to you, physically or remotely to take care of whatever tech needs you may have.</p>
                                    </li>
                                    <li className="ml-25">
                                        <span>03 <i className="flaticon-support"></i></span>
                                        <h3>Customer Satisfaction isn't an after thought, its a Priority</h3>
                                        <p>We take our people skills seriously, making sure that every client feels comfortable working with us and able to understand everything that is going on!</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>04 <i className="flaticon-technical-support"></i></span>
                                        <h3>Professional JavaScript Services </h3>
                                        <p>Need a Computer Programmer? We have the ability to design and create custom applications for just about any business scenario.</p>
                                    </li>

                                    <li className="ml">
                                        <span>05 <i className="flaticon-shield"></i></span>
                                        <h3>Continued Support</h3>
                                        <p>We will make sure that your devices get the long term care they need to keep them working at peak performance longer.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>06 <i className="flaticon-support"></i></span>
                                        <h3>Competitive Pricing</h3>
                                        <p>Our services actually land slightly below industry standard in most categories and are competitive across the board.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs;
