import React, { Component } from 'react';
import Link from 'next/link';

function Services(props) {

    const serviceItems = props.services
    
        return (
            <section className="offer-area pt-100 pb-70">
			    <div className="container">
                    <div className="section-title">
                        <span>Services</span>
                        <h2>Our Professional Services For You</h2>
                        <p>Here are some of the services we offer to you and your home or business!</p>
                    </div>

                    <div className="row">
                        {serviceItems.map((serviceItem) => (
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className={serviceItem.attributes.flatIcon}></i>
                                <h3>
                                    <Link href={"/service-details/" + serviceItem.id}>
                                        <a>{serviceItem.attributes.title}</a>
                                    </Link>
                                </h3>
                                <p>{serviceItem.attributes.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
}

export default Services;