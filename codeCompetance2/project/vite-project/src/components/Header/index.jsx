import './styles.css';

const Header = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="your-logo.png" alt="Logo" width={40} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Contact
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;