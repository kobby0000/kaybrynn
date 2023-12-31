import React, { useEffect, useState } from "react";
import "./gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Performance, Archive } from "../../assets/index";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

import flyer from "../../assets/IMG_7946.JPG";

function Gallery() {
  const [file, setFile] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="gallery_showcase">
        <div className="gallery_wrapper_showcase">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="400"
            data-aos-duration="900"
          >
            <p>Events & Gallery</p>
          </div>
        </div>
      </section>

      <section id="gallery_update">
        <div className="gallery_update_wrapper">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="200"
            data-aos-duration="400"
            //  data-aos-anchor-placement="top-bottom"
            className="top"
          >
            <p
              data-aos="flip-left"
              data-aos-easing="ease-in"
              data-aos-delay="200"
              data-aos-duration="400"
              data-aos-anchor-placement="top-bottom"
              className="top"
            >
              Event Update
            </p>
            <p
              data-aos="flip-left"
              data-aos-easing="ease-in"
              data-aos-delay="400"
              data-aos-duration="400"
              data-aos-anchor-placement="top-bottom"
            >
              We've added a diverse lineup of upcoming events to spark your
              interest! From exclusive workshops to thrilling performances,
              there's something for everyone. Don't miss out—check out the
              latest additions and join us for unforgettable moments. See you
              there!
            </p>
          </div>
          <div className="bottom">
            <div 
             data-aos="zoom-in-up"
             data-aos-easing="ease-in"
                data-aos-delay="800"
                data-aos-duration="400"
                data-aos-anchor-placement="top-bottom"
            className="left">
              <img src={flyer} alt="kay bryn music" />
            </div>
            <article className="right">
              <p
                data-aos="flip-left"
                data-aos-easing="ease-in"
                data-aos-delay="800"
                data-aos-duration="400"
                data-aos-anchor-placement="top-bottom"
              >
                It's About Time !!!
              </p>
              <div className="cards">
                <div className="left">
                  <div className="card">
                    <p>23 Mar</p>
                    <p>London, UK</p>
                    <p>22 avenu road Great Arena</p>
                  </div>
                  <div className="card">
                    <p>23 Mar</p>
                    <p>London, UK</p>
                    <p>22 avenu road Great Arena</p>
                  </div>
                </div>
                <div className="right">
                  <div className="card">
                    <p>23 Mar</p>
                    <p>London, UK</p>
                    <p>22 avenu road Great Arena</p>
                  </div>
                  <div className="card">
                    <p>23 Mar</p>
                    <p>London, UK</p>
                    <p>22 avenu road Great Arena</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="performance_gallery">
        <div className="home_gallery_wrapper container">
          <p
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="700"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
          >
            Performance & Stage Craft
          </p>
          <div className="media_container">
            {Performance.map((file, index) => (
              <div className="media" key={index} onClick={() => setFile(file)}>
                {file.type === "image" ? (
                  <img src={file.url} alt="Kay Bryn Music" loading="lazy"></img>
                ) : (
                  <video src={file.url} muted />
                )}
              </div>
            ))}
          </div>
          <div
            className="popup_media"
            style={{ display: file ? "block" : "none" }}
          >
            <span onClick={() => setFile(null)}>&times;</span>
            {file?.type === "video" ? (
              <video src={file?.url} muted autoplay controls loading="lazy" />
            ) : (
              <img src={file?.url} alt="kay bryn music" loading="lazy" />
            )}
          </div>
        </div>
      </section>

      <section id="archive_gallery">
        <div className="home_gallery_wrapper container">
          <p
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="700"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
          >
            Archive
          </p>
          <div className="media_container">
            {Archive.map((file, index) => (
              <div className="media" key={index} onClick={() => setFile(file)}>
                {file.type === "image" ? (
                  <img src={file.url} alt="Kay Bryn Music"></img>
                ) : (
                  <video src={file.url} muted />
                )}
              </div>
            ))}
          </div>
          <div
            className="popup_media"
            style={{ display: file ? "block" : "none" }}
          >
            <span onClick={() => setFile(null)}>&times;</span>
            {file?.type === "video" ? (
              <video src={file?.url} muted autoplay controls />
            ) : (
              <img src={file?.url} alt="kay bryn music" />
            )}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Gallery;
