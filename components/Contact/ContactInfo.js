import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us:</h3>
                                <p>tjs@omegacc.com</p>
                                <p>info@omegacc.com</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us:</h3>
                                <p>Tel. + 1 (760) 325-8990</p>
                                <p>Tel. + 1 (442) 234-8568</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-location-plus"></i>
                                <h3>Palm Springs</h3>
                                <p>1717 East Vista Chino Ste. A7-401 <br></br> Palm Springs, CA 92262</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;