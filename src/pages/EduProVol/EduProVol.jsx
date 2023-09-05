import React from "react";
import styles from "./EduProVol.module.css";

function EduProVol() {
  return (
    <div className={styles.layout} id="eduProvVol">
      <h1 className={styles.title}>Experiences</h1>
      <div className={styles.container1}>
        <div className={styles.box}>
          <h1>Education</h1>
          <div className={styles.contentE}>
            <p>
              <strong>&nbsp;Highschool: </strong>
              Piatra Neamt National College of Informatics (2016-2020)
            </p>
            <p>
              Upon high school graduation, I attained a specialization in
              computer mathematics. Over the course of those four years, I
              acquired a foundational understanding of information technology
              and uncovered a deep affinity for the IT sector.
            </p>
            <br />
            <br />
            <p>
              <strong>&nbsp;University: </strong>
              Faculty of Cybernetics, Statistics and Informatics(2020-2023)
            </p>
            <p>
              I pursued a major in Economic Informatics at this faculty with the
              intention of enhancing my IT expertise while also gaining a deeper
              understanding of economics. Recognizing the significance of having
              a foundational knowledge of economics, I made this choice.
              Throughout my college journey, I acquired proficiency in various
              technologies, including HTML, CSS, JavaScript, React, Java, C#,
              C/C++, and database management systems such as Oracle SQL and
              MySQL.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>Volunteering</h1>
          <div className={styles.contentV}>
            <p>
              <strong>
                &nbsp;PROSOFT multidisciplinary
                competition{" "}
              </strong>
            </p>
            <ul className={styles.containerUL2}>
              <li>I have exchanged IT experience with people from abroad</li>
              <li>I developed my IT skills</li>
              <li>
                I had the opportunity to see another perspective from people
                abroad, passionate about IT
              </li>
            </ul>
            <br />
            <p>
              <strong>
                &nbsp;SiSC - Cybernetics Students
                Union
              </strong>
            </p>
            <p>
              I was a member of the <strong>human resources department</strong>{" "}
              and I aimed to do the following:
            </p>
            <div className={styles.containerUL}>
              <ul>
                <li> I was involved in projects/meetings</li>
                <li>Mentoring</li>
                <li>I coordinated a project.</li>
              </ul>
              <ul>
                <li>I did interactive activities to unite all departments</li>
                <li>I organized teambuildings</li>
              </ul>
            </div>
            <p>
              {" "}
              During a specific project, I was part of
              <strong> IT department</strong> and I had the following
              objectives:
            </p>
            <div className={styles.containerUL}>
              <ul>
                <li>
                  I learned the technologies: HTML, CSS, JavaScript, React
                </li>
                <li>I learned to work both individually and collectively</li>
                <li>I learned how to organize my tasks to be more efficient</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h1>Technical / work experiences</h1>
          <div className={styles.contentEx}>
            <ul>
              <li>
                I have created a project to manage a video gallery, using:{" "}
                <strong>HTML, CSS and JavaScript</strong>.
              </li>
              <br />
              <li>
                I created a website from scratch using:{" "}
                <strong>MySQL, NodeJS, HTML, CSS, JavaScript and React</strong>.
                This website is a collaboration platform between faculties and
                different companies.
              </li>
              <br />
              <li>
                I did an internshipt at <strong>Arggo Consulting</strong>:
              </li>
              <p>
                &nbsp;&nbsp;&nbsp; I worked in the IT frontend field. I
                developed my skills in: HTML, CSS and JavaScript.
              </p>
              <br />
              <li>
                I did an internship at <strong>Ernst & Young</strong>. I learned
                to work in UiPath Studio.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.box}>
          <h1>Certifications</h1>
          <div className={styles.contentC}>
            <ul>
              <li>Bachelor's degree</li>
              <br />
              <li>Certificate of professional competence</li>
              <br />
              <li>Database Design and Programming with SQL Oracle</li>
              <br />
              <li>UiPath Academy (Achievements)</li>
              <ul className={styles.certificationsUiPath}>
                <li>RPA Starter</li>
                <li>RPA Business Analysis Fundamentals</li>
                <li>Introduction to RPA Developer FastStart</li>
                <li>RPA Implementation Methodology Fundamentals</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduProVol;
