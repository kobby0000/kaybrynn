import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Performance, Archive } from "../../assets/index";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

// images
import flyer from "../../assets/kay7.jpg";

function Gallery() {
  const [file, setFile] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  const adCode = `
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-2331167376516057"
         data-ad-slot="9938910058"
         data-ad-format="auto">
    </ins>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  `;

  return (
    <div>
      <Helmet>
      <title>Performance & Gallery</title>
        <meta
      name="description"
      content="Get updated in performace programme updates from Kay Bryn and enjoy the pictures and videos from previous performances "
    />
    <link rel='canonical' href='/gallery' />
     <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Your Organization",
              "url": "https://your-website.com",
              // Add more properties as needed
            }
          `}
        </script>
      </Helmet>
      <section id="gallery_showcase">
        <div className="gallery_wrapper_showcase">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="400"
            data-aos-duration="900"
          >
            <h1>Events & Gallery</h1>
            {/* <p></p> */}
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
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-anchor-placement="top-bottom"
              className="top"
            >
              Event Update
            </p>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-delay="500"
              data-aos-duration="900"
              data-aos-anchor-placement="top-bottom"
              className="underline"
            ></div>
            <p
              data-aos="flip-left"
              data-aos-easing="ease-in"
              data-aos-delay="400"
              data-aos-duration="900"
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
              data-aos-delay="400"
              data-aos-duration="900"
              // data-aos-anchor-placement="top-bottom"
              className="left"
            >
              <img src={flyer} alt="kay bryn music" loading="lazy"/>
            </div>
            <article className="right">
              <p
                data-aos="flip-left"
                data-aos-easing="ease-in"
                data-aos-delay="400"
                data-aos-duration="900"
                data-aos-anchor-placement="top-bottom"
              >
                Kay Bryn Live In Concert
              </p>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in"
                data-aos-delay="500"
                data-aos-duration="900"
                data-aos-anchor-placement="top-bottom"
                className="underline"
              ></div>
              <div className="cards">
                {/* <div className="left"> */}
                <div className="card">
                  <p
                    data-aos="flip-left"
                    data-aos-easing="ease-in"
                    data-aos-delay="500"
                    data-aos-duration="900"
                    data-aos-anchor-placement="top-bottom"
                  >
                    coming Soon !!!
                  </p>
                  {/* <p>London, UK</p>
                    <p>22 avenu road Great Arena</p> */}
                </div>
                {/* <div className="card">
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
                  </div> */}
              </div>
              {/* </div> */}
            </article>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: adCode }} />
      </section>
      <div>

      </div>
      <section id="performance_gallery">
        <div className="home_gallery_wrapper container">
          <p
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="600"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
          >
            Performance & Stage Craft
          </p>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in"
            data-aos-delay="500"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
            className="underline"
          ></div>
          <div className="media_container">
            {Performance.map((file, index) => (
              <div className="media" key={index} onClick={() => setFile(file)}>
                {file.type === "image" ? (
                  <img src={file.url} alt="Stage Performance" loading="lazy"></img>
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
              <img src={file?.url}
               alt="kay bryn stage performance" loading="lazy" />
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
          <div 
             data-aos="fade-in"
             data-aos-easing="ease-in"
             data-aos-delay="500"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            className="underline"></div>
          <div className="media_container">
            {Archive.map((file, index) => (
              <div className="media" key={index} onClick={() => setFile(file)}>
                {file.type === "image" ? (
                  <img src={file.url} alt='kay bryn stage performance' loading="lazy"></img>
                ) : (
                  <video src={file.url} muted loading="lazy"/>
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
              <video src={file?.url} muted autoplay controls loading="lazy"/>
            ) : (
              <img src={file?.url} alt="kay bryn music" loading="lazy"/>
            )}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Gallery;
