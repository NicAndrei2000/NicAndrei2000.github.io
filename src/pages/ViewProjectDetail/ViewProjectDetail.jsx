import React, { useEffect, useState } from "react";
import styles from "./ViewProjectDetail.module.css";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Atestat1 from "../../assets/Images/Atestat1.PNG";
import Atestat2 from "../../assets/Images/Atestat2.PNG";
import Atestat3 from "../../assets/Images/Atestat3.PNG";
import Licenta1 from "../../assets/Images/Licenta1.PNG";
import Licenta2 from "../../assets/Images/Licenta2.PNG";
import Licenta3 from "../../assets/Images/Licenta3.PNG";
import Licenta4 from "../../assets/Images/Licenta4.PNG";
import Licenta5 from "../../assets/Images/Licenta5.PNG";
import Licenta6 from "../../assets/Images/Licenta6.PNG";

function ViewProjectDetail() {
  const { projectName } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsDescription = [
    {
      key: "editorVideoGallery",
      title: "Editor Video Gallery ",
      descriere: "Exemplu1 merge bine",
      slides: [
        {
          url: Atestat1,
        },
        {
          url: Atestat1,
        },
        {
          url: Atestat1,
        },
      ],
    },
    {
      key: "freelancingWebsite",
      title: "Freelancing Website",
      descriere: "Exemplu2 merge bine",
      slides: [
        {
          url: Licenta1,
        },
        {
          url: Licenta2,
        },
        {
          url: Licenta3,
        },
        {
          url: Licenta4,
        },
        {
          url: Licenta5,
        },
        {
          url: Licenta6,
        },
      ],
    },
    {
      key: "volleyballGame",
      title: "Volleyball game",
      descriere: (
        <>
        <p>
          &nbsp;&nbsp;&nbsp;I developed this project with the purpose of
          highlighting various significant pieces of information about the sport
          of volleyball. Through this initiative, I have committed to
          illustrating and bringing to the attention of the sports enthusiasts
          an array of aspects related to volleyball.
        </p>
        <br />
        <div className={styles.ULcontainer}>
        <ul>
          <li>On the "Acasa" page I wrote about what sport is and what benefits it offers.</li>
          <li>On the "Reguli" page I have introduced the official rules of volleyball.</li>
          <li>On the "Istoric" page I wrote about the emergence of volleyball and its history.</li>
          <li>On the "Galerie" page there are some pictures of professional volleyball players.</li>
          <li>In the page "Volei Ro" is the official website of the Romanian Volleyball Federation.</li>
          <li>In the page "LPS P.Neamt" I wrote about some great volleyball players from Piatra Neamt</li>
          <li>In the page "Contact" users can send me mail with different messages.</li>
        </ul>
        </div>
        <br />
        </>
      ),
      technologies: (
        <p>
          &nbsp;&nbsp;&nbsp;For this project we used the following technologies:{" "}
          <strong> HTML, CSS and JavaScript </strong>.
        </p>
      ),
      slides: [
        {
          url: Atestat1,
        },
        {
          url: Atestat2,
        },
        {
          url: Atestat3,
        },
      ],
    },
  ];

  useEffect(() => {
    const selProj = projectsDescription.filter(
      (proj) => proj.key === projectName
    )[0];

    if (selProj !== null) {
      setSelectedProject(selProj);
    }
  }, [projectName]);

  return (
    <div>
      {selectedProject != null ? (
        <div className={styles.layout}>
          <div className={styles.content}>
            <h1 className={styles.title}>{selectedProject.title}</h1>
            {selectedProject.descriere}
            <br />
            {selectedProject.technologies}
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;Below you can see some pictures of the project
            </p>
            <br />
            <div className={styles.imageSlider}>
              <ImageSlider slides={selectedProject.slides} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ViewProjectDetail;
