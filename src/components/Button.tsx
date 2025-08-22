import React from "react";
import styles from "../styles/components/Button.module.scss";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  colorReverse?: boolean;
}

const Button: React.FC<Props> = ({
  to,
  children,
  className,
  onClick,
  colorReverse,
}) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${
        colorReverse ? styles.reverse : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Button;
