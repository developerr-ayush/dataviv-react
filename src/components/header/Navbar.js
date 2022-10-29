import React from 'react'
import logo from '../../images/dataviv logo.png'
// import navbarCss from './navbar.scss';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-4">
      <div className="container">
        <a className="navbar-brand text-white" href="index.html">
          <img src={logo} height="60px" alt="dataviv logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link active text-white" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="services.html">Service</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="portfolio.html">Portfolio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="contact.html">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
setTimeout(() => {

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the navbar
  var navbar = document.querySelector(".navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset !== sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };


}, 100);