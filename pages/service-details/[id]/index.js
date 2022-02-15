import React, { Component } from 'react';
import Navbar from '../../../components/Layouts/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import ServiceDetailsContent from '../../../components/ServiceDetails/ServiceDetailsContent';
import Footer from '../../../components/Layouts/Footer';

const ServiceDetails = ({ service }) => {

    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Service Details"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Service Details"
            />
            <ServiceDetailsContent service={service} />
            <Footer />
        </>
    );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `http://localhost:1338/api/services/${context.params.id}`
    )
    const service = await res.json()

    return {
        props: {
            service
        }
    }
}
export default ServiceDetails;