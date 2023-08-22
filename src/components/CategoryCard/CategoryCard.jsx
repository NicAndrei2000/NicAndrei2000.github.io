import React from "react";
import styles from "./CategoryCard.module.css";
import { Link} from "react-router-dom";

function CategoryCard(props) {
  return (
    <Link to={`/ProjectsCategory/${props.title}`}>
      <div className={styles.categoryCard}>
        <img
          className={styles.categoryCardImage}
          src={"sss"}
          alt={props.title}
        />
        <div className={styles.categoryInfo}>
          <h2 className={styles.categoryCardTitle}>
            {`${props.title.charAt(0).toUpperCase()}${props.title.slice(1)}`}
          </h2>
          <p className={styles.description}>{"Merge"}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
