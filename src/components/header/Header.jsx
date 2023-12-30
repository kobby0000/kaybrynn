import React, { useState} from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

// images
import navLogo from "../../assets/logo 1.png";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);


  const changeBackground = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <nav id="header" className={navbar ? "active" : ""}>
        <div className={toggle ? "header_wrapper container increase" : "header_wrapper container"}>
          <NavLink to="/">
          <img src={navLogo} alt="kay bryn logo"  className="nav_logo"/>
          </NavLink>
          <div className={toggle ? "links toggle" : "links"}>
            <ul className={toggle ? "header_middle toggle" : "header_middle"}>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/">Home</Link>
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/biography">Biography</Link>
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/music_videos">Music</Link>
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/gallery">Events & Gallery</Link>
              </li>
            </ul>
          <div className="header_right">
              <button className="btn" onClick={( ) => setToggle(false)}>
            <span className="btn_animate"></span>
            <Link to="/contact_us" className="link" >
                Contact Us
            </Link>
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
