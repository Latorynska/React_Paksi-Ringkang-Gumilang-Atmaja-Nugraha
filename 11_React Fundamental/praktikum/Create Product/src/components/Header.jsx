const Header = ({ navs }) => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                    Simple Header
                    </a>
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
                            {
                                navs.map((nav, index) => {
                                    return (
                                    <a key={index} className="nav-link active" aria-current="page" href={nav.url}>
                                        <button className="btn btn-primary fw-semibold">{nav.label}</button>
                                    </a>
                                )
                                })
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header ;