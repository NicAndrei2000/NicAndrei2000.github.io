import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarNavigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const toggleMenuDropDown = () => {
    setMenuDropdownOpen(!isMenuDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={styles.nav}>
      {windowWidth <= 960 ? (
        <li style={{ listStyleType: "none" }}>
          <FontAwesomeIcon
            onClick={toggleMenuDropDown}
            className={styles.menu}
            icon={faBars}
          />
          {isMenuDropdownOpen && (
            <div className={styles.dropdownContent}>
              <a href="#home" onClick={toggleMenuDropDown}>
                Home
              </a>
              <a href="#about" onClick={toggleMenuDropDown}>
                About Me
              </a>
              <a href="#eduProvVol" onClick={toggleMenuDropDown}>
                Experiences
              </a>
              <a href="#mySkills" onClick={toggleMenuDropDown}>
                My skills
              </a>
              <a href="#myProjects" onClick={toggleMenuDropDown}>
                My projects
              </a>
              <a href="#contact" onClick={toggleMenuDropDown}>
                Contact
              </a>
            </div>
          )}
        </li>
      ) : (
        <ul>
          <li>
            <a href="#home">
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <p>About Me</p>
            </a>
          </li>
          <li>
            <a href="#eduProvVol">
              <p>Experiences</p>
            </a>
          </li>
          <li>
            <a href="#mySkills">
              <p>My skills</p>
            </a>
          </li>
          <li>
            <a href="#myProjects">
              <p>My projects</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavbarNavigation;
