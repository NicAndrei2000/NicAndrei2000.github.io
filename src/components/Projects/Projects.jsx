import React from 'react'
import styles from './Projects.module.css'
import CategoryCard from '../CategoryCard/CategoryCard';

function Projects() {

    const projects=[
        {
            id:"p1",
            title:"editorVideoGallery",
            img:"img1"
        },
        {
            id:"p2",
            title:"freelancingWebsite",
            img:"img1"
        },
        {
            id:"p3",
            title:"volleyballGame",
            img:"img1"
        },
       
    ];
  return (
    <div className={styles.ProjectsContainer}>
        {
            projects?.map((project)=>{
                return <CategoryCard key={project.id} title={project.title}/>;
            })
        }
    </div>
  )
}

export default Projects
