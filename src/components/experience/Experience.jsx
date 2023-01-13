import { FiCheckCircle } from "react-icons/fi";
import { SkillsData } from "../../data/Data";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My languages and tools</h2>

      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Languages</h3>

          <div className="experience__content">
            {SkillsData[0].langs.map((skill) => (
              <article className="experience__details">
                <FiCheckCircle className="experience__icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__frameworks">
          <h3>Frameworks</h3>
          <div className="experience__content">
            {SkillsData[1].frameworks.map((skill) => (
              <article className="experience__details">
                <FiCheckCircle className="experience__icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;