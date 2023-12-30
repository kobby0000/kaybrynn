import React from "react";
import "./about.css";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

// images
import kayImg from "../../assets/Screenshot (17).png"

function About() {

  return (
    <div>
      <section id="about_showcase">
        <div className="about_showcase_wrapper">
          <img src={kayImg} alt="kay bryn music" />
        <h1>
          abot page
        </h1>
        </div>
       </section>

      <ScrollToTop />
    </div>
  );
}

export default About;
