import React from "react";
import styles from "../styles/components/ProjectsCard.module.scss";
import { Link } from "react-router-dom";
import { GitHub, Visibility } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

interface Props {
  img: string;
  projectTitle: string;
  previewLink: string;
  githubLink: string;
}

const ProjectsCard: React.FC<Props> = ({
  img,
  projectTitle,
  previewLink,
  githubLink,
}) => {
  const [ref, inView] = useInView();

  return (
    <div className={`${styles.card} ${inView ? styles.inView : ""}`} ref={ref}>
      <img src={img} alt="" />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <h3>{projectTitle}</h3>
          <p>
            <Link to={previewLink}>
              <Visibility /> Live Preview
            </Link>
            <Link to={githubLink}>
              <GitHub /> Github
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
