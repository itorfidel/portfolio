import React from "react";
import styles from "../styles/components/CardWrapper.module.scss";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const CardWrapper: React.FC<Props> = ({ className, children }) => {
  const [ref, inView] = useInView();

  return (
    <div
      className={`${styles.cardWrapper} ${
        inView ? styles.inView : ""
      } ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
