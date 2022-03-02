import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/About/About';
import WhyChooseUs from '../components/About/WhyChooseUs';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import PartnerSlider from '../components/Common/PartnerSlider';
import Footer from '../components/Layouts/Footer';

class About2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="About" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About" 
                /> 
                <About />
                <WhyChooseUs />
                {/* <MakeYourBusiness /> */}
                {/* <Testimonials /> */}
                {/* <PartnerSlider /> */}
                <Footer />
            </>
        );
    }
}

export default About2;