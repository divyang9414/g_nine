import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link fs-5 px-3 active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link fs-5 px-3" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link fs-5 px-3" href="/rooms">Rooms</a></li>
              <li className="nav-item"><a className="nav-link fs-5 px-3" href="/banquet">Banquet</a></li>
              <li className="nav-item"><a className="nav-link fs-5 px-3" href="/restaurant">Restaurant</a></li>
              <li className="nav-item"><a className="nav-link fs-5 px-3" href="/events">Events</a></li>
              <li className="nav-item"><a className="nav-link fs-5 px-3" href="/faq">FAQ's</a></li>
              <li className="nav-item"><a className="nav-link fs-5 px-3" href="/contact_us">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
