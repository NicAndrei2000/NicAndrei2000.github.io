import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.layout} id="mySkills">
      <h1 className={styles.title}>
        <span>My</span> Skills
      </h1>
      <div className={styles.sectionSkills}>
        <div className={styles.container1}>
          <h1 className={styles.heading1}>Technical Skills</h1>
          <div className={styles.technicalBars}>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>HTML</span>
              </div>
              <div className={`${styles.progressLine} ${styles.html}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>CSS</span>
              </div>
              <div className={`${styles.progressLine} ${styles.css}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>JavaScript</span>
              </div>
              <div className={`${styles.progressLine} ${styles.JavaScript}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>Node.js</span>
              </div>
              <div className={`${styles.progressLine} ${styles.NodeJS}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>React</span>
              </div>
              <div className={`${styles.progressLine} ${styles.React}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>C++</span>
              </div>
              <div className={`${styles.progressLine} ${styles.Cplusplus}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>C#</span>
              </div>
              <div className={`${styles.progressLine} ${styles.CSharp}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>Java</span>
              </div>
              <div className={`${styles.progressLine} ${styles.Java}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>MySQL & SQL Oracle</span>
              </div>
              <div className={`${styles.progressLine} ${styles.MySQLOracle}`}>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container2}>
          <h1 className={styles.heading1}>Soft Skills</h1>
          <div className={styles.radialBars}>
            <div className={styles.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={styles.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${styles.path} ${styles.communication}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}></div>
              <div className={styles.text}>Communication</div>
            </div>

            <div className={styles.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={styles.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${styles.path} ${styles.Creativity}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}></div>
              <div className={styles.text}>Critical thinking</div>
            </div>
            <div className={styles.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={styles.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${styles.path} ${styles.Teamwork}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}></div>
              <div className={styles.text}>Teamwork</div>
            </div>
            <div className={styles.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={styles.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${styles.path} ${styles.Adaptability}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}></div>
              <div className={styles.text}>Adaptability</div>
            </div>
            <div className={styles.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={styles.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${styles.path} ${styles.ProblemSolving}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}></div>
              <div className={styles.text}>Problem-solving</div>
            </div>
            <div className={styles.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={styles.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${styles.path} ${styles.TimeManagement}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}></div>
              <div className={styles.text}>Time management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
