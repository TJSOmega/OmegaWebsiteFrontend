import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';

const ServiceDetailsContent = (props) => {

    const serviceDetails = props.service.data


        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img src="/images/services-details/services-details.jpg" alt="Image" />
                                </div>

                                <h3>{serviceDetails.attributes.title}</h3>
                                <p>{serviceDetails.attributes.description}</p>

                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img src="/images/services-details/services-details2.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <AskQuestionForm />
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default ServiceDetailsContent;