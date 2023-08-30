import React from 'react'
import styles from './MyProjects.module.css'
import Projects from '../../components/Projects/Projects'

function MyProjects() {
  return (
    <div className={styles.layout} id='myProjects'>
      <h1 className={styles.title}><span>My</span> projects</h1>
      <Projects/>
    </div>
  )
}

export default MyProjects
