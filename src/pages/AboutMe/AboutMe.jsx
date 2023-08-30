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
          &nbsp;&nbsp;&nbsp; My name is Niculita Andrei and I am a recent
          graduate of CSIE (Faculty of Cybernetics, Statistics and Informatics),
          specialization in computer science-economics. First of all I would
          like to tell you a few things about myself. I am an ambitious person
          who likes challenges, I like to travel and I like to do sports. For me
          when I do sports I relax and forget about all the problems. In total I
          have played 2 performance sports: tennis and volleyball. Since high
          school I liked to volunteer. I always tried to get involved in all
          projects. This developed me personally a lot and I decided to do
          voluntary work at university. Currently I am part of an organization
          called SiSC (Student Union of Cybernetics). I am part of the IT
          department and my role is to create websites for different projects.
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
