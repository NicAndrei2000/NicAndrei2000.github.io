import React from 'react'
import styles from './MyProjects.module.css'
import Projects from '../../components/Projects/Projects'

function MyProjects() {
  return (
    <div className={styles.layout} id='myProjects'>
      <Projects/>
    </div>
  )
}

export default MyProjects
