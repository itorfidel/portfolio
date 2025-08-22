import {
  Code,
  Email,
  GitHub,
  Home as HomeIcon,
  Phone,
} from "@mui/icons-material";
import React, { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SkillsCard from "../components/SkillsCard";
import handleNavigation from "../helpers/navigation";
import styles from "../styles/routes/Home.module.scss";
import Title from "../components/Title";
import ProjectsCard from "../components/ProjectsCard";
import ContactMeItem from "../components/ContactMeItem";
import ServicesCard from "../components/ServicesCard";
import { useNavigate } from "react-router-dom";
import InViewGlobal from "../components/InViewGlobal";

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [heroInView, setHeroInView] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const [servicesInView, setServicesInView] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const navigate = useNavigate();

  const handleInView = (
    inView: boolean,
    navigateTo: string,
    setInView: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (inView) {
      navigate(navigateTo);
      setInView(true);
    } else {
      setInView(false);
    }
  };

  return (
    <main className={styles.home}>
      <Navbar />

      <InViewGlobal
        className={styles.hero}
        id="hero-section"
        onChange={(inview) => handleInView(inview, "/", setHeroInView)}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <h3>Hello!</h3>
            <h1>
              I'm <span>Itor Fidelis</span>
            </h1>
            <h2>A fullStack web developer</h2>
            <div className={styles.buttons}>
              <Button
                to="/skills"
                className={styles.button}
                onClick={() => handleNavigation("contactMe-section")}
              >
                Hire me
              </Button>
              <Button
                to="projects"
                className={styles.button}
                onClick={() => handleNavigation("myProjects-section")}
                colorReverse={true}
              >
                My works
              </Button>
            </div>
          </div>

          <div className={styles.right}></div>
        </div>
      </InViewGlobal>

      <InViewGlobal
        className={`${styles.about} ${aboutInView ? styles.inView : ""}`}
        id="about-section"
        onChange={(inView) => {
          handleInView(inView, "/about", setAboutInView);
        }}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <img
              src="https://images.pexels.com/photos/17516101/pexels-photo-17516101/free-photo-of-man-portrait-in-darkness.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div
            className={`${styles.right} ${aboutInView ? styles.inView : ""}`}
          >
            <Title
              titleSm="About Me"
              titleLg="About"
              className={styles.title}
            />
            {/* <h3>Personal Info</h3> */}
            {/* <p>I'm</p> */}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              incidunt hic? Quo quis animi explicabo.
            </p>
            <ul>
              <li>
                <span>Name:</span> Itor Fidelis Offiono
              </li>
              <li>
                <span>Date of birth:</span> December 17, 2001
              </li>
              <li>
                <span>Address:</span> Calabar, Cross River State, Nigeria
              </li>
              <li>
                <span>Zip code:</span> 540211
              </li>
              <li>
                <span>Email:</span> jnrfidelisitor@gmail.com
              </li>
              <li>
                <span>Phone:</span> +234 807 642 9181
              </li>
            </ul>
            <h4>Get CV here</h4>
            <Button to="#">Download CV</Button>
          </div>
        </div>
      </InViewGlobal>

      <InViewGlobal
        className={`${styles.services} ${servicesInView ? styles.inView : ""}`}
        id="services-section"
        onChange={(inView) => {
          handleInView(inView, "/services", setServicesInView);
        }}
      >
        <Title titleSm="My services" titleLg="services" />
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          incidunt hic? Quo quis animi explicabo.
        </p>

        <div className={styles.container}>
          <ServicesCard icon={<Code />} title="Web Development" />
          <ServicesCard icon={<Code />} title="Web Development" />
          <ServicesCard icon={<Code />} title="Web Development" />
          <ServicesCard icon={<Code />} title="Web Development" />
          <ServicesCard icon={<Code />} title="Web Development" />
          <ServicesCard icon={<Code />} title="Web Development" />
        </div>
      </InViewGlobal>

      <InViewGlobal
        className={`${styles.skills} ${skillsInView ? styles.inView : ""}`}
        id="skills-section"
        onChange={(inView) => {
          handleInView(inView, "/skills", setSkillsInView);
        }}
      >
        <Title titleSm="My Skills" titleLg="skills" />
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          incidunt hic? Quo quis animi explicabo.
        </p>

        <div className={styles.container}>
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fhtml5.jpg?alt=media&token=00f3804a-8f06-4d09-935c-293d218274e8"
            title="HTML"
          />
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fcss3.jpg?alt=media&token=4ef3eced-cc56-4f00-b330-de3253b1c638"
            title="CSS"
          />
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fjavascript.jpg?alt=media&token=2177fb94-91d3-41fd-90de-2552bedef726"
            title="Javascript"
          />
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Freact-js.jpg?alt=media&token=18cd2fe5-1691-40e6-8fbf-efb1a0d87cb6"
            title="React Js"
          />
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fnode-js.jpg?alt=media&token=35de1d7b-0e12-4f05-beef-bb2b5b1423bd"
            title="Node Js"
          />
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fexpress-js.jpg?alt=media&token=3579bcaf-c915-40d1-8a55-9e19a814e810"
            title="Express Js"
            classNameIcon={styles.expressIcon}
          />
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fmongodb.jpg?alt=media&token=ff725794-4de5-4e21-a819-93450e601f10"
            title="MongoDB"
          />
          <SkillsCard
            icon="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Ftypescript.jpg?alt=media&token=79c8201e-bc3e-4eca-9df8-feec9a7d2a15"
            title="Typescript"
          />
        </div>
      </InViewGlobal>

      <InViewGlobal
        className={`${styles.projects} ${projectsInView ? styles.inView : ""}`}
        id="projects-section"
        onChange={(inView) => {
          handleInView(inView, "/projects", setProjectsInView);
        }}
      >
        <Title titleSm="My Projects" titleLg="projects" />
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          incidunt hic? Quo quis animi explicabo.
        </p>

        <div className={styles.container}>
          <ProjectsCard
            projectTitle="Potterland - Client"
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fpotterland-client.png?alt=media&token=20ebef89-0b47-43cc-a67e-507e6c6b3d60"
            previewLink="/"
            githubLink="/"
          />
          <ProjectsCard
            projectTitle="Potterland - Admin"
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fpotterland-admin.png?alt=media&token=4c3419fa-f1c5-4c19-be63-4524bad9b4fc"
            previewLink="/"
            githubLink="/"
          />
          <ProjectsCard
            projectTitle="Netflix - Client"
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-1fc3c.appspot.com/o/Assets%2Fnetflix.png?alt=media&token=fd296458-b37e-409e-88ca-c2735b7d1745"
            previewLink="/"
            githubLink="/"
          />
        </div>
      </InViewGlobal>

      <InViewGlobal
        className={`${styles.contact} ${contactInView ? styles.inView : ""}`}
        id="contact-section"
        onChange={(inView) => {
          handleInView(inView, "/contact", setContactInView);
        }}
      >
        <Title titleSm="contact me" titleLg="contact" />
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          incidunt hic? Quo quis animi explicabo.
        </p>

        <div className={styles.container}>
          <div className={styles.info}>
            <ContactMeItem
              title="Address"
              description="Calabar, Cross River State, Nigeria"
              className={styles.address}
              svg={<HomeIcon />}
            />
            <ContactMeItem
              title="Contact Number"
              description="+234 807 642 9181"
              linkTo="tel://2348076429181"
              tooltip="dial number"
              svg={<Phone />}
            />
            <ContactMeItem
              title="Email Address"
              description="jnrfidelisitor@gmail.com"
              linkTo="mailto:jnrfidelisitor@gmail.com"
              tooltip="open email"
              svg={<Email />}
            />
            <ContactMeItem
              title="Github"
              description="github link"
              linkTo="https://github.com/itorfidel?tab=repositories"
              tooltip="go to link"
              svg={<GitHub />}
            />
          </div>

          <div className={styles.formContainer}>
            <div className={styles.image}></div>
            <form>
              <input type="text" placeholder="Your Name" autoComplete="off" />
              <input type="email" placeholder="Your Email" autoComplete="off" />
              <input type="text" placeholder="Subject" autoComplete="off" />
              <textarea placeholder="Message"></textarea>
              <Button to="#" className={styles.submitBtn}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </InViewGlobal>
      <Footer />
    </main>
  );
};

export default Home;
