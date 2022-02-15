import React, { Component } from 'react';
import Link from 'next/link';

const Footer = ({ services }) => {

    let currentYear = new Date().getFullYear();
    console.log(services)
    return (
        <>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="single-widget">
                                <a href="/" className="logo">
                                    <img src="/images/white-logo.png" alt="Image" />
                                </a>

                                <p>Omega Computer Consulting exists to provide honest, top quality, affordable service that that employees can be proud of and that impresses clients.</p>

                                <ul className="social-icon">
                                    <li>
                                        <a href="https://www.facebook.com/omegacc" target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Omega_CC018" target="_blank">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/omega-technology-computer-consulting/about/" target="_blank">
                                            <i className="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/maps/place/Omega+Computer+Consulting/@33.8434067,-116.5299176,17z/data=!3m1!4b1!4m5!3m4!1s0x80db198555555555:0x779f6a8a9d7922e8!8m2!3d33.8434061!4d-116.527675" target="_blank">
                                            <i className="bx bxl-google"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.yelp.com/biz/omega-computer-consulting-palm-springs" target="_blank">
                                            <i className="bx bxl-yelp"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Services</h3>
                                <ul>
                                    {services.map((service) => (
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Big Data
                                                </a>
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget">
                                <h3>Important Links</h3>

                                <ul>
                                    {/* <li>
                                        <Link href="/about">
                                            <a>
                                                <i className="right-icon bx bx-chevrons-right"></i>
                                                About Us
                                            </a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/services">
                                            <a>
                                                <i className="right-icon bx bx-chevrons-right"></i>
                                                Services
                                            </a>
                                        </Link>
                                    </li>

                                    {/* <li>
                                        <Link href="/team">
                                            <a>
                                                <i className="right-icon bx bx-chevrons-right"></i>
                                                Team
                                            </a>
                                        </Link>
                                    </li> */}
                                    
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="right-icon bx bx-chevrons-right"></i>
                                                Support
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/testimonials">
                                            <a>
                                                <i className="right-icon bx bx-chevrons-right"></i>
                                                Testimonials
                                            </a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Information</h3>

                                <ul className="information">
                                    <li className="address">
                                        <i className="flaticon-call"></i>
                                        <span>Phone</span>
                                        1 (760) 774-8719
                                    </li>

                                    <li className="address">
                                        <i className="flaticon-envelope"></i>
                                        <span>Email</span>
                                        info@omegacc.com
                                    </li>

                                    <li className="address">
                                        <i className="flaticon-maps-and-flags"></i>
                                        <span>Address</span>
                                        1717 East Vista Chino A7-401 <br></br> Palm Springs, CA 92262
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-shape">
                    <img src="/images/shape/footer-shape-one.png" alt="Image" />
                    <img src="/images/shape/footer-shape-two.png" alt="Image" />
                </div>
            </footer>

            {/* Footer Bottom Area   */}
            <footer className="footer-bottom-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="copy-right">
                                <p>Copyright &copy; {currentYear} Omega Technology & Computer Consulting. All Rights Reserved</p>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="privacy">
                                <ul>
                                    {/* <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="designed">
                                <p>
                                    Designed By <i className='bx bx-heart'></i> <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}



export default Footer;