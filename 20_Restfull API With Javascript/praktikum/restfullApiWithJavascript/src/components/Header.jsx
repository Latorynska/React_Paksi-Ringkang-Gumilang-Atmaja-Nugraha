import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ navs, activePage }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">
            ProJects
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {navs.map((nav, index) => (
                <Link 
                  key={index} 
                  to={nav.url} 
                  className={`nav-link ${activePage === nav.label ? 'active' : ''}`}
                >
                  <button className={`btn fw-semibold ${activePage === nav.label ? 'btn-primary' : ''}`}>
                    {nav.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
