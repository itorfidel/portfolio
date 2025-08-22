import styles from "../styles/components/NavbarLink.module.scss";
import { Link, useLocation } from "react-router-dom";
import handleNavigation from "../helpers/navigation";

interface Props {
  to: string;
  id: string;
  children: React.ReactNode;
}

const NavbarLink = ({ to, id, children }: Props) => {
  const path = useLocation().pathname;

  return (
    <li
      className={`${styles.navbarLink} ${path === to ? styles.active : ""}`}
      onClick={() => {
        handleNavigation(id);
      }}
    >
      <Link to={to}>
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default NavbarLink;
