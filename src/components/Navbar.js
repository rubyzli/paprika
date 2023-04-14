function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgb(249, 208, 222)"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="./Home.js">Paprika Agency</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./Home.js">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./Services.js">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./WhyUs.js">Why Us?</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;