import React from "react";
import "./footer.css";

import footerLogo from "../../assets/logo1.png";
import { FaFacebook, FaInstagram, FaSpotify, FaSoundcloud, FaTwitter, FaYoutube, FaApple, FaTiktok } from "react-icons/fa";
import { CiWavePulse1 } from "react-icons/ci";


function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="footer_wrapper container">
          <div className="top">
            <a href="/">
            <img src={footerLogo} alt="kay bryn music" className="footer_logo" width="10" height="auto" loading="lazy"/>
            </a>
          <ul>
            {/* <li><span>ADDRESS:</span> 58 LONG ROAD, UK</li> */}
            <li><span>PHONE:</span> +44 7838 681583</li>
            <li><span>E-MAIL:</span> Kaybrynmgmt@gmail.com</li>
          </ul>
          </div>
          <div className="bottom">
            <div className="divider"></div>

            <div className="social">
              <a href="https://music.apple.com/gb/artist/kay-bryn/1470837370" target="_blank" rel="noopener noreferrer"><FaApple className="social_icon" /></a>
            <a href="https://www.youtube.com/results?search_query=kaybryn" target="_blank" rel="noopener noreferrer"><FaYoutube className="social_icon"/></a>
            <a href="https://soundcloud.com/kay-bryn" target="_blank" rel="noopener noreferrer"><FaSoundcloud className="social_icon"/></a>

            <a href="https://www.tiktok.com/@kay_bryn?_t=8bfEadJ3HRL&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok className="social_icon"/></a>
            
            <a href=" https://www.facebook.com/kaybrynofficial" target="_blank" rel="noopener noreferrer"><FaFacebook className="social_icon"/></a>
            <a href="https://open.spotify.com/artist/6u36hFAxWHSh5YAMFT5DWO?si=kjuRtRKWTrenF0P4s3x-_Q" target="_blank" rel="noopener noreferrer"><FaSpotify className="social_icon"/></a>
            <a href=" https://www.instagram.com/Iam_kaybryn/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social_icon"/></a>

            <a href="https://twitter.com/Iamkaybryn" target="_blank" rel="noopener noreferrer"><FaTwitter className="social_icon"/></a>
            <a href="https://audiomack.com/kay-bryn" target="_blank" rel="noopener noreferrer"> <CiWavePulse1 className="social_icon"/></a>

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
