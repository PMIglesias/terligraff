import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export default function footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="https://www.facebook.com/terligraff">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/terligraff">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div class="footer-left">
          <div className="logo-container">
            <Link to="/">TerliGraff</Link>
          </div>
          <br />
          <p>PMIglesias &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}
