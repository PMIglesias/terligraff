import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./nav.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navigation-component">
      <div className="navigation-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? "nav-menu-mobile" : ""}`}>
            <li className="nav-item">
              <Link to="/quote">Get a Quote</Link>
            </li>

            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="nav-icon" onClick={handleMobileMenuToggle}>
        {mobileMenuOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </div>
  );
}
