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
            &nbsp;I developed this project as a video editing and viewing tool,
            offering a wide range of effects to enhance video content. This
            solution provides a streamlined approach to transforming videos into
            compelling creations. Users have the ability to upload multiple
            videos, organize them alphabetically by name, and delete as needed.
            The upload process supports two convenient methods: drag-and-drop
            functionality or by selecting the "Upload" button, which redirects
            users to their personal file repository.
          </p>
        </>
      ),
      technologies: (
        <p>
          &nbsp;For this project I used the following technologies:{" "}
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
            &nbsp;The primary objective of this project is to establish a
            collaborative platform between universities and different companies.
            The developed application features four distinct user roles: the
            administrator, professors, students, and clients. Professors, as
            users, are empowered to assemble teams comprising multiple students,
            while client users can post diverse projects via the application,
            making them accessible to all users. To enhance project
            organization, I have integrated six distinct project categories:
            Programming & Tech, Graphics & Design, Video & Animation, Music &
            Audio, Creative Writing, and Writing & Translation. Existing teams
            within the application are eligible to apply for various projects,
            and upon acceptance, they gain authorization to work on these
            projects. Upon project completion, teams will utilize the app to
            send clients links to their solutions, ensuring efficient project
            delivery and collaboration.
          </p>
          <br />
          <p>&nbsp;Advantages of the app:</p>
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
          &nbsp;For this project I used the following technologies:{" "}
          <strong> HTML, CSS, JavaScript, React, Node.js and MySQL </strong>.
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
            &nbsp;I initiated this project with the aim of
            showcasing essential insights into the world of volleyball. This
            endeavor reflects my dedication to presenting a comprehensive range
            of topics and details pertinent to volleyball for the benefit of
            sports enthusiasts and stakeholders.
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
          &nbsp;For this project I used the following technologies:{" "}
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
            <p>&nbsp;Below you can see some pictures of the project.</p>
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
