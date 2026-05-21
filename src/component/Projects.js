import "./Projects.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DOMPurify from "dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import PubSub from "pubsub-js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HTMLFileLoader({ className, address }) {
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    const fetchHTML = async () => {
      const response = await fetch(address);
      const html = await response.text();
      setHtmlContent(html);
    };

    fetchHTML();
  }, [address]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
    />
  );
}

function Project({ info, className, onClick, style }) {
  return (
    <div className={className} style={style}>
      <div className="horizontal-container">
        <div
          className="left-container"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/projects/images/" + info.image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={onClick}
        >
          <div className="project-card-overlay">
            <h3 className="project-card-title">{info.title}</h3>
            <span className="project-card-link">View Details &rarr;</span>
          </div>
        </div>

        <div className="right-container">
          <div className="title">{info.title}</div>
          <HTMLFileLoader
            className="description"
            address={
              process.env.PUBLIC_URL +
              "/projects/descriptions/" +
              info.description
            }
          />
          <div className="skills-title">My Skills</div>
          <div className="skill-container">
            {info.skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  //Navigate to the project section
  const scrollToSection = () => {
    const element = document.getElementById("Projects");
    const remToPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const navbarHeight = 5;
    const elementHeight =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight * remToPixels;

    window.scrollTo({
      top: elementHeight,
      behavior: "instant",
    });
  };

  //mesure element position and dimentions
  const calculatePosition = (element) => {
    const rect = element.getBoundingClientRect();

    return {
      top: Math.round(rect.top),
      left: Math.round(rect.left),
      height: rect.height,
      width: rect.width,
    };
  };

  //select and deselect the clicked item
  const [clicked, setClicked] = useState(null);

  //unclick when using navbar
  useEffect(() => {
    const token = PubSub.subscribe("clicked", (topic, msg) => {
      setClicked(msg);
    });
    return () => PubSub.unsubscribe(token);
  }, []);

  const handleClick = (event, info) => {
    if (!clicked) {
      // calculate the position of the clicked element
      const position = calculatePosition(event.target);
      //create the duplicate element and set it on top of the new element
      setClicked(
        <Project
          className="slide-inner clicked"
          style={{
            position: "fixed",
            top: position.top + "px",
            left: position.left + "px",
            height: position.height + "px",
            width: position.width + "px",
            animation: "expand 0.5s forwards",
          }}
          onClick={() => {
            setClicked("");
            scrollToSection();
            document.documentElement.style.overflow = "auto";
          }}
          info={info}
        />
      );
      //lock the scroll
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      scrollToSection();
      setClicked(null);
    }
  };

  //load data from json
  const [projectsInfo, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.PUBLIC_URL + "/projects/info.json"
      );
      const data = await response.json();
      setInfo(data);
    };

    fetchData();
  }, []);

  return (
    <section className="projects-container" id="Projects">
      <div className="projects">
        <div className="title">Projects</div>
        <div className="horizantal-container">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projectsInfo.map((info, index) => (
              <SwiperSlide style={{ minWidth: "1px" }} key={info.id || index}>
                <Project
                  className="slide-inner"
                  info={info}
                  onClick={(event) => {
                    handleClick(event, info);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {clicked && ReactDOM.createPortal(clicked, document.body)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
