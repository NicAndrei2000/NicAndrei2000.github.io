import React from "react";
import styles from "./CategoryCard.module.css";
import { Link } from "react-router-dom";
import background from "../../assets/Images/ProjectBackground.jpg";
function CategoryCard(props) {
  return (
    <Link to={`/ProjectsCategory/${props.title}`}>
      <p className={styles.projectTitle}>{`${props.title.charAt(0).toUpperCase()}${props.title.slice(1)}`}</p>
      <div className={styles.categoryCard}>
        <img
          className={styles.categoryCardImage}
          src={background}
          alt={props.title}
        />
        <div className={styles.categoryInfo}>
          <h2 className={styles.categoryCardTitle}>
            {`${props.title.charAt(0).toUpperCase()}${props.title.slice(1)}`}
          </h2>
          <div className={styles.description}>{props.content}</div>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
