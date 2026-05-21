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
                I'm a passionate <span>robotics engineer</span> with hands-on
                experience in <span>embedded systems</span> and{" "}
                <span>AI-driven computer vision</span> solutions. Specialised in
                developing innovative systems for real-world applications. As a{" "}
                <span>Software Developer</span>, I leverage
                my expertise in <span>C/C++</span> and <span>Python</span> to
                create impactful projects. Check out some of my work in the{" "}
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
                I'm passionate about sharing knowledge related to{" "}
                <span>robotics</span>, <span>embedded systems</span>, and{" "}
                <span>AI</span> that I've gained over the years. Feel free to
                Connect or Follow me on my{" "}
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
                </span>{" "}
                and{" "}
                <span className="colored">
                  <a
                    href="https://github.com/MeYaKo98"
                    target="_blank"
                    className="colored"
                    style={{
                      textDecoration: "none",
                      color: "var(--accent-color)",
                    }}
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </span>
                .
              </p>
              <p>
                I'm open to <span>Job opportunities</span> where I can
                contribute, learn and grow. If you have an opportunity that
                matches my skills and experience, don't hesitate to{" "}
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
