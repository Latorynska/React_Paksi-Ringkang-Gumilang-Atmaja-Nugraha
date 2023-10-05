import './styles.css';
import Input from '../Input';
import { useState } from 'react';
import TextArea from '../TextArea';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [FormError, setFormError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
        isFormValid();
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()){
            const message = `
                First Name: ${formData.firstName}<br />
                Last Name: ${formData.lastName}<br />
                Email: ${formData.email}<br />
                Message: ${formData.message}
            `;
            Swal.fire(
                'Your message is submitted!',
                message,
                'success'
              )
        }
    }

    const isFormValid = () => {
        let newFormError = {
            firstName: formData.firstName.trim() ? '' : 'First Name is required',
            lastName: formData.lastName.trim() ? '' : 'Last Name is required',
            email: formData.email.trim() ? '' : 'Email is required',
            message: formData.message.trim() ? '' : 'Message is required',
        };

        if(/^\S+@\S+\.\S+$/.test(formData.email.trim())){
            newFormError = {
                ...newFormError,
                email: '',
            }
        } else {
            newFormError = {
                ...newFormError,
                email: 'Please input a valid email',
            }
        }


        setFormError(newFormError);
        return Object.values(newFormError).every((error) => !error);
    };

    return ( 
        <div className="container mt-5">
            <div className="card contact-card">
                <div className="row no-gutters">
                    <div className="col-md-6 d-flex align-items-center">
                    <div className="card-body text-center">
                        <h2 className="card-title">Contact Us</h2>
                        <p className="card-text text-start">
                        If you have any questions or need assistance, please don't
                        hesitate to contact us. We are here to help!
                        </p>
                    </div>
                    </div>
                    <div className="col-md-6 elevated-form">
                    <form id="contactForm" onSubmit={e => handleFormSubmit(e)}>
                        <div className="mb-3">
                            <Input 
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={e => handleInputChange(e)}
                                errorHelper={FormError.firstName}
                            />
                        </div>
                        <div className="mb-3">
                            <Input 
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={e => handleInputChange(e)}
                                errorHelper={FormError.lastName}
                            />
                        </div>
                        <div className="mb-3">
                            <Input 
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={e => handleInputChange(e)}
                                errorHelper={FormError.email}
                            />
                        </div>
                        <div className="mb-3">
                            <TextArea 
                                className="form-control"
                                placeholder="Message"
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={e => handleInputChange(e)}
                                errorHelper={FormError.message}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;