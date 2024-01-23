import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaSpotify, FaSoundcloud, FaTwitter, FaYoutube,FaApple, FaTiktok } from "react-icons/fa";
import { CiWavePulse1 } from "react-icons/ci";
import {Media} from "../../assets/index";

// images & videos
import quote from "../../assets/carbonquotes.png";
import backgroudVideo from "../../assets/whatsappvideo.mp4"

import AddSense from "../../components/addScripts/AddSense";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";



function Home() {
  const [file, setFile] = useState(null)

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Helmet>
      <title>Kay Bryn</title>
        <meta
      name="description"
      content="Kay Bryn is a Ghanaian UK based Artiste hailing from the streets of London.A prolific Afro-fusion Artiste. An incredible touch of African sounds."
    />
     <link rel='canonical' href='/' />
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
      <section id="home_showcase">
      <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src={backgroudVideo} type="video/mp4" loading="lazy"/>
      </video>
    </div>
        <div className="home_showcase_wrapper container">
          <div className="top">
          <div
           data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="400"
              data-aos-duration="900"
           >
          <h1>welcome <span>!!!</span></h1>

          </div>
          <div
          data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="600"
              data-aos-duration="900"
           >
          <p>Allow us to introduce you to <span>Kay </span>Bryn. The artistic creative mind at it’s best.</p>
           </div>

        </div>
        <div className="bottom">
            <div 
            data-aos="fade-up"
           data-aos-easing="ease-in"
           data-aos-delay="400"
              data-aos-duration="600"
              data-aos-anchor-placement="top-bottom"
            >

          <p>Stay Connected</p>
            </div>
          <div 
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-delay="600"
             data-aos-duration="600"
     data-aos-anchor-placement="top-bottom"
          className="home_social">
            <div className="slide_in">
            <a href="https://music.apple.com/gb/artist/kay-bryn/1470837370" target="_blank" rel="noopener noreferrer"><FaApple /></a>
            </div>
            <div
            className="slide_in"
            >
            <a 
            href="https://www.youtube.com/results?search_query=kaybryn" target="_blank" rel="noopener noreferrer"><FaYoutube className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="https://soundcloud.com/kay-bryn" target="_blank" rel="noopener noreferrer"><FaSoundcloud className="social_icon"/></a>
            </div>
            <div className="slide_in">
              <a href="https://www.tiktok.com/@kay_bryn?_t=8bfEadJ3HRL&_r=1" target="_blank" rel="noopener noreferrer" className="social_icon"><FaTiktok /></a>
            </div>

            <div
            className="slide_in"
            >    
            <a href=" https://www.facebook.com/kaybrynofficial" target="_blank" rel="noopener noreferrer"><FaFacebook className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="https://open.spotify.com/artist/6u36hFAxWHSh5YAMFT5DWO?si=kjuRtRKWTrenF0P4s3x-_Q" target="_blank" rel="noopener noreferrer"><FaSpotify className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href=" https://www.instagram.com/Iam_kaybryn/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social_icon"/></a>
            </div>
            <div
            className="slide_in"
            >
            <a href="https://twitter.com/Iamkaybryn" target="_blank" rel="noopener noreferrer"><FaTwitter className="social_icon"/></a>
            </div> 
            <div className="slide_in">
            <a href="https://audiomack.com/kay-bryn" target="_blank" rel="noopener noreferrer"> <CiWavePulse1 className="social_icon"/></a>
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
          >"Set yourself apart from the rest, be FarFromOriginal” (FFO)
          </p>
          
          <p
           data-aos="flip-left"
           data-aos-easing="ease-in"
           data-aos-delay="500"
              data-aos-duration="600"
     data-aos-anchor-placement="top-bottom"
          > Kay Bryn </p>
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
            {/* <p
             data-aos="fade-left"
             data-aos-easing="ease-in"
             data-aos-delay="700"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            >Click to watch  latest music Video bangers </p> */}
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eSjoEzDXKGY?si=wNdQhv-hetEY4s9P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/eSjoEzDXKGY?si=wNdQhv-hetEY4s9P" target="_blank" rel="noopener noreferrer">
                  Kay Bryn Hyira Me ft. Dopeation
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fZqEdsvuDVg?si=QE-BM8uRxSxVupEO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/fZqEdsvuDVg?si=QE-BM8uRxSxVupEO" target="_blank" rel="noopener noreferrer">
                  Kay Bryn - Fresh Boy
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/lg2zRlMwSrs?si=sZ_-23AWHGUvnfZZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/lg2zRlMwSrs?si=sZ_-23AWHGUvnfZZ" target="_blank" rel="noopener noreferrer">
                Kay Bryn - WakaWaka
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/tH6o-HVRZ3s?si=hcExHhJzMe6wCpg6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/tH6o-HVRZ3s?si=hcExHhJzMe6wCpg6" target="_blank" rel="noopener noreferrer">
                Kay Bryn - DeDe
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BbWQWy692mw?si=RFjo-_SRaR9hzdE_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/BbWQWy692mw?si=RFjo-_SRaR9hzdE_" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Money
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t4w967iwX8E?si=AGKMM-FI-xpCuEXF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/t4w967iwX8E?si=AGKMM-FI-xpCuEXF" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Thinking ft. Article Wan
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WvTXmd9Wp0E?si=w3hoZ26Yznus3WLj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/WvTXmd9Wp0E?si=w3hoZ26Yznus3WLj" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Baa Sumo Mi (Official Video)
                </a>
                </div>
              </div>
              <div className="frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/9DR_7mXnyC8?si=pcpbpown-_DGNT5_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="title">
                <a href="https://youtu.be/9DR_7mXnyC8?si=pcpbpown-_DGNT5_" target="_blank" rel="noopener noreferrer">
                Kay Bryn - Wahala (Visualizer)
                </a>
                </div>
              </div>
            </div>
              <button className="btn home_videos_btn">
                <span></span>
                <a href="https://www.youtube.com/results?search_query=kaybryn" target="_blank" rel="noopener noreferrer">See More Videos</a>
                {/* <Link to="/music_videos"></Link> */}
              </button>
          </div>
        </div>
        <AddSense client="ca-pub-2331167376516057" slot="9938910058"/>
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
              <img src={quote} alt="quote icon" width="10" height="auto" loading="lazy"/>
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
            <div 
             data-aos="fade-left"
             data-aos-easing="ease-in"
             data-aos-delay="500"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            className="underline"></div>
            <p
             data-aos="fade-right"
             data-aos-easing="ease-in"
             data-aos-delay="500"
                data-aos-duration="900"
            >Kay Bryn is a Ghanaian UK based Artiste hailing from the streets of London. Born on the 6th of July in Takoradi (Western Region) to Ghanaian Parents. His passion for music grew strongly on the runaway.
<br /><br />
            He is a prolific Afro-fusion Artiste, a runway model (Kobby The Model) and a coach. Apart from modelling he has an incredible touch of an African sounds together with either afro pop, afro swing, hiphop, reggae, hip-life, the hi-life and the contemporary gospel music. 
            The extreme intricate details hidden inside his songs are appealing to anyone who loves these genres of music.
            Lethal combination of modelling and music make him the complete performer and unique in his forte.</p>
            <div
             data-aos="fade-in"
             data-aos-easing="ease-in"
             data-aos-delay="700"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            >
            <button className="btn">
              <span></span>
              <a href="https://www.youtube.com/results?search_query=kaybryn" target="_blank" rel="noopener noreferrer">Biography</a>
              {/* <Link to="/biography"></Link> */}
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
          <div 
             data-aos="fade-left"
             data-aos-easing="ease-in"
             data-aos-delay="500"
                data-aos-duration="900"
       data-aos-anchor-placement="top-bottom"
            className="underline"></div>
          <div className="media_container">
          {
            Media.map((file, index) => (
              <div className="media" key={index} onClick={() => setFile(file)}>
                {
                file.type === 'image'
                ? <img src={file.url} alt={file.description} width="500" height="600" loading="lazy"></img>
                : <video src={file.url} muted loading="lazy"/>
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
              ? <video src={file?.url} muted autoplay controls loading="lazy"/>
              : <img src={file?.url} alt="kay bryn music video" width="500" height="600" loading="lazy"/>
            }
          </div>
          <div className="gallery_btn_container">
          <button className="btn">
          <span></span>
          <Link to="/gallery">See More</Link>
          </button>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Home;
