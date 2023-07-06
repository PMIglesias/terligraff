import React from "react";

import "./contact.css";

export default function contact() {
  return (
    //     insert contact form with a map frame without bootstrap
    <div className="contact-component">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>

          <div className="contact-info">
            <h2>Contact Info</h2>
            <p>
              <i className="fas fa-phone"></i> +1 (123) 456-7890
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a
                href="mailto:

              "
              >
                {" "}
              </a>
            </p>
            <p>
              <h1>Our Location</h1>
              <p>Please see map below</p>
              <iframe
                className="location"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.658131824469!2d-58.82830373031886!3d-34.63872549491165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9596e7ed2041%3A0xf398d3a0122481e6!2sTerli%20Graff!5e0!3m2!1ses-419!2sar!4v1688585857545!5m2!1ses-419!2sar"
                allowfullscreen=""
                title="location"
              />
              <span> </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
