import "./Header.css";
import { TypeAnimation } from "react-type-animation";
import photo from "./assets/pdp.png";

const TITLES = [
  "Robotics Engineer",
  "Embedded Software Engineer",
  "Software Developer"
];

const getTitleWithArticle = (title) => {
  const firstLetter = title.trim().charAt(0).toLowerCase();
  const isVowel = ["a", "e", "i", "o", "u"].includes(firstLetter);
  return isVowel ? `an ${title}` : `a ${title}`;
};

const TYPING_SEQUENCE = TITLES.reduce((acc, title) => {
  acc.push(" " + getTitleWithArticle(title));
  acc.push(2000);
  return acc;
}, []);


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
      5 * remToPixels;

    window.scrollTo({
      top: elementHeight,
      behavior: "smooth",
    });
  };

  //the hero section
  return (
    <section className="header-container" id="Home">
      <div className="glowing-orb orb-1"></div>
      <div className="glowing-orb orb-2"></div>
      <div className="header">
        <div className="top-container">
          <div className="left-container">
            <div className="greetings">
              <div className="greeting-sub">Hi! I Am</div>
              <div className="greeting-main">Mohamed Yassine Koubaa</div>
            </div>
            <div className="summary">
              I am
              <span className="typing-text">
                <TypeAnimation
                  sequence={TYPING_SEQUENCE}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                  cursor={true}
                />
              </span>
            </div>
            <div className="button-container">
              <div
                className="hire-me-button"
                onClick={() => scrollToSection("Contact")}
              >
                Hire Me
              </div>
              <div
                className="know-more-button"
                onClick={() => scrollToSection("About")}
              >
                Know More
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="photo-frame">
              <img
                className="photo"
                src={photo}
                alt="Mohamed Yassine Koubaa profile"
              />
            </div>
          </div>
        </div>
        <div className="bottom-container"></div>
      </div>
    </section>
  );
}

export default Header;
