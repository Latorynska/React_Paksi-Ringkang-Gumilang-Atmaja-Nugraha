import './styles.css';

const WelcomeBanner = () => {
    const bannerStyle = {
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2123&q=80")`,
    };

    return ( 
        <div className="welcome-banner" style={bannerStyle}>
            <div className="container">
                <h1 className="display-4">Welcome to Our Website</h1>
                <p className="lead">
                    We're glad to have you here. Explore our website to learn more about our
                    products and services.
                </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                    Learn More
                </a>
            </div>
        </div>
    );
}
 
export default WelcomeBanner;