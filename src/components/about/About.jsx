import "./about.css";
import ME from "../../assets/img/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { AboutData } from "../../data/Data";

const About = () => {
  // TODO: Fix weird size of picture about__me-img on medium devices
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img
              src={ME}
              aria-hidden
              alt="About section image"
              title="@lucasbear"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{AboutData[0].title}</h5>
              <small>{AboutData[0].description}</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{AboutData[1].title}</h5>
              <small>{AboutData[1].description}</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{AboutData[2].title}</h5>
              <small>{AboutData[2].description}</small>
            </article>
          </div>

          <p>{AboutData[3].description}</p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;