import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import "./contact.css";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <Helmet>
      <title>Free Concert Tickets</title>
        <meta
      name="description"
      content="Get updated in performace programme updates from Kay Bryn and enjoy the pictures and videos from previous performances "
    />
    <link rel='canonical' href='/apply_ticket' />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2331167376516057"
     crossorigin="anonymous"></script>
      </Helmet>

    <div id="contact-main">
      <div className="contact-main-showcase">
        <p 
        data-aos="flip-left"
        data-aos-easing="ease-in"
        data-aos-delay="400"
        data-aos-duration="900"
        className="head"
        >Free Concert Tickets</p>
      </div>
      <div className="contact-container">
        <div className="top">
          <p className="text_center">We'd love to hear from you.</p>
          <div className="underline"></div>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="text_center">Contact Details</p>
            <p className="text_center emphasis">
              Email: <span> concert-support@kaybryn.com</span>
            </p>
            {/* <p className="text_center">
            Accra Office: No: 301 Sao's Place, Odotei tsui Street, Dzorwulu,
            Accra.
          </p> */}
            <p className="text_center emphasis">
              Phone: <span>+44 7838 681583</span>
            </p>
            {/* <p className="text_center">Post: P.O Box CT 5919, Cantonments, Accra, Ghana</p> */}
          </div>
          <div className="right">
            <p>Please fill the form and sumbit to receive you Ticket...Thank you!</p>
            {/* <form action="https://formsubmit.co/ac7b778d8e2f21dcd3f06f91904aa1c4" method="POST"> */}
            <form
              action="https://formsubmit.co/ac7b778d8e2f21dcd3f06f91904aa1c4"
              method="POST"
              target="_blank"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email address" required />
              </div>
              {/* <div className="form-group">
                <input
                  type="hidden"
                  id="email"
                  name="_autoresponse"
                  value="CONGRATULATIONS YOUR TICKET FOR THE SHOW IS ACTIVATED...SEE YOU SOON!!

Date: Sunday May 19th 2024

Venue: Purple turtle (Reading) 9 gun street reading RG12JR

Time: 7pm - 3am"
                />
              </div> */}
              {/* <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div> */}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
    </div>
  );
}

export default Contact;
