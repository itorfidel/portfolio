import React from "react";
import styles from "../styles/components/Title.module.scss";
import { useInView } from "react-intersection-observer";

interface Props {
  titleSm?: string;
  titleLg?: string;
  className?: string;
}

const Title: React.FC<Props> = ({ titleSm, titleLg, className }) => {
  const [ref, inView] = useInView();

  return (
    <h1
      className={`${styles.title} ${className} ${inView ? styles.inView : ""}`}
      ref={ref}
    >
      <div className={styles.small}>{titleSm}</div>
      <div className={styles.large}>{titleLg}</div>
    </h1>
  );
};

export default Title;
