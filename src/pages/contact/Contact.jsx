import React from "react";
import "./contact.css";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

function Contact() {
  return (
    <div id="contact-main">
      <div className="contact-main-showcase">
        <p className="head">Contact Us</p>
      </div>
      <div className="contact-container">
        <div className="top">
      <p className="text_center">We'd love to hear from you.</p>
      <div className="underline"></div>
        </div>
        <div className="bottom">
        <div className="left">
          <p className="text_center">Contact Details</p>
          <p className="text_center emphasis">Email: <span>info@swiftlaw.co</span></p>
          <p className="text_center">
            Accra Office: No: 301 Sao's Place, Odotei tsui Street, Dzorwulu,
            Accra.
          </p>
          <p className="text_center emphasis">Phone: <span>+233 20 453 3955</span></p>
          <p className="text_center">Post: P.O Box CT 5919, Cantonments, Accra, Ghana</p>
        </div>
        <div className="right">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Contact;
