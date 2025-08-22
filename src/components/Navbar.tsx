import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
import NavbarLink from "./NavbarLink";
import useNavScroll from "../hooks/navScrollEffect";
import { Close, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  const handleCloseMenu = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "A" || target.tagName === "SPAN") {
      handleToggleMenu();
    }
  };

  useNavScroll(setIsScrolled);

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <h1 className={styles.title}>Fidel</h1>
        </Link>

        <Menu className={styles.mobileMenu} onClick={handleToggleMenu} />

        <nav className={`${isMenuOpen ? styles.show : ""}`}>
          <Close className={styles.mobileMenuExit} onClick={handleToggleMenu} />

          <ul onClick={handleCloseMenu}>
            <NavbarLink to="/" id="hero-section">
              Home
            </NavbarLink>
            <NavbarLink to="/about" id="about-section">
              About
            </NavbarLink>
            <NavbarLink to="/services" id="services-section">
              Services
            </NavbarLink>
            <NavbarLink to="/skills" id="skills-section">
              Skills
            </NavbarLink>
            <NavbarLink to="/projects" id="projects-section">
              Projects
            </NavbarLink>
            <NavbarLink to="/contact" id="contact-section">
              Contact
            </NavbarLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
