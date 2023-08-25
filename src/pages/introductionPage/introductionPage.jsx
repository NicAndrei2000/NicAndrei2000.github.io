import React from "react";
import styles from "./introductionPage.module.css";
import personalImg from '../../assets/Images/PozaNicAndrei.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

function introductionPage() {
  return (
    <div className={styles.layout} id="home">
      <div className={styles.content}>
        <h1 className={styles.typewriter}>Hello, It's Me, Niculita Andrei!</h1>
        <p>I am a young graduate who is passionate about IT. I want to start my carrer in this area!</p>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com/niculita.andrei.7" target="_blank"><FontAwesomeIcon className={styles.facebook} icon={faFacebook} /></a>
          <a href="https://www.linkedin.com/in/andrei-niculita-236237221/" target="_blank"><FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} /></a>
          <a href="https://github.com/NicAndrei2000" target="_blank"><FontAwesomeIcon className={styles.github} icon={faGithub} /></a>
        </div>
      </div>
      <div className={styles.myImage}>
        <img src={personalImg} alt="Doesn't load"/>
      </div>
    </div>
  );
}

export default introductionPage;
