import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img-three.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                            <span>About Us</span>
                                <h2>We are here to service your technology needs!</h2>
                                <p>We specialize in fast reliable service, top level understanding of technology and how it works, and the absloute best customer service and satisfaction.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Same day or next day service
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                No fix, no charge policy
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Smart device install capable
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Customer satisfaction is our first priority
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Remote Support ready
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Professional JavaScript development services
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;