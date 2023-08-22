import React, { useEffect, useState } from 'react'
import styles from './ViewProjectDetail.module.css'
import { useParams } from 'react-router-dom'

function ViewProjectDetail() {
    const {projectName}=useParams();
    const [selectedProject,setSelectedProject]=useState(null);
    const projectsDescription=[
        {
            title:"Exemplu1",
            descriere:"Exemplu1 merge bine"
        },
        {
            title:"Exemplu2",
            descriere:"Exemplu2 merge bine"
        },
        {
            title:"Exemplu3",
            descriere:"Exemplu3 merge bine"
        },
    ]
    useEffect(()=>{
        const selProj = projectsDescription.filter(proj => proj.title === projectName)[0];

        if(selProj!==null){
            setSelectedProject(selProj);
        }

    },[projectName])

   

  return (
    <div>
        {selectedProject!=null?(
        <>
        <p>{selectedProject.title}</p>
        <p>{selectedProject.descriere}</p>
        </>
        ):null}
        
    </div>
  )
}

export default ViewProjectDetail
