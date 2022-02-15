import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/white-logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li> */}

                                    <li className="nav-item">
                                        <Link href="/">
                                            <Link href="/services" activeClassName="active">
                                                <a className="nav-link">Services</a>
                                            </Link>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="/news" activeClassName="active">
                                            <a className="nav-link">News</a>
                                        </Link>
                                    </li> */}

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="https://omegacc.screenconnect.com" activeClassName="active">
                                            <a className="nav-link">Remote Support</a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a className="nav-link">Faq</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/">
                                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                                        User <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/login" activeClassName="active">
                                                            <a className="nav-link">Login</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/sign-up" activeClassName="active">
                                                            <a className="nav-link">Sign Up</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/login" activeClassName="active">
                                                    <a className="nav-link">Log In</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sign-up" activeClassName="active">
                                                    <a className="nav-link">Sign Up</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a className="nav-link">404 error</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;