import {useEffect, useState} from "react";
import "./home.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaSpotify, FaSoundcloud, FaTwitter, FaYoutube } from "react-icons/fa";
import {Media} from "../../assets/index";

// images
// import videoBackground from "../../assets/kayGif.gif";
import quote from "../../assets/carbon_quotes.png";


import ScrollToTop from "../../components/scollToTop/ScrollToTop";



function Home() {
  const [file, setFile] = useState(null)

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="home_showcase">
        <div className="home_showcase_wrapper container">
          <div className="top">
          <div
           data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="400"
              data-aos-duration="900"
           >
          <p>welcome <span>!!!</span></p>

          </div>
          <div
          data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="600"
              data-aos-duration="900"
           >
          <p>Allow us to introduce you to the <span>Kay</span>Bryn. The artistic creative mind at it’s best.</p>
           </div>

        </div>
        <div className="bottom">
            <div 
            data-aos="fade-up"
           data-aos-easing="ease-in"
           data-aos-delay="600"
              data-aos-duration="900"
            >

          <p>Stay Connected</p>
            </div>
          <div 
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-delay="600"
             data-aos-duration="1000"
     data-aos-anchor-placement="top-bottom"
          className="home_social">
            <div
            className="slide_in"
            >
            <a 
            href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaSoundcloud className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaSpotify className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className="social_icon"/></a>
            </div>         
            </div>
        </div>
          </div>
          <div className="home_sensation">
        <div className="sensation_wrapper">
          {/* <div className="logo_background">
            <img src={videoBackground} alt="Kay Bryn Music" />
          </div> */}
        {/* <video autoplay loop muted>
      <source src="//assets/KAy.mp4" type="video/mp4" />
    </video> */}
          <p
           data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="300"
              data-aos-duration="600"
     data-aos-anchor-placement="top-bottom"
          >Sensational musical artist</p>
          <p
           data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="400"
              data-aos-duration="600"
     data-aos-anchor-placement="top-bottom"
          >"Music expresses that which cannot be put into words and that which cannot remain silent."</p>
          
          <p
           data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="500"
              data-aos-duration="600"
     data-aos-anchor-placement="top-bottom"
          >Victor Hugo</p>
        </div>

      </div>
      </section>

{/* ======= SECTION: MUSIC VIDEOS ======= */}
      <section id="home_video">
        <div className="home_videos_wrapper">
          <div className="top">
            <p
             data-aos="fade-left"
             data-aos-easing="ease-in"
             data-aos-delay="300"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            >Latest Music Videos</p>
            <div 
             data-aos="fade-left"
             data-aos-easing="ease-in"
             data-aos-delay="500"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            className="underline"></div>
            <p
             data-aos="fade-left"
             data-aos-easing="ease-in"
             data-aos-delay="700"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            >Click to watch  latest music Video bangers </p>
          </div>

          <div className="bottom">
            <div className="videos">
              <div 
        //       data-aos="fade-right"
        //       data-aos-easing="ease-in"
        //       data-aos-delay="300"
        //          data-aos-duration="900"
        // data-aos-anchor-placement="top-bottom"
              className="frame">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eSjoEzDXKGY?si=wNdQhv-hetEY4s9P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/eSjoEzDXKGY?si=wNdQhv-hetEY4s9P" target="_blank" rel="noopener noreferrer">
                  Kay Bryn Hyira Me ft. Dopeation
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fZqEdsvuDVg?si=QE-BM8uRxSxVupEO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/fZqEdsvuDVg?si=QE-BM8uRxSxVupEO" target="_blank" rel="noopener noreferrer">
                  Kay Bryn - Fresh Boy
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/lg2zRlMwSrs?si=sZ_-23AWHGUvnfZZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/lg2zRlMwSrs?si=sZ_-23AWHGUvnfZZ" target="_blank" rel="noopener noreferrer">
                Kay Bryn - WakaWaka
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/tH6o-HVRZ3s?si=hcExHhJzMe6wCpg6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/tH6o-HVRZ3s?si=hcExHhJzMe6wCpg6" target="_blank" rel="noopener noreferrer">
                Kay Bryn - DeDe
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BbWQWy692mw?si=RFjo-_SRaR9hzdE_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/BbWQWy692mw?si=RFjo-_SRaR9hzdE_" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Money
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t4w967iwX8E?si=AGKMM-FI-xpCuEXF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/t4w967iwX8E?si=AGKMM-FI-xpCuEXF" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Thinking ft. Article Wan
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WvTXmd9Wp0E?si=w3hoZ26Yznus3WLj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/WvTXmd9Wp0E?si=w3hoZ26Yznus3WLj" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Baa Sumo Mi (Official Video)
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/9DR_7mXnyC8?si=pcpbpown-_DGNT5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="title">
                <a href="https://youtu.be/9DR_7mXnyC8?si=pcpbpown-_DGNT5_" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Wahala (Visualizer)
                </a>
                </div>
              </div>
            </div>
              <button className="btn home_videos_btn">
                <span></span>
                <Link to="/music_videos">See More Videos</Link>
              </button>
          </div>
        </div>
      </section>

      <section id="home_about">
        <div className="home_about_wrapper">
          <div className="left">
            <div className="text">
            <div
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="400"
               data-aos-duration="900"
            className="quote">
              <img src={quote} alt="Kay Bryn Music" />
              <p>The best experiences comes from the soul.</p>
            </div>
            <p
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="400"
               data-aos-duration="900"
            >Kay Bryn</p>
            <p
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="400"
               data-aos-duration="900"
            >Artist</p>
            </div>
            <div className="overlays">
            <div 
            data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="400"
                     data-aos-duration="900"
            className="overlay"></div>
            <div 
            data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="600"
                     data-aos-duration="900"
            className="overlay"></div>
            <div 
             data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="700"
                     data-aos-duration="900"
            className="overlay"></div>
            </div>
          </div>
          <div className="right">
            <p
             data-aos="flip-left"
             data-aos-easing="ease-in"
             data-aos-delay="400"
                data-aos-duration="900"
            >About me</p>
            <p
             data-aos="fade-right"
             data-aos-easing="ease-in"
             data-aos-delay="500"
                data-aos-duration="900"
            >Meet Kwame Mensah, a dynamic Hiplife artist hailing from Ghana but making waves in the UK music scene. Known for his unique fusion of traditional Ghanaian rhythms with contemporary hip-hop beats, Kwame has become a trailblazer in the Hiplife genre. Having collaborated with renowned artists both in Ghana and the UK, his music transcends borders, delivering infectious rhythms that celebrate his cultural roots while embracing the diversity of his international experiences. Kwame Mensah's compelling journey continues to inspire and reshape the global Hiplife landscape...</p>
            <div
             data-aos="fade-in"
             data-aos-easing="ease-in"
             data-aos-delay="700"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            >
            <button className="btn">
              <span></span>
              <Link to="/biography">Biography</Link>
            </button>
            </div>
          </div>
        </div>
      </section>

      <section id="home_gallery">
        <div className="home_gallery_wrapper container">
          <p
          data-aos="flip-left"
          data-aos-easing="ease-in"
          data-aos-delay="700"
             data-aos-duration="900"
    data-aos-anchor-placement="top-bottom"
          >Events & Gallery</p>
          <div className="media_container">
          {
            Media.map((file, index) => (
              <div className="media" key={index} onClick={() => setFile(file)}>
                {
                file.type === 'image'
                ? <img src={file.url} alt="Kay Bryn Music"></img>
                : <video src={file.url} muted />
                }
              </div>
            ))
            }
          </div>
          <div className="popup_media" style={{display: file ? "block" : "none"}}>
            <span
            onClick={() => setFile(null)}
            >&times;</span>
            {
              file?.type === 'video'
              ? <video src={file?.url} muted autoplay controls />
              : <img src={file?.url} alt="kay bryn music" />
            }
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Home;
