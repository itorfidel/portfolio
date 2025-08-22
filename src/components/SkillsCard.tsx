import React from "react";
import styles from "../styles/components/SkillsCard.module.scss";
import CardWrapper from "./CardWrapper";

interface Props {
  icon: string;
  title?: string;
  classNameIcon?: string;
}

const SkillsCard: React.FC<Props> = ({ icon, title, classNameIcon }) => {
  return (
    <CardWrapper>
      <div className={styles.card}>
        <img src={icon} alt="" className={classNameIcon} />
        <p>{title}</p>
      </div>
    </CardWrapper>
  );
};

export default SkillsCard;
