import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarNavigation.module.css";

function NavbarNavigation() {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
}

export default NavbarNavigation;
