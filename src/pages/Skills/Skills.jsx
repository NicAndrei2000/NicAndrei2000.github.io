import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.layout} id="mySkills">
      <h1 className={styles.title}>My Skills</h1>
      <section>
        <div className={styles.container1}>
          <h1 className={styles.heading1}>Technical Skills</h1>
          <div className={styles.technicalBars}>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>HTMLsdasadsd</span>
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
                <span>HTMLsdasadsd</span>
              </div>
              <div className={`${styles.progressLine} ${styles.JavaScript}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>HTMLsdasadsd</span>
              </div>
              <div className={`${styles.progressLine} ${styles.React}`}>
                <span></span>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.info}>
                <span>HTMLsdasadsd</span>
              </div>
              <div className={`${styles.progressLine} ${styles.MySQL}`}>
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
                  className={`${styles.path} ${styles.path1}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}>90%</div>
              <div className={styles.text}>creativity</div>
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
                  className={`${styles.path} ${styles.path2}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}>90%</div>
              <div className={styles.text}>creativity</div>
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
                  className={`${styles.path} ${styles.path2}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}>90%</div>
              <div className={styles.text}>creativity</div>
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
                  className={`${styles.path} ${styles.path2}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.percentage}>90%</div>
              <div className={styles.text}>creativity</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
