import React from "react";
import styles from "./Projects.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";

function Projects() {
  const projects = [
    {
      id: "p1",
      title: "editorVideoGallery",
      content: (
        <>
          <p>Click here to find out more about this project!</p>
          <br />
          <br />
          <p>I used the technologies: HTML, CSS, JavaScript.</p>
        </>
      ),
      img: "img1",
    },
    {
      id: "p2",
      title: "freelancingWebsite",
      content: (
        <>
          <p>Click here to find out more about this project!</p>
          <br />
          <br />
          <p>
            I used the technologies: HTML, CSS, JavaScript, React, Node.js and
            MySQL.
          </p>
        </>
      ),
      img: "img1",
    },
    {
      id: "p3",
      title: "volleyballGame",
      content: (
        <>
          <p>Click here to find out more about this project!</p>
          <br />
          <br />
          <p>I used the technologies: HTML, CSS, JavaScript.</p>
        </>
      ),
      img: "img1",
    },
  ];
  return (
    <div className={styles.ProjectsContainer}>
      {projects?.map((project) => {
        return (
          <CategoryCard
            key={project.id}
            title={project.title}
            content={project.content}
          />
        );
      })}
    </div>
  );
}

export default Projects;
