import React from "react";
import styles from "./EduProVol.module.css";

function EduProVol() {
  return (
    <div className={styles.layout} id="eduProvVol">
      <h1 className={styles.title}>Experiences</h1>
      <div className={styles.container1}>
        <div className={styles.education}>
          <h1>Education</h1>
          <div className={styles.contentE}>
            <p>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Highschool: </strong>
              Piatra Neamt National College of Informatics (2016-2020)
            </p>
            <p>
              I graduated from high school with a major in computer mathematics,
              computer science intensive. In those 4 years I learned the basics
              of IT and realized that I really like IT field.
            </p>
            <br />
            <br />
            <p>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;University: </strong>
              Faculty of Cybernetics, Statistics and Informatics(2020-2023)
            </p>
            <p>
              I majored in Economic Informatics at this faculty. My choice for
              this major came from a desire to develop my IT skills while
              simultaneously wanting to learn more about economics. I think it
              is important to know some basic aspects about economics as well.
              During college I learned the following technologies: HTML, CSS,
              JavaScript, React, Java, C#, C/C++ and databases (Oracle SQL and
              MySQL).
            </p>
          </div>
        </div>
        {/* <div className={styles.bar}></div> */}
        <div className={styles.volunteering}>
          <h1>Volunteering</h1>
          <div className={styles.contentV}>
            <p>
              <strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROSOFT multidisciplinary
                competition{" "}
              </strong>
              <ul className={styles.containerUL2}>
                <li>I have exchanged IT experience with people from abroad</li>
                <li>I developed my IT skills</li>
                <li>
                  I had the opportunity to see another perspective from people
                  abroad, passionate about IT
                </li>
              </ul>
            </p>
            <br />
            <p>
              <strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SiSC - Cybernetics Students
                Union
              </strong>
            </p>
            <p>In college I was part of a student organization called SiSC:</p>
            <br />
            <p>
              I was a member of the <strong>human resources department</strong>{" "}
              and I aimed to do the following:
              <div className={styles.containerUL}>
                <ul>
                  <li> I was constantly involved in projects and meetings</li>
                  <li>Mentoring</li>
                  <li>I coordinated a project.</li>
                </ul>
                <ul>
                  <li>I did interactive activities to unite all departments</li>
                  <li>I organized teambuildings</li>
                </ul>
              </div>
            </p>
            <br />
            <p>
              {" "}
              I was a member of the <strong>IT department</strong> and I aimed
              to do the following:
              <div className={styles.containerUL}>
                <ul>
                  <li>
                    I learned the technologies: HTML, CSS, JavaScript, React
                  </li>
                  <li>I learned to work both individually and collectively</li>
                  <li>
                    I learned how to organize my tasks to be more efficient
                  </li>
                </ul>
                <ul></ul>
              </div>
            </p>
          </div>
        </div>
      {/* </div> */}
      {/* <div className={styles.container2}> */}
        <div className={styles.experiences}>
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
                developed my skills in: HTML, CSS, JavaScript and React.
              </p>
              <br />
              <li>
                I did an internship at <strong>Ernst & Young</strong>. I learned
                to work in UiPath Studio.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.certifications}>
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
