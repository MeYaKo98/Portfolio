import "./Header.css";
import { TypeAnimation } from "react-type-animation";
import photo from "./assets/pdp.png";

function Header() {
  //used to navigate throught the page
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    const remToPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const elementHeight =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      6 * remToPixels;

    window.scrollTo({
      top: elementHeight,
      behavior: "smooth",
    });
  };

  //the hero section
  return (
    <section className="header-container" id="Home">
      <div className="header">
        <div className="top-container">
          <div className="left-container">
            <div className="greetings">
              <div>Hi! I Am</div>
              <div>Mohamed</div>
              <div>Yassine Koubaa</div>
            </div>
            <div className="summary">
              I am a
              <TypeAnimation
                sequence={[
                  " Robotics Engineer ",
                  2000,
                  "n Artificial Intelligence Specialist ",
                  2000,
                  " Software Developper ",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={true}
              />
            </div>
            <div className="button-container">
              <div
                className="hire-me-button"
                href="#"
                onClick={() => scrollToSection("Contact")}
              >
                Hire Me
              </div>
              <div
                className="know-more-button"
                href="#"
                onClick={() => scrollToSection("About")}
              >
                Know More
              </div>
            </div>
          </div>
          <div className="right-container">
            <img className="photo" src={photo} />
          </div>
        </div>
        <div className="bottom-container"></div>
      </div>
    </section>
  );
}

export default Header;
