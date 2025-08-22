import React from "react";
import styles from "../styles/components/Footer.module.scss";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        This website is developed by <Link to="#"> Itor Fidelis</Link>. For
        source code, kindly head over to my
        <Link
          to="https://github.com/itorfidel?tab=repositories"
          target="_blank"
        >
          {" "}
          github repository.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
