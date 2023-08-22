import React from "react";
import styles from "./Navbar.module.css";
import NavbarNavigation from "./NavbarNavigation";

function Navbar() {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>
        <h1>Portfolio</h1>
      </div>
      <NavbarNavigation />
    </div>
  );
}

export default Navbar;
