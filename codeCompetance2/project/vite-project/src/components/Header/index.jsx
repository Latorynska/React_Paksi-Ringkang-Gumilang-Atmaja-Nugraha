import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const links = [
        {
            url: './',
            label: 'Home',
        },
        {
            url: './about',
            label: 'About',
        },
        {
            url: './#',
            label: 'Services',
        },
        {
            url: './#',
            label: 'Contact',
        },
    ]
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="#" alt="Logo" width={40} />
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
                        {
                            links.map((data, key) =>(
                                <li className='nav-item' key={key}>
                                    <Link to={data.url} className='nav-link'>
                                        {data.label}
                                    </Link>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;