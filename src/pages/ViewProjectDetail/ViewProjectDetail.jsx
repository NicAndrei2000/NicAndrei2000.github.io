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
import videoEditor1 from "../../assets/Images/EV1.PNG";
import videoEditor2 from "../../assets/Images/EV2.PNG";
import videoEditor3 from "../../assets/Images/EV3.PNG";

function ViewProjectDetail() {
  const { projectName } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsDescription = [
    {
      key: "editorVideoGallery",
      title: "Editor Video Gallery ",
      descriere: (
        <>
          <p>
            &nbsp;&nbsp;&nbsp;I made this project to edit videos and watch them.
            This tool allows me to apply numerous effects to videos. With this
            solution I got a simplified way to transform videos into captivating
            creations. The user can upload multiple videos, sort the uploaded
            videos alphabetically by name and delete them. The user can upload
            one or more videos at the same time in two ways: either drag and
            drop or by pressing the "Upload" button where they will be
            redirected to their personal files.
          </p>
        </>
      ),
      technologies: (
        <p>
          &nbsp;&nbsp;&nbsp;For this project I used the following technologies:{" "}
          <strong> HTML, CSS and JavaScript </strong>.
        </p>
      ),
      slides: [
        {
          url: videoEditor1,
        },
        {
          url: videoEditor2,
        },
        {
          url: videoEditor3,
        },
      ],
    },
    {
      key: "freelancingWebsite",
      title: "Freelancing Website",
      descriere: (
        <>
          <p>
            &nbsp;&nbsp;&nbsp;The aim of this project is to create a platform
            for collaboration between universities and different companies. The
            developed application contains 4 types of users: the administrator,
            the user with the role of professor, the user with the role of
            student and the user with the role of client. Through my
            application, users with the role of professor will have the right to
            create a team of several students. Client users will be able to post
            different projects through the application, which will be viewable
            by all users. In order to organize projects more efficiently, I have
            implemented 6 distinct categories in which projects can be placed:
            Programming & Tech, Graphics & Design, Video & Animation, Music &
            Audio, Creative Writing, Writing & Translation. Existing teams in
            the app will be able to apply to different projects, and if accepted
            they will have the right to work on those projects. After completion
            of the projects, the teams will send links to the clients with the
            solutions via the app.
          </p>
          <br />
          <p>&nbsp;&nbsp;&nbsp;Advantages of the app:</p>
          <div className={styles.LicenseULContainer}>
            <ul>
              <li>
                Students can put into practice what they learn at university.
              </li>
              <li>
                Students will have the opportunity to be visible to certain
                companies and be considered for recruitment.
              </li>
              <li>Companies will be able to hire passionate students.</li>
              <li>
                Teachers will be able to observe current labour market
                requirements.
              </li>
            </ul>
          </div>
          <br />
        </>
      ),
      technologies: (
        <p>
          &nbsp;&nbsp;&nbsp;For this project I used the following technologies:{" "}
          <strong> HTML, CSS, JavaScript, React and MySQL </strong>.
        </p>
      ),
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
            highlighting various significant pieces of information about the
            sport of volleyball. Through this initiative, I have committed to
            illustrating and bringing to the attention of the sports enthusiasts
            an array of aspects related to volleyball.
          </p>
          <br />
          <div className={styles.ULcontainer}>
            <ul>
              <li>
                On the "Acasa" page I wrote about what sport is and what
                benefits it offers.
              </li>
              <li>
                On the "Reguli" page I have introduced the official rules of
                volleyball.
              </li>
              <li>
                On the "Istoric" page I wrote about the emergence of volleyball
                and its history.
              </li>
              <li>
                On the "Galerie" page there are some pictures of professional
                volleyball players.
              </li>
              <li>
                In the page "Volei Ro" is the official website of the Romanian
                Volleyball Federation.
              </li>
              <li>
                In the page "LPS P.Neamt" I wrote about some great volleyball
                players from Piatra Neamt
              </li>
              <li>
                In the page "Contact" users can send me mail with different
                messages.
              </li>
            </ul>
          </div>
          <br />
        </>
      ),
      technologies: (
        <p>
          &nbsp;&nbsp;&nbsp;For this project I used the following technologies:{" "}
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
              &nbsp;&nbsp;&nbsp;Below you can see some pictures of the project.
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
