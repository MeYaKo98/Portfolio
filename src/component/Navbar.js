import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import PubSub from "pubsub-js";
import "./Navbar.css";

function Navbar() {
  //used to show and hide the menu
  const [showMenu, setShowMenu] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  //mesure the y position of the page to allow the navbar to stick and change the bg color

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 60) setStickyNav(true);
    else setStickyNav(false);
  };

  window.addEventListener("scroll", handleScroll);

  //used to navigate throught the page
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    const remToPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const navbarHeight = elementId === "Home" ? 6 : 5;
    const elementHeight =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight * remToPixels;

    window.scrollTo({
      top: elementHeight,
      behavior: "smooth",
    });

    handleMenuToggle();

    //lock navbar
    PubSub.publish("clicked", null);
    document.documentElement.style.overflow = "auto";
  };

  //the navbar
  return (
    <div className={stickyNav ? "navbar-container sticky" : "navbar-container"}>
      <div className="navbar">
        <div className="logo_container">
          MeYaKo<span> .</span>
        </div>

        <ul className={showMenu ? "list_container show" : "list_container"}>
          <li className="nav-item">
            <span
              className="nav-link"
              href="#;"
              onClick={() => scrollToSection("Home")}
            >
              Home
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              href="#"
              onClick={() => scrollToSection("About")}
            >
              About
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              href="#"
              onClick={() => scrollToSection("Projects")}
            >
              Projects
            </span>
          </li>

          <li
            className="nav-item contact-button"
            href="#"
            onClick={() => scrollToSection("Contact")}
          >
            Contact Me
          </li>
        </ul>

        <div className="menu-button" onClick={handleMenuToggle}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
