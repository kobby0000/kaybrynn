import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/logo 1.png";
import { FaFacebook, FaInstagram, FaSpotify, FaSoundcloud, FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="footer_wrapper container">
          <div className="top">
            <Link to="/">
            <img src={footerLogo} alt="kay bryn music" className="footer_logo" />
            </Link>
          <ul>
            <li><span>ADDRESS:</span> 58 LONG ROAD, UK</li>
            <li><span>PHONE:</span> +233 54 605 6456</li>
            <li><span>E-MAIL:</span> kaybryn66@gmail.com</li>
          </ul>
          </div>
          <div className="bottom">
            <div className="divider"></div>

            <div className="social">
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube className="social_icon"/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaSoundcloud className="social_icon"/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook className="social_icon"/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaSpotify className="social_icon"/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram className="social_icon"/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className="social_icon"/></a>
            </div>

            <div className="main">
            <div className="left">
              <p>Copyright© {new Date().getFullYear()}</p>
            </div>
            <div className="right">
              <p href="/developer">Developed by KeyCode</p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
