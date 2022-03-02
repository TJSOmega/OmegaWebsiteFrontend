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


export async function getStaticPaths() {
    
    const res = await fetch(
        `https://omega-website-backend-ii4pj.ondigitalocean.app/back/api/services/`
    )

    const services = await res.json()
    const ids = services.data.map(service => service.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://omega-website-backend-ii4pj.ondigitalocean.app/back/api/services/${context.params.id}`
    )
    const service = await res.json()


    return {
        props: {
            service
        }
    }
}
export default ServiceDetails;