import React, { useState} from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

// images
import navLogo from "../../assets/logo 1.png";



function Header() {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <nav 
      id="header" 
      className={navbar ? "active" : ""}>
        <div className={toggle ? "header_wrapper container increase" : "header_wrapper container"}>
          <NavLink to="/">
          <img src={navLogo} alt="kay bryn logo"  className="nav_logo"/>
          </NavLink>
          <div className={toggle ? "links toggle" : "links"}>
            <ul className={toggle ? "header_middle toggle" : "header_middle"}>
              <li onClick={( ) => setToggle(false)}>
            {/* <Link to="/"></Link> */}
            <a href="#home_showcase">Home</a>
              </li>
              <li onClick={( ) => setToggle(false)}>
            {/* <Link to="#home_about"></Link> */}
            <a href="#home_about">Biography</a>
              </li>
              <li onClick={( ) => setToggle(false)}>
                <a href="#home_video">Music</a>
            {/* <Link to="/music_videos"></Link> */}
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/gallery">Events & Gallery</Link>
              </li>
            </ul>
          <div className="header_right">
              <button className="btn" onClick={( ) => setToggle(false)}>
            <span className="btn_animate"></span>
            <a href="#footer" className="link">Contact Us</a>
                </button>
          </div>
          </div>
        <div 
        onClick={() => setToggle(!toggle)}
        className={ toggle ? "humburger animate" : "humburger"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
