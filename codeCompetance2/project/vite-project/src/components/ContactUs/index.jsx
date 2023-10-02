import './styles.css';

const ContactUs = () => {
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
                    <form id="contactForm">
                        <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstname"
                            required=""
                        />
                        </div>
                        <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastname"
                            required=""
                        />
                        </div>
                        <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            required=""
                        />
                        </div>
                        <div className="mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Message"
                            rows={4}
                            name="message"
                            required=""
                            defaultValue={""}
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