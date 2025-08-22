import React from "react";
import styles from "../styles/components/ContactMeItem.module.scss";
import CardWrapper from "./CardWrapper";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  svg: React.ReactElement;
  linkTo?: string;
  tooltip?: string;
  className?: string;
}

const ContactMeItem: React.FC<Props> = ({
  title,
  description,
  svg,
  linkTo,
  tooltip,
  className,
}) => {
  const { ref: contactRef, inView: contactInView } = useInView();

  return (
    <div
      className={`${styles.item} ${
        contactInView ? styles.inView : ""
      } ${className}`}
      ref={contactRef}
    >
      <CardWrapper className={styles.icon}>{svg}</CardWrapper>
      <h4 className={styles.light}>{title}</h4>
      <p className={styles.dark}>
        {linkTo ? (
          <div className={styles.linkContainer}>
            <span className={styles.tooltip}>{tooltip}</span>
            <Link to={linkTo} target="blank" className={styles.link}>
              {description}
            </Link>
          </div>
        ) : (
          description
        )}
      </p>
    </div>
  );
};

export default ContactMeItem;
