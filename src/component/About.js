import "./About.css";

function About() {
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

  //the about section
  return (
    <section className="about-container" id="About">
      <div className="about">
        <div className="title">About me</div>
        <div className="horizantal-container">
          <div className="left-container">
            <div className="description-title">Get to know me!</div>
            <div className="description">
              <p>
                I'm an Industrial IT and Automation Engineer specialised in{" "}
                <span>robotics</span> and <span>embedded software</span>{" "}
                with knowledge in software development. Check out some of my
                work in the{" "}
                <span
                  className="colored"
                  href="#"
                  onClick={() => scrollToSection("Projects")}
                >
                  Projects
                </span>{" "}
                section.
              </p>
              <p>
                I also like sharing content related to <span>robotics</span>{" "}
                that I have learned over the years so it can help other people
                of the Community. Feel free to Connect or Follow me on my{" "}
                <span className="colored">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/mohamed-yassine-koubaa/"
                    target="_blank"
                    className="colored"
                    style={{
                      textDecoration: "none",
                      color: "var(--accent-color)",
                    }}
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </span>
                .
              </p>
              <p>
                I'm open to <span>Job</span> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to{" "}
                <span
                  className="colored"
                  href="#"
                  onClick={() => scrollToSection("Contact")}
                >
                  contact
                </span>{" "}
                me.
              </p>
            </div>
          </div>
          <div className="right-container">
            <div className="skills-title">My Skills</div>
            <div className="skill-container">
              <span>C/C++</span>
              <span>Python</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React JS</span>
              <span>Git</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>PyTorch</span>
              <span>TensorFlow</span>
              <span>OpenCV</span>
              <span>Qt</span>
              <span>ROS</span>
              <span>Localization</span>
              <span>Navigation</span>
              <span>Regulation</span>
              <span>SolidWorks</span>
              <span>PCB Design</span>
              <span>Embedded SW Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
