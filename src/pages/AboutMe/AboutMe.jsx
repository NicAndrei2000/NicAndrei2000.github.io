import React from "react";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.layout} id="about">
      <h1 className={styles.title}>
        About <span>Me</span>
      </h1>
      <div className={styles.content}>
        <p>
          &nbsp;&nbsp;&nbsp;I am Niculita Andrei, a recent graduate of CSIE
          (Faculty of Cybernetics, Statistics, and Informatics), specializing in
          computer science-economics. I would like to take this opportunity to
          introduce myself and provide some insights into my background and
          interests. I am a driven individual who thrives on tackling challenges
          and possesses a strong passion for travel and sports. Engaging in
          physical activities serves as a means of relaxation and allows me to
          temporarily set aside any concerns or issues. I have actively
          participated in two high-performance sports: tennis and volleyball. My
          commitment to involvement dates back to my high school years, where I
          initially discovered my enthusiasm for volunteering. I consistently
          sought opportunities to contribute to various projects, and this
          commitment significantly contributed to my personal growth.
          Subsequently, I decided to extend my involvement in volunteer work
          into my university years. Currently, I am a member of SiSC (Student
          Union of Cybernetics), where I serve within the HR department. I also
          played a role in the IT department during a particular project. As a
          member of IT, my role was to be involved mainly on website
          development. This experience has allowed me to further enhance my
          technical skills and contribute meaningfully to the organization's
          objectives.
        </p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp; On the technical side, I love programming, I'm
          always curious to discover new things I can learn in this field. In
          college I learned about{" "}
          <strong>
            C++/C, OOP, Java, JavaScript, HTML/CSS, React and databases
          </strong>
          . On a personal level, I've done a few projects which you can find in
          the "My projects" section. By doing projects I tried to improve my
          skills in different technologies and become better and
          better.("Practice makes perfect.")
        </p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp; Thank you for your time and I invite you to learn
          more about me through the sections below!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
