import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyle from '../components/Services/ServicesStyle';
import Footer from '../components/Layouts/Footer';

function Services({ services }) {
    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
            />
            <ServicesStyle services={services} />
            <Footer />
        </>
    );
}


export async function getStaticProps() {

    const res = await fetch('https://omega-website-backend-ii4pj.ondigitalocean.app/back/api/services')
    const data = await res.json()
    const services = data.data

    return {
        props: { services },
    }
}
export default Services;