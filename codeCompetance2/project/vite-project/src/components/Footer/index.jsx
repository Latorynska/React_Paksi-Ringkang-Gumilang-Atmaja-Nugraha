import './styles.css';

const Footer = () => {
    return ( 
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-center">
                        <h1 className="web-contact-title d-inline me-1 px-1">L</h1>
                        <h4 className="d-inline align-middle">otarynska</h4>
                        </div>
                    </div>
                    <div className="row">
                        <p>
                        you can find <span className="web-contact-title">us</span> at
                        </p>
                    </div>
                    <div className="row">
                        <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fab fa-github fa-lg text-white" />{" "}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fab fa-linkedin fa-lg text-white" />{" "}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fab fa-instagram fa-lg text-white" />{" "}
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <h1 className="web-contact-title bg-transparent border-bottom">
                        Our Contact
                    </h1>
                    <div className="row">
                        <div className="col-3">
                        <h5>wanna call us?</h5>
                        <h6 className="text-secondary">here is our phone number</h6>
                        <div id="phone-number-contact">
                            +62 812 1410 763
                            <button
                            id="btn-phone-contact"
                            className="btn p-0 ms-2 text-white"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-clipboard-target="#phone-number-contact"
                            title="Copy Phone Number"
                            >
                            <i className="fa fa-regular fa-copy fa-sm" />
                            </button>
                        </div>
                        </div>
                        <div className="col-6">
                        <h5>Our Address?</h5>
                        <div className="container">
                            <ul className="list-unstyled">
                            <li>Jl. Raya Sukabumi</li>
                            <li>Kecamatan Cianjur</li>
                            <li>Kabupaten Cianjur</li>
                            <li>Provinsi Jawa Barat, Indonesia</li>
                            <li>postal code 43212</li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-3">
                        <h5>wanna Email us?</h5>
                        <h6 className="text-secondary">here is our Email</h6>
                        <div className="">seria.latorynska@gmail.com</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="subscription-text">
                        <i className="fa fa-solid fa-envelope" />
                        <p className="d-inline">keep in touch with us!</p>
                    </div>
                    <div className="subscription-form container">
                        <form action="#" method="" className="">
                        <div className="row">
                            <div className="input-group mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control bg-transparent text-white border-secondary border-top-0 border-end-0 place"
                                placeholder="Enter your E-Mail address"
                            />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <div className="d-grid">
                                <button className="btn btn-danger btn-signup text-white">
                                Sign Up
                                </button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;