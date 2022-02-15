import React, { Component } from 'react';
import Link from 'next/link';

class ServiceSidebar extends Component {
    render() {
        return (
            <div className="service-sidebar-area">
                <div className="service-list">
                    <h3 className="service-details-title">Facilities</h3>
                    <ul>
                        <li>
                            <Link href="/contact">
                                <a>
                                    In-Person
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>
                                    Remote Access
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>
                                    Pickup & Delivery
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="service-list">
                    <h3 className="service-details-title">Contact Info</h3>
                    <ul>
                        <li>
                            +1 (760) 774-8719
                            <i className='bx bx-phone-call bx-rotate-270'></i>
                        </li>
                        <li>
                            info@omegacc.com
                            <i className='bx bx-envelope'></i>
                        </li>
                        <li>
                            1717 East Vista Chino A7-401 <br></br>Palm Springs, CA 92262
                            <i className='bx bx-location-plus'></i>
                        </li>
                        <li>
                            8:00 AM – 5:00 PM
                            <i className='bx bx-time'></i>
                        </li>
                    </ul>
                </div>

                {/* <div className="service-list">
                    <h3 className="service-details-title">Download Brochures</h3>
                    <ul>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (1)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (2)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (3)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (4)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>
        );
    }
}

export default ServiceSidebar;