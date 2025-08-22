import React from "react";
import styles from "../styles/components/ServicesCard.module.scss";
import CardWrapper from "./CardWrapper";

interface Props {
  icon: React.ReactElement;
  title?: string;
}

const ServicesCard: React.FC<Props> = ({ icon, title }) => {
  return (
    <CardWrapper className={styles.card}>
      {icon}
      <h5>{title}</h5>
    </CardWrapper>
  );
};

export default ServicesCard;
