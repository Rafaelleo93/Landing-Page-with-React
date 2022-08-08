import React from "react";

const nav = {
    navbarTitle: "Start Bootstrap",
    navbarHome: "Home",
    navbarAbout: "About",
    navbarServices: "Services",
    navbarContact: "Contact"
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
        <div className="container">
    <a className="navbar-brand" href="https://getbootstrap.com/">{nav.navbarTitle}</a>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
        <li className="nav-item active">
          <a className="nav-link" href="#">{nav.navbarHome} <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{nav.navbarAbout}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{nav.navbarServices}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{nav.navbarContact}</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar;