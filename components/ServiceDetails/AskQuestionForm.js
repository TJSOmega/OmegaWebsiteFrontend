import React, { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

   // Form initial state
   const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const AskQuestionForm = () => {

 

    const [contact, setContact] = useState(INITIAL_STATE);


    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `https://omega-website-backend-ii4pj.ondigitalocean.app/back/api/contact-forms`;
            const { name, email, number, subject, text } = contact;
            const payload = { data: { name, email, number, subject, text } };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    
        return (
            <div className="ask-question">
                <h3>Ask Questions</h3>
                <form id="contactForm">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input onChange={handleChange}  type="text" name="name" id="name" className="form-control" required  placeholder="Your Name" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input onChange={handleChange}  type="email" name="email" id="email" className="form-control" required  placeholder="Your Email" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input onChange={handleChange}  type="text" name="number" id="number" required  className="form-control" placeholder="Your Phone" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input onChange={handleChange}  type="text" name="subject" id="subject" className="form-control" required placeholder="Your Subject" />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea onChange={handleChange}  name="text" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button onClick={handleSubmit} type="submit" className="default-btn btn-two">
                                <span className="label">Send Message</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

export default AskQuestionForm;