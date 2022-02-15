import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:0,
    nav:true,
    mouseDrag: false,
    items:1,
    dots: false,
    // autoHeight: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class MainBanner extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="slider-area">
                {this.state.display ? <OwlCarousel 
                    className="arduix-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="arduix-slider-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden one">
                                        <span>IT Services</span>
                                        <h1>Secure IT Solutions For A More Secure Environment</h1>
                                        <p>Your source of IT Support in the Coachella Valley and beyond.</p>
                                        
                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden two">
                                        <span>IT Services</span>
                                        <h1>Specialized Technology Services</h1>
                                        <p>We provide support for Computers & Servers, IOT & Smart Home, Mobile Services, and More!</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden three">
                                        <span>IT Services</span>
                                        <h1>Emergency Service and Support</h1>
                                        <p>Fast professional service!</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </section>
        );
    }
}

export default MainBanner;