import React from "react";

import "./quote.css";

export default function () {
  return (
    <div className="formulario-container page-width">
      <h1> Request A Quote </h1>
      <div className="quote-text">
        <p>
          If you would like to get a quote for your custom apparel order, please
          fill out the form below. Be sure to include how many pieces you want,
          which pieces you want, and how many prints on each piece so we can get
          you the most accurate quote!
        </p>
        <p>
          If you have questions about our apparel or about the printing process
          with us, feel free to send us an email at{" "}
          <a href="theintersectionprintshop@gmail.com">
            theintersectionprintshop@gmail.com!
          </a>
        </p>
      </div>
      <div className="quote-form">
        <h2>Request A Quote</h2>
        <form>
          <div className="form-label">
            {" "}
            <label for="name">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="" />
          </div>
          <div className="form-label">
            {" "}
            <label for="name">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="" />
          </div>

          <div className="form-label">
            {" "}
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="" />
          </div>

          <div className="form-label">
            {" "}
            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="" />
          </div>

          <p>Let Us Know</p>

          <div className="form-label">
            <label for="items">Witch Items</label>
            <textarea
              id="message"
              name="message"
              placeholder="Witch Items"
            ></textarea>
          </div>

          <div className="form-label">
            <label for="items">How Many Of Each</label>
            <textarea
              id="message"
              name="message"
              placeholder="How Many Of Each"
            ></textarea>
          </div>

          <div className="form-label">
            <label for="items">How Many Colours/Prints On Each</label>
            <textarea
              id="message"
              name="message"
              placeholder="How Many Colours/Prints On Each"
            ></textarea>
          </div>
        </form>
        <div>
          {" "}
          <button className="button-submit">
            <span>Request A Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
}
